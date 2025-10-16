import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function TypeformPage() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
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
            {/* Typeform embed container */}
            <div className="w-full" style={{ minHeight: '700px' }}>
              <div data-tf-live="01K7PGQ7H3RV6258BDKNXFK6MM"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
