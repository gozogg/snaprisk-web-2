// const express = require('express');
// const dotenv = require('dotenv');
// const sgMail = require('@sendgrid/mail');
// const multer = require('multer');
// const upload = multer({storage: multer.memoryStorage()})

// dotenv.config();

// const app = express();
// app.use(express.json())
// const port = process.env.PORT || 8000;


// app.get('/api/health', (req, res) => {
//   res.json({ ok: true });
// });

// app.post('/api/demo', async (req, res) => {
//   try {
//     const apiKey = process.env.SENDGRID_API_KEY;
//     const fromEmail = process.env.SENDGRID_FROM_EMAIL;
//     const toEmail = process.env.SENDGRID_DEMO_TO || fromEmail;


//     if (!apiKey || !fromEmail || !toEmail) {
//       return res.status(500).json({
//         error: 'Missing SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, or SENDGRID_DEMO_TO env vars.',
//       });
//     }
//     console.log("req: ", req)
//     console.log("body: ", req.body)
//     const body = req.body || {};
//     console.log("body: ", body)
//     const solutions = Array.isArray(body.solutions) ? body.solutions.join(', ') : '';

//     sgMail.setApiKey(apiKey);

//     await sgMail.send({
//       to: toEmail,
//       from: fromEmail,
//       subject: `Demo Request - ${body.first_name || ''} ${body.last_name || ''}`.trim(),
//       text: [
//         `Name: ${body.first_name || ''} ${body.last_name || ''}`.trim(),
//         `Email: ${body.email || ''}`,
//         `Company: ${body.company || ''}`,
//         `Portfolio Size: ${body.size || ''}`,
//         `Timeline: ${body.timeline || ''}`,
//         `Solutions: ${solutions || 'None selected'}`,
//         `Goals: ${body.goals || ''}`,
//       ].join('\n'),
//     });

//     return res.status(200).json({ ok: true });
//   } catch (error) {
//     return res.status(500).json({
//       error: 'Failed to send demo request.',
//       details: error?.message || 'Unknown error',
//     });
//   }
// });

// app.post('/api/contact', async (req, res) => {
//   try {
//     const apiKey = process.env.SENDGRID_API_KEY;
//     const fromEmail = process.env.SENDGRID_FROM_EMAIL;
//     const toEmail = process.env.SENDGRID_CONTACT_TO || fromEmail;


//     if (!apiKey || !fromEmail || !toEmail) {
//       return res.status(500).json({
//         error: 'Missing SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, or SENDGRID_DEMO_TO env vars.',
//       });
//     }
//     console.log("req: ", req)
//     console.log("body: ", req.body)
//     const body = req.body || {};
//     console.log("body: ", body)

//     sgMail.setApiKey(apiKey);

//     await sgMail.send({
//       to: toEmail,
//       from: fromEmail,
//       subject: `Additional Inquiry - ${body.full_name || ''}`.trim(),
//       text: [
//         `Name: ${body.full_name || ''}`.trim(),
//         `Email: ${body.email || ''}`,
//         `Subject: ${body.subject || ''}`,
//         `Message: ${body.message || ''}`,
//       ].join('\n'),
//     });

//     return res.status(200).json({ ok: true });
//   } catch (error) {
//     return res.status(500).json({
//       error: 'Failed to send inquiry request.',
//       details: error?.message || 'Unknown error',
//     });
//   }
// });

// app.post('/api/careers', upload.single('resume'), async (req, res) => {
//   try {
//     const apiKey = process.env.SENDGRID_API_KEY;
//     const fromEmail = process.env.SENDGRID_FROM_EMAIL;
//     const toEmail = process.env.SENDGRID_CAREERS_TO || fromEmail;


//     if (!apiKey || !fromEmail || !toEmail) {
//       return res.status(500).json({
//         error: 'Missing SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, or SENDGRID_DEMO_TO env vars.',
//       });
//     }
//     console.log("req: ", req)
//     console.log("body: ", req.body)
//     const body = req.body || {};
//     const file = req.file;

//     if (!file) {
//       return res.status(400).json({ error: 'Resume file is required.' });
//     }

//     sgMail.setApiKey(apiKey);

//     await sgMail.send({
//       to: toEmail,
//       from: fromEmail,
//       subject: `Careers Application - ${body.first_name || ''} ${body.last_name || ''}`.trim(),
//       text: [
//         `Name: ${body.first_name || ''} ${body.last_name || ''}`.trim(),
//         `Email: ${body.email || ''}`,
//         `Current Company: ${body.current_company || ''}`,
//         `Role Applying For: ${body.role || ''}`,
//         `Linkedin: ${body.linkedin || ''}`,
//         `Experience: ${body.experience || ''}`,
//       ].join('\n'),
//       attachments: [
//         {
//           content: file.buffer.toString('base64'),  // SendGrid needs base64
//           filename: file.originalname,
//           type: file.mimetype,
//           disposition: 'attachment',
//         },
//       ]
//     });

//     return res.status(200).json({ ok: true });
//   } catch (error) {
//     return res.status(500).json({
//       error: 'Failed to send demo request.',
//       details: error?.message || 'Unknown error',
//     });
//   }
// });

// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log(`API server listening on http://localhost:${port}`);
// });
