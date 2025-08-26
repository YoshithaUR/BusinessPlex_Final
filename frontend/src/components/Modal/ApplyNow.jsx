import React from "react";
import { FaTimes } from "react-icons/fa"; // ✅ Make sure this is imported

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
      <div ref={applyTriggerRef}></div>

      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-96 max-w-md mx-4 relative">
            <button
              onClick={() => {
                setShowApplyModal(false);
                setHasManuallyClosed(true);
              }}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 cursor-pointer focus:outline-none text-lg"
              title="Close"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
              {/* Ready to Enroll? */}
            </h2>
            <p className="text-base mb-6 text-center text-gray-700">
             Ready to start your business journey?
            </p>
            <div className="flex justify-center">
              <a
                href="./ApplicationForm"
                className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyNow;