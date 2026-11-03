require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields (name, email, message).' });
  }

  const EMAIL_USER = process.env.EMAIL_USER || 'virajsomani10@gmail.com';
  const EMAIL_PASS = (process.env.EMAIL_PASS || 'pqyx lhtq qcgi jigk').replace(/\s+/g, '');

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // HTML Email Template
  const mailOptions = {
    from: `"${name}" <${EMAIL_USER}>`,
    replyTo: email,
    to: EMAIL_USER, // The email you want to receive the messages at
    subject: `[Portfolio Contact] New message from ${name}`,
    html: `
      <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 28px 36px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Message from Portfolio Website</h2>
          <p style="color: #dbeafe; margin: 6px 0 0 0; font-size: 13px;">A recruiter or client submitted the contact form.</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 32px 36px; color: #1e293b;">
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 10px 0; font-size: 14px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Sender Information</p>
            <p style="margin: 0 0 8px 0; font-size: 15px; color: #0f172a;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="margin: 0; font-size: 15px; color: #0f172a;">
              <strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a>
            </p>
          </div>

          <!-- Message Body -->
          <div style="border-left: 4px solid #2563eb; padding-left: 16px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message / Inquiry Details</p>
            <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #1e293b;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 28px;">
            <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600;">
              Reply directly to ${email} &rarr;
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 36px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">This email was sent from your portfolio contact form at portfolio-fryl.vercel.app</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please email virajsomani10@gmail.com directly.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
