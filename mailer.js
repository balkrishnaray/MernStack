//send and email to user
/*
package called nodemailer
package require nodemailer initializer; transporter =>GMAIL
transporter.sendMail()
*/
const nodemailer = require('nodemailer');
const mailOptions = {
    from: '"Balkrishna Roy" <balkrishnaroy31@gmail.com>', // sender address
    to: "balkrishnaroy31@gmail.com", // list of receivers
    subject: "MERN STACK", // Subject line
    text: "Hello ", // plain text body
    html: "<b>hello from himalaya college of engineering</b>", // html body

};
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'balkrishnaroy31@gmail.com',
    pass: 'tyyxmeckouvtaeda',
  },
});

const mailer = (mailOptions,transporter) => {
    console.log("sending email...");
  
    transporter.sendMail(mailOptions,(err,info) =>{
        if(err){
            console.log(err);
        }
            else{
                console.log(info);
            }
        });
    };
    mailer(mailOptions,transporter).catch(console.error);
//     const nodemailer = require('nodemailer');
//     const mailOptions = {

//     };

// const mailer = async (mailOptions, transporter) => {
//     transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Email sent:'+info.response);
//         }
//     });
// };

// mailer(mailOptions, transporter).catch(console.error);
