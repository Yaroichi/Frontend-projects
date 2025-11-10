const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');
const fs = require('fs');
const website = express();
const port = 3000;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //otherwise self-certification error


website.use(express.urlencoded({ extended: true }))
website.use(express.json({limit:"10kb"}))//limit prevents DOS attacks
website.use(express.static('public'));


website.get("/", (req, res) => {
    res.sendFile((path.join(__dirname,'public/index.html')), (err)=>{
        if (err);
        console.log(err);
    });
    });


website.post("/Form",(req, res)=>{
  let FirstName = req.body.FirstName ;
  let LastName= req.body.LastName;
  let email = req.body.email;
  let comment = req.body.comment ;
  res.json({FirstName:FirstName, LastName:LastName,email:email,comment:comment})
  if (email.length>5 && FirstName.length>1){
    
    var mailOptions = {
      from: 'sustainabilityadvisorycommit@gmail.com',
      to: email,
      subject: 'Sustainability Newsletter',
      html: `<h2>Dear <em>${FirstName} ${LastName},</em></h2>
      <br><br>
      <p>This email is to confirm that you have been added to our mailing list. Rest assured that you will recieve next months newsletter.</p>`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Error:    "+ error);
        } else {
          console.log('Email sent: ' + info.response);
          writeJsonFile(req.body)//only added to Json file, if email is successful
        }
    })

  };
});


website.listen(port, () => {
console.log(`Website is listening on port ${port}!`);
});

//provides the capability to send an email
var transporter = nodemailer.createTransport({
    host:"localhost",
    secure:true,
    service:"gmail",
    auth: {
      user: 'sustainabilityadvisorycommit@gmail.com',
      pass: 'exhz cuoq pies qzaf' 
    },
  });


  function writeJsonFile(content){
    const data = JSON.stringify(content,null," ")
    fs.writeFile('data.json',data,err => {
      if (err) {
        console.log('error:', err)
      }})
  }


  
  