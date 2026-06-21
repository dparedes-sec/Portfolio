import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import { skills } from '../content/skills'
import SkillCategory from './SkillCategory'

export default function Skills() {
  const { lang } = useLanguage()
  const t = translations[lang].skills

  return (
    <section id="skills" className="section-padding bg-panel/50">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillCategory
              key={skill.category.en}
              category={skill.category[lang]}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
