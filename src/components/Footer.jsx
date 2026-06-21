import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="border-t border-line py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          {t.copyright}
        </p>
        <p className="font-mono text-xs text-muted/50">
          {t.built}
        </p>
      </div>
    </footer>
  )
}
