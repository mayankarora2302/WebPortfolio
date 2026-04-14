import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';
import './Contact.css';

const contacts = [
  { icon: <FiMail />, label: 'mayankarora2302@gmail.com', href: 'mailto:mayankarora2302@gmail.com' },
  { icon: <FiPhone />, label: '+91 94682 29653', href: 'tel:+919468229653' },
  { icon: <FiGithub />, label: 'github.com/mayankarora2302', href: 'https://github.com/mayankarora2302' },
  { icon: <FiLinkedin />, label: 'LinkedIn Profile', href: 'https://linkedin.com/in/mayankarora2302' },
  { icon: <FiInstagram />, label: '@mayank.arora0', href: 'https://instagram.com/mayank.arora0' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section">
      <div className="gradient-divider" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '40px' }}
        >
          <h2 className="section-heading">Let's Build Something</h2>
          <p className="section-sub">Internships, freelance web architectures, or just a technical conversation — I'm around.</p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="contact-copy">
              I'm actively looking for internship opportunities in full-stack web development, and I consistently take on selective freelance web projects for real-world clients.
            </p>
            <p className="contact-copy">
              If you need someone who can build the backend, integrate the payment gateway, secure the database, and actually ship it—we should talk.
            </p>
            <a href="mailto:mayankarora2302@gmail.com" className="btn-primary contact-cta">
              Send me an email <FiArrowRight />
            </a>
          </motion.div>

          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card contact-card"
              >
                <span className="contact-card-icon">{c.icon}</span>
                <span className="contact-card-label">{c.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="gradient-divider" style={{ marginTop: '80px' }} />
      <footer className="footer">
        <p>Built by Mayank Arora · 2025</p>
      </footer>
    </section>
  );
}
