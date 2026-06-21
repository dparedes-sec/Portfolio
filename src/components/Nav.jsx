import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import LanguageToggle from './LanguageToggle'

export default function Nav() {
  const { lang } = useLanguage()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: t.projects, href: '#projects' },
    { label: t.skills, href: '#skills' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Shield className="w-5 h-5 text-cyan group-hover:text-violet transition-colors" />
            <span className="font-heading font-semibold text-ink text-sm tracking-wide">
              dparedes
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-muted hover:text-cyan transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <LanguageToggle />
            <div className="flex items-center gap-1.5 ml-2">
              <span className="w-2 h-2 rounded-full bg-low animate-pulse" />
              <span className="font-mono text-xs text-low">Available</span>
            </div>
          </div>

          <div className="sm:hidden flex items-center gap-3">
            <LanguageToggle />
            <button className="text-muted" aria-label="Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
