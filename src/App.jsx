/* 全站主元件：管理主題、共用導覽列、頁尾與各頁路由 */
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import WorkPage from './pages/WorkPage/WorkPage'
import PlaygroundPage from './pages/PlaygroundPage/PlaygroundPage'

/* App 負責全站共用版面：主題、Navbar、路由與 Footer */
function App() {
  const location = useLocation()

  /* 網站目前使用的主題 */
  const [theme, setTheme] = useState('mint')

  /* 將目前主題設定在 html 的 data-theme */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  /* 切換薄荷與深藍螢光綠主題 */
  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'mint' ? 'neon' : 'mint'))
  }

  return (
    <>
      {/* 所有頁面共用的導覽列 */}
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      {/* key 使用 pathname，讓換頁時重新觸發滑入動畫 */}
      <div className="page-slide" key={location.pathname}>
        {/* 根據網址顯示不同頁面 */}
        <Routes location={location}>
          {/* 首頁，裡面包含 Hero 和 About */}
          <Route path="/" element={<HomePage />} />

          {/* 關於我頁面 */}
          <Route path="/about" element={<AboutPage />} />

          {/* 作品頁面 */}
          <Route path="/work" element={<WorkPage />} />

          {/* 練習作品頁面 */}
          <Route path="/playground" element={<PlaygroundPage />} />

          {/* 不存在的網址回到首頁 */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>

      {/* 所有頁面共用的頁尾 */}
      <Footer />
    </>
  )
}

export default App
