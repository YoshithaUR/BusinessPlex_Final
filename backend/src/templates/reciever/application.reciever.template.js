const applicationDefaultMail = (formData, referenceNumber) => {
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
    } = formData;

    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    return {
        from: process.env.SENDER_MAIL,
        to: process.env.SMTP_USER,
        subject: `New Business Training Application - ${programType}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0; font-size: 28px;">New Business Training Application</h1>
                    <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Program: ${programType}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                    <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
                        <h3 style="color: #2196f3; margin-top: 0;">Application Summary</h3>
                        <p style="margin: 5px 0; color: #333;"><strong>Applicant:</strong> ${firstName} ${lastName}</p>
                        <p style="margin: 5px 0; color: #333;"><strong>Program:</strong> ${programType}</p>
                        <p style="margin: 5px 0; color: #333;"><strong>Submission Date:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' })}</p>
                        <p style="margin: 5px 0; color: #333;"><strong>Reference:</strong> ${referenceNumber}</p>
                    </div>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Personal Information</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Address:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${address}, ${suburb} ${state} ${postcode}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Date of Birth:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${new Date(dateOfBirth).toLocaleDateString('en-AU')} (Age: ${age})</td>
                        </tr>
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Program Details</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Program Type:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${programType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Preferred Start Date:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${preferredStartDate}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Delivery Mode:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${deliveryMode}</td>
                        </tr>
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Employment & Centrelink</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Employment Status:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${employmentStatus}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Centrelink Customer:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${centrelinkCustomer}</td>
                        </tr>
                        ${centrelinkCustomer === 'Yes' ? `
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Centrelink Number:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${centrelinkNumber}</td>
                        </tr>
                        ` : ''}
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Business Information</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Business Idea:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${businessIdea}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business Experience:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${businessExperience}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Industry Type:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${industryType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business Stage:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${businessStage}</td>
                        </tr>
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Additional Information</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Previous Training:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${previousTraining}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Special Requirements:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${specialRequirements || 'None specified'}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">How did you hear about us:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${hearAboutUs}</td>
                        </tr>
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Declarations</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Eligibility Declaration:</td>
                            <td style="padding: 10px; border: 1px solid #ddd; color: ${eligibilityDeclaration === 'Yes' ? 'green' : 'red'}; font-weight: bold;">${eligibilityDeclaration}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Accuracy Declaration:</td>
                            <td style="padding: 10px; border: 1px solid #ddd; color: ${accuracyDeclaration === 'Yes' ? 'green' : 'red'}; font-weight: bold;">${accuracyDeclaration}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Privacy Consent:</td>
                            <td style="padding: 10px; border: 1px solid #ddd; color: ${privacyConsent === 'Yes' ? 'green' : 'red'}; font-weight: bold;">${privacyConsent}</td>
                        </tr>
                    </table>
                    
                    <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                        <h3 style="color: #856404; margin-top: 0;">Action Required</h3>
                        <p style="color: #856404; margin-bottom: 10px;">
                            Please review this application and contact the applicant within 2-3 business days to discuss their business goals and program suitability.
                        </p>
                        <p style="color: #856404; margin: 0;">
                            <strong>Priority:</strong> ${eligibilityDeclaration === 'Yes' && accuracyDeclaration === 'Yes' && privacyConsent === 'Yes' ? 'High - All declarations confirmed' : 'Medium - Review declarations required'}
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${email}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                            Contact Applicant
                        </a>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #e9ecef; margin: 30px 0;">
                    
                    <div style="text-align: center; color: #666; font-size: 12px;">
                        <p>
                            <strong>BusinessPlex</strong><br>
                            Email: <a href="mailto:admin@businessplex.com.au" style="color: #667eea;">admin@businessplex.com.au</a><br>
                            Phone: <a href="tel:1300894480" style="color: #667eea;">1300 894 480</a>
                        </p>
                        <p style="margin-top: 20px;">
                            This is an automated notification. Please do not reply to this message.
                        </p>
                    </div>
                </div>
            </div>
        `
    };
};

export default applicationDefaultMail;
