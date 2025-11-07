import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'
import CookiePolicy from './CookiePolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
    </Routes>
  )
}

export default App

