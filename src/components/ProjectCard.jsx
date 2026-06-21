import { motion } from 'framer-motion'
import { ExternalLink, AlertTriangle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const severityColors = {
  high: 'bg-high/10 text-high border-high/30',
  med: 'bg-med/10 text-med border-med/30',
  low: 'bg-low/10 text-low border-low/30',
}

const severityLabels = {
  high: 'HIGH',
  med: 'MEDIUM',
  low: 'LOW',
}

export default function ProjectCard({ project, index }) {
  const { lang } = useLanguage()

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border-glow rounded-xl bg-panel p-6 space-y-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-xs text-muted tracking-wider uppercase">
              {project.category[lang]}
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-ink">
            {project.title[lang]}
          </h3>
        </div>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-mono ${severityColors[project.severity]}`}>
          <AlertTriangle className="w-3 h-3" />
          {severityLabels[project.severity]}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2.5 py-1 rounded bg-bg text-muted border border-line"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-2">
        {project.bullets[lang].map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted">
            <span className="text-cyan mt-1.5 shrink-0">▸</span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="pt-2">
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-cyan hover:text-violet transition-colors duration-300"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {lang === 'en' ? 'View Repository' : 'Ver Repositorio'}
          </a>
        ) : (
          <span className="font-mono text-xs text-muted/50 italic">
            {project.repoNote[lang]}
          </span>
        )}
      </div>
    </motion.article>
  )
}
