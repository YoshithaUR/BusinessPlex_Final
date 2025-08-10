import transporter from "../service/email.service.js";
import welcomeSubject from "../subjects/welcome.subject.js";

const mainController = async (req, res) => {
  const { firstName, lastName, email, age, contactNumber, message } = req.body;

  try {
    
    const emailData = welcomeSubject(email);
    
    await transporter.sendMail(emailData);
    
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

export default mainController;
