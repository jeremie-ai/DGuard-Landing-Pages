import { motion } from 'framer-motion'
import { Code, Check, Layers, Zap, Settings, Shield, Puzzle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export default function SDKPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Security SDK for Developers | Integrate Protection APIs | DGuard</title>
        <meta name="title" content="Security SDK for Developers | Integrate Protection APIs | DGuard" />
        <meta name="description" content="Integrate enterprise-grade security features into your app with DGuard SDK. Modular APIs for payment protection, identity theft prevention, and phishing detection. Easy integration in minutes." />
        <meta name="keywords" content="security SDK, developer API, payment protection API, identity protection SDK, phishing detection API, security integration, headless security API" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dguard.ai/business-solutions/sdk" />
        <meta property="og:title" content="Security SDK for Developers | Integrate Protection APIs | DGuard" />
        <meta property="og:description" content="Integrate enterprise-grade security features into your app with DGuard SDK. Modular APIs with easy integration in minutes." />
        <meta property="og:image" content="https://res.cloudinary.com/dfnxhd9vv/image/upload/v1760688800/dguard-favicon_jkvpzs_c_crop_w_280_vsg8gk.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dguard.ai/business-solutions/sdk" />
        <meta property="twitter:title" content="Security SDK for Developers | Integrate Protection APIs | DGuard" />
        <meta property="twitter:description" content="Integrate enterprise-grade security features into your app with DGuard SDK. Modular APIs with easy integration in minutes." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dfnxhd9vv/image/upload/v1760688800/dguard-favicon_jkvpzs_c_crop_w_280_vsg8gk.png" />
        
        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://dguard.ai/business-solutions/sdk" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="DGuard" />
        <meta name="theme-color" content="#0f172a" />
      </Helmet>

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
                DGuard SDK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Integrate powerful security features directly into your existing application. 
                Maintain complete control over your frontend and user experience while leveraging our robust security infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 font-semibold"
                  onClick={() => navigate('/auth/typeform')}
                >
                  Get API Keys
                </Button>

              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Easy Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Full Control</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Modular Features</span>
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
                <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`import { DGuard } from '@dguard/sdk';

// Initialize SDK
const dguard = new DGuard({
  apiKey: 'your-api-key',
  features: {
    paymentProtection: true,
    identityProtection: true,
    phishingProtection: true
  }
});

// Monitor payments
dguard.payments.monitor({
  userId: 'user_123',
  onAlert: (alert) => {
    console.log('Fraud detected:', alert);
  }
});`}
                  </pre>
                </div>
              </div>
              <div className="lg:hidden">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
                  <div className="bg-white rounded-xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Code className="h-6 w-6 text-primary" />
                        <span className="font-semibold text-foreground">SDK Integration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-emerald-600">Ready</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-emerald-800">Easy Setup</p>
                            <p className="text-sm text-emerald-600">5 minutes to integrate</p>
                          </div>
                          <Zap className="h-5 w-5 text-emerald-600" />
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-800">Full Documentation</p>
                            <p className="text-sm text-blue-600">Comprehensive guides</p>
                          </div>
                          <Code className="h-5 w-5 text-blue-600" />
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
              Powerful SDK Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate enterprise-grade security features into your app with just a few lines of code. 
              Every module is independently controllable and can be monetized separately.
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
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Simple Integration</h3>
              <p className="text-muted-foreground mb-4">
                Get up and running in minutes with our well-documented SDK. Support for React, Vue, Angular, and vanilla JavaScript.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Quick setup (5 min)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>Framework agnostic</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>TypeScript support</span>
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
                <Layers className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Modular Architecture</h3>
              <p className="text-muted-foreground mb-4">
                Import only the features you need. Keep your bundle size small and your app performant.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Tree-shakeable imports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Lazy loading support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Minimal footprint</span>
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
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Full Customization</h3>
              <p className="text-muted-foreground mb-4">
                Complete control over the user experience. Use our UI components or build your own on top of our APIs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Headless APIs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Optional UI components</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-purple-500" />
                  <span>Custom styling</span>
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
              <h3 className="text-xl font-bold text-foreground mb-4">Real-time Updates</h3>
              <p className="text-muted-foreground mb-4">
                Get instant notifications for security events with WebSocket support and webhooks.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>WebSocket events</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Webhook integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Push notifications</span>
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
                <Puzzle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Flexible Monetization</h3>
              <p className="text-muted-foreground mb-4">
                Control which features are behind paywalls. Integrate with your existing payment system seamlessly.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-500" />
                  <span>Feature gating</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-500" />
                  <span>Usage-based billing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-cyan-500" />
                  <span>Custom pricing tiers</span>
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
              <h3 className="text-xl font-bold text-foreground mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground mb-4">
                Bank-level encryption and security standards. SOC 2 Type II compliant infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-pink-500" />
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-pink-500" />
                  <span>SOC 2 compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-pink-500" />
                  <span>GDPR ready</span>
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
              Why Choose SDK Integration?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maintain complete control over your user experience while leveraging enterprise-grade security infrastructure.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Seamless User Experience</h3>
                  <p className="text-muted-foreground">
                    Keep users within your app's familiar interface. No jarring transitions or external authentication flows. 
                    Maintain brand consistency throughout the security experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Frontend Control</h3>
                  <p className="text-muted-foreground">
                    Design and implement your own UI/UX. Use our headless APIs to build security features that 
                    perfectly match your app's design language and user flows.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Pay For What You Use</h3>
                  <p className="text-muted-foreground">
                    Only integrate the features your users need. Scale your costs with usage. 
                    No unnecessary overhead from features you don't need.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Rapid Development</h3>
                  <p className="text-muted-foreground">
                    Skip months of security infrastructure development. Focus on your core product while 
                    we handle the complex security logic and threat detection.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Always Up to Date</h3>
                  <p className="text-muted-foreground">
                    Automatic updates to security algorithms and threat detection. Stay protected against 
                    the latest attack vectors without manual updates or deployments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Developer-First Support</h3>
                  <p className="text-muted-foreground">
                    Comprehensive documentation, code examples, and dedicated developer support. 
                    Get help when you need it from engineers who understand your challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
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
              Get Started in Minutes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, intuitive API design means you can add powerful security features with just a few lines of code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm">app.js</span>
            </div>
            <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`// 1. Install the SDK
npm install @dguard/sdk

// 2. Initialize with your API key
import { DGuard } from '@dguard/sdk';

const dguard = new DGuard({
  apiKey: process.env.DGUARD_API_KEY,
  features: {
    paymentProtection: true,
    identityProtection: true,
    phishingProtection: true
  }
});

// 3. Start monitoring
dguard.payments.monitor({
  userId: currentUser.id,
  onAlert: (alert) => {
    // Handle fraud alert
    showNotification(alert);
  }
});

// 4. Check for identity breaches
const breaches = await dguard.identity.checkBreaches({
  email: currentUser.email
});

// 5. Scan URLs before opening
const urlSafe = await dguard.phishing.checkUrl(
  'https://suspicious-site.com'
);`}
            </pre>
          </motion.div>
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
              Start Building with DGuard SDK
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust our SDK to power security features in their applications. 
              Get your API keys and start building today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-purple-900 hover:bg-gray-100 font-semibold" onClick={() => navigate('/auth/typeform')}>
                Reach out to get started
              </Button>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

