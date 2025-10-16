import React from 'react'
import { Heart, Award, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const Footer: React.FC = () => {
  const navigate = useNavigate()
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-xl font-bold text-foreground">DGuard</span>
            </div>
            <p className="text-muted-foreground">
              Your digital bodyguard. Comprehensive protection for your digital life.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Award className="h-4 w-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
          
                      <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => navigate('/payment-protection')}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Payment Monitoring
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/identity-protection')}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Identity Protection
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/identity-protection')}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    VPN & Password Manager
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/phishing-protection')}
                    className="hover:text-foreground transition-colors cursor-pointer"
                  >
                    Phishing Protection
                  </button>
                </li>
              </ul>
            </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 DGuard. All rights reserved. Protecting your digital life.</p>
        </div>
      </div>
    </footer>
  )
}
