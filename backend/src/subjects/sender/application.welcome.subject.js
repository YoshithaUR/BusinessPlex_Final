import applicationTemplate from "../../templates/sender/application.sender.template.js";

const applicationWelcomeSubject = (email, firstName, programType, referenceNumber) => {
    const mail = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: `Application Received - ${programType}`,
        html: applicationTemplate(firstName, programType, referenceNumber)
    };
    return mail;
};
export default applicationWelcomeSubject;
