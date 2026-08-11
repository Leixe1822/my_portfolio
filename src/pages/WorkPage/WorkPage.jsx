/* WorkPage 頁面：呈現作品標題與 Projects 卡片列表 */
import Projects from '../../sections/Projects/Projects'
import './WorkPage.css'

function WorkPage() {
  return (
    <main className="work-page">
      <section className="work-page__hero">
        <p>WORK / CASE STUDIES</p>
        <h1>Projects</h1>

        {/* 作品頁小裝飾：輕量標記，不搶下方作品卡重點 */}
        <div className="work-page__mini-mark" aria-hidden="true">
          <span />
          03 works
        </div>
      </section>

      <Projects />
    </main>
  )
}

export default WorkPage
