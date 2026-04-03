import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useEffect, useState, useRef } from 'react'

const roles = ['Software Developer', 'ML Enthusiast', 'DevOps Explorer', 'CS Undergrad @ UPES']

function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3, dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4, alpha: Math.random() * 0.6 + 0.2,
    }))
    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,136,${p.alpha})`; ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
}

function GlitchName() {
  const [glitch, setGlitch] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => { setGlitch(true); setTimeout(() => setGlitch(false), 200) }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '12px', position: 'relative', display: 'inline-block' }}>
      <span style={{ position: 'relative', zIndex: 1 }}>Daksh Mehrotra.</span>
      {glitch && <>
        <span style={{ position: 'absolute', top: 0, left: '3px', color: '#00d4ff', opacity: 0.8, zIndex: 0, clipPath: 'inset(20% 0 60% 0)' }}>Daksh Mehrotra.</span>
        <span style={{ position: 'absolute', top: 0, left: '-3px', color: '#ff0055', opacity: 0.8, zIndex: 0, clipPath: 'inset(60% 0 10% 0)' }}>Daksh Mehrotra.</span>
      </>}
    </motion.h1>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      else timeout = setTimeout(() => setTyping(false), 1800)
    } else {
      if (displayed.length > 0) timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      else { setRoleIndex((roleIndex + 1) % roles.length); setTyping(true) }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 40px', position: 'relative', overflow: 'hidden', background: 'var(--bg-primary)' }}>
      <ParticleCanvas />
      <div style={{ position: 'absolute', top: '20%', right: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,136,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontFamily: 'Fira Code', color: 'var(--neon-green)', fontSize: '1rem', marginBottom: '16px' }}>
          Hi, my name is
        </motion.p>
        <GlitchName />
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '24px', minHeight: '4rem' }}>
          I'm a{' '}
          <span style={{ color: 'var(--neon-cyan)', fontFamily: 'Fira Code' }}>
            {displayed}<span style={{ borderRight: '3px solid var(--neon-cyan)', animation: 'blink 1s step-end infinite' }}>_</span>
          </span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ maxWidth: '520px', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '40px' }}>
          B.Tech CSE student at UPES Dehradun (CGPA 8.6) with hands-on experience in ML, DevOps, and nanoelectronics research at IIT Roorkee. I build things that matter.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '60px' }}>
          <a href="#projects" className="btn-neon btn-neon-filled">View My Work</a>
          <a href="#contact" className="btn-neon">Get In Touch</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          style={{ display: 'flex', gap: '24px' }}>
          {[
            { icon: <FiGithub size={22} />, href: 'https://github.com/DakshMehrotra' },
            { icon: <FiLinkedin size={22} />, href: 'https://www.linkedin.com/in/mehrotradaksh/' },
            { icon: <FiMail size={22} />, href: 'mailto:mehrotradaksh2005@gmail.com' },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon-green)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  )
}
