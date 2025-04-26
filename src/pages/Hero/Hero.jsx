import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../../assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

// Grid Background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Developer & UI/UX Enthusiast",
    "JavaScript Developer & Creator of FabTech.it",
    "Learning MARN Stack",
    "Linux & GitHub for DevOps Enthusiast",
  ];

  useEffect(() => {
    Prism.highlightAll();
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#020617] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0"></div>
        <GridBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        {/* Updated gap and responsive column reverse */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 relative z-10 py-12 lg:py-0">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my universe
              </span>
            </div>

            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <SparklesText text="Hello" className="text-2xl sm:text-3xl lg:text-4xl" />
                <span className="relative inline-block">
                  I'm
                  <span className="typing-effect gradient-text">
                    {" "}Nazmus Sakib
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
              <span>
                <FlipWords className="text-lg sm:text-xl text-blue-400 font-medium" words={words} />
              </span>
            </div>

            <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed mb-8 sm:mb-12 max-w-xl">
              JavaScript lover 🚀 | FabTech.it creator 🔧 | Crafting frameworks and coding the future 💻✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
              <a
                href="https://github.com/NazmusSakib2036"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right transition-all group-hover:translate-x-1"></i>
                  </span>
                </span>
              </a>
              <a
                href="../../../public/ass/cv/Nazmus Sakib-(CV).pdf"
                download="Md_Nazmus_Sakib_CV.pdf"
                className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                aria-label="Download Resume"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                  <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                    <span>Get Resume</span>
                    <i className="fas fa-envelope group-hover:rotate-12 transition-all"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight rounded-full">
            <img
              src="/src/assets/images/sakib_web.png"
              alt="Nazmus Sakib"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      

      <PortfolioPage />
    </main>
  );
}
