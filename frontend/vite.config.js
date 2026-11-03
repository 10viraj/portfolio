import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';

// Built-in dev server API handler for /api/contact
// This allows the contact form to work immediately in local dev without running a separate backend server!
function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const { name, email, message } = JSON.parse(body || '{}');

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Please provide all required fields (name, email, message).' }));
              return;
            }

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'virajsomani10@gmail.com',
                pass: 'pqyxlhtqqcgijigk',
              },
            });

            await transporter.sendMail({
              from: `"${name}" <virajsomani10@gmail.com>`,
              replyTo: email,
              to: 'virajsomani10@gmail.com',
              subject: `[Portfolio Contact] New message from ${name}`,
              html: `
                <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
                  <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 24px 32px; text-align: center;">
                    <h2 style="color: #161c23ff; margin: 0; font-size: 20px; font-weight: 700;">New Message from Portfolio Website</h2>
                    <p style="color: #161c23ff; margin: 4px 0 0 0; font-size: 13px;">Direct inquiry from recruiter or company</p>
                  </div>
                  
                  <div style="padding: 28px 32px; color: #1e293b;">
                    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
                      <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
                      <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                    </div>

                    <div style="border-left: 4px solid #2563eb; padding-left: 14px; margin-bottom: 20px;">
                      <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Message</p>
                      <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</p>
                    </div>

                    <div style="text-align: center; margin-top: 24px;">
                      <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: 600;">
                        Reply to ${email} &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              `,
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: 'Email sent successfully!' }));
          } catch (err) {
            console.error('Contact email error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message || 'Failed to send email' }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), contactApiPlugin()],
  server: {
    port: 3000,
  },
});
