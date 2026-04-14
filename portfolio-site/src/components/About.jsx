import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './About.css';

const terminalLines = [
  { prompt: true, text: '> whoami' },
  { prompt: false, text: 'Full-Stack Web Developer | API Architect | Freelancer' },
  { prompt: true, text: '> skills --list' },
  { prompt: false, text: '[Backend]    Node.js · Express.js · EJS · REST APIs · Payment Gateways' },
  { prompt: false, text: '[Frontend]   JavaScript · React · HTML/CSS · Tailwind' },
  { prompt: false, text: '[Data/AI]    MongoDB · SQL · OpenAI/LLM Integration' },
  { prompt: false, text: '[Security]   OWASP Best Practices · Pen-Tested Deployments' },
  { prompt: false, text: '[DSA]        Python · C++ · LeetCode — Actively Practicing' },
  { prompt: true, text: '> status' },
  { prompt: false, text: 'Open to: Full-Stack Roles & Freelance  ✓' },
  { prompt: false, text: 'Currently: Shipping Real Code  ✓' },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <div ref={ref} className="terminal-card glass-card">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="terminal-title">mayank@portfolio:~$</span>
      </div>
      <div className="terminal-body">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`terminal-line ${line.prompt ? 'prompt' : 'output'}`}>
            <span>{line.text}</span>
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="terminal-cursor">▋</span>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section section-alt">
      <div className="gradient-divider" />
      <div className="container about-container" ref={ref}>
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">Engineering for the Real World.</h2>
          <div className="about-copy">
            <p>
              I'm Mayank — a 2nd-year IT student who got tired of just building localhost tutorials and decided to ship real applications to paying users.
            </p>
            <p>
              I specialize in full-stack web development, focusing on robust backend architectures, seamless API connections, and intelligent AI integrations. Recently, I built and scaled a custom web-app campaign from scratch, serving over 20 unique clients in just a few days—handling everything from database management and payment gateways to the final UI.
            </p>
            <p>
              While my core focus is web engineering, my background in cybersecurity and machine learning means I don't just write code that works; I write code that is secure. Every application I deliver is rigorously tested, actively protected against common vulnerabilities, and optimized for performance before it ever hits production.
            </p>
            <p>
              Currently looking for internships and freelance opportunities in full-stack development and web architecture.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
