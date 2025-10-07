import { motion } from 'framer-motion'
import { ArrowLeft, Shield, User, Lock, Eye, Check, Key, Database, AlertTriangle, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function IdentityProtectionPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-12 md:mt-0 mb-6 leading-tight">
                Identity Theft Protection
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive protection against identity theft with VPN, password management, and dark web monitoring to keep your personal information secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => navigate('/auth?mode=signup')}
                >
                  Start now for FREE
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => {
                    const featuresSection = document.querySelector('h2');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="hidden lg:block">
                <div className="relative">
                  <img 
                    src="/smartphone-dguard-identity-fraud2.jpg" 
                    alt="DGuard mobile app showing Identity Protection with VPN, Password Manager, and data breaches"
                    className="w-80 h-auto mx-auto rounded-2xl"
                  />
                </div>
              </div>
              <div className="lg:hidden">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <User className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-foreground">Identity Protection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-emerald-600">Protected</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-emerald-800">VPN Active</p>
                            <p className="text-sm text-emerald-600">Madrid - Protected</p>
                          </div>
                          <MapPin className="h-5 w-5 text-emerald-600" />
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-800">Password Manager</p>
                            <p className="text-sm text-blue-600">20 accounts secured</p>
                          </div>
                          <Key className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-red-800">Data Breaches</p>
                            <p className="text-sm text-red-600">3 breaches detected</p>
                          </div>
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Complete Identity Protection Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your digital identity with our comprehensive suite of security tools designed to prevent identity theft and secure your personal information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Secure VPN</h3>
              <p className="text-muted-foreground mb-4">
                Protect your online privacy with military-grade encryption and global server network.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Global server network</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Military-grade encryption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>No-logs policy</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Key className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Password Manager</h3>
              <p className="text-muted-foreground mb-4">
                Generate, store, and manage strong passwords across all your accounts securely.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Strong password generation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Secure password storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Auto-fill functionality</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Dark Web Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Continuous monitoring of the dark web for your personal information and data breaches.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>24/7 dark web scanning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Data breach alerts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Recovery assistance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 via-red-700 to-red-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Protect Your Identity Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Join millions of users who trust DGuard to protect their digital identity and personal information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-4 bg-white text-red-900 hover:bg-gray-100 font-semibold">
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="/smartphone-dguard-identity-fraud3.jpg"
                alt="DGuard mobile app showing identity protection features"
                className="w-80 h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
