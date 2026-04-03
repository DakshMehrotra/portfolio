import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Languages', icon: '{ }', color: '#00ff88', skills: ['C', 'C++', 'Python'] },
  { title: 'Tools & Platforms', icon: '⚙', color: '#00d4ff', skills: ['MySQL', 'Git', 'GitHub', 'GitLab', 'Docker', 'AWS EC2', 'GitHub Actions', 'Cisco Packet Tracer'] },
  { title: 'ML & Research', icon: '🧠', color: '#8b5cf6', skills: ['PyTorch', 'NeuroTorch', 'YOLOv8', 'Scikit-learn', 'Pandas', 'NumPy'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="section-title"><span>04.</span> Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {skillGroups.map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.4rem', fontFamily: 'Fira Code', color: group.color }}>{group.icon}</span>
                <h3 style={{ fontFamily: 'Fira Code', color: group.color, fontSize: '1rem', fontWeight: 600 }}>{group.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {group.skills.map(skill => (
                  <motion.span key={skill} whileHover={{ scale: 1.05 }}
                    style={{ padding: '6px 14px', border: `1px solid ${group.color}33`, borderRadius: '6px', fontFamily: 'Fira Code', fontSize: '0.82rem', color: 'var(--text-secondary)', background: `${group.color}08`, cursor: 'default', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = group.color; e.currentTarget.style.borderColor = group.color; e.currentTarget.style.background = `${group.color}15` }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = `${group.color}33`; e.currentTarget.style.background = `${group.color}08` }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
