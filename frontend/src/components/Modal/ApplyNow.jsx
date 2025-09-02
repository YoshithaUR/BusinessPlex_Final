import React from "react";
import { FaTimes } from "react-icons/fa"; // ✅ Make sure this is imported
import { useNavigate } from "react-router-dom";

const ApplyNow = () => {
  const [showApplyModal, setShowApplyModal] = React.useState(false);
  const [hasManuallyClosed, setHasManuallyClosed] = React.useState(false);
  const navigate = useNavigate();

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

      {/* Modal with smooth animation */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ease-out ${
          showApplyModal 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div 
          className={`bg-white p-10 rounded-2xl shadow-2xl w-[600px] max-w-[90vw] mx-4 relative transform transition-all duration-300 ease-out ${
            showApplyModal 
              ? 'scale-100 translate-y-0 opacity-100' 
              : 'scale-95 translate-y-8 opacity-0'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => {
              setShowApplyModal(false);
              setHasManuallyClosed(true);
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer focus:outline-none text-xl transition-colors duration-200 hover:bg-gray-100 rounded-full p-2"
            title="Close"
          >
            <FaTimes />
          </button>

          {/* Header */}
          <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
            Ready to Start Your Journey?
          </h2>

          {/* Description */}
          {/* <p className="text-lg mb-8 text-center text-gray-700 leading-relaxed">
            Take the first step towards building your successful business. 
            Join thousands of entrepreneurs who have transformed their ideas into reality.
          </p> */}

         

          {/* CTA Button */}
          <div className="flex justify-center">
                         <button
               onClick={() => {
                 // Navigate to ApplicationForm page with state to trigger scroll
                 navigate("/ApplicationForm", { state: { scrollToForm: true } });
               }}
              className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Apply Now
            </button>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-500 text-center mt-4">
            No application fee • Quick approval process
          </p>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;