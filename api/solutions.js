const sgMail = require('@sendgrid/mail');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const toEmail = process.env.SENDGRID_DEMO_TO || fromEmail;

    if (!apiKey || !fromEmail || !toEmail) {
      return res.status(500).json({
        error: 'Missing SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, or SENDGRID_DEMO_TO env vars.',
      });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const solutions = Array.isArray(body.solutions) ? body.solutions.join(', ') : '';

    sgMail.setApiKey(apiKey);

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      subject: `Solutions Request - ${body.first_name || ''} ${body.last_name || ''}`.trim(),
      text: [
        `Name: ${body.first_name || ''} ${body.last_name || ''}`.trim(),
        `Email: ${body.email || ''}`,
        `Company: ${body.company || ''}`,
        `Solutions: ${solutions || 'None selected'}`,
        `Goals: ${body.goals || ''}`,
      ].join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to send solution request.',
      details: error?.message || 'Unknown error',
    });
  }
};