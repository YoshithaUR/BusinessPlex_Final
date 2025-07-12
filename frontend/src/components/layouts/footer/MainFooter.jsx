import React from 'react'
import images from '../../../assets/Images/images'
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const MainFooter = () => {
  return (
    <>
      <footer className="text-white text-sm">
        <div className="bg-gray-900 px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-t-3xl -mt-6">
          {/* Logo + Contact Info */}
          <div>
            <img
              src={images.image_logo}
              alt="Businessplex"
              className="w-28 mb-4 mx-auto md:mx-0"
            />
            <div className="space-y-2 text-center md:text-left">
              <a
                href="https://www.google.com/maps?q=1/3+Marchant+Way,+Morley+WA+6062"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-amber-400 transition"
              >
                1/3 Marchant Way, Morley 6062
              </a>
              <a
                href="tel:1300894480"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition"
              >
                <FaPhoneAlt /> Free call: 1300 894 480
              </a>
              <a
                href="tel:0861565820"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition"
              >
                <FaPhoneAlt /> 08 6156 5820
              </a>
              <a
                href="mailto:admin@businessplex.com.au"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-400 transition break-words"
              >
                <MdEmail /> admin@businessplex.com.au
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {[
                { href: "/", label: "Home" },
                { href: "#", label: "About Us" },
                { href: "#", label: "Our Team" },
                { href: "#", label: "Contact Us" },
                { href: "#", label: "Privacy Policy" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="block hover:text-amber-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Services
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {[
                { href: "#", label: "Small Business Training" },
                { href: "#", label: "Exploring Self-Employment Workshops" },
                { href: "#", label: "Business Health Checks" },
                { href: "#", label: "Business Advice" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="block hover:text-amber-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Newsletter
            </h3>
            <form
              className="flex flex-col space-y-3 max-w-xs mx-auto md:mx-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Name"
                className="px-3 py-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button className="bg-amber-400 text-blue-900 font-semibold py-2 rounded hover:bg-amber-500 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="bg-gray-800 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
          {/* Logos */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <img
              src={images.image_Footer1}
              alt="Australian Qualification"
              className="h-16"
            />
            <img
              src={images.image_Footer2}
              alt="Workforce Australia"
              className="h-16"
            />
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-sm">
            Copyright 2025 © Businessplex. All Rights Reserved. Development by
            A4Technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://web.facebook.com/BusinessplexTrainingCentre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/businessplex/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MainFooter
