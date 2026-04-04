import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="section-title"><span>01.</span> About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '16px', fontSize: '1.02rem' }}>
              Hey! I'm Daksh, a Computer Science undergrad at UPES Dehradun with a CGPA of 8.6. I'm obsessed with building — from ML pipelines to DevOps infrastructure to nanoelectronics research at IIT Roorkee.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '16px', fontSize: '1.02rem' }}>
              I've interned across three very different domains — software testing and IP at Innoventory Solutions, client engineering at Fouses, and neuromorphic hardware research at IIT Roorkee.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.02rem' }}>
              When I'm not coding, I'm leading events as Head of Events at UPES ACM-W or representing UPES as a Campus Ambassador.
            </p>
          </div>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', fontFamily: 'Fira Code', fontSize: '0.88rem', lineHeight: 2 }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />)}
            </div>
            <p><span style={{ color: 'var(--neon-green)' }}>~</span> <span style={{ color: 'var(--neon-cyan)' }}>cat</span> daksh.txt</p>
            <p style={{ color: 'var(--text-secondary)' }}>UPES Dehradun, B.Tech CSE</p>
            <p style={{ color: 'var(--text-secondary)' }}>Dehradun, Uttarakhand</p>
            <p style={{ color: 'var(--text-secondary)' }}>CGPA: 8.6 / 10</p>
            <p style={{ color: 'var(--text-secondary)' }}>Ex-IIT Roorkee Research Intern</p>
            <p style={{ color: 'var(--text-secondary)' }}>Open to opportunities</p>
            <p><span style={{ color: 'var(--neon-green)' }}>~</span> <span style={{ color: 'var(--neon-cyan)' }}>echo</span> "Let's build something."</p>
            <p style={{ color: 'var(--neon-green)' }}>Let's build something.</p>
          </div>
        </div>
      </motion.div>
      <style>{`@media(max-width:768px){#about .section > div > div{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
