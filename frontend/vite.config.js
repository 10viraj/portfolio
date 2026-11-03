import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { name, email, message } = req.body || {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        error: 'Please provide name, email and message.',
      });
    }

    const escapeHtml = (value) =>
      value.replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char]);

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: email.trim(),
      to: process.env.CONTACT_TO,
      subject: `Portfolio Contact: ${name.trim()}`,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <h3>Message</h3>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
    });

  } catch (error) {
    console.error('Contact API error:', error);

    return res.status(500).json({
      error: 'Failed to send email. Please try again later.',
    });
  }
}