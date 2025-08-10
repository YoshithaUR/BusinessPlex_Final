const questionTemplate = () => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Thank You for Contacting Businessplex!</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                We have successfully received your inquiry and appreciate you taking the time to reach out to us.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Our team will review your message and get back to you within 24-48 hours during business days.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <h3 style="color: #667eea; margin-top: 0;">What happens next?</h3>
                <ul style="color: #555; line-height: 1.6;">
                    <li>We'll review your inquiry and contact details</li>
                    <li>Our team will reach out to discuss your business needs</li>
                    <li>We'll provide personalized guidance and support</li>
                </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                If you have any urgent questions, please don't hesitate to call us directly at <strong>+61 8 6156 5820</strong>.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Best regards,<br>
                <strong>The Businessplex Team</strong>
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
        </div>
    </div>
  `;
};

export default questionTemplate;