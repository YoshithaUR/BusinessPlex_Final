import enrolmentTemplate from "../../templates/sender/enrolment.sender.template.js";

const enrolmentWelcomeSubject = (email, firstName, courseName) => {
    const mail = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: `Enrolment Received - ${courseName}`,
        html: enrolmentTemplate(firstName, courseName)
    };
    return mail;
};
export default enrolmentWelcomeSubject;
