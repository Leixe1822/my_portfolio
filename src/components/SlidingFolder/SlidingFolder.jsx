/* SlidingFolder 元件：用資料夾 tab 呈現可滑動切換的內容面板 */
import { useRef, useState } from 'react'
import { FolderOpen } from 'lucide-react'

import homePreview from '../../assets/images/home-preview.png'
import loanPlatformPreview from '../../assets/images/loan-platform-preview.png'
import profileMobilePreview from '../../assets/images/profile-mobile-preview.png'
import taishinMobilePreview from '../../assets/images/taishin-mobile-preview.png'
import eatwhatMobilePreview from '../../assets/images/eatwhat-mobile-preview.png'
import eatwhatHome from '../../assets/images/eatwhat-home.png'
import eatwhatExplore from '../../assets/images/eatwhat-explore.png'
import './SlidingFolder.css'

// 陣列順序對應分頁順序；slides 只用於多圖預覽，projectUrl 決定是否顯示 GO。
const folderItems = [
  {
    id: 'eatwhat',
    label: 'EatWhat',
    image: eatwhatHome,
    previewUrl: 'leixe1822.github.io/EatWhat/',
    projectUrl: 'https://leixe1822.github.io/EatWhat/',
    slides: [
      { image: eatwhatHome, name: { zh: '首頁', en: 'Home' } },
      {
        image: eatwhatExplore,
        name: { zh: '地圖搜尋結果頁', en: 'Map search results' },
      },
    ],
  },
  {
    id: 'profile',
    label: 'TAISHIN-BANK',
    title: 'Portfolio',
    description:
      '整理個人介紹、技能、作品與練習紀錄，像打開資料夾一樣切換內容。',
    image: loanPlatformPreview,
    imageAlt: '台新銀行線上申貸平台作品頁面截圖',
    previewUrl: 'leixe1822.github.io/TAISHIN-BANK',
    projectUrl: 'https://leixe1822.github.io/TAISHIN-BANK/',
  },
  {
    id: 'work',
    label: 'Profile',
    title: 'Selected case studies',
    description:
      '放置 React 練習、UI 版面與互動作品，未來可以接到真實專案頁面。',
    image: homePreview,
    imageAlt: '個人作品集首頁深色模式截圖',
    previewUrl: 'portfolio.home.preview',
    mobilePlaceholder: true,
    mobileImage: profileMobilePreview,
    mobileImageAlt: '個人作品集手機版首頁截圖',
  },
  {
    id: 'lab',
    label: 'RWD',
    title: 'Responsive mobile view',
    description: '手機版響應式畫面展示，之後可以放入作品的行動裝置截圖。',
    variant: 'mobile',
    image: taishinMobilePreview,
    imageAlt: '台新銀行線上申貸平台手機版截圖',
  },
]

/* 資料夾式切換元件：點擊上方 tab 時，下方內容會水平滑動 */
function SlidingFolder({ language = 'zh' }) {
  // 第一個分頁是 EatWhat；圖片索引獨立管理，切換分頁不會重設圖片。
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)
  // 手勢起點只用於計算位移，不需要觸發重新渲染。
  const touchStart = useRef(null)
  const locale = language === 'en' ? 'en' : 'zh'
  const slides = folderItems[0].slides

  // 加上圖片總數再取餘數，讓上一張與下一張都能循環切換。
  function changeSlide(step) {
    setSlideIndex((current) => (current + step + slides.length) % slides.length)
  }

  // 只接受超過 40px 且以水平方向為主的滑動，避免捲動頁面時誤切圖片。
  function handleTouchEnd(event) {
    const start = touchStart.current
    touchStart.current = null
    if (!start) return
    const end = event.changedTouches[0]
    const dx = end.clientX - start.x
    const dy = end.clientY - start.y
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      changeSlide(dx < 0 ? 1 : -1)
    }
  }

  return (
    <section className="sliding-folder" aria-label="Portfolio folder">
      <div className="sliding-folder__tabs" role="tablist">
        {folderItems.map((item, index) => (
          <button
            className={`sliding-folder__tab ${
              activeIndex === index ? 'sliding-folder__tab--active' : ''
            }`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`folder-panel-${item.id}`}
            id={`folder-tab-${item.id}`}
            key={item.id}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 非目前分頁使用 inert，避免鍵盤焦點進入畫面外的連結與按鈕。 */}
      <div className="sliding-folder__body">
        <div
          className="sliding-folder__track"
          style={{ '--active-folder': activeIndex }}
        >
          {folderItems.map((item, index) => (
            <article
              className={`sliding-folder__panel ${
                item.image || item.variant === 'mobile'
                  ? 'sliding-folder__panel--preview-only'
                  : ''
              } ${
                item.variant === 'mobile' ? 'sliding-folder__panel--phone' : ''
              }`}
              id={`folder-panel-${item.id}`}
              role="tabpanel"
              inert={activeIndex !== index}
              aria-hidden={activeIndex !== index}
              aria-labelledby={`folder-tab-${item.id}`}
              key={item.id}
            >
              {item.variant === 'mobile' ? (
                <div className="sliding-folder__mobile-showcase">
                  <div
                    className="sliding-folder__phone sliding-folder__phone--desktop-only"
                    aria-label="RWD mobile preview"
                  >
                    <div
                      className="sliding-folder__phone-top"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                    <div className="sliding-folder__phone-screen">
                      <img
                        src={eatwhatMobilePreview}
                        alt="EatWhat 手機版地圖搜尋結果截圖"
                      />
                    </div>
                  </div>
                  <div
                    className="sliding-folder__phone"
                    aria-label="Second RWD mobile preview"
                  >
                    <div
                      className="sliding-folder__phone-top"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                    <div className="sliding-folder__phone-screen">
                      <img src={item.image} alt={item.imageAlt} />
                    </div>
                  </div>
                </div>
              ) : item.image ? (
                <>
                  {item.mobilePlaceholder && (
                    <div className="sliding-folder__mobile-showcase sliding-folder__mobile-showcase--mobile-only">
                      <div
                        className="sliding-folder__phone"
                        aria-label="Profile mobile preview"
                      >
                        <div
                          className="sliding-folder__phone-top"
                          aria-hidden="true"
                        >
                          <span />
                        </div>
                        <div className="sliding-folder__phone-screen">
                          {item.mobileImage ? (
                            <img
                              src={item.mobileImage}
                              alt={item.mobileImageAlt}
                            />
                          ) : (
                            <div className="sliding-folder__phone-placeholder">
                              <p>RWD / MOBILE</p>
                              <span>下一張手機截圖</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="sliding-folder__preview-stack">
                    <figure className="sliding-folder__preview">
                      <div
                        className="sliding-folder__browser-bar"
                        aria-hidden="true"
                      >
                        <span />
                        <span />
                        <span />
                        <p>{item.previewUrl}</p>
                      </div>
                      {item.slides ? (
                        <div
                          className="sliding-folder__carousel"
                          onTouchStart={(event) => {
                            const touch = event.touches[0]
                            touchStart.current =
                              event.touches.length === 1
                                ? { x: touch.clientX, y: touch.clientY }
                                : null
                          }}
                          onTouchEnd={handleTouchEnd}
                          onTouchCancel={() => {
                            touchStart.current = null
                          }}
                        >
                          {item.slides.map((slide, index) => (
                            <img
                              key={slide.image}
                              className={
                                slideIndex === index ? 'is-active' : ''
                              }
                              src={slide.image}
                              alt={`EatWhat — ${slide.name[locale]}`}
                              aria-hidden={slideIndex !== index}
                              draggable={false}
                            />
                          ))}
                        </div>
                      ) : (
                        <img src={item.image} alt={item.imageAlt} />
                      )}

                      {item.projectUrl && (
                        <a
                          className="sliding-folder__project-link"
                          href={item.projectUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${item.label} project`}
                        >
                          GO
                        </a>
                      )}
                    </figure>
                    {/* 圓點可直接選圖；即時區域會朗讀目前頁碼及名稱。 */}
                    {item.slides && (
                      <div className="sliding-folder__carousel-controls">
                        <button
                          type="button"
                          onClick={() => changeSlide(-1)}
                          aria-label={
                            locale === 'en' ? 'Previous image' : '上一張圖片'
                          }
                        >
                          ←
                        </button>
                        <div className="sliding-folder__carousel-status">
                          <div className="sliding-folder__carousel-dots">
                            {item.slides.map((slide, index) => (
                              <button
                                key={slide.image}
                                type="button"
                                aria-label={`${index + 1}: ${slide.name[locale]}`}
                                aria-pressed={slideIndex === index}
                                onClick={() => setSlideIndex(index)}
                              />
                            ))}
                          </div>
                          <p aria-live="polite" aria-atomic="true">
                            {slideIndex + 1} / {item.slides.length} ·{' '}
                            {item.slides[slideIndex].name[locale]}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => changeSlide(1)}
                          aria-label={
                            locale === 'en' ? 'Next image' : '下一張圖片'
                          }
                        >
                          →
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <FolderOpen size={38} strokeWidth={2.2} />
                  <p>{item.label.toUpperCase()} / FOLDER</p>
                  <h2>{item.title}</h2>
                  <span>{item.description}</span>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SlidingFolder
