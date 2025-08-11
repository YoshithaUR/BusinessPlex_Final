import nodemailer from "nodemailer";
import 'dotenv/config'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.NODE_ENV !== 'production', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

// SMTP verification function
export const verifySMTP = () => {
  transporter.verify((err, success) => {
    if (err) {
      console.error("SMTP Error:", err);
    } else {
      console.log("SMTP is ready:", success);
    }
  });
};

export default transporter;