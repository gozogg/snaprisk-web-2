const express = require('express');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()})

dotenv.config();

const app = express();
app.use(express.json())
app.post('/', upload.single('resume'), async (req, res) => {
    try {
      const apiKey = process.env.SENDGRID_API_KEY;
      const fromEmail = process.env.SENDGRID_FROM_EMAIL;
      const toEmail = process.env.SENDGRID_CAREERS_TO || fromEmail;
  
  
      if (!apiKey || !fromEmail || !toEmail) {
        return res.status(500).json({
          error: 'Missing SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, or SENDGRID_DEMO_TO env vars.',
        });
      }
      console.log("req: ", req)
      console.log("body: ", req.body)
      const body = req.body || {};
      const file = req.file;
  
      if (!file) {
        return res.status(400).json({ error: 'Resume file is required.' });
      }
  
      sgMail.setApiKey(apiKey);
  
      await sgMail.send({
        to: toEmail,
        from: fromEmail,
        subject: `Careers Application - ${body.first_name || ''} ${body.last_name || ''}`.trim(),
        text: [
          `Name: ${body.first_name || ''} ${body.last_name || ''}`.trim(),
          `Email: ${body.email || ''}`,
          `Current Company: ${body.current_company || ''}`,
          `Role Applying For: ${body.role || ''}`,
          `Linkedin: ${body.linkedin || ''}`,
          `Experience: ${body.experience || ''}`,
        ].join('\n'),
        attachments: [
          {
            content: file.buffer.toString('base64'),  // SendGrid needs base64
            filename: file.originalname,
            type: file.mimetype,
            disposition: 'attachment',
          },
        ]
      });
  
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({
        error: 'Failed to send demo request.',
        details: error?.message || 'Unknown error',
      });
    }
  });

  module.exports = app;