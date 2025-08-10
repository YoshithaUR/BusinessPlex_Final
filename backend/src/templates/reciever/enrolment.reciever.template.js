const enrolmentDefaultMail = (formData) => {
    const {
        personalInfo,
        courseInfo,
        finalDetails
    } = formData;
    
    // Calculate age from date of birth
    const birthDate = new Date(personalInfo.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    return {
        from: process.env.SENDER_MAIL,
        to: process.env.SMTP_USER,
        subject: `New Student Enrolment - ${courseInfo.courseName}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="margin: 0; font-size: 28px;">New Student Enrolment</h1>
                    <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Course: ${courseInfo.courseName}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                    <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
                        <h3 style="color: #2196f3; margin-top: 0;">Enrolment Summary</h3>
                        <p style="margin: 5px 0; color: #333;"><strong>Student:</strong> ${personalInfo.firstName} ${personalInfo.lastName}</p>
                        <p style="margin: 5px 0; color: #333;"><strong>Course:</strong> ${courseInfo.courseName}</p>
                        <p style="margin: 5px 0; color: #333;"><strong>Submission Date:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' })}</p>
                        <p style="margin: 5px 0; color: #333;"><strong>Reference:</strong> ENR-${Date.now().toString().slice(-6)}</p>
                    </div>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Personal Information</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${personalInfo.firstName} ${personalInfo.lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${personalInfo.email}" style="color: #667eea;">${personalInfo.email}</a></td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${personalInfo.phone}" style="color: #667eea;">${personalInfo.phone}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Date of Birth:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${new Date(personalInfo.dateOfBirth).toLocaleDateString('en-AU')} (Age: ${age})</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Gender:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${personalInfo.gender}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Nationality:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${personalInfo.nationality}</td>
                        </tr>
                        ${personalInfo.passportNumber ? `
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Passport Number:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${personalInfo.passportNumber}</td>
                        </tr>
                        ` : ''}
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Address:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${personalInfo.address}, ${personalInfo.city}, ${personalInfo.state} ${personalInfo.postalCode}, ${personalInfo.country}</td>
                        </tr>
                    </table>
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Course & Education Details</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Course Type:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.courseType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Course Name:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.courseName}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Start Date:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.startDate ? new Date(courseInfo.startDate).toLocaleDateString('en-AU') : 'Not specified'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Study Mode:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.studyMode}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Duration:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.duration}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Campus:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.campus}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Previous Education:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.previousEducation}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">English Proficiency:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${courseInfo.englishProficiency}</td>
                        </tr>
                    </table>
                    
                    ${courseInfo.workExperience ? `
                    <h3 style="color: #333; margin-top: 30px;">Work Experience</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${courseInfo.workExperience}</p>
                    </div>
                    ` : ''}
                    
                    ${courseInfo.motivationLetter ? `
                    <h3 style="color: #333; margin-top: 30px;">Motivation Letter</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${courseInfo.motivationLetter}</p>
                    </div>
                    ` : ''}
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Payment & Final Details</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Payment Method:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${finalDetails.paymentMethod}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Scholarship Applied:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${finalDetails.scholarshipApplied ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Emergency Contact:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${finalDetails.emergencyContactName} (${finalDetails.emergencyContactRelation}) - ${finalDetails.emergencyContactPhone}</td>
                        </tr>
                    </table>
                    
                    ${finalDetails.healthConditions ? `
                    <h3 style="color: #333; margin-top: 30px;">Health Conditions</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${finalDetails.healthConditions}</p>
                    </div>
                    ` : ''}
                    
                    ${finalDetails.specialRequirements ? `
                    <h3 style="color: #333; margin-top: 30px;">Special Requirements</h3>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #667eea;">
                        <p style="margin: 0; line-height: 1.6; color: #333;">${finalDetails.specialRequirements}</p>
                    </div>
                    ` : ''}
                    
                    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">Declarations & Consent</h2>
                    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Terms Accepted:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${finalDetails.termsAccepted ? '✓ Accepted' : '✗ Not accepted'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Accuracy Declaration:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${finalDetails.accuracyDeclaration ? '✓ Accepted' : '✗ Not accepted'}</td>
                        </tr>
                        <tr style="background-color: #f8f9fa;">
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Marketing Consent:</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${finalDetails.marketingConsent ? '✓ Accepted' : '✗ Not accepted'}</td>
                        </tr>
                    </table>
                    
                    <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                        <h3 style="color: #856404; margin-top: 0;">Action Required</h3>
                        <p style="color: #856404; margin-bottom: 10px;">Please review this enrolment application and contact the student within 2-3 business days.</p>
                        <p style="color: #856404; margin: 0;"><strong>Priority:</strong> ${courseInfo.courseType.includes('Certificate') || courseInfo.courseType.includes('Diploma') ? 'High' : 'Medium'}</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                    <p>This is an automated notification email. Please do not reply to this message.</p>
                </div>
            </div>
        `
    };
};

export default enrolmentDefaultMail;
