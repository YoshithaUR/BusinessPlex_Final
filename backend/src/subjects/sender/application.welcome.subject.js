import applicationTemplate from "../../templates/sender/application.sender.template.js";

const applicationWelcomeSubject = (email, firstName, programType) => {
    const mail = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: `Application Received - ${programType}`,
        html: applicationTemplate(firstName, programType)
    };
    return mail;
};
export default applicationWelcomeSubject;
