/* ProjectCard 元件：將單筆作品資料呈現成作品卡片 */
import './ProjectCard.css'

/* 單張作品卡片，由 project 資料決定標題、描述、標籤與色彩 */
function ProjectCard({ project, language }) {
  // 有對應翻譯時使用翻譯內容；未提供翻譯的專案保留原文。
  const content = project.translations?.[language] ?? project
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__preview">
        <span>{String(project.id).padStart(2, '0')}</span>
      </div>

      <div className="project-card__content">
        <p className="project-card__meta">
          {project.category} / {project.year}
        </p>

        <h3>{content.title}</h3>

        <p>{content.description}</p>

        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard
