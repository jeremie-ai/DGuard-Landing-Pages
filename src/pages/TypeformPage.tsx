import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export default function TypeformPage() {
  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Schedule a Demo | Talk to DGuard Team | DGuard</title>
        <meta name="title" content="Schedule a Demo | Talk to DGuard Team | DGuard" />
        <meta name="description" content="Schedule a personalized demo with the DGuard team. Learn how our security solutions can protect your business and users. Book a consultation today." />
        <meta name="keywords" content="DGuard demo, schedule consultation, security demo, business solutions demo, talk to sales, book meeting" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dguard.com/auth/typeform" />
        <meta property="og:title" content="Schedule a Demo | Talk to DGuard Team | DGuard" />
        <meta property="og:description" content="Schedule a personalized demo with the DGuard team. Learn how our security solutions can protect your business and users." />
        <meta property="og:image" content="https://res.cloudinary.com/dfnxhd9vv/image/upload/v1760688800/dguard-favicon_jkvpzs_c_crop_w_280_vsg8gk.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dguard.com/auth/typeform" />
        <meta property="twitter:title" content="Schedule a Demo | Talk to DGuard Team | DGuard" />
        <meta property="twitter:description" content="Schedule a personalized demo with the DGuard team. Learn how our security solutions can protect your business and users." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dfnxhd9vv/image/upload/v1760688800/dguard-favicon_jkvpzs_c_crop_w_280_vsg8gk.png" />
        
        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://dguard.com/auth/typeform" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="DGuard" />
        <meta name="theme-color" content="#0f172a" />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            {/* Calendly inline widget */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/jeremie-sapira/dguard?hide_gdpr_banner=1&primary_color=3c19be" style={{ minWidth: '320px', height: '700px' }}></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
