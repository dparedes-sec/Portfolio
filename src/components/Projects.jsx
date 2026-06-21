import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang].projects

  return (
    <section id="projects" className="section-padding">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
