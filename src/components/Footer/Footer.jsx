/* Footer 元件：顯示作品集底部品牌與年份資訊 */
import profile from '../../data/profile'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <span>{profile.logoText}</span>
      <span>
        {profile.role.toUpperCase()} PORTFOLIO / {profile.year}
      </span>
    </footer>
  )
}

export default Footer
