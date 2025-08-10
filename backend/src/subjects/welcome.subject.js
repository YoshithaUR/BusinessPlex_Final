import questionTemplate from "../templates/question.template.js";

const welcomeSubject = (email) => {
    const mail = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: 'Greeting from our Service',
        html: questionTemplate()
    };
    return mail;
};
export default welcomeSubject;
