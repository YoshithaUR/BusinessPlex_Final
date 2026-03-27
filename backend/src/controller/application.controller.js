import transporter from "../service/email.service.js";
import applicationWelcomeSubject from "../subjects/sender/application.welcome.subject.js";
import applicationDefaultMail from "../templates/reciever/application.reciever.template.js";

const applicationController = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    suburb,
    postcode,
    state,
    dateOfBirth,
    programType,
    preferredStartDate,
    deliveryMode,
    employmentStatus,
    centrelinkCustomer,
    centrelinkNumber,
    businessIdea,
    businessExperience,
    industryType,
    businessStage,
    previousTraining,
    specialRequirements,
    hearAboutUs,
    eligibilityDeclaration,
    accuracyDeclaration,
    privacyConsent
  } = req.body;

  try {
    // Generate a single reference number for both emails
    const referenceNumber = `APP-${Date.now().toString().slice(-6)}`;

    // Send confirmation email to the person who submitted the application
    const senderEmailData = applicationWelcomeSubject(email, firstName, programType, referenceNumber);
    await transporter.sendMail(senderEmailData);
    
    // Send notification email to SMTP_USER with all application details
    const receiverEmailData = applicationDefaultMail({
      firstName,
      lastName,
      email,
      phone,
      address,
      suburb,
      postcode,
      state,
      dateOfBirth,
      programType,
      preferredStartDate,
      deliveryMode,
      employmentStatus,
      centrelinkCustomer,
      centrelinkNumber,
      businessIdea,
      businessExperience,
      industryType,
      businessStage,
      previousTraining,
      specialRequirements,
      hearAboutUs,
      eligibilityDeclaration,
      accuracyDeclaration,
      privacyConsent
    }, referenceNumber);
    await transporter.sendMail(receiverEmailData);
    
    res.status(200).json({
      message: "Application submitted successfully",
      success: true,
    });

  } catch (error) {
    console.error('Application form error:', error);
    res.status(500).json({ 
      message: "An error occurred while processing your application. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export default applicationController;
