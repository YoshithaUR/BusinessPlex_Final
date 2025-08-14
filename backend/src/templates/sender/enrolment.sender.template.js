const enrolmentTemplate = (firstName, courseName, referenceNumber) => {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">Welcome to BusinessPlex!</h1>
                <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Your enrolment has been received</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                <h2 style="color: #333; margin-top: 0;">Dear ${firstName},</h2>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                    Thank you for submitting your enrolment application for <strong>${courseName}</strong> at BusinessPlex. 
                    We're excited to have you join our learning community!
                </p>
                
                <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
                    <h3 style="color: #2196f3; margin-top: 0;">What happens next?</h3>
                    <ul style="color: #333; line-height: 1.6; margin: 10px 0; padding-left: 20px;">
                        <li>Our enrolment team will review your application within 2-3 business days</li>
                        <li>You'll receive a confirmation email with your student ID and login details</li>
                        <li>We'll contact you to discuss any additional requirements or questions</li>
                        <li>You'll receive information about orientation and course commencement</li>
                    </ul>
                </div>
                
                <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                    <h3 style="color: #856404; margin-top: 0;">Important Information</h3>
                    <p style="color: #856404; margin-bottom: 10px;">
                        <strong>Reference Number:</strong> ${referenceNumber}
                    </p>
                    <p style="color: #856404; margin: 0;">
                        Please keep this reference number for future correspondence.
                    </p>
                </div>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                    If you have any questions about your enrolment or need to provide additional documentation, 
                    please don't hesitate to contact our enrolment team.
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="mailto:admin@businessplex.com.au" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                        Contact Enrolment Team
                    </a>
                </div>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
                    We look forward to supporting you on your educational journey with BusinessPlex!
                </p>
                
                <p style="color: #333; line-height: 1.6; margin-bottom: 10px;">
                    Best regards,<br>
                    <strong>The BusinessPlex Team</strong>
                </p>
                
                <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
                
                <div style="text-align: center; color: #666; font-size: 12px;">
                    <p>
                        <strong>BusinessPlex</strong><br>
                        Email: <a href="mailto:admin@businessplex.com.au" style="color: #667eea;">admin@businessplex.com.au</a><br>
                        Phone: <a href="tel:1300894480" style="color: #667eea;">1300 894 480</a>
                    </p>
                    <p style="margin-top: 20px;">
                        This is an automated email. Please do not reply to this message.
                    </p>
                </div>
            </div>
        </div>
    
`;
};

export default enrolmentTemplate;
