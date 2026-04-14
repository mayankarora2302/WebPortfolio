import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Hobbies.css';

const hobbies = [
  { emoji: '🎾', label: 'Tennis' },
  { emoji: '📚', label: 'Reading' },
  { emoji: '✈️', label: 'Travel' },
  { emoji: '🔧', label: 'Hardware Tinkering' },
];

export default function Hobbies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="hobbies" className="section section-alt">
      <div className="gradient-divider" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '40px' }}
        >
          <h2 className="section-heading">Beyond The Screen</h2>
          <p className="section-sub">A few things that keep me human.</p>
        </motion.div>

        <div className="hobbies-grid">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.label}
              className="glass-card hobby-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="hobby-emoji">{h.emoji}</span>
              <span className="hobby-label">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
