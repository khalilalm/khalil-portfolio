const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

  app.use(express.static(path.join(__dirname, 'public')))
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.post("/access", (req, res) => {
  console.log(req.body)
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
     
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phoneNum}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false,
    },
    service: "gmail",
    auth: {
      user: "almujeebkhalil@gmail.com",
      pass: "Kman147!",
    },
  });

  let mailOptions = {
    from: "almujeebkhalil@gmail.com",
    to: "almujeebkhalil@gmail.com",
    subject: "Testing Testing ...",
    text: "It Worked!!!",
    html: output,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Errror" + err);
    } else {
      console.log("Email Sent Success!!!");
    }
  });
});
const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
