import AboutMe from "../components/cuerpo/AboutMe";
import Skills from "../components/cuerpo/Skills";
import Projects from "../components/cuerpo/Projects";
import Contact from "../components/cuerpo/Contact";



const cuerpo = () => {


  return (
    <div className="Cuerpo__container">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default cuerpo