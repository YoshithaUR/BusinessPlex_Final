const applicationDefaultMail = (formData) => {
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
    
    // Calculate age from date of birth
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
                        <p style="margin: 5px 0; color: #333;"><strong>Reference:</strong> APP-${Date.now().toString().slice(-6)}</p>
                    </div>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Personal Information</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #667eea;">${email}</a></td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${phone}" style="color: #667eea;">${phone}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Address:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${address}${suburb ? ', ' + suburb : ''}${postcode ? ', ' + postcode : ''}${state ? ', ' + state : ''}</td>
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
                            <td style="padding: 10px; border: 1px solid #ddd;">${preferredStartDate ? new Date(preferredStartDate).toLocaleDateString('en-AU') : 'Not specified'}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Delivery Mode:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${deliveryMode}</td>
                        </tr>
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Employment Status</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Employment Status:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${employmentStatus}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Centrelink Customer:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${centrelinkCustomer}</td>
                        </tr>
                        ${centrelinkCustomer === 'yes' && centrelinkNumber ? `
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Centrelink Number:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${centrelinkNumber}</td>
                        </tr>
                        ` : ''}
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Business Information</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Industry Type:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${industryType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business Stage:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${businessStage || 'Not specified'}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">How did they hear about us:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${hearAboutUs || 'Not specified'}</td>
                        </tr>
                    </table>
                    
                    <h3 style="color: #333; margin-top: 30px;">Business Idea Description</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${businessIdea}</p>
                    </div>
                    
                    ${businessExperience ? `
                    <h3 style="color: #333; margin-top: 30px;">Business Experience</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${businessExperience}</p>
                    </div>
                    ` : ''}
                    
                    ${previousTraining ? `
                    <h3 style="color: #333; margin-top: 30px;">Previous Training</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${previousTraining}</p>
                    </div>
                    ` : ''}
                    
                    ${specialRequirements ? `
                    <h3 style="color: #333; margin-top: 30px;">Special Requirements</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${specialRequirements}</p>
                    </div>
                    ` : ''}
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Declarations</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Eligibility Declaration:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${eligibilityDeclaration ? '✓ Accepted' : '✗ Not accepted'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Accuracy Declaration:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${accuracyDeclaration ? '✓ Accepted' : '✗ Not accepted'}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Privacy Consent:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${privacyConsent ? '✓ Accepted' : '✗ Not accepted'}</td>
                        </tr>
                    </table>
                    
                    <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                        <h3 style="color: #856404; margin-top: 0;">Action Required</h3>
                        <p style="color: #856404; margin-bottom: 10px;">Please review this application and contact the applicant within 2-3 business days.</p>
                        <p style="color: #856404; margin: 0;"><strong>Priority:</strong> ${programType.includes('Certificate') ? 'High' : 'Medium'}</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>This is an automated notification email. Please do not reply to this message.</p>
                </div>
            </div>
        `
    };
};

export default applicationDefaultMail;
