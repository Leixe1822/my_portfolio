/* SlidingFolder 元件：用資料夾 tab 呈現可滑動切換的內容面板 */
import { useState } from 'react'
import { FolderOpen } from 'lucide-react'

import homePreview from '../../assets/images/home-preview.png'
import loanPlatformPreview from '../../assets/images/loan-platform-preview.png'
import taishinMobilePreview from '../../assets/images/taishin-mobile-preview.png'
import './SlidingFolder.css'

const folderItems = [
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
function SlidingFolder() {
  const [activeIndex, setActiveIndex] = useState(0)

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

      <div className="sliding-folder__body">
        <div
          className="sliding-folder__track"
          style={{ '--active-folder': activeIndex }}
        >
          {folderItems.map((item) => (
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
                      <div className="sliding-folder__phone-placeholder">
                        <p>RWD / MOBILE</p>
                        <span>下一張手機截圖</span>
                      </div>
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
                          <div className="sliding-folder__phone-placeholder">
                            <p>RWD / MOBILE</p>
                            <span>下一張手機截圖</span>
                          </div>
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
                      <img src={item.image} alt={item.imageAlt} />

                      {item.projectUrl && (
                        <a
                          className="sliding-folder__project-link"
                          href={item.projectUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open Taishin Bank project"
                        >
                          GO
                        </a>
                      )}
                    </figure>
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
