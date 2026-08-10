/* SlidingFolder 元件：用資料夾 tab 呈現可滑動切換的內容面板 */
import { useState } from 'react'
import { FolderOpen } from 'lucide-react'
import './SlidingFolder.css'

const folderItems = [
  {
    id: 'profile',
    label: 'Profile',
    title: 'Frontend portfolio folder',
    description:
      '整理個人介紹、技能、作品與練習紀錄，像打開資料夾一樣切換內容。',
  },
  {
    id: 'work',
    label: 'Work',
    title: 'Selected case studies',
    description:
      '放置 React 練習、UI 版面與互動作品，未來可以接到真實專案頁面。',
  },
  {
    id: 'lab',
    label: 'Lab',
    title: 'Playground experiments',
    description: '用來測試拖曳、主題切換、滑動動畫與小型互動元件。',
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
              className="sliding-folder__panel"
              id={`folder-panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`folder-tab-${item.id}`}
              key={item.id}
            >
              <FolderOpen size={38} strokeWidth={2.2} />
              <p>{item.label.toUpperCase()} / FOLDER</p>
              <h2>{item.title}</h2>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SlidingFolder
