import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const data = await resend.emails.send({
      from: `TaskMe <${process.env.FROM_EMAIL}>`,
      to,
      subject,
      html: html || text, // Accept both html and text, prefer html if both exist
    });
    console.log("✅ Email sent:", data);
    return data;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
