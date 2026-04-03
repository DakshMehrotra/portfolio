import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'NETRA',
    subtitle: 'Next-gen Emergency-aware Traffic Response Architecture',
    description: 'Smart traffic perception system with YOLOv8-based vehicle & emergency vehicle detection, real-time lane density estimation, and road network modelling as a graph using NetworkX.',
    tech: ['Python', 'YOLOv8', 'GNN', 'NetworkX'],
    github: 'https://github.com/DakshMehrotra',
    color: '#00ff88', badge: 'Mar 2026',
  },
  {
    title: 'Rakshaka',
    subtitle: 'Cybersecurity Intrusion Detection System',
    description: 'ML-based intrusion detection pipeline with EDA, feature engineering, class imbalance handling, and benchmarking of 5+ classification models on large-scale network traffic data.',
    tech: ['Python', 'ML', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: 'https://github.com/DakshMehrotra',
    color: '#00d4ff', badge: 'Jan 2026',
  },
  {
    title: 'ShipStack',
    subtitle: 'Cloud-Native CI/CD Deployment Pipeline',
    description: 'Fully automated CI/CD pipeline using GitHub Actions and Docker with automated builds, testing, image versioning, rollback strategies, and zero-manual-intervention deployments to AWS EC2.',
    tech: ['GitHub Actions', 'Docker', 'AWS EC2', 'CI/CD'],
    github: 'https://github.com/DakshMehrotra',
    color: '#8b5cf6', badge: 'Nov 2025',
  },
  {
    title: 'CloudNova',
    subtitle: 'Intelligent Cloud Resource Optimizer',
    description: 'A smart cloud management platform that monitors, analyzes, and auto-optimizes AWS resource utilization in real-time. Features cost anomaly detection, idle resource cleanup, and automated scaling recommendations powered by usage pattern analysis.',
    tech: ['Python', 'AWS', 'Boto3', 'CloudWatch', 'Lambda'],
    github: 'https://github.com/DakshMehrotra',
    color: '#f59e0b', badge: 'Jun 2025',
  },
  {
    title: 'ExpenseFlow',
    subtitle: 'GUI-Based Budget Tracker',
    description: 'Java Swing desktop app for real-time expense tracking with category-wise summaries, data visualization, and robust exception handling built with clean OOP principles.',
    tech: ['Java', 'Swing', 'OOP'],
    github: 'https://github.com/DakshMehrotra',
    color: '#34d399', badge: '2025',
  },
  {
    title: 'FaceDetect',
    subtitle: 'Real-Time Face Detection System',
    description: 'Real-time face detection system using OpenCV achieving accurate detection across varying lighting conditions. Leverages pre-trained models with optimized preprocessing to reduce false positives and demonstrate end-to-end image processing.',
    tech: ['Python', 'OpenCV', 'Computer Vision', 'ML'],
    github: 'https://github.com/DakshMehrotra',
    color: '#f97316', badge: '2025',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="section-title"><span>03.</span> Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((proj, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, type: 'spring', stiffness: 80 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', cursor: 'default', transition: 'border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = proj.color + '66'; e.currentTarget.style.boxShadow = `0 12px 50px ${proj.color}18` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.15)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'Fira Code', fontSize: '0.72rem', color: proj.color, border: `1px solid ${proj.color}44`, padding: '2px 10px', borderRadius: '20px' }}>{proj.badge}</span>
                <a href={proj.github} target="_blank" rel="noreferrer"
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = proj.color}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}><FiGithub size={18} /></a>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px', color: proj.color }}>{proj.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'Fira Code', marginBottom: '14px' }}>{proj.subtitle}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75, flexGrow: 1, marginBottom: '20px' }}>{proj.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {proj.tech.map(t => <span key={t} style={{ fontFamily: 'Fira Code', fontSize: '0.72rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', padding: '4px 10px', borderRadius: '4px' }}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
