 import './Styles/AboutPage.css'

const About = () => {
  return (
    <section className="about__container">
      
      <div className="about__title">
          <span className="about__title-01">About Me</span>
          <span className="about__title-02">About</span>
      </div>
      <section className='about__info-conteiner'>
        <div className="about__img">
          <img src=".././IMG-fizaBGnone03.png" alt="" />
        </div>
        <div className="about__description">
          <div className='about__div'>
            <span className="about__span-tag">Name:</span>
            <span className="about__span-info">Fiza Sheikh</span>
          </div>
          <div className='about__div'>
            <span className="about__span-tag">Skills:</span>
            <span className="about__span-info">(Skills go here )</span>
          </div>
          <div className='about__div'>
            <span className="about__span-tag">WhatsApp:</span>
            <span className="about__span-info">+92 327 4721353</span>
          </div>
          <div className='about__div'>
            <span className="about__span-tag">Email:</span>
            <span className="about__span-info">abcdefg@gmail.com</span>
          </div>
          <div className="about__projects">
            <span className='about__span-projects'>200 + </span><span> Project Complete</span>
          </div>
          <div className="about__btn-container">
            <button className="about__btn">Send me an email</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About