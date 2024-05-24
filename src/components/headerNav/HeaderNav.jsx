import './styles/HeaderNavStyles.css'

const HeaderNav = ({ scrollToSection, refs }) => {


  return (
    <section className="headernav__container">
      <header className="headernav__header">
          <h2 className="headernav__tittle">Fiza</h2> 
      </header>
      <section className="headernav__section">
        <div className="headernav__buttons">
            <button onClick={() => scrollToSection(refs.homeRef)}>Home</button>
            <button onClick={() => scrollToSection(refs.aboutRef)}>About</button>
            <button onClick={() => scrollToSection(refs.servicesRef)}>Services</button>
            <button onClick={() => scrollToSection(refs.skillsRef)}>Skills</button>
            <button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button>
            <button onClick={() => scrollToSection(refs.blogRef)}>Blog</button>
            <button onClick={() => scrollToSection(refs.contactRef)}>Contact</button>
        </div>
      </section>
    </section>
  )
}

export default HeaderNav