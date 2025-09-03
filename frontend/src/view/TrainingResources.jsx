import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from "../assets/Images/images";
import pdf from "../assets/Images/pdf";
import {
  Calendar,
  Clock,
  Users,
  Monitor,
  MapPin,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
} from 'lucide-react';

const trainingData = [
  {
    // // period: 'July/August 2025',
    // // weeks: [
    // //   { week: 1, classroom: ['22nd July', '25th July'], online: ['23rd July', '24th July'] },
    // //   { week: 2, classroom: ['29th July', '01st Aug'], online: ['30th July', '31st July'] },
    // //   { week: 3, classroom: ['05th Aug', '08th Aug'], online: ['06th Aug', '07th Aug'] },
    // //   { week: 4, classroom: ['12th Aug', '15th Aug'], online: ['13th Aug', '14th Aug'] },
    // ],
  },
  {
    period: 'August/September 2025',
    weeks: [
      { week: 1, classroom: ['19th Aug', '22nd Aug'], online: ['20th Aug', '21st Aug'] },
      { week: 2, classroom: ['26th Aug', '29th Aug'], online: ['27th Aug', '28th Aug'] },
      { week: 3, classroom: ['02nd Sept', '05th Sept'], online: ['03rd Sept', '04th Sept'] },
      { week: 4, classroom: ['09th Sept', '12th Sept'], online: ['10th Sept', '11th Sept'] },
    ],
  },
  {
    period: 'September/October 2025',
    weeks: [
      { week: 1, classroom: ['16th Sept', '19th Sept'], online: ['17th Sept', '18th Sept'] },
      { week: 2, classroom: ['23rd Sept', '26th Sept'], online: ['24th Sept', '25th Sept'] },
      { week: 3, classroom: ['30th Sept', '03rd Oct'], online: ['01st Oct', '02nd Oct'] },
      { week: 4, classroom: ['07th Oct', '10th Oct'], online: ['08th Oct', '09th Oct'] },
    ],
  },
  {
    period: 'October/November 2025',
    weeks: [
      { week: 1, classroom: ['14th Oct', '17th Oct'], online: ['15th Oct', '16th Oct'] },
      { week: 2, classroom: ['21st Oct', '24th Oct'], online: ['22nd Oct', '23rd Oct'] },
      { week: 3, classroom: ['28th Oct', '31st Oct'], online: ['29th Oct', '30th Oct'] },
      { week: 4, classroom: ['04th Nov', '07th Nov'], online: ['05th Nov', '06th Nov'] },
    ],
  },
  {
    period: 'November/December 2025',
    weeks: [
      { week: 1, classroom: ['11th Nov', '14th Nov'], online: ['12th Nov', '13th Nov'] },
      { week: 2, classroom: ['18th Nov', '21st Nov'], online: ['19th Nov', '20th Nov'] },
      { week: 3, classroom: ['25th Nov', '28th Nov'], online: ['26th Nov', '27th Nov'] },
      { week: 4, classroom: ['02nd Dec', '05th Dec'], online: ['03rd Dec', '04th Dec'] },
    ],
  },
];

const selfEmploymentData = [
  {
    period: 'July/Aug-25',
    weeks: [
      { week: 1, classroom: '24th July (Thursday)' },
      { week: 2, classroom: '31st July (Thursday)' },
      { week: 3, classroom: '07th Aug (Thursday)' },
      { week: 4, classroom: '14th Aug (Thursday)' },
    ],
  },
  {
    period: 'Sep/Oct-25',
    weeks: [
      { week: 1, classroom: '18th Sept (Thursday)' },
      { week: 2, classroom: '25th Sept (Thursday)' },
      { week: 3, classroom: '02nd Oct (Thursday)' },
      { week: 4, classroom: '09th Oct (Thursday)' },
    ],
  },
  {
    period: 'Nov/Dec-25',
    weeks: [
      { week: 1, classroom: '13th Nov (Thursday)' },
      { week: 2, classroom: '20th Nov (Thursday)' },
      { week: 3, classroom: '27th Nov (Thursday)' },
      { week: 4, classroom: '04th Dec (Thursday)' },
    ],
  },
];

const TrainingResources = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // Scroll down a little bit when component mounts
    window.scrollTo(0, 100); // Scroll down 100px from top
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-emerald-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-teal-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-emerald-200/50">
            <BookOpen className="text-2xl text-emerald-600" />
            <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">
              Professional Development
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-teal-700 bg-clip-text text-transparent">
              Training & Resources
            </span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive training schedules for our Small Business Training (SEA Program)
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[{
              icon: <MapPin className="h-6 w-6 text-white" />,
              title: "Classroom Training",
              desc: "In-person sessions with direct instructor interaction",
            }, {
              icon: <Monitor className="h-6 w-6 text-white" />,
              title: "Online Training",
              desc: "Flexible virtual learning from anywhere",
            }, {
              icon: <Clock className="h-6 w-6 text-white" />,
              title: "4-Week Program",
              desc: "Intensive training over 4 structured weeks",
            }].map((card, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200/50"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Small Business Training Schedules */}
        <div className="mb-16">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Small Business Training (SEA Program)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training combining classroom and online sessions for complete business development
            </p>
          </div>

          <div className="space-y-8">
            {trainingData.map((period, periodIndex) => (
              <div
                key={periodIndex}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-emerald-200/50"
                data-aos="fade-up"
                data-aos-delay={periodIndex * 100}
              >
                {/* Period Title */}
                <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-6 text-white flex items-center justify-center gap-3">
                  <Calendar className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">{period.period}</h3>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-emerald-100 to-blue-100">
                      <tr>
                        {[
                          { icon: <Users className="h-4 w-4" />, label: "Week" },
                          { icon: <MapPin className="h-4 w-4" />, label: "Classroom" },
                          { icon: <Monitor className="h-4 w-4" />, label: "Online" },
                        ].map((col, i) => (
                          <th
                            key={i}
                            className="px-6 py-4 text-left font-bold text-emerald-800 border-b border-emerald-200"
                          >
                            <div className="flex items-center gap-2">{col.icon} {col.label}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {period.weeks.map((week, weekIndex) => (
                        <tr key={weekIndex} className="hover:bg-emerald-50/50 transition duration-200">
                          <td className="px-6 py-4 border-b border-emerald-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {week.week}
                              </div>
                              <span className="font-semibold text-gray-800">Week {week.week}</span>
                            </div>
                          </td>
                          {[week.classroom, week.online].map((dates, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 border-b border-emerald-100">
                              <div className="flex flex-wrap gap-2">
                                {dates.map((date, i) => (
                                  <div
                                    key={i}
                                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                                      colIndex === 0
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : 'bg-blue-100 text-blue-800'
                                    }`}
                                  >
                                    <CheckCircle className="h-3 w-3" />
                                    {date}
                                  </div>
                                ))}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Employment Workshop Section */}
        <div className="mb-16">
          <div className="text-center mb-8" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 border border-green-200/50">
              <Target className="text-2xl text-green-600" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">
                Self-Employment Focus
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Exploring Self-Employment Workshop Dates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized workshops focused on self-employment opportunities and entrepreneurial development
            </p>
          </div>

          <div className="space-y-8">
            {selfEmploymentData.map((period, periodIndex) => (
              <div
                key={periodIndex}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-green-200/50"
                data-aos="fade-up"
                data-aos-delay={periodIndex * 100}
              >
                {/* Period Title */}
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white flex items-center justify-center gap-3">
                  <TrendingUp className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">{period.period}</h3>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-green-100 to-teal-100">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold text-green-800 border-b border-green-200">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Week
                          </div>
                        </th>
                        <th className="px-6 py-4 text-left font-bold text-green-800 border-b border-green-200">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Classroom
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {period.weeks.map((week, weekIndex) => (
                        <tr key={weekIndex} className="hover:bg-green-50/50 transition duration-200">
                          <td className="px-6 py-4 border-b border-green-100">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {week.week}
                              </div>
                              <span className="font-semibold text-gray-800">Week {week.week}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b border-green-100">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                              <CheckCircle className="h-3 w-3" />
                              {week.classroom}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto border border-emerald-200/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-emerald-100 px-6 py-3 rounded-full mb-6">
                <BookOpen className="text-emerald-600" />
                <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">
                  Ready to Start?
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Join Our Training Programs
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Choose between our comprehensive Small Business Training or specialized Self-Employment Workshops.
                All programs are designed to help you succeed in your entrepreneurial journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2">
                 <a href={pdf.pdf_ExploringSelf}>
                 Download ESEW <br/>Dates Schedule
                  </a>
                  {/* <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /> */}
                </button>
                <button className="border-2 border-emerald-300 text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:border-emerald-400 hover:text-emerald-800 transition-all duration-300 hover:scale-105 transform bg-white/50">
                  <a href={pdf.pdf_SmallBusiness}>
                  Download SEA Program <br/>Schedule
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingResources;