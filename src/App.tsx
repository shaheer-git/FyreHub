import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { WhatWeDo } from './pages/WhatWeDo'
import { OurWork } from './pages/OurWork'
import { ContactUs } from './pages/ContactUs'
import { Pricing } from './pages/Pricing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<WhatWeDo />} />
        <Route path='/portfolio' element={<OurWork />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
