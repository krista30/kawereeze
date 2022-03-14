let http = require('http');
let nodemailer = require('nodemailer');
let fs = require('fs');
const utils = require('./utils/util.js');

  let testEmails = utils.testMails.users;
 fs.readFile(utils.directory.templateDirectory, function (err, buf) {
     if(err) { console.log(err); }
    let transporter = nodemailer.createTransport({
        host: utils.mailerAuthDetails.HOST,
        port: utils.mailerAuthDetails.PORT,
        auth: {
            user: utils.mailerAuthDetails.USERNAME,
            pass: utils.mailerAuthDetails.PASSWORD
        }
    });

    let mailOptions = {
        from: 'xyz@test.com',
        to: testEmails,
        subject: utils.emailSubject.SUBJECT,
        html: buf.toString()
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');
