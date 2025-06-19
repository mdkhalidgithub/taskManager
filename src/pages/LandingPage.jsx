import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 flex-1">
        {/* Left Section */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Task <br /> Manager
          </h1>
          <p className="text-2xl font-semibold text-gray-800 mb-2">Welcome to your productivity hub!</p>
          <p className="text-gray-600 mb-8 border-l-4 border-gray-300 pl-4">
            Manage your tasks efficiently and boost your productivity with our simple and intuitive task manager.
          </p>
          <button
            className="flex items-center bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </button>
        </div>
        {/* Right Section - Illustration */}
        <div className="mt-12 md:mt-0 md:ml-12 flex-1 flex justify-center">
          {/* Placeholder SVG illustration */}
          <svg width="340" height="220" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="60" width="220" height="120" rx="20" fill="#F3F4F6" />
            <rect x="70" y="90" width="60" height="20" rx="6" fill="#F472B6" />
            <rect x="150" y="90" width="60" height="20" rx="6" fill="#F472B6" opacity="0.5" />
            <rect x="70" y="120" width="60" height="20" rx="6" fill="#F472B6" opacity="0.5" />
            <rect x="150" y="120" width="60" height="20" rx="6" fill="#F472B6" />
            <circle cx="270" cy="80" r="18" fill="#F472B6" opacity="0.2" />
            <circle cx="270" cy="80" r="12" fill="#F472B6" />
            <rect x="250" y="180" width="40" height="8" rx="4" fill="#F472B6" opacity="0.3" />
          </svg>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
