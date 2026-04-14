import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import ParticleField from './ParticleField';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <ParticleField />
      
      {/* Gradient orb backgrounds */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="hero-badge-dot" />
            💻 Open to Full-Stack Roles & Freelance
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Mayank Arora
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I build scalable web apps, integrate intelligent systems, and ship products that matter.
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            2nd Year B.Tech IT • Full-Stack Web Engineer • API & DB Architect • New Delhi, India
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work <FiArrowDown />
            </a>
            <a href="/MayankAroraResume.pdf" download className="btn-secondary">
              Download Resume <FiDownload />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a href="https://github.com/mayankarora2302" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/mayankarora2302" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://instagram.com/mayank.arora0" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="mailto:mayankarora2302@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Photo */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-photo-wrapper">
            <div className="hero-photo-glow" />
            <img src="/MayankPhoto.jpeg" alt="Mayank Arora" className="hero-photo" />
          </div>
          <motion.div
            className="hero-photo-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Shipped to 20+ Real Clients ✓
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
