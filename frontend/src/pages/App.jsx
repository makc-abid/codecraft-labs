import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, label }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  return (
    <Link
      className={`px-3 py-2 rounded-xl ${
        active ? 'bg-primary text-white' : 'hover:bg-gray-100'
      }`}
      to={to}
    >
      {label}
    </Link>
  )
}

export default function App() {
  return (
    <div>
      {/* 🔹 Header / Navbar */}
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            Codecraft <span className="text-primary">Labs</span>
          </Link>
          <nav className="space-x-2">
            <NavLink to="/" label="Home" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/portfolio" label="Portfolio" />
            <NavLink to="/team" label="Team" />
            <NavLink to="/about" label="About" />
            <NavLink to="/contact" label="Contact" />
          </nav>
        </div>
      </header>

      {/* 🔹 Main content */}
      <main className="container py-10">
        <Outlet />
      </main>

      {/* 🔹 Footer with Social Media Links */}
      <footer className="border-t py-6 text-center text-gray-600">
        <div className="flex justify-center space-x-6 mb-3">
          <a
            href="https://www.instagram.com/teamcodecraft/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/teamcodecraft"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/teamcodecraft"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-800"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Codecraft Labs. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
