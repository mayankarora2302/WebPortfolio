import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    hero: true,
    tags: ['Next.js', 'Solo Campaign', 'Real Clients', 'Meta Ads', 'End-to-End'],
    title: 'Qpid — Personalized Valentine\'s Website Campaign',
    description: `Built a micro-brand from scratch — designed and sold premium personalized websites (using industrial frameworks like Next.js) as Valentine's Day gifts to real paying clients.\n\nCreated the Instagram page @qpid_dot_com, ran Meta ads to acquire customers, and handled every step of delivery: client brief → design → customization → deployment → revisions. End to end, solo.\n\nNot a freelance platform gig. A self-run campaign from zero.`,
    stats: ['Real Paying Clients', 'Meta Ads Campaign', 'End-to-End Solo Delivery', 'Brand Built from Scratch'],
    tech: ['Next.js', 'React', 'Meta Ads', 'Deployment'],
    links: [
      { label: 'Instagram Page', url: 'https://instagram.com/qpid_dot_com', icon: <FiExternalLink /> },
    ],
  },
  {
    hero: true,
    tags: ['Backend Architecture', 'AI Integration', 'FastAPI', '🏆 Top 15 — Hackhazards\'25'],
    title: 'FraudHawk — AI-Powered Fraud Detection Web Service',
    description: `An AI-integrated web service built to detect cross-border payment anomalies in real-time. While the core is powered by an optimized XGBoost model, the engineering challenge was serving this intelligence via a robust web layer.\n\nI designed a FastAPI-based endpoint architecture that ingests transaction payloads, runs them through the tuned ML model, and returns comprehensive JSON responses including probability scores and auditable threshold data.\n\nThe project bridges the gap between raw data science and usable web architecture, ensuring that complex AI decision-making can be seamlessly integrated into any external payment application.`,
    stats: ['🏆 Top 15 — 17,000+ Participants', 'Live FastAPI Endpoint', 'Seamless AI Integration'],
    tech: ['Python', 'FastAPI', 'REST Architecture', 'XGBoost Integration'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mayankarora2302', icon: <FiGithub /> },
      { label: 'View Details', url: '#', icon: <FiExternalLink /> },
    ],
  },
  {
    hero: false,
    tags: ['Cybersecurity', 'Web Testing', 'Quality Assurance'],
    title: 'Vulnerability Testing & Secure Delivery Pipeline',
    description: `A core part of my web development process is ensuring that client data is protected. I actively utilize my background in cybersecurity (including 100+ completed TryHackMe labs) to pen-test my own applications.\n\nBefore delivery, my web apps undergo rigorous checks for SQL injection, cross-site scripting (XSS), and secure session management. I build functionality with a 'security-first' mindset, ensuring that the speed of delivery never compromises the safety of the application.`,
    stats: [],
    tech: ['OWASP Standards', 'Burp Suite', 'Input Sanitization', 'JWT Security'],
    links: [],
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={`project-card glass-card ${project.hero ? 'project-hero' : 'project-small'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {project.hero && <div className="project-glow" />}
      
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <h3 className="project-title">{project.title}</h3>

      <div className="project-description">
        {project.description.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {project.stats.length > 0 && (
        <div className="project-stats">
          {project.stats.map((stat) => (
            <span key={stat} className="stat-pill">{stat}</span>
          ))}
        </div>
      )}

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-item">{t}</span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary project-link-btn"
            >
              {link.label} {link.icon}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section section-alt">
      <div className="gradient-divider" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '40px' }}
        >
          <h2 className="section-heading">Things I've Actually Built</h2>
          <p className="section-sub">Not tutorials. Real architecture, real databases, real users.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
