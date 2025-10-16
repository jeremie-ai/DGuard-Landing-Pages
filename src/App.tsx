import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import PaymentProtectionPage from './pages/PaymentProtectionPage'
import IdentityProtectionPage from './pages/IdentityProtectionPage'
import PhishingProtectionPage from './pages/PhishingProtectionPage'
import WhiteLabelPage from './pages/WhiteLabelPage'
import SDKPage from './pages/SDKPage'
import AuthPage from './pages/AuthPage'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment-protection" element={<PaymentProtectionPage />} />
        <Route path="/identity-protection" element={<IdentityProtectionPage />} />
        <Route path="/phishing-protection" element={<PhishingProtectionPage />} />
        <Route path="/business-solutions/white-label" element={<WhiteLabelPage />} />
        <Route path="/business-solutions/sdk" element={<SDKPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  )
}

export default App