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
            嗨，我是 Lexie。畢業於國立臺灣藝術大學，曾任行銷企劃與銀行貸款業務。
          </p>

          <p className="home-about__description">
            過往經歷讓我具備內容企劃、需求理解、溝通協調與目標導向的執行能力。
            現在專注於 React 前端開發，希望將視覺、使用者需求與技術整合，
            打造兼具美感與實用性的數位產品。
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
