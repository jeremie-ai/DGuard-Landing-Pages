import { motion } from 'framer-motion'
import { Smartphone, Check, Settings, DollarSign, Zap, Globe, Shield, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function WhiteLabelPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-16 px-4 min-h-[600px] lg:min-h-[700px]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mt-12 md:mt-0 mb-6 leading-tight">
                White Label Solution
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Launch your own branded security app on the App Store and Google Play Store. 
                A fully customizable white label solution with modular features and flexible monetization options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 font-semibold"
                  onClick={() => navigate('/auth?mode=signup')}
                >
                  Schedule a Demo
                </Button>

              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>AppStore Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Google Play Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Fully Customizable</span>
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
                <div className="relative flex items-center justify-center h-[600px]">
                  <img 
                    src="/smartphone-dguard-dashboard.jpg" 
                    alt="DGuard white label mobile app on AppStore and Google Play"
                    className="w-80 h-auto max-h-[600px] mx-auto rounded-2xl"
                  />
                </div>
              </div>
              <div className="lg:hidden">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-foreground">Your Brand App</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-emerald-600">Live</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-emerald-800">App Store</p>
                            <p className="text-sm text-emerald-600">Available now</p>
                          </div>
                          <Star className="h-5 w-5 text-emerald-600" />
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-800">Google Play</p>
                            <p className="text-sm text-blue-600">Available now</p>
                          </div>
                          <Star className="h-5 w-5 text-blue-600" />
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
              Complete White Label Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploy your own branded security application with full control over features and monetization. 
              Every feature is modular and can be enabled, disabled, or placed behind a paywall.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">App Store Ready</h3>
              <p className="text-muted-foreground mb-4">
                Fully compliant applications ready to publish on both iOS App Store and Google Play Store under your brand.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>iOS & Android apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Store guidelines compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Fast deployment</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Modular Features</h3>
              <p className="text-muted-foreground mb-4">
                Toggle any feature on or off to match your business needs. Each module can be independently controlled.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Payment monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Identity protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Phishing protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>VPN & password manager</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Flexible Monetization</h3>
              <p className="text-muted-foreground mb-4">
                Set your own pricing strategy. Put features behind paywalls or offer them free - your choice entirely.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Custom pricing tiers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Feature-based paywalls</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Subscription management</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Launch</h3>
              <p className="text-muted-foreground mb-4">
                Get your branded app to market in weeks, not months. We handle the technical complexity.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Rapid deployment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Full technical support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Regular updates</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Complete Branding</h3>
              <p className="text-muted-foreground mb-4">
                Your logo, your colors, your brand identity throughout the entire application experience.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-500" />
                  <span>Custom branding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-500" />
                  <span>White-labeled UI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-500" />
                  <span>Brand consistency</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Enterprise Grade</h3>
              <p className="text-muted-foreground mb-4">
                Bank-level security and infrastructure that scales with your business needs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-pink-500" />
                  <span>99.9% uptime SLA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-pink-500" />
                  <span>Scalable infrastructure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-pink-500" />
                  <span>24/7 monitoring</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose White Label?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Launch your security app faster and more cost-effectively than building from scratch.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Faster Time to Market</h3>
                  <p className="text-muted-foreground">
                    Launch your security app in weeks instead of months. Skip the lengthy development cycle 
                    and focus on your business growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Lower Development Costs</h3>
                  <p className="text-muted-foreground">
                    Avoid the high costs of building security infrastructure from scratch. Get enterprise-grade 
                    technology at a fraction of the cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Revenue Control</h3>
                  <p className="text-muted-foreground">
                    Set your own pricing and keep more of the revenue. Choose which features to monetize 
                    and how to structure your subscription tiers.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Brand Ownership</h3>
                  <p className="text-muted-foreground">
                    Build your brand equity with a fully white-labeled solution. Your customers see only 
                    your brand throughout their entire experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Continuous Innovation</h3>
                  <p className="text-muted-foreground">
                    Benefit from ongoing platform improvements and new features automatically. Stay ahead 
                    of security threats without additional development effort.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Support</h3>
                  <p className="text-muted-foreground">
                    Get dedicated technical support, regular updates, and assistance with app store submissions. 
                    We're invested in your success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-700 to-purple-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Branded Security App?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading companies who trust our white label solution to power their security offerings. 
              Get started today and be in the app stores within weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-purple-900 hover:bg-gray-100 font-semibold">
                Schedule a Demo
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

