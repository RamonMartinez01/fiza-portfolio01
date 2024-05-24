import './Styles/SkillsPage.css'

const SkillsPage = () => {
  return (
    <article className="skills__container">
      
      <div className="skills__header-title">
          <span className="skills__title-01">My Skills</span>
          <span className="skills__title-02">Skills</span>
      </div>
     
      <section className="skills__info-container">
        <div className="skills__info-left">
          <section className="skills__unit-container">
            <div className="skills__unit-info">
              <span>Habilidad</span>
              <span>90%</span>
            </div>
            <div className="skills__unit-graphic">
              <span className="skills__graphic-100">
                <span className="skills__graphic-particular" style={{ width: '90%' }}></span>
                {/*aqui va la grafica particular*/}
              </span>
            </div>
          </section>
          <section className="skills__unit">
            <div className="skills__unit-info">
              <span>Habilidad</span>
              <span>80%</span>
            </div>
            <div className="skills__unit-graphic">
              <span className="skills__graphic-100">
                <span className="skills__graphic-particular" style={{ width: '80%' }}></span>
                {/*aqui va la grafica particular*/}
              </span>
            </div>
          </section>
          <section className="skills__unit">
            <div className="skills__unit-info">
              <span>Habilidad</span>
              <span>85%</span>
            </div>
            <div className="skills__unit-graphic">
              <span className="skills__graphic-100">
                <span className="skills__graphic-particular" style={{ width: '85%' }}></span>
                {/*aqui va la grafica particular*/}
              </span>
            </div>
          </section>
        </div>
        <div className="skills__info-right">
          <section className="skills__unit">
              <div className="skills__unit-info">
                <span>Habilidad</span>
                <span>90%</span>
              </div>
              <div className="skills__unit-graphic">
                <span className="skills__graphic-100">
                  <span className="skills__graphic-particular" style={{ width: '90%' }}></span>
                  {/*aqui va la grafica particular*/}
                </span>
              </div>
            </section>
            <section className="skills__unit">
              <div className="skills__unit-info">
                <span>Habilidad</span>
                <span>80%</span>
              </div>
              <div className="skills__unit-graphic">
                <span className="skills__graphic-100">
                  <span className="skills__graphic-particular" style={{ width: '80%' }}></span>
                  {/*aqui va la grafica particular*/}
                </span>
              </div>
            </section>
            <section className="skills__unit">
              <div className="skills__unit-info">
                <span>Habilidad</span>
                <span>85%</span>
              </div>
              <div className="skills__unit-graphic">
                <span className="skills__graphic-100">
                  <span className="skills__graphic-particular" style={{ width: '85%' }}></span>
                  {/*aqui va la grafica particular*/}
                </span>
              </div>
            </section>
        </div>
      </section>
    </article>
  )
}

export default SkillsPage