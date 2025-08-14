const applicationTemplate = (firstName, programType, referenceNumber) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Application Received!</h1>
            <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Thank you for applying to Businessplex</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Dear <strong>${firstName}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                We have successfully received your application for <strong>${programType}</strong> and appreciate your interest in our business training programs.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <h3 style="color: #667eea; margin-top: 0;">What happens next?</h3>
                <ul style="color: #555; line-height: 1.6;">
                    <li>Our team will review your application within 2-3 business days</li>
                    <li>We'll contact you to discuss your business goals and program suitability</li>
                    <li>If eligible, we'll provide enrollment details and next steps</li>
                    <li>You'll receive program-specific information and schedule</li>
                </ul>
            </div>
            
            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
                <h3 style="color: #2196f3; margin-top: 0;">Important Information</h3>
                <p style="color: #555; line-height: 1.6; margin-bottom: 10px;">
                    <strong>Program:</strong> ${programType}
                </p>
                <p style="color: #555; line-height: 1.6; margin-bottom: 10px;">
                    <strong>Application Date:</strong> ${new Date().toLocaleDateString('en-AU', { timeZone: 'Australia/Perth' })}
                </p>
                <p style="color: #555; line-height: 1.6;">
                    <strong>Reference Number:</strong> ${referenceNumber}
                </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                If you have any questions about your application or need to provide additional information, please don't hesitate to contact us:
            </p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
                <p style="margin: 5px 0; color: #333;">
                    <strong>Email:</strong> <a href="mailto:info@businessplex.com.au" style="color: #667eea;">info@businessplex.com.au</a>
                </p>
                <p style="margin: 5px 0; color: #333;">
                    <strong>Phone:</strong> <a href="tel:+61861565820" style="color: #667eea;">+61 8 6156 5820</a>
                </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                We look forward to helping you achieve your business goals!
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Best regards,<br>
                <strong>The Businessplex Team</strong>
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
            <p>© 2024 Businessplex. All rights reserved.</p>
        </div>
    </div>
  
`;
};

export default applicationTemplate;
