/* Hero 區塊：首頁首屏，包含即時時間、可拖曳姓名與狀態標籤 */
import { useEffect, useState } from 'react'

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

        <span className="hero__timebar-location">
          {profile.location.toUpperCase().replace(', ', ' / ')}
        </span>
      </div>

      <div className="hero__canvas">
        <p className="hero__document-name">PORTFOLIO / {profile.year}</p>

        {/* 首頁畫布裝飾：用軌道、座標與印章增加設計工具感 */}
        <div className="hero__orbit" aria-hidden="true" />

        <div
          className="hero__coordinate hero__coordinate--left"
          aria-hidden="true"
        >
          x 182 / y 026
        </div>

        <div
          className="hero__coordinate hero__coordinate--right"
          aria-hidden="true"
        >
          grid 96px
        </div>

        <div className="hero__stamp" aria-hidden="true">
          React Mode
        </div>

        <div className="hero__blueprint" aria-hidden="true">
          <span className="hero__blueprint-label">component map</span>
          <span className="hero__blueprint-row" />
          <span className="hero__blueprint-row" />
          <span className="hero__blueprint-row" />
        </div>

        {/* 姓名互動區：便利貼與姓名都可以拖曳 */}
        <div className="hero__identity">
          {/* 左邊可拖曳便利貼 */}
          <Draggable className="hero__drag hero__drag--current">
            <div className="hero__note hero__note--current">
              Currently learning React
            </div>
          </Draggable>

          <p className="hero__handwriting">my name is</p>

          {/* 右邊可拖曳便利貼 */}
          <Draggable className="hero__drag hero__drag--previous">
            <div className="hero__note hero__note--previous">
              Previously in banking
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
            <span>AVAILABLE FOR FRONTEND OPPORTUNITIES</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
