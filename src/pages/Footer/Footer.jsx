import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Nazmus Sakib</h2>
          <p className="text-sm">
            Passionate about web development and always eager to learn new technologies. This portfolio showcases my skills, projects, and experiences. Let's connect and collaborate!
          </p>
        </div>




        {/* Quick Links */}
        <div>
  <h3 className="font-semibold mb-3">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    {[
      { path: "/", label: "Home" },
      { path: "/skills", label: "Skills" },
      { path: "/experience", label: "Experience" },
      { path: "/projects", label: "Projects" },
      { path: "/education", label: "Education" },
      { path: "/contact", label: "Contact" },
    ].map(({ path, label }, i) => (
      <li key={i}>
        <Link
          to={path}
          className="relative inline-block px-2 py-1 text-gray-300 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-white group"
        >
          <span className="relative z-10">{label}</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left duration-500 ease-in-out"></span>
        </Link>
      </li>
    ))}
  </ul>
</div>




        {/* Social */}
<div>
  <h3 className="font-semibold mb-3">Follow Us</h3>
  <ul className="flex space-x-6 text-[28px]">
    {[
      {
        href: "https://www.facebook.com/Nazmus.Sharia143/",
        icon: <FaFacebookF />,
        color: "#1877F2",
        shadow: "shadow-blue-500",
      },
      {
        href: "https://www.linkedin.com/in/nazmus-sakib-303345241/",
        icon: <FaLinkedinIn />,
        color: "#0077B5",
        shadow: "shadow-cyan-500",
      },
      {
        href: "https://github.com/NazmusSakib2036",
        icon: <FaGithub />,
        color: "#FFFFFF",
        shadow: "shadow-gray-400",
      },
      {
        href: "https://www.instagram.com/nazmussakib2036/",
        icon: <FaInstagram />,
        color: "#E1306C",
        shadow: "shadow-pink-500",
      },
      {
        href: "https://x.com/Nazmussakib1432",
        icon: <FaXTwitter />,
        color: "#FFFFFF",
        shadow: "shadow-neutral-400",
      },
    ].map(({ href, icon, color, shadow }, i) => (
      <li key={i}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group transition duration-500 ease-in-out transform hover:scale-125`}
        >
          <div
            className={`text-[15px] text-white rounded-full p-2 bg-gray-800 
            group-hover:shadow-lg group-hover:${shadow}
            group-hover:-translate-y-1 group-hover:rotate-[8deg] transition-all duration-300`}
            style={{ color: color }}
          >
            {icon}
          </div>
        </a>
      </li>
    ))}
  </ul>
</div>




        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Nazmus Sakib. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
