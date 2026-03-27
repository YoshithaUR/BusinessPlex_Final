import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  CreditCard,
  FileText,
  Building,
  Globe,
  Users,
  BookOpen,
  Award,
  Clock,
  Check,
  Send,
} from "lucide-react";

function Enrolment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    nationality: "",
    passportNumber: "",
  });

  const [courseInfo, setCourseInfo] = useState({
    courseType: "",
    courseName: "",
    startDate: "",
    studyMode: "",
    duration: "",
    campus: "",
    previousEducation: "",
    workExperience: "",
    englishProficiency: "",
    motivationLetter: "",
  });

  const [finalDetails, setFinalDetails] = useState({
    paymentMethod: "",
    scholarshipApplied: false,
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    healthConditions: "",
    specialRequirements: "",
    termsAccepted: false,
    marketingConsent: false,
    accuracyDeclaration: false,
  });

  // Scroll down a little bit when component mounts
  useEffect(() => {
    window.scrollTo(0, 100); // Scroll down 100px from top
  }, []);

  // Form validation
  const validateForm = () => {
    const requiredPersonalFields = [
      'firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 
      'gender', 'address', 'city', 'state', 'postalCode', 'country', 'nationality'
    ];
    
    const requiredCourseFields = [
      'courseType', 'courseName', 'startDate', 'studyMode', 
      'duration', 'campus', 'previousEducation', 'englishProficiency'
    ];
    
    const requiredFinalFields = [
      'paymentMethod', 'emergencyContactName', 'emergencyContactPhone', 'emergencyContactRelation'
    ];

    for (let field of requiredPersonalFields) {
      if (!personalInfo[field]) return false;
    }
    
    for (let field of requiredCourseFields) {
      if (!courseInfo[field]) return false;
    }
    
    for (let field of requiredFinalFields) {
      if (!finalDetails[field]) return false;
    }

    return finalDetails.termsAccepted && finalDetails.accuracyDeclaration;
  };

  // Handler for form submission (backend integration point)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors({}); 

      try {
        //  backend API
        const enrollmentData = {
          personalInfo,
          courseInfo,
          finalDetails,
        };

       
        await new Promise(resolve => setTimeout(resolve, 2000));

        
        setPersonalInfo({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          gender: "",
          address: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
          nationality: "",
          passportNumber: "",
        });

        setCourseInfo({
          courseType: "",
          courseName: "",
          startDate: "",
          studyMode: "",
          duration: "",
          campus: "",
          previousEducation: "",
          workExperience: "",
          englishProficiency: "",
          motivationLetter: "",
        });

        setFinalDetails({
          paymentMethod: "",
          scholarshipApplied: false,
          emergencyContactName: "",
          emergencyContactPhone: "",
          emergencyContactRelation: "",
          healthConditions: "",
          specialRequirements: "",
          termsAccepted: false,
          marketingConsent: false,
          accuracyDeclaration: false,
        });

        setErrors({});
        alert("Enrollment application submitted successfully!");
        
      } catch (error) {
        alert("An error occurred while submitting your enrollment. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in all required fields and accept the terms and conditions.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden py-30 px-4">
      {/* Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-5">
          <div className="text-8xl font-bold text-gray-800 whitespace-nowrap">
            BUSINESSPLEX ENROLLMENT
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-black">
              BusinessPlex Enrollment
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Complete your enrollment application
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-8">
          
        
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-yblue-600">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">
                Personal Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={personalInfo.firstName}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      firstName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={personalInfo.lastName}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      lastName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="email"
                    required
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="tel"
                    required
                    value={personalInfo.phone}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        phone: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="+61 4XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Date of Birth *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="date"
                    required
                    value={personalInfo.dateOfBirth}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        dateOfBirth: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Gender *
                </label>
                <select
                  required
                  value={personalInfo.gender}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      gender: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2 ">
                  Nationality *
                </label>
                <input
                  type="text"
                  required
                  value={personalInfo.nationality}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      nationality: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="e.g., Australian, Indian, Chinese"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Passport Number
                </label>
                <input
                  type="text"
                  value={personalInfo.passportNumber}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      passportNumber: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="For international students"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-black mb-2">
                Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                <textarea
                  required
                  value={personalInfo.address}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      address: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your full address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={personalInfo.city}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, city: e.target.value })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="City"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  State *
                </label>
                <select
                  required
                  value={personalInfo.state}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      state: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select State</option>
                  <option value="NSW">New South Wales</option>
                  <option value="VIC">Victoria</option>
                  <option value="QLD">Queensland</option>
                  <option value="WA">Western Australia</option>
                  <option value="SA">South Australia</option>
                  <option value="TAS">Tasmania</option>
                  <option value="ACT">Australian Capital Territory</option>
                  <option value="NT">Northern Territory</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  required
                  value={personalInfo.postalCode}
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      postalCode: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="2000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Country *
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <select
                    required
                    value={personalInfo.country}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        country: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  >
                    <option value="">Select Country</option>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="nepal">Nepal</option>
                    <option value="philippines">Philippines</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/*Education Details */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">
                Course & Education Details
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Course Type *
                </label>
                <select
                  required
                  value={courseInfo.courseType}
                  onChange={(e) =>
                    setCourseInfo({
                      ...courseInfo,
                      courseType: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Course Type</option>
                  <option value="certificate-iv">Certificate IV</option>
                  <option value="diploma">Diploma</option>
                  <option value="advanced-diploma">Advanced Diploma</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="short-course">Short Course</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Course Name *
                </label>
                <select
                  required
                  value={courseInfo.courseName}
                  onChange={(e) =>
                    setCourseInfo({
                      ...courseInfo,
                      courseName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Course</option>
                  <option value="business-administration">
                    Business Administration
                  </option>
                  <option value="accounting">Accounting</option>
                  <option value="marketing-communication">
                    Marketing & Communication
                  </option>
                  <option value="project-management">
                    Project Management
                  </option>
                  <option value="human-resources">Human Resources</option>
                  <option value="leadership-management">
                    Leadership & Management
                  </option>
                  <option value="entrepreneurship">
                    Entrepreneurship & Innovation
                  </option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="international-business">
                    International Business
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Preferred Start Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="date"
                    required
                    value={courseInfo.startDate}
                    onChange={(e) =>
                      setCourseInfo({
                        ...courseInfo,
                        startDate: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Study Mode *
                </label>
                <select
                  required
                  value={courseInfo.studyMode}
                  onChange={(e) =>
                    setCourseInfo({
                      ...courseInfo,
                      studyMode: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Study Mode</option>
                  <option value="full-time">Full-time (Face-to-face)</option>
                  <option value="part-time">Part-time (Face-to-face)</option>
                  <option value="online">Online</option>
                  <option value="blended">Blended Learning</option>
                  <option value="evening">Evening Classes</option>
                  <option value="weekend">Weekend Classes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Duration *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <select
                    required
                    value={courseInfo.duration}
                    onChange={(e) =>
                      setCourseInfo({
                        ...courseInfo,
                        duration: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  >
                    <option value="">Select Duration</option>
                    <option value="6-months">6 Months</option>
                    <option value="12-months">12 Months</option>
                    <option value="18-months">18 Months</option>
                    <option value="2-years">2 Years</option>
                    <option value="3-years">3 Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Campus Location *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <select
                    required
                    value={courseInfo.campus}
                    onChange={(e) =>
                      setCourseInfo({ ...courseInfo, campus: e.target.value })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  >
                    <option value="">Select Campus</option>
                    <option value="sydney-cbd">Sydney CBD Campus</option>
                    <option value="melbourne-city">
                      Melbourne City Campus
                    </option>
                    <option value="brisbane-central">
                      Brisbane Central Campus
                    </option>
                    <option value="perth-city">Perth City Campus</option>
                    <option value="online-campus">Online Campus</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Previous Education *
                </label>
                <div className="relative">
                  <Award className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <select
                    required
                    value={courseInfo.previousEducation}
                    onChange={(e) =>
                      setCourseInfo({
                        ...courseInfo,
                        previousEducation: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  >
                    <option value="">Select Highest Qualification</option>
                    <option value="year-12">Year 12 / High School</option>
                    <option value="certificate">Certificate</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  English Proficiency *
                </label>
                <select
                  required
                  value={courseInfo.englishProficiency}
                  onChange={(e) =>
                    setCourseInfo({
                      ...courseInfo,
                      englishProficiency: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Proficiency Level</option>
                  <option value="native">Native Speaker</option>
                  <option value="ielts-7">IELTS 7.0+</option>
                  <option value="ielts-6.5">IELTS 6.5</option>
                  <option value="ielts-6">IELTS 6.0</option>
                  <option value="toefl">TOEFL Certificate</option>
                  <option value="pte">PTE Academic</option>
                  <option value="other">Other Certificate</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Work Experience
                </label>
                <textarea
                  value={courseInfo.workExperience}
                  onChange={(e) =>
                    setCourseInfo({
                      ...courseInfo,
                      workExperience: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Briefly describe your relevant work experience (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Motivation Letter
                </label>
                <textarea
                  value={courseInfo.motivationLetter}
                  onChange={(e) =>
                    setCourseInfo({
                      ...courseInfo,
                      motivationLetter: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Why do you want to study this course? What are your career goals? (optional)"
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">
                Payment Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Payment Method *
                </label>
                <select
                  required
                  value={finalDetails.paymentMethod}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      paymentMethod: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Payment Method</option>
                  <option value="upfront">Full Payment (Upfront)</option>
                  <option value="installments">
                    Payment Plan (Installments)
                  </option>
                  <option value="vet-student-loan">VET Student Loan</option>
                  <option value="company-sponsored">
                    Company Sponsored
                  </option>
                  <option value="scholarship">Scholarship</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="scholarship"
                  checked={finalDetails.scholarshipApplied}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      scholarshipApplied: e.target.checked,
                    })
                  }
                  className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="scholarship"
                  className="ml-2 text-sm text-black"
                >
                  Apply for Merit Scholarship
                </label>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">
                Emergency Contact
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  required
                  value={finalDetails.emergencyContactName}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      emergencyContactName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Contact Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-blue-600" />
                  <input
                    type="tel"
                    required
                    value={finalDetails.emergencyContactPhone}
                    onChange={(e) =>
                      setFinalDetails({
                        ...finalDetails,
                        emergencyContactPhone: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="+61 4XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Relationship *
                </label>
                <select
                  required
                  value={finalDetails.emergencyContactRelation}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      emergencyContactRelation: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Select Relationship</option>
                  <option value="parent">Parent</option>
                  <option value="spouse">Spouse/Partner</option>
                  <option value="sibling">Sibling</option>
                  <option value="friend">Friend</option>
                  <option value="guardian">Guardian</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">
                Additional Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Health Conditions or Disabilities
                </label>
                <textarea
                  value={finalDetails.healthConditions}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      healthConditions: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Please describe any health conditions or disabilities that may require special support (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Special Requirements
                </label>
                <textarea
                  value={finalDetails.specialRequirements}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      specialRequirements: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Any special learning requirements, dietary needs, or accessibility requirements (optional)"
                />
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-black">
                Terms and Conditions
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  checked={finalDetails.termsAccepted}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      termsAccepted: e.target.checked,
                    })
                  }
                  className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500 mt-1"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-black">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms and Conditions
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  , and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Student Code of Conduct
                  </a>{" "}
                  *
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={finalDetails.marketingConsent}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      marketingConsent: e.target.checked,
                    })
                  }
                  className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500 mt-1"
                />
                <label
                  htmlFor="marketing"
                  className="ml-2 text-sm text-black"
                >
                  I consent to receiving marketing communications, course
                  updates, and promotional materials from BusinessPlex
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="accuracy"
                  required
                  checked={finalDetails.accuracyDeclaration}
                  onChange={(e) =>
                    setFinalDetails({
                      ...finalDetails,
                      accuracyDeclaration: e.target.checked,
                    })
                  }
                  className="h-4 w-4 text-blue-600 border-2 border-blue-600 rounded focus:ring-blue-500 mt-1"
                />
                <label
                  htmlFor="accuracy"
                  className="ml-2 text-sm text-black"
                >
                  I declare that all information provided in this
                  application is true, accurate, and complete to the best of
                  my knowledge *
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
         <div className="flex justify-center">
  <button
    type="submit"
    className={`flex items-center px-12 py-4 rounded-lg font-bold text-lg transition-all duration-200 border-2 border-blue-600
      bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800
      focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 shadow-lg`}
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
        Submitting Application...
      </>
    ) : (
      <>
        <Send className="h-6 w-6 mr-3" />
        Submit Enrollment Application
      </>
    )}
  </button>
</div>
        </form>

        {/* Footer */}
        <div className="text-center mt-12 mb-12 text-gray-600">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-600">
            <p className="text-sm text-gray-600 font-[Poppins,Roboto,sans-serif]">
              Need assistance? Contact our enrollment team at{" "}
              <span className="text-blue-700 font-semibold">
                <a
                  href="mailto:admin@businessplex.com.au"
                  className="text-blue-600 hover:underline"
                >
                  admin@businessplex.com.au
                </a>
              </span>{" "}
              or call{" "}
              <span className="text-blue-700 font-semibold">
                <a
                  href="tel:1300894480"
                  className="text-blue-600 hover:underline"
                >
                  1300 894 480
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrolment;