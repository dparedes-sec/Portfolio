import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="font-mono text-sm px-3 py-1.5 rounded border border-line text-muted hover:text-cyan hover:border-cyan transition-colors duration-300 cursor-pointer"
      aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
