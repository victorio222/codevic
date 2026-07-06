// app/components/contact/actions.ts
"use server";

import nodemailer from "nodemailer";

interface ContactFormState {
  success: boolean;
  error?: string;
}

export async function sendContactEmail(
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Manila",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Notification" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Inquiry from ${name} - Portfolio Contact Form`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 40px 20px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155;-webkit-font-smoothing: antialiased;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);">
              
              <!-- Content Block -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600; color: #0f172a; tracking: -0.01em;">New Contact Form Submission</h2>
                  
                  <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.5; color: #64748b;">
                    A message was submitted through the portfolio contact interface. The details provided by the sender are cataloged below.
                  </p>

                  <!-- Sender Details Table -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; border-collapse: collapse;">
                    <tr>
                      <td width="100__" style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9; text-transform: uppercase; letter-spacing: 0.05em;">Sender</td>
                      <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${name}</td>
                    </tr>
                    <tr>
                      <td width="100" style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                      <td style="padding: 10px 0; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td width="100" style="padding: 10px 0; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9; text-transform: uppercase; letter-spacing: 0.05em;">Received</td>
                      <td style="padding: 10px 0; font-size: 14px; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${timestamp}</td>
                    </tr>
                  </table>

                  <!-- Message Block -->
                  <h3 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">Message Body</h3>
                  <div style="margin: 0 0 32px 0; padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>

                  <!-- Call to Action Button -->
                  <table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background-color: #0f172a; color: #ffffff; font-size: 13px; font-weight: 500; text-decoration: none; padding: 12px 24px; border-radius: 4px;">
                          Respond to Sender
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer Node -->
              <tr>
                <td style="padding: 24px 40px; background-color: #fafafa; border-top: 1px solid #e2e8f0; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; font-size: 12px; color: #94a3b8; text-align: left;">
                  This is an automated operational notification generated by your portfolio application.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </body>
    </html>
    `,
    });

    return { success: true };
  } catch (error) {
    console.error("Nodemailer transactional execution failure:", error);
    return {
      success: false,
      error: "An unexpected error occurred during message transmission.",
    };
  }
}