import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Shield, 
  CreditCard, 
  User, 
  Wifi, 
  Lock, 
  Eye, 
  ChevronDown, 
  Star,
  ArrowRight,
  Check,
  Phone,
  Mail,
  Globe,
  Users,
  Zap,
  Award,
  Heart,
  AlertCircle,
  Home,
  Euro
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

interface FAQ {
  id: string
  question: string
  answer: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María García',
    role: 'Marketing Manager',
    company: 'TechCorp',
    content: 'DGuard has completely transformed how I think about online security. The payment monitoring caught a suspicious transaction before I even noticed it. I feel so much safer knowing I have this digital bodyguard watching over me.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    role: 'Software Engineer',
    company: 'StartupXYZ',
    content: 'As someone who works with sensitive data, I was constantly worried about identity theft. DGuard\'s data breach monitoring and VPN protection give me peace of mind. The password manager is a game-changer!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Small Business Owner',
    company: 'LocalShop',
    content: 'I was skeptical at first, but DGuard has proven its worth multiple times. The phishing protection saved me from clicking on a malicious link, and the family protection feature keeps my kids safe too.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: '4',
    name: 'David López',
    role: 'Financial Advisor',
    company: 'FinancePro',
    content: 'In my line of work, security is everything. DGuard\'s comprehensive protection suite has become an essential part of my daily routine. The real-time alerts and monitoring are invaluable.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: '5',
    name: 'Sofia Fernández',
    role: 'Remote Worker',
    company: 'DigitalNomad',
    content: 'Working remotely means I\'m always connected to different networks. DGuard\'s VPN and URL checker give me confidence that I\'m protected wherever I go. It\'s like having a security expert by my side.',
    rating: 5,
    avatar: '👩‍💻'
  }
]

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How does DGuard protect my payments?',
    answer: 'DGuard continuously monitors your bank accounts and credit cards for suspicious transactions. When it detects unusual activity, you receive instant alerts so you can take immediate action to prevent fraud.'
  },
  {
    id: '2',
    question: 'What happens if my data is found in a breach?',
    answer: 'DGuard scans the dark web 24/7 for your personal information. If your data is found in a breach, you\'ll receive detailed alerts with specific steps to secure your accounts and prevent identity theft.'
  },
  {
    id: '3',
    question: 'How does the VPN protection work?',
    answer: 'DGuard\'s VPN encrypts your internet connection and routes it through secure servers worldwide. This protects your online activities from hackers, prevents tracking, and keeps your data private even on public Wi-Fi.'
  },
  {
    id: '4',
    question: 'Can DGuard protect my family?',
    answer: 'Yes! DGuard Premium allows you to add up to 4 family members to your protection plan. Each member gets the same comprehensive security features, ensuring your entire family stays safe online.'
  },
  {
    id: '5',
    question: 'How does phishing protection work?',
    answer: 'DGuard scans your emails and SMS messages for malicious content and suspicious links. It also includes a URL checker that analyzes any link before you click it, preventing you from falling victim to phishing attacks.'
  },
  {
    id: '6',
    question: 'Is my data safe with DGuard?',
    answer: 'Absolutely. DGuard uses bank-level encryption and never stores your sensitive information. We scan for threats without accessing your personal data, ensuring your privacy is always protected.'
  }
]

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-12 md:mt-0 mb-6 md:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Your digital{' '}
                  <span className="text-primary">bodyguard</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Comprehensive protection for your digital life. Monitor payments, prevent identity theft, 
                  secure your connections, and stay safe from phishing attacks - all in one powerful app.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button size="lg" onClick={() => navigate('/auth')} className="text-lg px-8 py-3 font-semibold">
                  Start Protecting Yourself
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-6 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Bank-level security</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              {/* Desktop: Show actual smartphone image */}
              <div className="hidden lg:block">
                <div className="relative">
                  <img 
                    src="/smartphone-dguard-dashboard.jpg" 
                    alt="DGuard mobile app dashboard showing welcome screen, security insights, and navigation"
                    className="w-80 h-auto mx-auto rounded-2xl"
                  />
                </div>
              </div>

              {/* Mobile: Show original mockup */}
              <div className="lg:hidden">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-foreground">DGuard Protection</span>
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
                            <p className="font-medium text-emerald-800">Payment Monitoring</p>
                            <p className="text-sm text-emerald-600">No suspicious activity detected</p>
                          </div>
                          <Check className="h-5 w-5 text-emerald-600" />
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-800">Identity Protection</p>
                            <p className="text-sm text-blue-600">3 data breaches monitored</p>
                          </div>
                          <Shield className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-purple-800">Phishing Protection</p>
                            <p className="text-sm text-purple-600">4 threats blocked today</p>
                          </div>
                          <Eye className="h-5 w-5 text-purple-600" />
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Protection for Your Digital Life
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              DGuard provides comprehensive security across all aspects of your online presence, 
              from financial transactions to personal data protection.
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Feature 1: Payment Monitoring */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Payment Monitoring & Fraud Alert</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Real-time monitoring of your bank accounts and credit cards. Get instant alerts for suspicious 
                  transactions and potential fraud attempts, allowing you to take immediate action to protect your finances.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>Real-time transaction monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>Instant fraud alerts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>Secure payment verification</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => navigate('/payment-protection')}
                  className="mt-6"
                >
                  Learn More About Payment Protection
                </Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Recent Transactions</h4>
                    <span className="text-sm text-muted-foreground">Today</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Netflix Subscription</p>
                        <p className="text-sm text-muted-foreground">€12.99</p>
                      </div>
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Unknown Transaction</p>
                        <p className="text-sm text-muted-foreground">€299.99</p>
                      </div>
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Identity Protection */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1 flex justify-center">
                <img 
                  src="/smartphone-dguard-identity.jpg" 
                  alt="DGuard Identity Protection mobile app showing VPN, Password Manager, and data breaches"
                  className="w-80 h-auto rounded-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <User className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Identity Theft Protection</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Continuous dark web monitoring to detect if your personal information has been compromised in data breaches. 
                  Get detailed alerts with specific steps to secure your accounts and prevent identity theft.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>24/7 dark web monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>Data breach alerts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>VPN & password management</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => navigate('/identity-protection')}
                  className="mt-6"
                >
                  Learn More About Identity Protection
                </Button>
              </div>
            </motion.div>

            {/* Feature 3: Phishing Protection */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Phishing Protection</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Advanced scanning of emails, SMS, and URLs to detect malicious content and phishing attempts. 
                  Stay protected from sophisticated cyber attacks with real-time threat detection and blocking.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>Email & SMS scanning</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>URL threat detection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-slate-600" />
                    <span>Real-time threat blocking</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => navigate('/phishing-protection')}
                  className="mt-6"
                >
                  Learn More About Phishing Protection
                </Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">Threat Detection</h4>
                    <span className="text-sm text-primary font-medium">4 Blocked Today</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-red-800">Suspicious SMS</p>
                        <Phone className="h-4 w-4 text-red-600" />
                      </div>
                      <p className="text-sm text-red-700">+34 611 23 45 67</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-orange-800">Suspicious Email</p>
                        <Mail className="h-4 w-4 text-orange-600" />
                      </div>
                      <p className="text-sm text-orange-700">Netflix security@netfix-billing.com</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-yellow-800">Malicious URL</p>
                        <Globe className="h-4 w-4 text-yellow-600" />
                      </div>
                      <p className="text-sm text-yellow-700">http://paquete-entrega.es/track</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands of Users
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how DGuard has transformed the digital security experience for users worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about DGuard's comprehensive protection.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Protect Your Digital Life?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of users who trust DGuard to keep them safe online. 
              Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/auth')}
                className="text-lg px-8 py-3 font-semibold"
              >
                Start now for FREE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
