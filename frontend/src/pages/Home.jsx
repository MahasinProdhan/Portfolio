import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Education from "../sections/Education";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      {/* <Certifications /> */}
      <Contact />
    </>
  );
};

export default Home;
