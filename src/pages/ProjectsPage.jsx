import './Styles/ProjectsPage.css'


const ProjectsPage = () => {
  return (
    <article className="projects__container">
      <section className='projects__header'>
        <div className='projects__header-title'>
          <span className='projects__title-01'>Our Projects</span>
          <span className='projects__title-02'>Projects</span>
        </div>
      </section>
      <section className="projects__body">
          <div className="projects__unit-01">
              <div className="projects__01-left">
                <div>
                  <h2>Project 01</h2>
                </div>
              </div>
              <div className="projects__01-right">
                <div>
                  <h2>Project 02</h2>
                </div>
              </div>
          </div>  
          <div className="projects__unit-02">
          <div className="projects__02-left">
                <div>
                  <h2>Project 03</h2>
                </div>
              </div>
              <div className="projects__02-right">
                <div>
                  <h2>Project 04</h2>
                </div>
              </div>
          </div>
          <div className="projects__unit-03">
          <div className="projects__03-left">
                <div>
                  <h2>Project 05</h2>
                </div>
              </div>
              <div className="projects__03-right">
                <div>
                  <h2>Project 06</h2>
                </div>
              </div>
          </div>
      </section>
    </article>
  )
}

export default ProjectsPage