/* Contact 區塊：顯示 Email、GitHub、LinkedIn 等聯絡入口 */
import profile from '../../data/profile'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="contact-section__eyebrow">04 / CONTACT</p>

      <h2>Let&apos;s build the next screen.</h2>

      <div className="contact-section__links">
        <a href={`mailto:${profile.email}`}>EMAIL</a>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GITHUB
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
      </div>
    </section>
  )
}

export default Contact
