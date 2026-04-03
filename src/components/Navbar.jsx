import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '3px', zIndex: 200, background: 'rgba(0,255,136,0.1)' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, var(--neon-green), var(--neon-cyan))', boxShadow: '0 0 10px var(--neon-green)', transition: 'width 0.1s linear' }} />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: '3px', left: 0, right: 0, zIndex: 100,
          padding: '18px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,255,136,0.1)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <a href="#hero" style={{ fontFamily: 'Fira Code', fontWeight: 700, fontSize: '1.2rem', color: 'var(--neon-green)', textDecoration: 'none' }}>
          &lt;Daksh /&gt;
        </a>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
          {links.map((link, i) => (
            <motion.a key={link} href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
              style={{ fontFamily: 'Fira Code', fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--neon-green)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              <span style={{ color: 'var(--neon-green)' }}>{String(i+1).padStart(2,'0')}.</span> {link}
            </motion.a>
          ))}
          <a href="https://drive.google.com/file/d/19QiKA3lhFUz8FeN9wkOgD-Ly2XO_hiNU/view?usp=sharing"
            target="_blank" rel="noreferrer" className="btn-neon" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>Resume</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ background: 'none', border: 'none', color: 'var(--neon-green)', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
        {menuOpen && (
          <div style={{ position: 'fixed', top: '60px', left: 0, right: 0, background: 'rgba(10,10,15,0.98)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', borderBottom: '1px solid var(--border)' }}>
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Fira Code', color: 'var(--text-secondary)', textDecoration: 'none' }}>{link}</a>
            ))}
          </div>
        )}
        <style>{`@media(max-width:768px){.desktop-nav{display:none!important}.hamburger{display:block!important}}`}</style>
      </motion.nav>
    </>
  )
}
