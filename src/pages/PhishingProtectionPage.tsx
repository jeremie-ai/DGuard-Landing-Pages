import { motion } from 'framer-motion'
import { Eye, Phone, Mail, Check, Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function PhishingProtectionPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
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
                Phishing Protection
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Advanced scanning of emails, SMS, and URLs to detect malicious content and phishing attempts before they can harm you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 font-semibold"
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
                    src="/smartphone-dguard-phishing-fraud1.jpg" 
                    alt="DGuard mobile app showing phishing protection with suspicious messages and URL detection"
                    className="w-80 h-auto mx-auto rounded-2xl"
                  />
                </div>
              </div>
              <div className="lg:hidden">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Eye className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-foreground">Phishing Protection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-emerald-600">Protected</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-red-800">Suspicious SMS</p>
                            <p className="text-sm text-red-600">+34 611 23 45 67</p>
                          </div>
                          <Phone className="h-5 w-5 text-red-600" />
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-orange-800">Suspicious Email</p>
                            <p className="text-sm text-orange-600">Netflix security@netfix-billing.com</p>
                          </div>
                          <Mail className="h-5 w-5 text-orange-600" />
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-800">URL Detection</p>
                            <p className="text-sm text-blue-600">Check link safety</p>
                          </div>
                          <Link className="h-5 w-5 text-blue-600" />
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
              Advanced Phishing Detection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our sophisticated phishing protection system scans all your communications and URLs to identify and block malicious threats in real-time.
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
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Email Scanning</h3>
              <p className="text-muted-foreground mb-4">
                Advanced email analysis to detect phishing attempts, malicious links, and suspicious attachments.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Real-time scanning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Link analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Attachment scanning</span>
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
                <Phone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">SMS Protection</h3>
              <p className="text-muted-foreground mb-4">
                Monitor SMS messages for suspicious content, phishing links, and fraudulent communications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>SMS content analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Spam detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Caller ID verification</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Link className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">URL Detection</h3>
              <p className="text-muted-foreground mb-4">
                Instant analysis of URLs to identify malicious websites, phishing pages, and security threats.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Real-time URL checking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Malware detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Phishing site blocking</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-900">
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
                Stay Protected from Phishing
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Join millions of users who trust DGuard to protect them from sophisticated phishing attacks and malicious communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-white text-purple-900 hover:bg-gray-100 font-semibold"
                  onClick={() => navigate('/auth')}
                >
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
                src="/smartphone-dguard-phishing-fraud2.jpg"
                alt="DGuard mobile app showing phishing protection features"
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
