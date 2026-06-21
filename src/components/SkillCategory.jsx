import { motion } from 'framer-motion'

export default function SkillCategory({ category, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-glow rounded-xl bg-panel p-5 space-y-3"
    >
      <h3 className="font-heading text-sm font-semibold text-cyan uppercase tracking-wider">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="font-mono text-xs px-3 py-1.5 rounded bg-bg text-muted border border-line hover:border-cyan hover:text-ink transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
