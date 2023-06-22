//send and email to user
/*
package called nodemailer
package require nodemailer initializer; transporter =>GMAIL
transporter.sendMail()
*/
const nodemailer = require('nodemailer');
const mailOptions = {};
const tranport = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 25,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'balkrishnaroy31@gmail.com',
    pass: '',
  },
});

const mailer = (mailOptions,transporter) => {
    transporter.sendMail(mailOptions,(err,info) =>{
        if(err){
            console.log(err);
        }
            else{
                console.log(info);
            }
        });
    };
    



