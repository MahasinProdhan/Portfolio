import Contact from "../models/Contact.model.js";
import { sendContactEmail } from "../services/email.service.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 1️⃣ Save to DB
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // 2️⃣ Respond IMMEDIATELY
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });

    // 3️⃣ Send email AFTER response (non-blocking)
    sendContactEmail({ name, email, message }).catch((err) =>
      console.error("Email failed:", err),
    );
  } catch (error) {
    console.error("Create Contact Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
