/* Navbar 元件：顯示頁面導覽、主題切換與聯絡按鈕 */
import { NavLink } from 'react-router-dom'

import {
  Asterisk,
  Blocks,
  CodeXml,
  Heart,
  House,
  Moon,
  PanelsTopLeft,
  Sun,
} from 'lucide-react'

import profile from '../../data/profile'
import './Navbar.css'

function Navbar({ theme, onToggleTheme }) {
  // 根據目前路由加入 active class
  function getLinkClass({ isActive }) {
    return isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
  }

  return (
    <header className="navbar">
      {/* 左側 Logo */}
      <NavLink className="navbar__logo" to="/" aria-label="回到首頁">
        <CodeXml size={25} strokeWidth={2.5} />
      </NavLink>

      {/* 頁面導覽 */}
      <nav className="navbar__links">
        <NavLink className={getLinkClass} to="/" end>
          <House size={15} strokeWidth={2.5} />
          HOME
        </NavLink>

        <NavLink className={getLinkClass} to="/about">
          <Asterisk size={16} strokeWidth={2.5} />
          ABOUT
        </NavLink>

        <NavLink className={getLinkClass} to="/work">
          <PanelsTopLeft size={15} strokeWidth={2.5} />
          CASE STUDIES
        </NavLink>

        <NavLink className={getLinkClass} to="/playground">
          <Blocks size={15} strokeWidth={2.5} />
          PLAYGROUND
        </NavLink>
      </nav>

      {/* Navbar 右側功能 */}
      <div className="navbar__actions">
        <span className="navbar__circle">{profile.language}</span>

        <button
          className="navbar__circle navbar__theme"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'mint' ? '切換成深色主題' : '切換成薄荷主題'}
        >
          {theme === 'mint' ? (
            <Moon size={15} strokeWidth={2.5} />
          ) : (
            <Sun size={15} strokeWidth={2.5} />
          )}
        </button>

        <a className="navbar__contact" href="/#contact">
          <Heart size={14} strokeWidth={2.5} />
          CONTACT
        </a>
      </div>
    </header>
  )
}

export default Navbar
