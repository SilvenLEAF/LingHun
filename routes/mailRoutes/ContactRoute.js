const router = require('express').Router();

const nodemailer = require('nodemailer');





router.post('/contact', (req, res)=>{
  const { title, content } = req.body;
  
  // send email
  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: `ManashSarmaTheEmperor@gmail.com`,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  const mailOptions = {
    to: 'alvenleaf@gmail.com',
    from: 'silvenleaf@gmail.com',

    subject: title,
    text: content
  }


  // sending the mail to the user's email
  smtpTransport.sendMail(mailOptions, (err)=>{
    console.log(`Contact mail is sent`);
    res.json({ msg: `Contact mail is sent` })
  })

  
})









module.exports = router;