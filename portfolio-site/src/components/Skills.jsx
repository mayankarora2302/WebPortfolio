import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiServer, FiDatabase, FiLayout, FiShield } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    icon: <FiServer />,
    title: 'Backend & Architecture',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Payment Gateway Integration (Stripe/Razorpay)',
      'JWT Authentication',
      'EJS Templating',
    ],
  },
  {
    icon: <FiDatabase />,
    title: 'Database & AI Integration',
    skills: [
      'MongoDB',
      'SQL',
      'AI/LLM API Integration',
      'Data Modeling',
    ],
  },
  {
    icon: <FiLayout />,
    title: 'Frontend & UI',
    skills: [
      'JavaScript (ES6+)',
      'React.js',
      'HTML5',
      'CSS3',
      'Tailwind',
    ],
  },
  {
    icon: <FiShield />,
    title: 'Security & Testing',
    skills: [
      'Application Security',
      'Vulnerability Testing',
      'Nmap',
      'Burp Suite',
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section">
      <div className="gradient-divider" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '40px' }}
        >
          <h2 className="section-heading">My Engineering Stack</h2>
          <p className="section-sub">Everything needed to take an idea to production.</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card skill-category-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="skill-category-icon">{cat.icon}</div>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-pills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
