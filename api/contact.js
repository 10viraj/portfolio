import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide all required fields: name, email, and message.',
    });
  }

  const EMAIL_USER = process.env.EMAIL_USER || 'virajsomani10@gmail.com';
  const EMAIL_PASS = (process.env.EMAIL_PASS || 'pqyx lhtq qcgi jigk').replace(/\s+/g, '');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name} (Portfolio Inquiry)" <${EMAIL_USER}>`,
      replyTo: email,
      to: EMAIL_USER,
      subject: `[Portfolio Contact] Message from ${name} (${email})`,
      text: `New Portfolio Message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
          <div style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff; padding: 24px 28px;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Message from Portfolio Website</h2>
            <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">A recruiter or client submitted the contact form.</p>
          </div>
          <div style="padding: 24px 28px; color: #1e293b;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
              <p style="margin: 0 0 6px; font-size: 14px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a></p>
            </div>
            <div style="border-left: 4px solid #2563eb; padding-left: 14px; margin-bottom: 20px;">
              <p style="margin: 0 0 6px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Message</p>
              <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #0f172a;">${message}</p>
            </div>
            <p style="margin: 0; font-size: 13px; color: #64748b;">Reply directly to this email to reach <strong>${email}</strong>.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email via Nodemailer:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email through server.',
    });
  }
}
