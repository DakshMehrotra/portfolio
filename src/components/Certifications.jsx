import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCode, FiStar } from 'react-icons/fi'

const certs = [
  { title: 'Cloud Foundations', issuer: 'AWS', icon: '☁️', color: '#ff9900', date: 'Mar 2025' },
  { title: 'Cloud Practitioner Essentials', issuer: 'AWS', icon: '🏗️', color: '#ff9900', date: 'Jun 2025' },
  { title: 'Cloud Operations', issuer: 'AWS', icon: '⚙️', color: '#ff9900', date: '2025' },
  { title: 'Cloud Architecture', issuer: 'AWS', icon: '🔧', color: '#ff9900', date: '2025' },
]

const achievements = [
  { title: 'Secretary', org: 'UPES ACM', icon: '🏛️', color: '#00ff88' },
  { title: 'Head of Events', org: 'UPES ACM-W', icon: '🎯', color: '#8b5cf6' },
  { title: 'Campus Ambassador', org: 'UnStop', icon: '🚀', color: '#00d4ff' },
  { title: 'Runner-Up', org: 'IBM ICE DAY', icon: '🥈', color: '#f59e0b' },
  { title: '150+ DSA Problems', org: 'LeetCode — 50 & 100 Days Badges', icon: '💻', color: '#f97316' },
  { title: '15+ Technical Events', org: '2400+ Participants', icon: '🎪', color: '#34d399' },
  { title: 'Letter of Recommendation', org: 'Innoventory Solutions', icon: '📄', color: '#00ff88' },
  { title: 'Letter of Recommendation', org: 'Roots2Bloom NGO', icon: '📄', color: '#34d399' },
]

const coursework = [
  'Data Structures & Algorithms', 'Operating Systems', 'Computer Networks',
  'Database Management Systems', 'Formal Language & Automata', 'Compiler Design',
  'Machine Learning', 'Cloud Computing',
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="section-title"><span>05.</span> Certifications & Achievements</h2>

        {/* Certifications */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontFamily: 'Fira Code', color: 'var(--neon-green)', marginBottom: '20px', fontSize: '0.9rem' }}>// certifications</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {certs.map((cert, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -5 }}
                style={{ background: 'var(--bg-card)', border: `1px solid ${cert.color}33`, borderRadius: '10px', padding: '22px', display: 'flex', alignItems: 'center', gap: '16px', transition: 'box-shadow 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 30px ${cert.color}20`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '2px' }}>{cert.title}</p>
                  <p style={{ color: cert.color, fontFamily: 'Fira Code', fontSize: '0.78rem' }}>{cert.issuer}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '2px' }}>{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontFamily: 'Fira Code', color: 'var(--neon-cyan)', marginBottom: '20px', fontSize: '0.9rem' }}>// achievements & roles</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {achievements.map((ach, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -5 }}
                style={{ background: 'var(--bg-card)', border: `1px solid ${ach.color}33`, borderRadius: '10px', padding: '22px', display: 'flex', alignItems: 'center', gap: '16px', transition: 'box-shadow 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 30px ${ach.color}20`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <span style={{ fontSize: '1.5rem' }}>{ach.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '4px' }}>{ach.title}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{ach.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div>
          <h3 style={{ fontFamily: 'Fira Code', color: 'var(--neon-purple)', marginBottom: '20px', fontSize: '0.9rem' }}>// relevant coursework <span style={{ color: 'var(--text-muted)' }}>— Jun 2025</span></h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {coursework.map((course, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                style={{ padding: '8px 18px', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '8px', fontFamily: 'Fira Code', fontSize: '0.82rem', color: 'var(--text-secondary)', background: 'rgba(139,92,246,0.06)', cursor: 'default', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon-purple)'; e.currentTarget.style.borderColor = 'var(--neon-purple)'; e.currentTarget.style.background = 'rgba(139,92,246,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'; e.currentTarget.style.background = 'rgba(139,92,246,0.06)' }}>
                {course}
              </motion.span>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  )
}
