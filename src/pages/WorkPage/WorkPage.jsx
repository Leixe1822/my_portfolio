/* WorkPage 頁面：作品集列表與案例研究入口 */
import Projects from '../../sections/Projects/Projects'
import './WorkPage.css'

function WorkPage() {
  return (
    <main className="work-page">
      <section className="work-page__hero">
        <p>WORK / CASE STUDIES</p>
        <h1>Projects</h1>
      </section>

      <Projects />
    </main>
  )
}

export default WorkPage
