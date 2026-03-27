import React from 'react'

const topics = [
  {
    title: 'Access and Equity Policy',
    content: (
      <div>
        <p>
          <div className='pb-5'>
            Businessplex celebrates and values the diversity of its community and is dedicated to ensuring equal opportunity and treatment for students throughout their learning experience.
          </div>
          <div className='pb-5'>
            In particular, Businessplex is committed to creating a positive learning environment for students that promotes equality and is supportive of the specific needs of individuals.
          </div>
          <div className='pb-5'>
            Businessplex recognises its obligations under a range of Federal and State legislation. Access and equity in vocational education and training applies to existing and potential students of Businessplex. Australian federal and state legislation makes it unlawful to discriminate against people in certain ways because of, among other things, their age, gender, race, marital status, sexuality, or physical or intellectual disability.
          </div>
          <div className='pb-5'>
            Businessplex is committed to:
            providing equal opportunity and promoting inclusive practices and processes for all clients within the limits of its resources
            integrating the principles of access and equity in its policies and procedures for clients.
          </div>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">

        </ul>
        <p className="mt-3">

        </p>
      </div>
    ),
  },
  {
    title: 'Access & Equity Principles',
    content: (
      <div>
        <p>
          <div className='pb-5'>
            The recruitment and admission process are the same for all applicants.
            Admission to courses and programs is based solely on the applicant meeting published entry criteria and the availability of places.
            Applicants are provided with adequate information and appropriate counselling to enable them to select the most suitable program for their needs.
          </div>
          <div className='pb-5'>
            Businessplex's premises have 'public building' building approval.
          </div>
          <div className='pb-5'>
            The courses are inclusive of a range of student needs.
          </div>
          <div className='pb-5'>
            Issues relating to access and equity are considered when specifying course entry requirements and prerequisites.
          </div>
          <div className='pb-5'>
            Course design is flexible to provide alternate entry and/or exit points (wherever possible) or pathways through the course.
          </div>
          <div className='pb-5'>
            The requirements of students with disabilities and/or individual needs are taken into account during training and/or assessment.
          </div>
          <div className='pb-5'>
            Learning documents and materials avoid non-inclusive and discriminatory language and examples.
          </div>
          <div className='pb-5'>
            Language levels are consistent with the vocational level of the qualification.
          </div>
          <div className='pb-5'>
            Students without online access away from the college have the opportunity to use Businessplex computer facilities.
          </div>
          <div className='pb-5'>
            The assessment process is fair, valid, reliable and consistent.
          </div>
          <div className='pb-5'>
            All students are given an equal opportunity to demonstrate competence.
          </div>
          <div className='pb-5'>
            Assessment is inclusive of all students enrolled in the course or unit.
          </div>
          <div className='pb-5'>
            Support is provided to those with individual needs.
          </div>
          <div className='pb-5'>
            At enrolment, students are asked to identify personal needs or circumstances that may exist.
          </div>
          <div className='pb-5'>
            Reasonable adjustment is provided to those with a disability or individual need according to individual circumstances. Reasonable adjustment may include but is not restricted to:
          </div>
          <div className='pb-5'>
            the use of adaptive technologyeducational support alternative methods of assessment
          </div>
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">

        </ol>
        <p className="mt-3">

        </p>
      </div>
    ),
  },

];


const AccessEquityPolicy = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleTopic = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-yellow-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent">
            Access and Equity Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to creating an inclusive learning environment that promotes equality and supports the diverse needs of all students.
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 text-sm text-gray-500">
            <span>📅</span>
            <span>Last updated: January 15, 2025</span>
          </div>
        </div>

        <div className="space-y-4">
          {topics.map((topic, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`card-${index}`}
                className={`border-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  isOpen
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 via-blue-50 to-purple-50 relative z-10 shadow-2xl'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleTopic(index)}
                  className={`w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer transition-all duration-200 ${
                    isOpen 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-xl border-b border-blue-200' 
                      : 'hover:bg-gray-50 rounded-xl'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      isOpen ? 'bg-blue-800' : 'bg-blue-400'
                    }`}>
                      {index + 1}
                    </div>
                    <span className={`text-lg font-semibold ${
                      isOpen ? 'text-blue-900' : 'text-gray-800'
                    }`}>{topic.title}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className={`rounded-b-xl p-6 ${
                      isOpen 
                        ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-t-0' 
                        : 'bg-white'
                    }`}>
                      <div className="leading-relaxed text-gray-700">
                        {topic.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-15 mb-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Questions about our Access and Equity Policy?</h3>
            <p className="text-gray-600 mb-4">We're here to help you understand our commitment to inclusivity and equal opportunity.</p>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Contact Our Privacy Team
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessEquityPolicy
