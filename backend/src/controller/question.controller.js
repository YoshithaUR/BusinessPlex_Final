import transporter from "../service/email.service.js";
import welcomeSubject from "../subjects/sender/sender.welcome.subject.js";
import questionDefaultMail from "../templates/reciever/question.reciever.template.js";

const questionController = async (req, res) => {
  const { firstName, lastName, email, age, contactNumber, message } = req.body;

  try {
    // Send confirmation email to the person who submitted the form
    const senderEmailData = welcomeSubject(email);
    await transporter.sendMail(senderEmailData);
    
    // Send notification email to SMTP_USER with all form details
    const receiverEmailData = questionDefaultMail({ firstName, lastName, email, age, contactNumber, message });
    await transporter.sendMail(receiverEmailData);
    
    res.status(200).json({
      message: "Request processed successfully",
      success: true,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: "An error occurred while processing your request. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export default questionController;
