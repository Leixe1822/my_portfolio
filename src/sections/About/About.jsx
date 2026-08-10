/* About 區塊：自我介紹、技能標籤與可拖曳拍立得 */
import {
  Blocks,
  Braces,
  Code2,
  Component,
  GitBranch,
  LayoutTemplate,
  Palette,
  Smartphone,
} from 'lucide-react'

import Draggable from '../../components/Draggable/Draggable'
import './About.css'

/* 技能資料：每個項目指定名稱、lucide icon 與對應色票 class */
const skills = [
  {
    name: 'HTML',
    icon: Code2,
    color: 'yellow',
  },
  {
    name: 'CSS',
    icon: Palette,
    color: 'mint',
  },
  {
    name: 'JavaScript',
    icon: Braces,
    color: 'pink',
  },
  {
    name: 'React',
    icon: Component,
    color: 'blue',
  },
  {
    name: 'Responsive Design',
    icon: Smartphone,
    color: 'purple',
  },
  {
    name: 'GitHub',
    icon: GitBranch,
    color: 'green',
  },
  {
    name: 'UI Layout',
    icon: LayoutTemplate,
    color: 'orange',
  },
  {
    name: 'Components',
    icon: Blocks,
    color: 'cyan',
  },
]

function About() {
  return (
    <section className="about-section" id="about">
      {/* 上方弧形分隔線 */}
      <div className="about-section__curve" aria-hidden="true" />

      <div className="about-section__container">
        <p className="about-section__handwriting">about me!</p>

        {/* 左側可拖曳拍立得 */}
        <Draggable className="about-section__photo-drag about-section__photo-drag--left">
          <figure className="about-section__polaroid about-section__polaroid--left">
            <div className="about-section__photo">
              <img
                src="/images/profile.svg"
                alt="Lexie 的個人照片"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />

              <span>LEXIE</span>
            </div>

            <figcaption>2026</figcaption>
          </figure>
        </Draggable>

        {/* 中間自我介紹 */}
        <div className="about-section__content">
          <div className="about-section__title-box">
            <span className="about-section__handle about-section__handle--top-left" />
            <span className="about-section__handle about-section__handle--top-right" />

            <p>what&apos;s up</p>

            <span className="about-section__handle about-section__handle--bottom-left" />
            <span className="about-section__handle about-section__handle--bottom-right" />
          </div>

          <h2 className="about-section__introduction">
            I&apos;m <strong>Lexie</strong>, a junior frontend developer based
            in <span className="about-section__highlight">Kaohsiung</span> who
            enjoys turning complicated information into clear and thoughtful
            digital experiences.
          </h2>

          <p className="about-section__description">
            過去從事銀行業務，累積了溝通、需求分析與問題解決的經驗。
            現在專注學習前端開發，希望把對使用者需求的理解，轉化成清楚、
            好用而且具有質感的網頁體驗。
          </p>

          {/* 技能列表 */}
          <div className="about-section__skills">
            {skills.map(({ name, icon: Icon, color }) => (
              <div
                className={`about-section__skill about-section__skill--${color}`}
                key={name}
              >
                <Icon size={20} strokeWidth={2.2} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 右側可拖曳拍立得 */}
        <Draggable className="about-section__photo-drag about-section__photo-drag--right">
          <figure className="about-section__polaroid about-section__polaroid--right">
            <div className="about-section__photo about-section__photo--workspace">
              <img
                src="/images/workspace.svg"
                alt="Lexie 的工作空間"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />

              <Code2 size={54} strokeWidth={1.5} />
            </div>

            <figcaption>my workspace</figcaption>
          </figure>
        </Draggable>

        <div className="about-section__status">
          <span className="about-section__status-dot" />
          ALWAYS LEARNING / ALWAYS BUILDING
        </div>
      </div>
    </section>
  )
}

export default About
