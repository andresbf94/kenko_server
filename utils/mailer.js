const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'kenkoasianfood@gmail.com',
    pass: 'xfne wkvt ztat zkpn'
  }
});

module.exports = transporter;