import newsletterTemplate from "../../templates/sender/newsletter.sender.template.js";

const newsletterWelcomeSubject = (email, name) => {
    const mail = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: 'Welcome to Businessplex Newsletter!',
        html: newsletterTemplate(name)
    };
    return mail;
};
export default newsletterWelcomeSubject;
