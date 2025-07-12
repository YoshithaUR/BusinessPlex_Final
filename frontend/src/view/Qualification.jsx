import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import images from "../assets/Images/images";

const qualificationsData = [
  {
    title: "Certificate III in Entrepreneurship",
    code: "BSB30220",
    subtitle: "Self-Employment Assistance Program",
    skills: [
      "New Business Ventures Skill Set",
      "Small Business Management Skill Set",
    ],
    image: images.image_ServicePopup01,
    link: "/apply/entrepreneurship",
  },
  {
    title: "Diploma of Quality Auditing",
    code: "BSB50920",
    subtitle: "Work with Audit Professionals",
    skills: [
      "Monitor quality of product/services",
      "Team auditing environment",
      "Client-focused approach",
      "Stakeholder collaboration",
    ],
    image: images.image_abouteHome01,
    link: "/apply/auditing",
  },
  {
    title: "Certificate III in Business",
    code: "BSB30120",
    subtitle: "Core Business Operations",
    skills: [
      "Bookkeeping & Scheduling",
      "Sales and Marketing",
      "Social media strategy",
      "Business Intelligence (BI)",
    ],
    image: images.image_Card02,
    link: "/apply/business",
  },
];

const Qualifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-amber-50 py-20 px-6 sm:px-10 lg:px-20 font-[Poppins,Roboto,sans-serif]">
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Explore Our Qualifications
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Step forward with skill-enhancing certifications
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {qualificationsData.map((qual, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-3xl overflow-hidden group transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={qual.image}
                alt={qual.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {qual.code} – {qual.title}
                </h3>
                <p className="text-sm italic text-gray-500">{qual.subtitle}</p>
                <ul className="space-y-1 mt-2 text-sm text-gray-600">
                  {qual.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href={qual.link}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualifications;
