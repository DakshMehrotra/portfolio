import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Development Intern', company: 'Innoventory Solutions',
    period: 'Sep 2025 – Mar 2026', location: 'Bengaluru, Karnataka', color: '#00ff88',
    points: ['Led end-to-end software testing, UI/UX usability analysis, and cross-functional debugging.', 'Managed full-cycle client coordination for patent filings.', 'Contributed to improved product reliability and smoother client onboarding.'],
  },
  {
    role: 'Software Development Intern', company: 'Fouses',
    period: 'Jul 2025 – Aug 2025', location: 'Patna, Bihar', color: '#00d4ff',
    points: ['Managed end-to-end client interactions across multiple stakeholders throughout the contract lifecycle.', 'Enhanced client satisfaction by ensuring prompt, structured engagement.', 'Contributed to smoother project workflows and stronger stakeholder relationships.'],
  },
  {
    role: 'Business Analyst Intern', company: 'My Trick International',
    period: 'Jun 2025 – Jul 2025', location: 'Noida, Uttar Pradesh', color: '#f59e0b',
    points: ['Performed data mining and behavioral data analysis to identify customer patterns and actionable insights.'],
  },
  {
    role: 'R&D Intern – Nanoelectronics', company: 'IIT Roorkee',
    period: 'May 2025 – Jun 2025', location: 'Roorkee, Uttarakhand', color: '#8b5cf6',
    points: ['Researched memristors for neuromorphic hardware in nanoelectronics and ML-based modelling.', 'Contributed to circuit design supporting brain-inspired, energy-efficient computing.', "Advanced the lab's research pipeline towards next-gen computing architectures."],
  },
  {
    role: 'Social Media / Web Intern', company: 'Roots to Bloom (NGO)',
    period: 'Jun 2024 – Aug 2024', location: 'Lucknow, Uttar Pradesh', color: '#34d399',
    points: ['Supported website development and content creation to improve NGO outreach and engagement.'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="section-title"><span>02.</span> Experience</h2>
        <div style={{ position: 'relative', paddingLeft: '24px' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--neon-green), var(--neon-cyan), #f59e0b, var(--neon-purple), #34d399)' }} />
          {experiences.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5, type: 'spring', stiffness: 80 }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              style={{ background: 'var(--bg-card)', border: `1px solid ${exp.color}22`, borderLeft: `3px solid ${exp.color}`, borderRadius: '10px', padding: '28px', marginBottom: '20px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-37px', top: '30px', width: '14px', height: '14px', borderRadius: '50%', background: exp.color, boxShadow: `0 0 16px ${exp.color}` }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>{exp.role}</h3>
                  <p style={{ color: exp.color, fontFamily: 'Fira Code', fontSize: '0.9rem', fontWeight: 600 }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'Fira Code', fontSize: '0.8rem' }}>{exp.period}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{exp.location}</p>
                </div>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
                {exp.points.map((point, j) => (
                  <li key={j} style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '6px' }}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
