import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const SLink = () => {
  return (
    <>
      <div
        className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center gap-4 bg-transparent p-3 z-50"
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nazmus-sakib-303345241/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0c61bf] text-xl rounded-full border-2 p-1 transition-colors duration-300 transform hover:rotate-[360deg] cursor-pointer border-solid animate-border"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/NazmusSakib2036"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white dark:text-white text-xl rounded-full border-2 p-1 transition-colors duration-300 transform hover:rotate-[360deg] cursor-pointer border-solid animate-border"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/nazmus12_arish12/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[red] text-xl rounded-full border-2 p-1 transition-colors duration-300 transform hover:rotate-[360deg] cursor-pointer border-solid animate-border"
        >
          <FaInstagram />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Nazmus.Sharia143/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0862f7] text-xl rounded-full border-2 p-1 transition-colors duration-300 transform hover:rotate-[360deg] cursor-pointer animate-border"
        >
          <FaFacebook />
        </a>
      </div>

      <style>{`
        @keyframes border {
          0% {
            border-color: #ff0000 #00ff00 #0000ff #ffff00;
          }
          25% {
            border-color: #00ff00 #0000ff #ffff00 #ff0000;
          }
          50% {
            border-color: #0000ff #ffff00 #ff0000 #00ff00;
          }
          75% {
            border-color: #ffff00 #ff0000 #00ff00 #0000ff;
          }
          100% {
            border-color: #ff0000 #00ff00 #0000ff #ffff00;
          }
        }

        .animate-border {
          animation: border 1s infinite linear;
        }
      `}</style>
    </>
  );
};

export default SLink;
