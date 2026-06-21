import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function HelixSignature() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationId
    let time = 0

    const draw = () => {
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      ctx.clearRect(0, 0, w, h)

      const centerX = w / 2
      const amplitude = w * 0.25
      const verticalSpacing = 8
      const totalPoints = Math.floor(h / verticalSpacing)
      const phaseShift = 2.5

      for (let i = 0; i < totalPoints; i++) {
        const y = i * verticalSpacing
        const phase = i * 0.15 + (prefersReducedMotion ? 0 : time * 0.02)

        const x1 = centerX + Math.sin(phase) * amplitude
        const x2 = centerX + Math.sin(phase + phaseShift) * amplitude

        const depth1 = (Math.sin(phase) + 1) / 2
        const depth2 = (Math.sin(phase + phaseShift) + 1) / 2

        if (i > 0) {
          const prevY = (i - 1) * verticalSpacing
          const prevPhase = (i - 1) * 0.15 + (prefersReducedMotion ? 0 : time * 0.02)
          const prevX1 = centerX + Math.sin(prevPhase) * amplitude
          const prevX2 = centerX + Math.sin(prevPhase + phaseShift) * amplitude

          ctx.beginPath()
          ctx.moveTo(prevX1, prevY)
          ctx.lineTo(x1, y)
          ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 + depth1 * 0.4})`
          ctx.lineWidth = 1.5
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(prevX2, prevY)
          ctx.lineTo(x2, y)
          ctx.strokeStyle = `rgba(167, 139, 250, ${0.15 + depth2 * 0.4})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        if (i % 3 === 0) {
          ctx.beginPath()
          ctx.moveTo(x1, y)
          ctx.lineTo(x2, y)
          ctx.strokeStyle = `rgba(31, 42, 55, 0.8)`
          ctx.lineWidth = 1
          ctx.stroke()

          const pulsePos = prefersReducedMotion ? 0.5 : ((time * 0.01 + i * 0.1) % 1)
          const pulseX = x1 + (x2 - x1) * pulsePos
          ctx.beginPath()
          ctx.arc(pulseX, y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(34, 211, 238, ${0.6 + Math.sin(time * 0.05) * 0.3})`
          ctx.fill()
        }

        const nodeRadius = 2.5 + depth1 * 1.5
        ctx.beginPath()
        ctx.arc(x1, y, nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${0.4 + depth1 * 0.5})`
        ctx.fill()

        const nodeRadius2 = 2.5 + depth2 * 1.5
        ctx.beginPath()
        ctx.arc(x2, y, nodeRadius2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167, 139, 250, ${0.4 + depth2 * 0.5})`
        ctx.fill()

        if (i % 6 === 0) {
          ctx.beginPath()
          ctx.arc(x1, y, 5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(34, 211, 238, ${0.3 + depth1 * 0.3})`
          ctx.lineWidth = 1
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(x2, y, 5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(167, 139, 250, ${0.3 + depth2 * 0.3})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      if (!prefersReducedMotion) {
        time++
        animationId = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-full h-full min-h-[400px]"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: 'auto' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}
