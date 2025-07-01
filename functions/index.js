const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors  = require('cors')({ origin: true });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().email.user,    // replace with your email
    pass: functions.config().email.pass,          // use App Passwords, not Gmail password
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: functions.config().email.user,
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Error sending email');
      }
      return res.status(200).send('Email sent');
    });
  });
});