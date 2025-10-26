import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const NavLink = ({to, label}) => {
  const { pathname } = useLocation()
  const active = pathname === to
  return (
    <Link className={`px-3 py-2 rounded-xl ${active ? 'bg-primary text-white' : 'hover:bg-gray-100'}`} to={to}>{label}</Link>
  )
}

export default function App() {
  return (
    <div>
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">Codecraft <span className="text-primary">Labs</span></Link>
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
      <main className="container py-10">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container py-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {new Date().getFullYear()} Codecraft Labs. All rights reserved.</p>
          <div className="space-x-4">
            <a className="link" href="#">Facebook</a>
            <a className="link" href="#">Instagram</a>
            <a className="link" href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
