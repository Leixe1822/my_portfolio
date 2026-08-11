/* About 區塊：自我介紹、技能標籤與可拖曳拍立得 */
import { Code2 } from 'lucide-react'

import Draggable from '../../components/Draggable/Draggable'
import lexieProfileImage from '../../assets/images/lexie-profile.png'
import './About.css'

const basePath = import.meta.env.BASE_URL

/* About 優勢資料：統一管理卡片標題與說明 */
const strengths = [
  {
    title: '視覺敏感度',
    description: '具備藝術大學學習背景，重視版面、色彩、層級與整體視覺一致性。',
  },
  {
    title: '企劃與資訊整理',
    description: '能從目標與受眾出發，將零散或複雜的資訊整理成清楚易懂的內容。',
  },
  {
    title: '需求理解與溝通',
    description: '具備第一線客戶服務與貸款業務經驗，能主動釐清需求並耐心溝通。',
  },
  {
    title: '商業思維與執行力',
    description:
      '理解成果、時程與使用者需求之間的關係，並能持續追蹤問題直到完成。',
  },
  {
    title: '持續學習／持續實作',
    description:
      '持續學習 HTML、CSS、JavaScript 與 React，並透過作品練習前端實作。',
  },
]

function About() {
  return (
    <section className="about-section" id="about">
      {/* 上方弧形分隔線 */}
      <div className="about-section__curve" aria-hidden="true" />

      <div className="about-section__container">
        {/* 左側可拖曳拍立得 */}
        <Draggable
          className="about-section__photo-drag about-section__photo-drag--left"
          storageKey="about-lexie-polaroid-position"
        >
          <figure className="about-section__polaroid about-section__polaroid--left">
            <div className="about-section__photo about-section__photo--portrait">
              <img
                src={lexieProfileImage}
                alt="Lexie 的個人照片"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>

            <figcaption>lexie</figcaption>
          </figure>
        </Draggable>

        {/* 中間自我介紹 */}
        <div className="about-section__content">
          <div className="about-section__title-box">
            <p>about me</p>
          </div>

          {/* 手機版固定照片：避免拖曳拍立得在窄螢幕跑位 */}
          <figure className="about-section__mobile-polaroid">
            <div className="about-section__photo about-section__photo--portrait">
              <img
                src={lexieProfileImage}
                alt="Lexie 的個人照片"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>

            <figcaption>lexie</figcaption>
          </figure>

          <h2 className="about-section__introduction">
            不只寫程式，也理解使用者與商業需求
          </h2>

          <p className="about-section__description">
            我是 Lexie，畢業於國立臺灣藝術大學，目前正朝前端工程師發展。
          </p>

          <p className="about-section__description">
            過去曾從事行銷企劃與銀行貸款業務。行銷工作培養了我從目標受眾出發、
            規劃內容並整合資訊的能力；銀行貸款業務則讓我累積了第一線需求訪談、
            溝通協調、問題分析與流程追蹤的經驗。
          </p>

          <p className="about-section__description">
            這些經歷讓我理解，一個好的產品不只需要漂亮的畫面，
            更需要清楚的資訊架構、直覺的操作流程，以及對使用者真正需求的理解。
          </p>

          <p className="about-section__description">
            目前我持續學習 HTML、CSS、JavaScript 與
            React，並透過作品練習元件拆分、
            狀態管理、響應式排版與互動功能。我希望結合過去累積的視覺敏感度、
            企劃思維與客戶溝通能力，成為能同時理解設計、使用者與商業目標的前端工程師。
          </p>

          {/* 優勢列表 */}
          <div className="about-section__strengths">
            <h3>我的優勢</h3>

            <div className="about-section__strength-track">
              {[...strengths, ...strengths].map(
                ({ title, description }, index) => (
                  <article
                    className="about-section__strength"
                    key={`${title}-${index}`}
                    aria-hidden={index >= strengths.length}
                  >
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>

        {/* 右側可拖曳拍立得 */}
        <Draggable
          className="about-section__photo-drag about-section__photo-drag--right"
          storageKey="about-workspace-polaroid-position"
        >
          <figure className="about-section__polaroid about-section__polaroid--right">
            <div className="about-section__photo about-section__photo--workspace">
              <img
                src={`${basePath}images/workspace.svg`}
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
