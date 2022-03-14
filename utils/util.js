/*  smtp details */
const mailerAuthDetails = {
        HOST: 'smtp.gmail.com',
        PORT: 587,
        USERNAME: '',
        PASSWORD: ''
    };

/* Email subject */
const emailSubject = {
    SUBJECT: '',
};


/* Mail template directory */
const directory = {
    templateDirectory: './mail_templates/html/template.html',
};

/* User test emails */
const testMails = {
    usersParent: '',
    users: '',

};

module.exports = {mailerAuthDetails, emailSubject, directory, testMails};


