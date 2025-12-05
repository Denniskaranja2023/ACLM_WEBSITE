const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { initiateSTKPush } = require("./mpesa");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;


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