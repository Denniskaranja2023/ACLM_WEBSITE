const axios = require("axios");
const moment = require("moment");
require("dotenv").config();

const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  PASSKEY,
  SHORTCODE,
  CALLBACK_URL
} = process.env;

//1. Get access token
async function getAccessToken() {
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  
    const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64");
  
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Basic ${auth}` },
      });
  
      return response.data.access_token;
    } catch (error) {
      console.error("Error getting access token:", error.response?.data || error);
      throw new Error("Unable to generate access token");
    }
  }
//2 Format Phone number
  function formatPhone(phone) {
    phone = phone.trim();
  
    if (phone.startsWith("+")) phone = phone.substring(1);
    if (phone.startsWith("0")) phone = "254" + phone.substring(1);
  
    return phone;
  }

//3 Initiate STK Push
async function initiateSTKPush(phone, amount, orderId) {
    const accessToken = await getAccessToken();
  
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  
    const timestamp = moment().format("YYYYMMDDHHmmss");
  
    const password = Buffer.from(
      `${SHORTCODE}${PASSKEY}${timestamp}`
    ).toString("base64");
  
    const payload = {
      BusinessShortCode: SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: formatPhone(phone),
      PartyB: SHORTCODE,
      PhoneNumber: formatPhone(phone),
      CallBackURL: `${CALLBACK_URL}?orderId=${orderId}`,
      AccountReference: orderId,
      TransactionDesc: "Payment",
    };
  
    try {
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(
        "Error initiating STK Push:",
        error.response?.data || error
      );
      throw new Error("STK Push failed");
    }
  }
  
  module.exports = { initiateSTKPush };