var express = require('express');
var app = express();
var nodemailer = require('nodemailer');


app.get('/', function(req,res) {
                    try{
                       res.end('done');
                    }catch(err){res.end(err);}
    });

app.post('/mail', function (req, res) {
   
    //send email     
    
    console.log(req.body);
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mail@gmail.com',
        pass: 'Pass@0123'
      }
    });

    var mailOptions = {
      from: 'mail@gmail.com',
      to: 'user1@gmail.com, User2@gmail.com',
      subject: 'Order Placed',
      text: 'Your Message.'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
       // console.log(error);
      } else {
        //console.log('Email sent: ' + info.response);
      }
    }); 

    try{
        res.end('done');
    }catch(err){res.end(err);}
    
});

var server = app.listen(process.env.PORT || 3002, function () {
   var host = server.address().address
   var port = server.address().port
});
