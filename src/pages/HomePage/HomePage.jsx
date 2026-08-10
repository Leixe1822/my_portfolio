/* HomePage 頁面：首頁內容，包含 Hero、簡短介紹與聯絡區 */
import { Link } from 'react-router-dom'

import Hero from '../../sections/Hero/Hero'
import Contact from '../../sections/Contact/Contact'

import './HomePage.css'

function HomePage() {
  /* 首頁短版技能標籤，搭配 index 決定不同顏色 */
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'Responsive Design',
  ]

  return (
    <main className="home-page">
      {/* 首頁第一屏互動畫布 */}
      <Hero />

      {/* 首頁簡短自我介紹 */}
      <section className="home-about">
        <div className="home-about__heading">
          <p>01 / A LITTLE ABOUT ME</p>

          <h2>
            FROM BANKING
            <span>TO FRONTEND.</span>
          </h2>
        </div>

        <div className="home-about__content">
          <p className="home-about__label">WHAT&apos;S UP!</p>

          <p className="home-about__description">
            嗨，我是 Lexie。過去曾在銀行擔任業務， 現在正在轉職成為前端工程師。
          </p>

          <p className="home-about__description">
            銀行工作讓我學會理解需求、清楚溝通以及處理問題。
            現在我把這些能力帶進前端開發，
            將複雜的資訊整理成清楚且容易操作的網頁體驗。
          </p>

          <Link className="home-about__link" to="/about">
            MORE ABOUT ME
            <span>↗</span>
          </Link>
        </div>

        {/* 使用 map 產生技能標籤 */}
        <div className="home-about__skills">
          {skills.map((skill, index) => (
            <span
              className={`home-about__skill home-about__skill--${
                (index % 4) + 1
              }`}
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 首頁聯絡區 */}
      <Contact />
    </main>
  )
}

export default HomePage
