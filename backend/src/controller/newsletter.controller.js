import transporter from "../service/email.service.js";
import newsletterWelcomeSubject from "../subjects/sender/newsletter.welcome.subject.js";
import newsletterNotificationMail from "../templates/reciever/newsletter.reciever.template.js";
import subscriptionService from "../service/subscription.service.js";

const newsletterController = async (req, res) => {
  const { name, email } = req.body;

  try {
    // Check if user is already subscribed
    const isAlreadySubscribed = subscriptionService.isSubscribed(email);
    
    if (isAlreadySubscribed) {
      return res.status(200).json({
        message: "You are already subscribed to our newsletter!",
        success: true,
        alreadySubscribed: true
      });
    }

    // Add new subscription
    const subscriptionAdded = subscriptionService.addSubscription(email, name);
    
    if (!subscriptionAdded) {
      return res.status(400).json({
        message: "Failed to add subscription",
        success: false
      });
    }

    // Send confirmation email to the person who subscribed to newsletter
    const senderEmailData = newsletterWelcomeSubject(email, name);
    await transporter.sendMail(senderEmailData);
    
    // Send notification email to SMTP_USER with newsletter subscription details
    const receiverEmailData = newsletterNotificationMail({ name, email });
    await transporter.sendMail(receiverEmailData);
    
    res.status(200).json({
      message: "Newsletter subscription successful",
      success: true,
      alreadySubscribed: false
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      message: "An error occurred while processing your newsletter subscription. Please try again later.",
      success: false,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export default newsletterController;
