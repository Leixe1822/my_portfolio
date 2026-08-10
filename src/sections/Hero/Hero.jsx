/* Hero 區塊：首頁首屏，包含即時時間、可拖曳姓名與聯絡 CTA */
import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

import Draggable from '../../components/Draggable/Draggable'
import profile from '../../data/profile'
import './Hero.css'

/* 固定用台灣時區格式化首頁時間 */
const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Taipei',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
})

function getCurrentTime() {
  return timeFormatter.format(new Date())
}

function Hero() {
  /* 首頁顯示即時台灣時間 */
  const [currentTime, setCurrentTime] = useState(getCurrentTime)

  /* 每秒更新台灣時間 */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      {/* 時間欄 */}
      <div className="hero__timebar">
        <span className="hero__timebar-label">LOCAL TIME</span>

        <time className="hero__time">{currentTime}</time>

        <span className="hero__timebar-location">目前專注 React 前端開發</span>
      </div>

      <div className="hero__canvas">
        <p className="hero__document-name">前端作品集 / {profile.year}</p>

        {/* 姓名互動區：便利貼與姓名都可以拖曳 */}
        <div className="hero__identity">
          {/* 左邊可拖曳便利貼 */}
          <Draggable className="hero__drag hero__drag--current">
            <div className="hero__note hero__note--current">
              目前專注 React 前端開發
            </div>
          </Draggable>

          <p className="hero__handwriting">嗨，我是</p>

          {/* 右邊可拖曳便利貼 */}
          <Draggable className="hero__drag hero__drag--previous">
            <div className="hero__note hero__note--previous">
              行銷企劃 × 銀行貸款業務
            </div>
          </Draggable>

          {/* 可拖曳姓名 */}
          <Draggable className="hero__name-drag">
            <div className="hero__name-box">
              <span className="hero__handle hero__handle--top-left" />
              <span className="hero__handle hero__handle--top-right" />

              <h1 className="hero__name">{profile.name}</h1>

              <span className="hero__handle hero__handle--bottom-left" />
              <span className="hero__handle hero__handle--bottom-right" />
            </div>
          </Draggable>

          {/* 求職狀態 */}
          <div className="hero__available">
            <span className="hero__available-dot" />
            <span>正在尋找初階前端工程師機會</span>
          </div>
        </div>

        {/* 下方介紹：角色、簡介與聯絡按鈕 */}
        <div className="hero__bottom">
          <span className="hero__tag hero__tag--role">{profile.role}</span>

          <div className="hero__intro">
            <h2>
              結合視覺敏感度與商業思維，
              <br />
              打造清楚好用的網頁體驗。
            </h2>

            <p>
              畢業於國立臺灣藝術大學，曾任行銷企劃與銀行貸款業務。
              過往經歷讓我具備內容企劃、需求理解、溝通協調與目標導向的執行能力。
              現在專注於 React 前端開發，希望將視覺、使用者需求與技術整合，
              打造兼具美感與實用性的數位產品。
            </p>

            <a className="hero__contact" href="#contact">
              <span>查看聯絡方式</span>

              <span className="hero__contact-icon" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          <span className="hero__tag hero__tag--location">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
