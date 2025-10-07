import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  showBackArrow?: boolean
}

export const Header: React.FC<HeaderProps> = ({ showBackArrow = false }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToFirstH2 = () => {
    const firstH2 = document.querySelector('h2')
    if (firstH2) {
      firstH2.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg backdrop-blur-md' : ''
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl font-bold text-foreground">DGuard</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/payment-protection')}
              className={`${
                location.pathname === '/payment-protection' 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Payment Protection
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/identity-protection')}
              className={`${
                location.pathname === '/identity-protection' 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Identity Protection
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/phishing-protection')}
              className={`${
                location.pathname === '/phishing-protection' 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Phishing Protection
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/auth?mode=signin')}
              className="text-sm px-4 py-2"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate('/auth?mode=signup')}
              className="text-sm px-4 py-2"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

              </div>
    </motion.header>

    {/* Mobile Navigation Overlay - Outside header for proper fixed positioning */}
    {isMobileMenuOpen && (
      <>
        {/* Backdrop overlay */}
        <div 
          className="fixed top-16 left-0 right-0 bottom-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Mobile menu */}
                              <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-border bg-white/95 backdrop-blur-md fixed top-16 left-0 right-0 z-50 w-full"
                      >
                        <motion.div 
                          className="py-4 space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.2 }}
                        >
                          <Button
                            variant="ghost"
                            onClick={() => {
                              navigate('/payment-protection')
                              setIsMobileMenuOpen(false)
                            }}
                            className={`w-full justify-start ${
                              location.pathname === '/payment-protection' 
                                ? 'text-primary font-semibold' 
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            Payment Protection
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => {
                              navigate('/identity-protection')
                              setIsMobileMenuOpen(false)
                            }}
                            className={`w-full justify-start ${
                              location.pathname === '/identity-protection' 
                                ? 'text-primary font-semibold' 
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            Identity Protection
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => {
                              navigate('/phishing-protection')
                              setIsMobileMenuOpen(false)
                            }}
                            className={`w-full justify-start ${
                              location.pathname === '/phishing-protection' 
                                ? 'text-primary font-semibold' 
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            Phishing Protection
                          </Button>
                          <motion.div 
                            className="pt-4 border-t border-border space-y-2 px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.2 }}
                          >
                            <Button
                              variant="outline"
                              onClick={() => {
                                navigate('/auth?mode=signin')
                                setIsMobileMenuOpen(false)
                              }}
                              className="w-full text-lg px-8 py-3"
                            >
                              Sign In
                            </Button>
                            <Button
                              onClick={() => {
                                navigate('/auth?mode=signup')
                                setIsMobileMenuOpen(false)
                              }}
                              className="w-full text-lg px-8 py-3"
                            >
                              Get Started
                            </Button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
              </>
      )}
    </>
  )
}
