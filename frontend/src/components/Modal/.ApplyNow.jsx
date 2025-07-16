import React from 'react'
import { FaTimes } from 'react-icons/fa'; // ✅ Make sure this is imported

const ApplyNow = () => {
  const [showApplyModal, setShowApplyModal] = React.useState(false);
  const [hasManuallyClosed, setHasManuallyClosed] = React.useState(false);

  const applyTriggerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasManuallyClosed) {
          setShowApplyModal(true);
        } else {
          setShowApplyModal(false); // Optional: hide if out of view
        }
      },
      { threshold: 0.5 }
    );

    if (applyTriggerRef.current) {
      observer.observe(applyTriggerRef.current);
    }

    return () => {
      if (applyTriggerRef.current) {
        observer.unobserve(applyTriggerRef.current);
      }
    };
  }, [hasManuallyClosed]);

  return (
    <>
      {/* 👇 This is the scroll trigger div */}
      <div ref={applyTriggerRef}></div>

      {/* 👇 Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={() => {
                setShowApplyModal(false);
                setHasManuallyClosed(true);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              title="Close"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-green-700">
              Ready to Enroll?
            </h2>
            <p className="text-sm mb-4 text-center text-gray-700">
              Apply now to start your journey with us and unlock your potential!
            </p>
            <div className="flex justify-center">
              <a
                href="./ApplicationForm"
                className="inline-block w-full text-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Apply Now
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default ApplyNow;
