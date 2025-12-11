const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { initiateSTKPush } = require("./mpesa");

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

const PORT = process.env.PORT || 3000;

// API: SEND VOLUNTEER EMAIL
app.post("/api/send-volunteer-email", async (req, res) => {
  console.log('Received request:', req.body);
  
  const { name, email, contact, howToVolunteer } = req.body;

  if (!name || !email || !contact || !howToVolunteer) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "denniswanyeki2021@gmail.com",
      subject: "New ACLM Volunteer Application",
      html: `
        <h2>New Volunteer Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>How they want to volunteer:</strong></p>
        <p>${howToVolunteer}</p>
      `,
    });

    console.log("Email sent successfully");
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// API: TRIGGER STK PUSH
app.post("/api/pay-mpesa", async (req, res) => {
  const { phone, amount, orderId } = req.body;

  if (!phone || !amount || !orderId) {
    return res.status(400).json({
      success: false,
      message: "phone, amount, and orderId are required",
    });
  }

  try {
    const response = await initiateSTKPush(phone, amount, orderId);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});