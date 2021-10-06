export default function (req, res) {
  require("dotenv").config();
  const PASSWORD = process.env.password;
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "smkn11garut.info@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "smkn11garut.info@gmail.com",
    to: "octyopaswa.putra28if@gmail.com",
    subject: `Pesan dari ${req.body.nama}`,
    text: req.body.pesan + " | Sent from: " + req.body.email,
    html: `<div>${req.body.pesan}</div><p>Sent from:
      ${req.body.email}</p>`,
  };

  return new Promise((resolve, reject) => {
    transporter
      .sendMail(mailData)
      .then((response) => {
        res.statusCode(200);
        resolve();
      })
      .catch((err) => {
        res.json(err);
        return resolve();
      });
  });
}
