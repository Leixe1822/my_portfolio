/* PlaygroundPage 頁面：資料夾滑動展示 */
import { ArrowUpRight } from 'lucide-react'

import SlidingFolder from '../../components/SlidingFolder/SlidingFolder'
import './PlaygroundPage.css'

function PlaygroundPage() {
  return (
    <main className="playground-page">
      <section className="playground-page__canvas">
        <div className="playground-page__intro">
          <p>PLAYGROUND / INTERACTION LAB</p>
          <h1>Portfolio</h1>
        </div>

        <div className="playground-page__folder-demo">
          <SlidingFolder />
        </div>

        <a
          className="playground-page__contact"
          href="/#contact"
          aria-label="Go to contact section"
        >
          <span>CONTACT</span>
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </a>
      </section>
    </main>
  )
}

export default PlaygroundPage
