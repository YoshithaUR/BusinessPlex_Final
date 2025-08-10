import transporter from "../service/email.service.js";
import enrolmentWelcomeSubject from "../subjects/sender/enrolment.welcome.subject.js";
import enrolmentDefaultMail from "../templates/reciever/enrolment.reciever.template.js";

const enrolmentController = async (req, res) => {
  const {
    personalInfo,
    courseInfo,
    finalDetails
  } = req.body;

  try {
    // Send confirmation email to the person who submitted the enrolment
    const senderEmailData = enrolmentWelcomeSubject(
      personalInfo.email, 
      personalInfo.firstName, 
      courseInfo.courseName
    );
    await transporter.sendMail(senderEmailData);
    
    // Send notification email to SMTP_USER with all enrolment details
    const receiverEmailData = enrolmentDefaultMail({
      personalInfo,
      courseInfo,
      finalDetails
    });
    await transporter.sendMail(receiverEmailData);
    
    res.status(200).json({
      message: "Enrolment submitted successfully",
      success: true,
    });

  } catch (error) {
    console.error('Enrolment form error:', error);
    res.status(500).json({ 
      message: "An error occurred while processing your enrolment. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export default enrolmentController;
