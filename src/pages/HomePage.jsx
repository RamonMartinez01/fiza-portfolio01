import { useRef } from "react"
import About from "./About"
import ContactPage from "./ContactPage"
import MyBlogPage from "./MyBlogPage"
import ProjectsPage from "./ProjectsPage"
import ServicesPage from "./ServicesPage"
import SkillsPage from "./SkillsPage"
import './Styles/HomePage.css'

const HomePage = ({ refs }) => {


  return (
    <section className="homePage">
      <div ref={refs.homeRef} className="sections">
         <article className="home__section">
            <div className="home__hi">
                <span>Hi!</span>
            </div>
            <div className="home__name">
                <span>I am </span><span className="span__name02">Fiza <br/>Sheikh</span>
            </div>
            <div className="home__title">
                <span>Backlink builder and Out reach specialist</span>
            </div>
            <div className="home__img">
                <img src=".././IMG-BGnone02.png" alt="" />
            </div>
            <div className="home__btn-container">
                <div className="home__btn">
                    <button className="home__btn-1">Button 1</button>
                    <button className="home__btn-2">Button 2</button>
                </div>
            </div>
        </article>   
      </div>
      <div ref={refs.aboutRef} className="sections">
        <div className="about__section">
          <About />
        </div>
      </div>
      <div ref={refs.servicesRef} className="sections">
        <div className="service__section">
          <ServicesPage />
        </div>
      </div>
      <div ref={refs.skillsRef} className="sections">
        <div className="skills__section">
          <SkillsPage />
        </div>
      </div>
      <div ref={refs.projectsRef} className="sections">
        <div className="projects__section">
          <ProjectsPage />
        </div>
      </div>
      <div ref={refs.blogRef} className="sections">
        <MyBlogPage />
      </div>
      <div ref={refs.contactRef} className="sections">
        <ContactPage />
      </div>
    </section>
  )
}

export default HomePage