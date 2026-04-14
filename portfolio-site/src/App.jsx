import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experiments from './components/Experiments';
import DSA from './components/DSA';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiments />
        <DSA />
        <Achievements />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}
