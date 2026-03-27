const questionDefaultMail = (formData) => {
    const { firstName, lastName, email, age, contactNumber, message } = formData;
    
    return {
        from: process.env.SENDER_MAIL,
        to: process.env.SMTP_USER,
        subject: 'New Contact Form Submission - Businessplex',
        html: `
            <h1>New Contact Form Submission</h1>
            <p>A new contact form has been submitted on the Businessplex website.</p>
            
            <h2>Contact Details:</h2>
            <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">First Name:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${firstName}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Last Name:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${lastName}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Age:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${age}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Contact Number:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${contactNumber}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
                </tr>
            </table>
            
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' })}</p>
            
            <p>Please respond to this inquiry as soon as possible.</p>
        `
    };
};

export default questionDefaultMail;