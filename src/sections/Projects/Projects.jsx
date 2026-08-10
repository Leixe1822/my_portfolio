/* Projects 區塊：讀取 projects 資料並產生作品卡列表 */
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projects from '../../data/projects'
import './Projects.css'

/* 作品列表區塊，資料來源是 src/data/projects.js */
function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__header">
        <p>02 / SELECTED WORK</p>
        <h2>Case studies that turn messy information into usable screens.</h2>
      </div>

      <div className="projects-section__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
