import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer bg-white py-12 border-t border-gray-200">
      <div className="footer-main max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div className="footer-col space-y-6">
          <h3 className="text-xl font-bold text-orange-600 tracking-tight">MERN-Quiz-App</h3>
          <p className="text-lg text-gray-700">
            Where passion meets perfection! Explore and create engaging quizzes with ease.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col space-y-6">
          <h3 className="text-2xl font-semibold text-orange-600 tracking-tight">Quiz</h3>
          <Link
            to="/"
            className="text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300"
          >
            All Quiz
          </Link>
        </div>

        {/* Column 3 */}
        <div className="footer-col space-y-6">
          <h3 className="text-2xl font-semibold text-orange-600 tracking-tight">Resources</h3>
          <div className="space-y-3">
            <Link
              to="/faq" 
              className="text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/terms"
              className="text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Column 4 */}
        <div className="footer-col space-y-6">
          <h3 className="text-2xl font-semibold text-orange-600 tracking-tight">Contact</h3>
          <p className="text-lg text-gray-700 flex items-center">
            <i className="fa fa-home text-orange-600 mr-3"></i> Kurnool, Andhra Pradesh
          </p>
          <p className="text-lg text-gray-700 flex items-center">
            <i className="fa fa-envelope text-orange-600 mr-3"></i> rishika.s22@iiits.in
          </p>
          <p className="text-lg text-gray-700 flex items-center">
            <i className="fa fa-phone text-orange-600 mr-3"></i> +91 8897391589
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-lg">
          MERN Quiz App Designed and Developed By <span className="font-semibold text-orange-600">Rishika</span>.
        </p>
      </div>
    </div>
  );
};
