import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

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
            <div className="calendly-inline-widget" data-url="https://calendly.com/jeremie-sapira/dguard?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3c19be" style={{ minWidth: '320px', height: '700px' }}></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
