import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Experiments.css';

const experiments = [
  { emoji: '🎲', title: 'Dice Game', link: 'https://mayankarora2302.github.io/dice-game/', linkLabel: 'Play Live', icon: <FiExternalLink /> },
  { emoji: '🥁', title: 'Drum Set', link: 'https://mayankarora2302.github.io/drum-set/', linkLabel: 'Play Live', icon: <FiExternalLink /> },
  { emoji: '🔴', title: 'Simon Game', link: 'https://mayankarora2302.github.io/Simon_Game/', linkLabel: 'Play Live', icon: <FiExternalLink /> },
  { emoji: '📦', title: 'QR Code Generator', link: 'https://github.com/mayankarora2302/SimpleQRGenerator', linkLabel: 'GitHub', icon: <FiGithub /> },
];

export default function Experiments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experiments" className="section">
      <div className="gradient-divider" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '40px' }}
        >
          <h2 className="section-heading">UI & Logic Experiments</h2>
          <p className="section-sub">Small builds. Clean logic. Real practice.</p>
        </motion.div>

        <div className="experiments-grid">
          {experiments.map((exp, i) => (
            <motion.a
              key={exp.title}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card experiment-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="experiment-emoji">{exp.emoji}</span>
              <h3 className="experiment-title">{exp.title}</h3>
              <span className="experiment-link">
                {exp.linkLabel} {exp.icon}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
