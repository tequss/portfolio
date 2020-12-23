const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.use(express.static(path.join(__dirname, 'build')));
//nowo dodane, test
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

// app.get('/aboutme', function (req, res) {
//   res.send(<Link to ="/aboutme" />)
// })


// app.post('/contactme', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })
app.listen(8080, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    host: "smtp-relay.gmail.com",
    port: 587,
    auth: {
      user: "wkdeveloper123",
      pass: "@password123",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contactme", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "teqqus@gmail.com",
      subject: "Contact Form Message",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });
  });