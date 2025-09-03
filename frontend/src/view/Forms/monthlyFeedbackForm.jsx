import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Building,
  FileText,
  TrendingUp,
  DollarSign,
  Calendar,
  MessageCircle,
  Shield,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

function MonthlyFeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [basicInfo, setBasicInfo] = useState({
    menteeName: "",
    businessName: "",
    email: "",
  });

  const [businessStatus, setBusinessStatus] = useState({
    operatingAccordingToPlan: "",
    planDeviationDetails: "",
    changesInCircumstances: "",
    changesDetails: "",
  });

  const [businessProgress, setBusinessProgress] = useState({
    achievementsLast4Weeks: "",
    averageWeeklyIncome: "",
    plansNext4Weeks: "",
  });

  const [feedback, setFeedback] = useState({
    businessConcerns: "",
    additionalFeedback: "",
    insuranceCurrent: "",
  });

  const [signature, setSignature] = useState({
    menteeSignature: "",
    date: "",
  });

  // Scroll down a little bit when component mounts
  useEffect(() => {
    window.scrollTo(0, 100); // Scroll down 100px from top
  }, []);

  const validateForm = () => {
    const requiredBasicFields = ['menteeName', 'businessName', 'email'];
    const requiredBusinessFields = ['operatingAccordingToPlan', 'changesInCircumstances'];
    const requiredProgressFields = ['achievementsLast4Weeks', 'averageWeeklyIncome', 'plansNext4Weeks'];
    const requiredFeedbackFields = ['insuranceCurrent'];
    const requiredSignatureFields = ['menteeSignature', 'date'];

    for (let field of requiredBasicFields) {
      if (!basicInfo[field]) return false;
    }
    
    for (let field of requiredBusinessFields) {
      if (!businessStatus[field]) return false;
    }
    
    for (let field of requiredProgressFields) {
      if (!businessProgress[field]) return false;
    }
    
    for (let field of requiredFeedbackFields) {
      if (!feedback[field]) return false;
    }

    for (let field of requiredSignatureFields) {
      if (!signature[field]) return false;
    }

    // Additional validation for conditional fields
    if (businessStatus.operatingAccordingToPlan === "no" && !businessStatus.planDeviationDetails) {
      return false;
    }

    if (businessStatus.changesInCircumstances === "yes" && !businessStatus.changesDetails) {
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors({});

      try {
        const feedbackData = {
          basicInfo,
          businessStatus,
          businessProgress,
          feedback,
          signature,
          submittedAt: new Date().toISOString(),
        };

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Reset state after successful submission
        setBasicInfo({
          menteeName: "",
          businessName: "",
          email: "",
        });

        setBusinessStatus({
          operatingAccordingToPlan: "",
          planDeviationDetails: "",
          changesInCircumstances: "",
          changesDetails: "",
        });

        setBusinessProgress({
          achievementsLast4Weeks: "",
          averageWeeklyIncome: "",
          plansNext4Weeks: "",
        });

        setFeedback({
          businessConcerns: "",
          additionalFeedback: "",
          insuranceCurrent: "",
        });

        setSignature({
          menteeSignature: "",
          date: "",
        });

        alert("Monthly feedback submitted successfully! Thank you for your update.");
        
      } catch (error) {
        alert("An error occurred while submitting your feedback. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in all required fields and provide necessary details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden py-30 px-4">
      {/* Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-5">
          <div className="text-6xl font-bold text-gray-800 whitespace-nowrap">
            BUSINESSPLEX MONTHLY FEEDBACK
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-black">
              Monthly Feedback Form
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            BusinessPlex Monthly Progress Report
          </p>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-lg mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Form Version:</strong> V1 July 2022
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Basic Information</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Mentee Name *
                </label>
                <input
                  type="text"
                  required
                  value={basicInfo.menteeName}
                  onChange={(e) => setBasicInfo({...basicInfo, menteeName: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Business Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="text"
                    required
                    value={basicInfo.businessName}
                    onChange={(e) => setBasicInfo({...basicInfo, businessName: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Enter your business name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="email"
                    required
                    value={basicInfo.email}
                    onChange={(e) => setBasicInfo({...basicInfo, email: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Status */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Business Status</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Is your business operating in accordance with your business plan? *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="operatingAccordingToPlan"
                      value="yes"
                      checked={businessStatus.operatingAccordingToPlan === "yes"}
                      onChange={(e) => setBusinessStatus({...businessStatus, operatingAccordingToPlan: e.target.value})}
                      className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-black flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      Yes
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="operatingAccordingToPlan"
                      value="no"
                      checked={businessStatus.operatingAccordingToPlan === "no"}
                      onChange={(e) => setBusinessStatus({...businessStatus, operatingAccordingToPlan: e.target.value})}
                      className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-black flex items-center">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-1" />
                      No
                    </span>
                  </label>
                </div>

                {businessStatus.operatingAccordingToPlan === "no" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-black mb-2">
                      If no, please give details: *
                    </label>
                    <textarea
                      required
                      value={businessStatus.planDeviationDetails}
                      onChange={(e) => setBusinessStatus({...businessStatus, planDeviationDetails: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Please explain how your business operations differ from your original plan..."
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Have there been any changes to your circumstances (e.g. change of address)? *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="changesInCircumstances"
                      value="yes"
                      checked={businessStatus.changesInCircumstances === "yes"}
                      onChange={(e) => setBusinessStatus({...businessStatus, changesInCircumstances: e.target.value})}
                      className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-black">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="changesInCircumstances"
                      value="no"
                      checked={businessStatus.changesInCircumstances === "no"}
                      onChange={(e) => setBusinessStatus({...businessStatus, changesInCircumstances: e.target.value})}
                      className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-black">No</span>
                  </label>
                </div>

                {businessStatus.changesInCircumstances === "yes" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-black mb-2">
                      If yes, please give details: *
                    </label>
                    <textarea
                      required
                      value={businessStatus.changesDetails}
                      onChange={(e) => setBusinessStatus({...businessStatus, changesDetails: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Please describe any changes in your personal or business circumstances..."
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Business Progress */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Business Progress</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Specifically, what have you achieved over the past 4 weeks to build and promote the business? *
                </label>
                <textarea
                  required
                  value={businessProgress.achievementsLast4Weeks}
                  onChange={(e) => setBusinessProgress({...businessProgress, achievementsLast4Weeks: e.target.value})}
                  rows={5}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Detail your specific achievements, milestones, marketing activities, new clients, product developments, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  On average, what has your business income been per week? *
                </label>
                <div className="relative max-w-md">
                  <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="number"
                    required
                    value={businessProgress.averageWeeklyIncome}
                    onChange={(e) => setBusinessProgress({...businessProgress, averageWeeklyIncome: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  What do you plan to do over the next 4 weeks to achieve/improve your income? *
                </label>
                <textarea
                  required
                  value={businessProgress.plansNext4Weeks}
                  onChange={(e) => setBusinessProgress({...businessProgress, plansNext4Weeks: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Outline your specific plans, strategies, and actions for the next month..."
                />
              </div>
            </div>
          </div>

          {/* Additional Feedback */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Additional Feedback</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Do you have any concerns with your business that you would like to discuss?
                </label>
                <textarea
                  value={feedback.businessConcerns}
                  onChange={(e) => setFeedback({...feedback, businessConcerns: e.target.value})}
                  rows={5}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Share any challenges, concerns, or issues you're facing with your business..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Additional Feedback - Please note if you are happy with your mentoring, training, and support to date from BusinessPlex:
                </label>
                <textarea
                  value={feedback.additionalFeedback}
                  onChange={(e) => setFeedback({...feedback, additionalFeedback: e.target.value})}
                  rows={5}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Share your thoughts on the mentoring, training, and support you've received. What's working well? What could be improved?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  I confirm that my insurance is being maintained and is current? *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="insuranceCurrent"
                      value="yes"
                      checked={feedback.insuranceCurrent === "yes"}
                      onChange={(e) => setFeedback({...feedback, insuranceCurrent: e.target.value})}
                      className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-black flex items-center">
                      <Shield className="h-4 w-4 text-green-600 mr-1" />
                      Yes
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="insuranceCurrent"
                      value="no"
                      checked={feedback.insuranceCurrent === "no"}
                      onChange={(e) => setFeedback({...feedback, insuranceCurrent: e.target.value})}
                      className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-black flex items-center">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-1" />
                      No
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Signature</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Mentee Signature *
                </label>
                <input
                  type="text"
                  required
                  value={signature.menteeSignature}
                  onChange={(e) => setSignature({...signature, menteeSignature: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Type your full name as signature"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="date"
                    required
                    value={signature.date}
                    onChange={(e) => setSignature({...signature, date: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex items-center px-12 py-4 rounded-lg font-bold text-lg transition-all duration-200 border-2 border-blue-600
                ${isSubmitting 
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Submitting Feedback...
                </>
              ) : (
                <>
                  <Send className="h-6 w-6 mr-3" />
                  Submit Monthly Feedback
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-600 max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">
              Questions about this feedback form? Contact BusinessPlex at{" "}
              <a href="tel:0893985351" className="text-blue-600 hover:underline font-semibold">
                (08) 9398 5351
              </a>{" "}
              or email{" "}
              <a href="mailto:admin@businessplex.com.au" className="text-blue-600 hover:underline font-semibold">
                admin@businessplex.com.au
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyFeedbackForm;