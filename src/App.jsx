
import './App.css'
import HomePage from './pages/HomePage'
import HeaderNav from './components/headerNav/HeaderNav'
import { useRef } from 'react'

function App() {
  const homeRef = useRef(null)  
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const headerOffset = 80; // Adjust this value according to the height of your fixed header
    if (ref && ref.current) {
      const elementPosition = ref.current.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.error("Ref is null, or ref.current is undefined", ref);
  }
}

  return (
    <div className='APP'>
     <section className='header__app'> 
       <HeaderNav scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, servicesRef, skillsRef, projectsRef, blogRef, contactRef}}/>
      </section>
      <div className='homePage__container'>
        <HomePage  refs={{ homeRef, aboutRef, servicesRef, skillsRef, projectsRef, blogRef, contactRef}} />
      </div>
    </div>
  )
}

export default App
