import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiTrendingUp } from 'react-icons/fi';
import './DSA.css';

export default function DSA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dsa" className="section section-alt">
      <div className="gradient-divider" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '40px' }}
        >
          <h2 className="section-heading">Problem Solving & DSA</h2>
          <p className="section-sub">Because efficient APIs require clear algorithmic thinking.</p>
        </motion.div>

        <div className="dsa-container">
          <motion.div
            className="dsa-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="dsa-card-header">
              <FiCode className="dsa-icon" />
              <h3>LeetCode Profile</h3>
            </div>
            <div className="dsa-stats">
              <div className="dsa-stat">
                <span className="dsa-stat-label">Focus Areas</span>
                <div className="dsa-stat-tags">
                  <span className="tag">Arrays</span>
                  <span className="tag">Strings</span>
                  <span className="tag">Dynamic Programming</span>
                  <span className="tag">Trees</span>
                  <span className="tag">Graphs</span>
                  <span className="tag">Linked Lists</span>
                </div>
              </div>
              <div className="dsa-stat">
                <span className="dsa-stat-label">Languages</span>
                <div className="dsa-stat-tags">
                  <span className="tag">Python</span>
                  <span className="tag">C++</span>
                </div>
              </div>
              <div className="dsa-stat">
                <span className="dsa-stat-label">Status</span>
                <span className="dsa-status">Actively Practicing ✓</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="dsa-context"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="dsa-context-icon">
              <FiTrendingUp />
            </div>
            <h3>Why DSA Matters for Web Engineering</h3>
            <p>
              Efficient algorithms are the foundation of performant backend systems. Every database query I optimize, every API response I streamline, and every data pipeline I architect benefits directly from strong algorithmic thinking.
            </p>
            <p>
              I actively practice DSA not as an academic exercise, but as a practical tool for writing backend code that scales. Understanding time complexities, data structures, and optimization patterns means my web services handle real-world loads efficiently.
            </p>
            <p>
              From optimizing MongoDB aggregation pipelines to designing efficient routing logic in Express.js — algorithmic thinking is embedded in every line of production code I write.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
