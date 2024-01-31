const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'kenkoasianfood@gmail.com',
    pass: process.env.KENKO_EMAIL_PASSWORD
  }
});

module.exports = transporter;