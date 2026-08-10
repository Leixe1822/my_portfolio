/* Experience 區塊：呈現轉職前後的經歷與能力脈絡 */
import './Experience.css'

/* 經歷資料先放在同一個檔案中，之後內容變多可再拆到 data */
const experiences = [
  {
    period: 'NOW',
    title: 'Frontend Development',
    description: '學習 React、路由、元件拆分與響應式版面，持續建立作品集專案。',
  },
  {
    period: 'BEFORE',
    title: 'Banking Sales',
    description: '累積需求理解、溝通協調與客戶服務經驗，擅長把複雜資訊說清楚。',
  },
]

function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-section__header">
        <p>03 / EXPERIENCE</p>
        <h2>Different background, practical frontend mindset.</h2>
      </div>

      <div className="experience-section__list">
        {experiences.map((experience) => (
          <article className="experience-section__item" key={experience.title}>
            <span>{experience.period}</span>
            <div>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
