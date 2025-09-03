import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Building,
  DollarSign,
  Users,
  Target,
  Briefcase,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function ExpressionOfInterest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    dateOfBirth: "",
    address: "",
    postalAddress: "",
    phone: "",
    mobile: "",
    email: "",
    incomeAssistance: "",
    canWorkFullTime: "",
    partialWorkCapacity: "",
    jobseekerID: "",
    stream: "",
    dobPartner: "",
    partnerName: "",
    partnerJobseekerID: "",
    partnerStream: "",
    servicesAustralia: "",
    workforceProvider: "",
    providerContact: "",
    specialEligibility: false,
    retrenchmentDate: "",
    adfTransitionDate: "",
    veteranDetails: "",
  });

  const [otherDetails, setOtherDetails] = useState({
    undischargedBankrupt: false,
    criminalConvictions: false,
    previousNEIS: false,
    smallBusinessCoaching: false,
    smallBusinessMentoring: false,
    hasABN: false,
    registeredBusinessName: false,
    businessNameDetails: "",
  });

  const [proposedBusiness, setProposedBusiness] = useState({
    businessDescription: "",
    businessStructure: "",
    previousBusiness: false,
    previousBusinessDetails: "",
    targetMarket: "",
    marketResearch: false,
    marketResearchDetails: "",
    marketingStrategy: "",
    competition: "",
    uniqueSellingPoint: "",
    pricingStrategy: "",
    ownedEquipment: "",
    needToBuyEquipment: "",
    needFunding: false,
    fundingAmount: "",
    fundingSource: "",
    insurance: false,
    businessLocation: "",
    skills: "",
    businessType: "",
    employees: "",
  });

  const [declaration, setDeclaration] = useState({
    certifyInformation: false,
  });

  // Scroll down a little bit when component mounts
  useEffect(() => {
    window.scrollTo(0, 100); // Scroll down 100px from top
  }, []);

  const validateForm = () => {
    const requiredPersonalFields = [
      'name', 'dateOfBirth', 'address', 'phone', 'email', 'incomeAssistance',
      'canWorkFullTime', 'jobseekerID', 'stream', 'servicesAustralia', 'workforceProvider'
    ];
    
    const requiredBusinessFields = [
      'businessDescription', 'businessStructure', 'targetMarket', 'marketingStrategy',
      'uniqueSellingPoint', 'pricingStrategy', 'businessLocation', 'skills', 'businessType'
    ];

    for (let field of requiredPersonalFields) {
      if (!personalDetails[field]) return false;
    }
    
    for (let field of requiredBusinessFields) {
      if (!proposedBusiness[field]) return false;
    }

    return declaration.certifyInformation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors({});

      try {
        const expressionData = {
          personalDetails,
          otherDetails,
          proposedBusiness,
          declaration,
          submittedAt: new Date().toISOString(),
        };

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Reset form after successful submission
        setPersonalDetails({
          name: "", dateOfBirth: "", address: "", postalAddress: "", phone: "",
          mobile: "", email: "", incomeAssistance: "", canWorkFullTime: "",
          partialWorkCapacity: "", jobseekerID: "", stream: "", dobPartner: "",
          partnerName: "", partnerJobseekerID: "", partnerStream: "",
          servicesAustralia: "", workforceProvider: "", providerContact: "",
          specialEligibility: false, retrenchmentDate: "", adfTransitionDate: "",
          veteranDetails: "",
        });

        setOtherDetails({
          undischargedBankrupt: false, criminalConvictions: false,
          previousNEIS: false, smallBusinessCoaching: false,
          smallBusinessMentoring: false, hasABN: false,
          registeredBusinessName: false, businessNameDetails: "",
        });

        setProposedBusiness({
          businessDescription: "", businessStructure: "", previousBusiness: false,
          previousBusinessDetails: "", targetMarket: "", marketResearch: false,
          marketResearchDetails: "", marketingStrategy: "", competition: "",
          uniqueSellingPoint: "", pricingStrategy: "", ownedEquipment: "",
          needToBuyEquipment: "", needFunding: false, fundingAmount: "",
          fundingSource: "", insurance: false, businessLocation: "", skills: "",
          businessType: "", employees: "",
        });

        setDeclaration({ certifyInformation: false });

        alert("Expression of Interest submitted successfully! We will contact you soon.");
        
      } catch (error) {
        alert("An error occurred while submitting your expression of interest. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in all required fields and certify the information provided.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden py-30 px-4">
      {/* Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-5">
          <div className="text-6xl font-bold text-gray-800 whitespace-nowrap">
            BUSINESSPLEX EXPRESSION OF INTEREST
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-black">
              Expression of Interest
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Self-Employment Assistance Program
          </p>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Contact Information:</strong><br />
              Phone: (08) 9398 5351 | Email: admin@businessplex.com.au<br />
              Address: 1/3 Marchant Way Morley WA 6062
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-8">
          
          {/* Personal Details */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Personal Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Your Name(s) *
                </label>
                <input
                  type="text"
                  required
                  value={personalDetails.name}
                  onChange={(e) => setPersonalDetails({...personalDetails, name: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Date of Birth * (Must be over 18)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="date"
                    required
                    value={personalDetails.dateOfBirth}
                    onChange={(e) => setPersonalDetails({...personalDetails, dateOfBirth: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Your Address *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="text"
                    required
                    value={personalDetails.address}
                    onChange={(e) => setPersonalDetails({...personalDetails, address: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Enter your full address"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-black mb-2">
                  Postal Address (if different)
                </label>
                <input
                  type="text"
                  value={personalDetails.postalAddress}
                  onChange={(e) => setPersonalDetails({...personalDetails, postalAddress: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="If different from above"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="tel"
                    required
                    value={personalDetails.phone}
                    onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="(08) 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Mobile
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="tel"
                    value={personalDetails.mobile}
                    onChange={(e) => setPersonalDetails({...personalDetails, mobile: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="04XX XXX XXX"
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
                    value={personalDetails.email}
                    onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Income Assistance Type *
                </label>
                <select
                  required
                  value={personalDetails.incomeAssistance}
                  onChange={(e) => setPersonalDetails({...personalDetails, incomeAssistance: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Income Assistance</option>
                  <option value="jobseeker">Jobseeker</option>
                  <option value="disability-support">Disability Support Pension</option>
                  <option value="age-pension">Age Pension</option>
                  <option value="parenting">Parenting</option>
                  <option value="partner-service">Partner Service Pension</option>
                  <option value="war-widow">War Widower/Widow Pension</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Can work full-time (35 hrs/week)? *
                </label>
                <select
                  required
                  value={personalDetails.canWorkFullTime}
                  onChange={(e) => setPersonalDetails({...personalDetails, canWorkFullTime: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Partial work capacity restriction?
                </label>
                <select
                  value={personalDetails.partialWorkCapacity}
                  onChange={(e) => setPersonalDetails({...personalDetails, partialWorkCapacity: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Jobseeker ID * (from Centrelink)
                </label>
                <input
                  type="text"
                  required
                  value={personalDetails.jobseekerID}
                  onChange={(e) => setPersonalDetails({...personalDetails, jobseekerID: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Jobseeker ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Stream *
                </label>
                <input
                  type="text"
                  required
                  value={personalDetails.stream}
                  onChange={(e) => setPersonalDetails({...personalDetails, stream: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Stream"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Services Australia Registration *
                </label>
                <input
                  type="text"
                  required
                  value={personalDetails.servicesAustralia}
                  onChange={(e) => setPersonalDetails({...personalDetails, servicesAustralia: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Which Services Australia are you registered with?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Workforce Australia Provider *
                </label>
                <input
                  type="text"
                  required
                  value={personalDetails.workforceProvider}
                  onChange={(e) => setPersonalDetails({...personalDetails, workforceProvider: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Your Workforce Australia provider"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Provider Contact
                </label>
                <input
                  type="text"
                  value={personalDetails.providerContact}
                  onChange={(e) => setPersonalDetails({...personalDetails, providerContact: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Contact person at the provider"
                />
              </div>
            </div>

            {/* Partner Details */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-black mb-4">Partner Details (if applicable)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Partner's Name
                  </label>
                  <input
                    type="text"
                    value={personalDetails.partnerName}
                    onChange={(e) => setPersonalDetails({...personalDetails, partnerName: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Partner's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Partner's Jobseeker ID
                  </label>
                  <input
                    type="text"
                    value={personalDetails.partnerJobseekerID}
                    onChange={(e) => setPersonalDetails({...personalDetails, partnerJobseekerID: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Partner's Jobseeker ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Partner's Stream
                  </label>
                  <input
                    type="text"
                    value={personalDetails.partnerStream}
                    onChange={(e) => setPersonalDetails({...personalDetails, partnerStream: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Stream"
                  />
                </div>
              </div>
            </div>

            {/* Special Eligibility */}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="specialEligibility"
                  checked={personalDetails.specialEligibility}
                  onChange={(e) => setPersonalDetails({...personalDetails, specialEligibility: e.target.checked})}
                  className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="specialEligibility" className="ml-2 text-sm font-medium text-black">
                  Do you belong to special eligibility?
                </label>
              </div>

              {personalDetails.specialEligibility && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Retrenched Worker - Employment End Date
                    </label>
                    <input
                      type="date"
                      value={personalDetails.retrenchmentDate}
                      onChange={(e) => setPersonalDetails({...personalDetails, retrenchmentDate: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      ADF Personnel - Transition Date
                    </label>
                    <input
                      type="date"
                      value={personalDetails.adfTransitionDate}
                      onChange={(e) => setPersonalDetails({...personalDetails, adfTransitionDate: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Veterans Details
                    </label>
                    <input
                      type="text"
                      value={personalDetails.veteranDetails}
                      onChange={(e) => setPersonalDetails({...personalDetails, veteranDetails: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Veteran details"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Other Details */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Other Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="bankrupt"
                    checked={otherDetails.undischargedBankrupt}
                    onChange={(e) => setOtherDetails({...otherDetails, undischargedBankrupt: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="bankrupt" className="ml-2 text-sm text-black">
                    Are you an UNDISCHARGED Bankrupt?
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="criminal"
                    checked={otherDetails.criminalConvictions}
                    onChange={(e) => setOtherDetails({...otherDetails, criminalConvictions: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="criminal" className="ml-2 text-sm text-black">
                    Do you have any criminal convictions?
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="neis"
                    checked={otherDetails.previousNEIS}
                    onChange={(e) => setOtherDetails({...otherDetails, previousNEIS: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="neis" className="ml-2 text-sm text-black">
                    Have you previously received the NEIS/SEA allowance?
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="coaching"
                    checked={otherDetails.smallBusinessCoaching}
                    onChange={(e) => setOtherDetails({...otherDetails, smallBusinessCoaching: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="coaching" className="ml-2 text-sm text-black">
                    Are you able to participate in Small Business Coaching?
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mentoring"
                    checked={otherDetails.smallBusinessMentoring}
                    onChange={(e) => setOtherDetails({...otherDetails, smallBusinessMentoring: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="mentoring" className="ml-2 text-sm text-black">
                    Are you able to participate in Small Business Mentoring?
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="abn"
                    checked={otherDetails.hasABN}
                    onChange={(e) => setOtherDetails({...otherDetails, hasABN: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="abn" className="ml-2 text-sm text-black">
                    Do you have an ABN or ACN?
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="businessName"
                    checked={otherDetails.registeredBusinessName}
                    onChange={(e) => setOtherDetails({...otherDetails, registeredBusinessName: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="businessName" className="ml-2 text-sm text-black">
                    Do you have registered business name?
                  </label>
                </div>

                {otherDetails.registeredBusinessName && (
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Business Name Details
                    </label>
                    <input
                      type="text"
                      value={otherDetails.businessNameDetails}
                      onChange={(e) => setOtherDetails({...otherDetails, businessNameDetails: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Provide business name details"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Proposed Business */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <Building className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Proposed Business</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Brief Description of Your Proposed Business *
                </label>
                <textarea
                  required
                  value={proposedBusiness.businessDescription}
                  onChange={(e) => setProposedBusiness({...proposedBusiness, businessDescription: e.target.value})}
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Describe your proposed business"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Business Structure *
                  </label>
                  <select
                    required
                    value={proposedBusiness.businessStructure}
                    onChange={(e) => setProposedBusiness({...proposedBusiness, businessStructure: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  >
                    <option value="">Select Business Structure</option>
                    <option value="sole-trader">Sole Trader</option>
                    <option value="partnership">Partnership</option>
                    <option value="company">Company</option>
                    <option value="trust">Trust</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Business Type *
                  </label>
                  <select
                    required
                    value={proposedBusiness.businessType}
                    onChange={(e) => setProposedBusiness({...proposedBusiness, businessType: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  >
                    <option value="">Select Business Type</option>
                    <option value="new">New</option>
                    <option value="existing">Existing</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="previousBusiness"
                    checked={proposedBusiness.previousBusiness}
                    onChange={(e) => setProposedBusiness({...proposedBusiness, previousBusiness: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="previousBusiness" className="ml-2 text-sm font-medium text-black">
                    Have you ever operated your own business before?
                  </label>
                </div>

                {proposedBusiness.previousBusiness && (
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Previous Business Details
                    </label>
                    <textarea
                      value={proposedBusiness.previousBusinessDetails}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, previousBusinessDetails: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Provide details of your previous business experience"
                    />
                  </div>
                )}
              </div>

              {proposedBusiness.businessType === 'existing' && (
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Number of Employees (excluding you)
                  </label>
                  <input
                    type="number"
                    value={proposedBusiness.employees}
                    onChange={(e) => setProposedBusiness({...proposedBusiness, employees: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Number of employees"
                    min="0"
                  />
                </div>
              )}

              {/* Target Market Section */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                  <Target className="h-5 w-5 text-blue-600 mr-2" />
                  Target Market
                </h4>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Who will buy your product/service? *
                    </label>
                    <textarea
                      required
                      value={proposedBusiness.targetMarket}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, targetMarket: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Describe your potential customers"
                    />
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="marketResearch"
                        checked={proposedBusiness.marketResearch}
                        onChange={(e) => setProposedBusiness({...proposedBusiness, marketResearch: e.target.checked})}
                        className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="marketResearch" className="ml-2 text-sm font-medium text-black">
                        Have you undertaken any market research?
                      </label>
                    </div>

                    {proposedBusiness.marketResearch && (
                      <textarea
                        value={proposedBusiness.marketResearchDetails}
                        onChange={(e) => setProposedBusiness({...proposedBusiness, marketResearchDetails: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        placeholder="Give details of your market research"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      How do you intend to market your product? *
                    </label>
                    <textarea
                      required
                      value={proposedBusiness.marketingStrategy}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, marketingStrategy: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Describe your marketing/advertising strategy"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Who is your direct competition?
                    </label>
                    <textarea
                      value={proposedBusiness.competition}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, competition: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Identify your main competitors"
                    />
                  </div>
                </div>
              </div>

              {/* Products/Services Section */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-black mb-4">Products/Services</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      What is your Unique Selling Point? *
                    </label>
                    <textarea
                      required
                      value={proposedBusiness.uniqueSellingPoint}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, uniqueSellingPoint: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="What makes your business unique?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Pricing Strategy *
                    </label>
                    <textarea
                      required
                      value={proposedBusiness.pricingStrategy}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, pricingStrategy: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="What price do you plan to charge?"
                    />
                  </div>
                </div>
              </div>

              {/* Equipment & Setup */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-black mb-4">Start Up and Establishment Needs</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Equipment you already own
                    </label>
                    <textarea
                      value={proposedBusiness.ownedEquipment}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, ownedEquipment: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="List equipment you already have"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Equipment you need to buy or lease
                    </label>
                    <textarea
                      value={proposedBusiness.needToBuyEquipment}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, needToBuyEquipment: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="List equipment you need to acquire"
                    />
                  </div>
                </div>
              </div>

              {/* Financing */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  Financing
                </h4>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Provider does NOT provide loans, grants, or any start-up capital assistance. 
                      If you require initial funds you will need to have these approved before we can progress with your application.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="needFunding"
                        checked={proposedBusiness.needFunding}
                        onChange={(e) => setProposedBusiness({...proposedBusiness, needFunding: e.target.checked})}
                        className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="needFunding" className="ml-2 text-sm font-medium text-black">
                        Will you need to borrow money to start your business?
                      </label>
                    </div>

                    {proposedBusiness.needFunding && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-black mb-2">
                            How much funding do you need?
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                            <input
                              type="number"
                              value={proposedBusiness.fundingAmount}
                              onChange={(e) => setProposedBusiness({...proposedBusiness, fundingAmount: e.target.value})}
                              className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                              placeholder="Amount needed"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-black mb-2">
                            Where will you obtain these funds?
                          </label>
                          <input
                            type="text"
                            value={proposedBusiness.fundingSource}
                            onChange={(e) => setProposedBusiness({...proposedBusiness, fundingSource: e.target.value})}
                            className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            placeholder="Bank, family, savings, etc."
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="insurance"
                      checked={proposedBusiness.insurance}
                      onChange={(e) => setProposedBusiness({...proposedBusiness, insurance: e.target.checked})}
                      className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="insurance" className="ml-2 text-sm font-medium text-black">
                      Can you afford public liability and relevant business insurance?
                    </label>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-black mb-4">Location</h4>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Business Location *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="businessLocation"
                        value="mobile"
                        checked={proposedBusiness.businessLocation === "mobile"}
                        onChange={(e) => setProposedBusiness({...proposedBusiness, businessLocation: e.target.value})}
                        className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-black">Mobile</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="businessLocation"
                        value="home-based"
                        checked={proposedBusiness.businessLocation === "home-based"}
                        onChange={(e) => setProposedBusiness({...proposedBusiness, businessLocation: e.target.value})}
                        className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-black">Home Based</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="businessLocation"
                        value="online"
                        checked={proposedBusiness.businessLocation === "online"}
                        onChange={(e) => setProposedBusiness({...proposedBusiness, businessLocation: e.target.value})}
                        className="h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-black">Online</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Management */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-black mb-4">Management</h4>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    What training, skills & education do you have to run your proposed business? *
                  </label>
                  <textarea
                    required
                    value={proposedBusiness.skills}
                    onChange={(e) => setProposedBusiness({...proposedBusiness, skills: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Describe your relevant qualifications, training, skills and experience"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Declaration */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">Declaration</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="certify"
                  required
                  checked={declaration.certifyInformation}
                  onChange={(e) => setDeclaration({...declaration, certifyInformation: e.target.checked})}
                  className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500 mt-1"
                />
                <label htmlFor="certify" className="ml-2 text-sm text-black">
                  I certify that the information that I have supplied on this form is complete and correct to the best of my knowledge 
                  and I acknowledge that false information may lead to refusal, suspension, or termination of the program. *
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
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
                  Submitting Expression of Interest...
                </>
              ) : (
                <>
                  <Send className="h-6 w-6 mr-3" />
                  Submit Expression of Interest
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-12 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-600 max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">
              Need assistance? Contact BusinessPlex at{" "}
              <a href="tel:0893985351" className="text-blue-600 hover:underline font-semibold">
                (08) 9398 5351
              </a>{" "}
              or email{" "}
              <a href="mailto:admin@businessplex.com.au" className="text-blue-600 hover:underline font-semibold">
                admin@businessplex.com.au
              </a>
              <br />
              Address: 1/3 Marchant Way Morley WA 6062
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpressionOfInterest;