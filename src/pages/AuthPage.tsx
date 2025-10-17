import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, ArrowRight, Shield, Bell } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Join DGuard Waiting List | Early Access to Digital Protection</title>
        <meta name="title" content="Join DGuard Waiting List | Early Access to Digital Protection" />
        <meta name="description" content="Be among the first to access DGuard's comprehensive digital protection. Join the waiting list for exclusive early access and special launch pricing." />
        <meta name="keywords" content="DGuard waiting list, early access, digital security signup, cybersecurity early bird, protection app launch" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dguard.com/auth" />
        <meta property="og:title" content="Join DGuard Waiting List | Early Access to Digital Protection" />
        <meta property="og:description" content="Be among the first to access DGuard's comprehensive digital protection. Join the waiting list for exclusive early access." />
        <meta property="og:image" content="https://res.cloudinary.com/dfnxhd9vv/image/upload/v1760688800/dguard-favicon_jkvpzs_c_crop_w_280_vsg8gk.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dguard.com/auth" />
        <meta property="twitter:title" content="Join DGuard Waiting List | Early Access to Digital Protection" />
        <meta property="twitter:description" content="Be among the first to access DGuard's comprehensive digital protection. Join the waiting list for exclusive early access." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dfnxhd9vv/image/upload/v1760688800/dguard-favicon_jkvpzs_c_crop_w_280_vsg8gk.png" />
        
        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://dguard.com/auth" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="DGuard" />
        <meta name="theme-color" content="#0f172a" />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-border"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                >
                  <Shield className="h-8 w-8 text-primary" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Join the Waiting List
                </h1>
                <p className="text-xl text-muted-foreground mb-2">
                  DGuard will be available in the next few weeks
                </p>
                <p className="text-lg text-muted-foreground">
                  Enter your email to get notified when we launch early access
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-xl 
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                        bg-background transition-all"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full text-lg py-6 font-semibold"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Join Waiting List
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-start space-x-4 text-sm text-muted-foreground">
                  <Bell className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>
                    You'll be among the first to know when DGuard launches. 
                    We'll send you exclusive early access and special launch pricing.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-border text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6"
              >
                <CheckCircle className="h-10 w-10 text-emerald-600" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                You're on the list!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We'll notify you at <span className="font-semibold text-foreground">{email}</span> when DGuard launches.
              </p>

              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                <ul className="space-y-2 text-left text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>You'll receive a confirmation email shortly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Get notified when early access opens (coming soon!)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Receive exclusive early bird pricing</span>
                  </li>
                </ul>
              </div>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="text-lg px-8 py-3"
              >
                Back to Home
              </Button>
            </motion.div>
          )}

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Questions? Contact us at{' '}
              <a href="mailto:hello@dguard.com" className="text-primary hover:underline font-semibold">
                hello@dguard.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

