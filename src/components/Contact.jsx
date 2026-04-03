import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:mehrotradaksh2005@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(0,255,136,0.2)', borderRadius: '8px', color: 'var(--text-primary)',
    fontFamily: 'Inter', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
  }

  return (
    <section id="contact" className="section">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}><span>06.</span> Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '48px', fontSize: '1.02rem' }}>
          I'm currently open to internships and interesting collaborations. Whether you have a question or just want to say hi — my inbox is always open.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', marginBottom: '40px' }}>
          <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--neon-green)'} onBlur={e => e.target.style.borderColor = 'rgba(0,255,136,0.2)'} />
          <input type="email" placeholder="Your Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--neon-green)'} onBlur={e => e.target.style.borderColor = 'rgba(0,255,136,0.2)'} />
          <textarea placeholder="Your Message" required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
            onFocus={e => e.target.style.borderColor = 'var(--neon-green)'} onBlur={e => e.target.style.borderColor = 'rgba(0,255,136,0.2)'} />
          <button type="submit" className="btn-neon btn-neon-filled" style={{ alignSelf: 'flex-start', fontFamily: 'Fira Code' }}>
            {sent ? '✓ Opening mail client...' : 'Send Message →'}
          </button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px' }}>
          {[
            { icon: <FiMail size={22} />, href: 'mailto:mehrotradaksh2005@gmail.com', label: 'Email' },
            { icon: <FiLinkedin size={22} />, href: 'https://www.linkedin.com/in/mehrotradaksh/', label: 'LinkedIn' },
            { icon: <FiGithub size={22} />, href: 'https://github.com/DakshMehrotra', label: 'GitHub' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              {icon}
              <span style={{ fontSize: '0.72rem', fontFamily: 'Fira Code' }}>{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
