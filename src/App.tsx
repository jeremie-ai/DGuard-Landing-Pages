import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import PaymentProtectionPage from './pages/PaymentProtectionPage'
import IdentityProtectionPage from './pages/IdentityProtectionPage'
import PhishingProtectionPage from './pages/PhishingProtectionPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment-protection" element={<PaymentProtectionPage />} />
        <Route path="/identity-protection" element={<IdentityProtectionPage />} />
        <Route path="/phishing-protection" element={<PhishingProtectionPage />} />
      </Routes>
    </Router>
  )
}

export default App