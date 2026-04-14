import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Achievements.css';

const milestones = [
  {
    emoji: '🏆',
    title: 'Top 15 — Hackhazards\'25 International Hackathon',
    detail: '17,000+ participants registered · InfinyOn Technology Track',
    year: '2025',
  },
  {
    emoji: '💼',
    title: 'Launched Qpid Web Campaign',
    detail: 'Successfully delivered custom web applications to 20+ paying clients',
    year: '2025',
  },
  {
    emoji: '🏆',
    title: '3rd Place — LogicX DLCD Hardware Competition',
    detail: 'Custom logic hardware build',
    year: '2025',
  },
  {
    emoji: '✅',
    title: 'Selected — Smart India Hackathon (SIH) 2025',
    detail: 'Project contributor selection',
    year: '2025',
  },
  {
    emoji: '🎓',
    title: 'B.Tech Information Technology — BPIT, GGSIPU',
    detail: '2024 – 2028 · New Delhi',
    year: '2024',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section">
      <div className="gradient-divider" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '40px' }}
        >
          <h2 className="section-heading">Milestones</h2>
        </motion.div>

        <div className="timeline">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="timeline-line">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <span className="timeline-emoji">{m.emoji}</span>
                  <span className="timeline-year">{m.year}</span>
                </div>
                <h3 className="timeline-title">{m.title}</h3>
                <p className="timeline-detail">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
