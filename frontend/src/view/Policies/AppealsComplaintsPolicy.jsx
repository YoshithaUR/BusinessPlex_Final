import React from 'react'


const topics = [
  {
    title: 'Appeals and Complaints Policy',
    content: (
      <div>
        <p>
          <div className='pb-5'>
            Businessplex is committed to ensuring that all student complaints are resolved fairly, promptly and at the most appropriate level within the Institute. A strong complaints policy, and the recording of the number of complaints received and resolved, assist in ensuring continuous improvement of the quality of services to our customers.
          </div>
          <div className='pb-5'>
            The Complaints Policy and its procedures are designed to achieve the following goals:
          </div>
          <div className='pb-5'>
            To provide a procedure that recognises the right of a customer to make a complaint and which is focussed on continuous quality improvement.
            To provide procedures for addressing and resolving customer complaints speedily, in accordance with principles of natural justice, in a confidential manner and with the involvement of all those about whom complaints are made.
          </div>
          <div className='pb-5'>
            To provide for prompt resolution at the level at which most complaints are likely to arise while providing for independent mediation and conciliation should the matter not be resolved at the first level.
          </div>
          <div className='pb-5'>
            To encourage all staff to process improvements where necessary to remove the possibility of repetition of similar complaints.
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
    title: 'All student complaints will be handled in a way that:',
    content: (
      <div>
        <p>
          <div className='pb-5'>
            assists in resolving the complaint by assisting the parties to a satisfactory outcome;
          </div>
          <div className='pb-5'>
            is fair, efficient and in accordance with principles of natural justice;
          </div>
          <div className='pb-5'>
            treats complaints with appropriate seriousness and confidentiality;
          </div>
          <div className='pb-5'>
            facilitates early resolution as close to the source of the problem as possible; and
            provides Businessplex with the means to identify ways of continually improving the services it provides.
          </div>
          <div className='pb-5'>
            The Complaints policy and procedures will complement, but not replace, existing Institute policies and procedures for dealing with other forms of grievances, and or cancellations, assessment appeals, discrimination, harassment, sexual harassment or criminal acts. Complaints that are found to be outside the domain of this policy will be directed to the appropriate channels.
          </div>
          <div className='pb-5'>
            Complaints that involve alleged criminal actions will be reported immediately to the police or other relevant authority.
          </div>
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">

        </ol>
        <p className="mt-3">

        </p>
      </div>
    ),
  }, {
    title: 'Confidentiality',
    content: (
      <div>
        <p>
          <div className='pb-5'>
            All complaints are treated with appropriate confidentiality, unless to do so would compromise the Institute's duty of care. Similarly, people who are themselves the subject of a complaint, have the right to expect that any claims made against them are treated confidentially.
          </div>

          <div className='pb-5'>
            While confidentiality can be assured, anonymity cannot. It will be sometimes impossible to guarantee that a complainant will not be identified, particularly if the circumstances of their complaint are unique. Anonymity is not appropriate if formal processes are invoked. When a formal complaint is lodged the person(s) who is the subject of the complaint will be notified and provided with details of the allegation(s).
          </div>

          <div className='pb-5'>
            The CEO will retain records of the types of issues that are the subject of complaints, the timeliness of response and the nature of the resolution. This information will be reviewed and used to ensure and enhance continuous quality improvement.
          </div>
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">

        </ol>
        <p className="mt-3">

        </p>
      </div>
    ),
  }, {
    title: 'Definitions',
    content: (
      <div>
        <p>
          <div className='pb-5'>
            Complaint – a person's expression of dissatisfaction with any service provided by Businessplex.
          </div>
          <div className='pb-5'>
            Appeal – a request to review a decision that has previously been made.
          </div>
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">

        </ol>
        <p className="mt-3">

        </p>
      </div>
    ),
  }, {
    title: 'Complaints and Appeals Procedure',
    content: (
      <div>
        <p>
          Students are encouraged, wherever possible to resolve concerns or difficulties directly with the person(s) involved to deal with the issue before it becomes a formal complaint. The CEO, Administration Manager and other staff are available to assist students to resolve their issues at this level. Where a complaint cannot be resolved informally by discussion and mediation, a formal complaint may be lodged with the CEO.
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">

        </ol>
        <p className="mt-3">

        </p>
      </div>
    ),
  }, {
    title: 'Lodging a Complaint',
    content: (
      <div>
        <p>
          <div className='pb-5'>
            Formal complaints and appeals may be made in writing to the CEO. The CEO will discuss the nature of the issue with those involved and attempt to resolve problems through discussion and conciliation.
          </div>
          <div className='pb-5'>
            The CEO will discuss the complaint with the Administration Manager and/or Director and advise, in writing, the person who has made the complaint of the proposed solution.
          </div>
          <div className='pb-5'>
            The advice to the person who has made the complaint will include information and procedures concerning the complainant's right to appeal the proposed solution and request for an independent adjudicator.
          </div>
          <div className='pb-5'>
            A student may be assisted or accompanied by a support person regardless of the nature of the complaint or appeal. Businessplex will maintain a student's enrolment while a complaint and appeal process is on-going, however, this does not exclude Businessplex from reserving the right to suspend a student from attending class or visiting Businessplex Training facility, if that is considered necessary during this period.Businessplex acknowledges the need for an independent party to mediate where an appropriate outcome cannot be reached internally.
          </div>
          <div className='pb-5'>
            All independent adjudicator outcomes will be communicated to the complainant in a timely manner.
          </div>
          <div className='pb-5'>
            All formal complaints and appeals and their outcomes will be recorded on the Complaints and Appeals Register. This Register is reviewed by all staff at Staff Meetings and used as an opportunity for improvement and reflection.
          </div>
          <div className='pb-5'>
            Should Businessplex consider more than 60 calendar days are required to process and finalise the complaint or appeal,
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

const AppealsComplaintsPolicy = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleTopic = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-yellow-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent">
            Appeals and Complaints Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to resolving student complaints and appeals fairly, promptly, and in accordance with principles of natural justice.
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
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Questions about our Appeals and Complaints Policy?</h3>
            <p className="text-gray-600 mb-4">We're here to help you understand the process for lodging complaints and appeals.</p>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Contact Our Privacy Team
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppealsComplaintsPolicy
