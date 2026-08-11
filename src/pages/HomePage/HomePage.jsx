/* HomePage 頁面：首頁內容，包含 Hero、簡短介紹與聯絡區 */
import { useEffect, useRef, useState } from 'react'

import profile from '../../data/profile'
import Hero from '../../sections/Hero/Hero'
import Contact from '../../sections/Contact/Contact'

import './HomePage.css'

function HomePage() {
  const codeCardRef = useRef(null)
  const [hasCodeStarted, setHasCodeStarted] = useState(false)

  /* 首頁短版技能標籤，搭配 index 決定不同顏色 */
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'Responsive Design',
  ]

  /* 滑到 About code 卡片時才開始打字動畫 */
  useEffect(() => {
    const codeCard = codeCardRef.current

    if (!codeCard || hasCodeStarted) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasCodeStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(codeCard)

    return () => observer.disconnect()
  }, [hasCodeStarted])

  return (
    <main className="home-page">
      {/* 首頁第一屏互動畫布 */}
      <Hero />

      {/* 首頁簡短自我介紹 */}
      <section className={`home-about ${hasCodeStarted ? 'is-active' : ''}`}>
        <div className="home-about__heading">
          <span className="home-about__role-badge">
            {profile.role.toUpperCase()}
          </span>

          <h2>
            FROM BANKING
            <span>TO FRONTEND.</span>
          </h2>
        </div>

        <div
          className={`home-about__code-card ${
            hasCodeStarted ? 'is-typing' : ''
          }`}
          ref={codeCardRef}
          aria-label="developer profile"
        >
          <div className="home-about__code-header">
            <span className="home-about__code-dot home-about__code-dot--red" />
            <span className="home-about__code-dot home-about__code-dot--yellow" />
            <span className="home-about__code-dot home-about__code-dot--green" />
            <span className="home-about__code-file">developer.js</span>
          </div>

          <pre className="home-about__code">
            <code>
              <span className="home-about__code-line">
                <span className="home-about__code-keyword">const</span>{' '}
                <span className="home-about__code-variable">developer</span> ={' '}
                {'{'}
              </span>
              <span className="home-about__code-line">
                {'  '}name:{' '}
                <span className="home-about__code-string">
                  &quot;緯緯&quot;
                </span>
                ,
              </span>
              <span className="home-about__code-line">
                {'  '}role:{' '}
                <span className="home-about__code-string">
                  &quot;Frontend Developer&quot;
                </span>
                ,
              </span>
              <span className="home-about__code-line">
                {'  '}location:{' '}
                <span className="home-about__code-string">
                  &quot;Kaohsiung, Taiwan&quot;
                </span>
                ,
              </span>
              <span className="home-about__code-line">
                {'  '}strengths: [
                <span className="home-about__code-string">
                  &quot;同理心&quot;
                </span>
                ,{' '}
                <span className="home-about__code-string">
                  &quot;溝通力&quot;
                </span>
                ],
              </span>
              <span className="home-about__code-line">
                {'  '}learning:{' '}
                <span className="home-about__code-string">
                  &quot;Every day&quot;
                </span>
              </span>
              <span className="home-about__code-line">{'}'};</span>
            </code>
          </pre>
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
