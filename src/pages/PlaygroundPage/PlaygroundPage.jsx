/* PlaygroundPage 頁面：互動元件、資料夾滑動與拖曳卡片展示 */
import { ArrowUpRight, MousePointer2, Sparkles, Wand2 } from 'lucide-react'

import Draggable from '../../components/Draggable/Draggable'
import SlidingFolder from '../../components/SlidingFolder/SlidingFolder'
import './PlaygroundPage.css'

/* Playground 卡片資料，用來展示練習中的互動與 UI 技術 */
const experiments = [
  {
    title: 'Drag Notes',
    description: '可拖曳便利貼與視覺標籤，練習 pointer event。',
    icon: MousePointer2,
  },
  {
    title: 'Theme Switch',
    description: '用 CSS variables 建立雙主題切換。',
    icon: Sparkles,
  },
  {
    title: 'Micro UI',
    description: '把小元件拆成可以重複使用的 React component。',
    icon: Wand2,
  },
]

function PlaygroundPage() {
  return (
    <main className="playground-page">
      <section className="playground-page__canvas">
        <div className="playground-page__intro">
          <p>PLAYGROUND / INTERACTION LAB</p>
          <h1>Small experiments, messy canvas, useful ideas.</h1>
        </div>

        <Draggable className="playground-page__photo playground-page__photo--one">
          <div className="playground-page__image-card playground-page__image-card--mint">
            <span>Random shot</span>
          </div>
        </Draggable>

        <Draggable className="playground-page__photo playground-page__photo--two">
          <div className="playground-page__image-card playground-page__image-card--red">
            <span>Tiny moments</span>
          </div>
        </Draggable>

        <Draggable className="playground-page__note playground-page__note--blue">
          <span>Brain&apos;s messy, but it&apos;s okay</span>
        </Draggable>

        <Draggable className="playground-page__note playground-page__note--yellow">
          <span>Not sure what I&apos;m doing yet</span>
        </Draggable>

        <div className="playground-page__folder-demo">
          <SlidingFolder />
        </div>

        <a className="playground-page__contact" href="/#contact">
          CONTACT
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </a>

        <div className="playground-page__board">
          <p className="playground-page__board-label">DRAG THESE MINI NOTES</p>

          {experiments.map(({ title, description, icon: Icon }, index) => (
            <Draggable
              className={`playground-page__drag playground-page__drag--${index + 1}`}
              key={title}
            >
              <article className="playground-page__card">
                <Icon size={22} strokeWidth={2.4} />
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
            </Draggable>
          ))}
        </div>
      </section>
    </main>
  )
}

export default PlaygroundPage
