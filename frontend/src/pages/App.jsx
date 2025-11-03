import logo from "../assets/logo.png";
import React, { useState } from "react";
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X } from "lucide-react"; // for hamburger icons

const NavLink = ({ to, label }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}
    </Link>
  );
};


export default function App() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* 🔹 Header / Navbar */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* 🔹 Logo */}
          <Link to="/" className="flex items-center font-bold text-xl">
            <img
              src={logo}
              alt="Codecraft Labs Logo"
              className="h-8 w-auto mr-2"
            />
          </Link>

          {/* 🔹 Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/team", label: "Team" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          {/* 🔹 Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 🔹 Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col items-center py-4 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/team", label: "Team" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* 🔹 Main content */}
      <main className="container py-10">
        <Outlet />
      </main>

      {/* 🔹 Footer with Social Media Links */}
<footer className="bg-[#020B3A] text-white py-10 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
    {/* 🔹 Column 1 (Bigger) */}
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-blue-400">Codecraft</span> Labs
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-4 text-justify">
        Building powerful digital experiences through modern web development,
        design, and automation. Empowering businesses to grow with technology.
      </p>

      <div className="flex space-x-4 mt-3">
        <a
          href="https://www.facebook.com/teamcodecraft"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 w-10 h-10 flex items-center justify-center rounded-lg transition"
        >
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/teamcodecraft/"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 hover:bg-pink-600 w-10 h-10 flex items-center justify-center rounded-lg transition"
        >
          <i className="fab fa-instagram text-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/teamcodecraft"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-800 hover:bg-blue-900 w-10 h-10 flex items-center justify-center rounded-lg transition"
        >
          <i className="fab fa-linkedin-in text-lg"></i>
        </a>
      </div>
    </div>

    {/* 🔹 Column 2 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Explore</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/about" className="hover:text-white">About</a></li>
        <li><a href="/services" className="hover:text-white">Services</a></li>
        <li><a href="/contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* 🔹 Column 3 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Resources</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
        <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
        <li><a href="/refund" className="hover:text-white">Refund Policy</a></li>
        <li><a href="/career" className="hover:text-white">Career</a></li>
      </ul>
    </div>

    {/* 🔹 Column 4 */}
    <div className="md:col-span-2">
  <h3 className="text-lg font-semibold mb-4">Address</h3>

  {/* 🏢 Head Office */}
  <div className="mb-5">
   <h4 className="text-sm font-medium text-gray-300 mb-2">Head Office</h4>
    <ul className="text-gray-300 text-sm space-y-2">
      <li className="whitespace-nowrap">📍 Bluewater 5th Floor, Zindabazar, Sylhet, Bangladesh</li>
      <li>📞 +880 1715-021121</li>
      <li>📞 +880 1629-317890</li>
      <li>✉️ team.codecraftlabs@gmail.com</li>
    </ul>
  </div>

  {/* 🇬🇧 UK Office */}
  <div>
    <h4 className="text-sm font-medium text-gray-300 mb-2">UK Office</h4>
    <ul className="text-gray-300 text-sm space-y-2">
      <li className="whitespace-nowrap">📍 336 Essex Road, Islington, London N1 3PB</li>
      <li>📞 +44 7424 798912</li>
      <li>✉️ codecraftlabs.uk@gmail.com</li>
    </ul>
  </div>
</div>

  </div>

  <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} The Website developed by{" "}
    <span className="text-blue-400 font-semibold">Codecraft Labs</span>.
  </div>
</footer>

    </div>
  )
}
