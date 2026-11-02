const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    html: `
      <div style="font-family: 'Inter', 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px 40px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Portfolio Inquiry</h2>
        </div>
        
        <!-- Body -->
        <div style="padding: 40px; background-color: #1e293b;">
          
          <!-- Contact Details Card -->
          <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Sender Details</p>
            
            <p style="margin: 0 0 10px 0; font-size: 16px; color: #cbd5e1;">
              <strong style="color: #f8fafc; display: inline-block; width: 60px;">Name:</strong> ${name}
            </p>
            <p style="margin: 0; font-size: 16px; color: #cbd5e1;">
              <strong style="color: #f8fafc; display: inline-block; width: 60px;">Email:</strong> 
              <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
            </p>
          </div>

          <!-- Message Card -->
          <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 25px;">
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</p>
            <p style="margin: 0; white-space: pre-wrap; color: #e2e8f0; font-size: 15px; line-height: 1.8;">${message}</p>
          </div>

        </div>
        
        <!-- Footer -->
        <div style="padding: 20px; text-align: center; background-color: #0f172a; border-top: 1px solid #1e293b;">
          <p style="margin: 0; color: #64748b; font-size: 13px;">This email was sent securely from your portfolio contact form.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
