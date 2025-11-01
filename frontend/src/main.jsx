import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Team from './pages/Team.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Refund from "./pages/Refund.jsx";
import Career from "./pages/Career.jsx"; 
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='team' element={<Team />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='terms' element={<Terms />} />
          <Route path='refund' element={<Refund />} />
          <Route path='career' element={<Career />} /> 
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
