const newsletterTemplate = (name) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Businessplex Newsletter!</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Dear ${name || 'Valued Subscriber'},
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Thank you for subscribing to the Businessplex newsletter! We're excited to have you join our community of business enthusiasts and entrepreneurs.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                <h3 style="color: #667eea; margin-top: 0;">What you can expect from us:</h3>
                <ul style="color: #555; line-height: 1.6;">
                    <li>Latest updates on our training programs and workshops</li>
                    <li>Business tips and insights from industry experts</li>
                    <li>Success stories from our graduates</li>
                    <li>Upcoming events and networking opportunities</li>
                    <li>Exclusive offers and early access to new programs</li>
                </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Our newsletter is designed to keep you informed about the latest developments in business training and entrepreneurship. We'll share valuable insights, success stories, and opportunities to help you grow your business skills.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                If you have any questions about our programs or services, feel free to contact us at <strong>+61 8 6156 5820</strong> or email us at <strong>admin@businessplex.com.au</strong>.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Best regards,<br>
                <strong>The Businessplex Team</strong>
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
            <p>To unsubscribe from our newsletter, please contact us directly.</p>
        </div>
    </div>
  `;
};

export default newsletterTemplate;
