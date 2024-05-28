import './Styles/ProjectsPage.css'

const ProjectsPage = () => {
  return (
    <article className="projects__container">
        <section className="projects__header"> 
            <div className="projects__header-title">
                <span className="project__title-01">My Projects</span>
                <span className="projects__title-02">Projects</span>
            </div>
        </section>
        <section className="projects__body">
            <div className="projects__pakage">
                <div className="project__alfa">
                    <div className="projects__unit unit__1">
                        <div className="projects__content">
                            <h2>Project 01</h2>
                        </div>
                    </div>
                </div>
                <div className="project__beta">
                    <div className="projects__unit unit__2">
                        <div className="projects__content">
                            <h2>Project 02</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects__pakage">
                <div className="project__beta">
                    <div className="projects__unit unit__3">
                        <div className="projects__content">
                            <h2>Project 03</h2>
                        </div>
                    </div>
                </div>
                <div className="project__alfa">
                    <div className="projects__unit unit__4">
                        <div className="projects__content">
                            <h2>Project 04</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects__pakage">
                <div className="project__alfa">
                    <div className="projects__unit unit__5">
                        <div className="projects__content">
                            <h2>Project 05</h2>
                        </div>
                    </div>
                </div>
                <div className="project__beta">
                    <div className="projects__unit unit__6">
                        <div className="projects__content">
                            <h2>Project 06</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>
  )
}

export default ProjectsPage