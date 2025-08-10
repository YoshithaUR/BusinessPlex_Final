const newsletterNotificationMail = (formData) => {
    const { name, email } = formData;
    
    return {
        from: process.env.SENDER_MAIL,
        to: process.env.SMTP_USER,
        subject: 'New Newsletter Subscription - Businessplex',
        html: `
            <h1>New Newsletter Subscription</h1>
            <p>A new subscriber has joined the Businessplex newsletter.</p>
            
            <h2>Subscriber Details:</h2>
            <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                </tr>
            </table>
            
            <p><strong>Subscription Time:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' })}</p>
            
            <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
                <h3 style="color: #2196f3; margin-top: 0;">Next Steps:</h3>
                <ul style="color: #555; line-height: 1.6;">
                    <li>Add this subscriber to your newsletter mailing list</li>
                    <li>Send them a welcome series if you have one</li>
                    <li>Consider reaching out personally to introduce your services</li>
                </ul>
            </div>
            
            <p>This subscriber has been automatically sent a welcome email.</p>
        `
    };
};

export default newsletterNotificationMail;
