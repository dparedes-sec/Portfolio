import { motion } from 'framer-motion'
import { Mail, Link, CodeSquare, MapPin, Download } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import { site } from '../content/site'

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact
  const s = site[lang]

  const channels = [
    {
      icon: Mail,
      label: t.email,
      value: s.email,
      href: `mailto:${s.email}`,
    },
    {
      icon: Link,
      label: t.linkedin,
      value: 'Daniel Paredes',
      href: s.linkedin,
      external: true,
    },
    {
      icon: CodeSquare,
      label: t.github,
      value: 'dparedes-sec',
      href: s.github,
      external: true,
    },
    {
      icon: MapPin,
      label: t.location,
      value: t.locationValue,
      href: null,
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
            {t.sectionTitle}
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border-glow rounded-xl bg-panel p-5"
            >
              {channel.href ? (
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <channel.icon className="w-5 h-5 text-muted group-hover:text-cyan transition-colors mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-muted uppercase tracking-wider">
                      {channel.label}
                    </p>
                    <p className="text-ink text-sm group-hover:text-cyan transition-colors">
                      {channel.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <channel.icon className="w-5 h-5 text-muted mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-muted uppercase tracking-wider">
                      {channel.label}
                    </p>
                    <p className="text-ink text-sm">{channel.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet text-bg font-medium rounded-lg hover:bg-violet/90 transition-colors duration-300"
          >
            <Download className="w-4 h-4" />
            {t.downloadCV}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
