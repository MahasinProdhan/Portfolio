import nodemailer from "nodemailer";

// 🔎 DEBUG: check env values at runtime
console.log("EMAIL_USER =>", process.env.EMAIL_USER);
console.log("EMAIL_PASS =>", process.env.EMAIL_PASS);
console.log("EMAIL_PASS length =>", process.env.EMAIL_PASS?.length);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 🔎 DEBUG: verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Transporter verify failed:", error);
  } else {
    console.log("✅ Transporter is ready to send emails");
  }
});

export const sendContactEmail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Portfolio Contact Message",
    text: `
New message received:

Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });
};
