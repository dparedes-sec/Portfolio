import { motion } from 'framer-motion'
import { ExternalLink, CodeSquare, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import HelixSignature from './HelixSignature'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-cyan tracking-wider mb-4">
              {t.eyebrow}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {t.title}{' '}
              <span className="text-gradient">{t.titleHighlight}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed max-w-xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-bg font-medium rounded-lg hover:bg-cyan/90 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              {t.ctaProjects}
            </a>
            <a
              href="https://github.com/dparedes-sec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-line text-ink rounded-lg hover:border-cyan hover:text-cyan transition-colors duration-300"
            >
              <CodeSquare className="w-4 h-4" />
              {t.ctaGithub}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-line text-ink rounded-lg hover:border-violet hover:text-violet transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              {t.ctaContact}
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block h-[500px]">
          <HelixSignature />
        </div>
      </div>
    </section>
  )
}
