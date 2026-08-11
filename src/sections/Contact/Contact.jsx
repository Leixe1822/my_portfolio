/* Contact 區塊：顯示 Email、GitHub、LinkedIn 等聯絡入口 */
import profile from '../../data/profile'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__badge">
        <span className="contact-section__handle contact-section__handle--top-left" />
        <span className="contact-section__handle contact-section__handle--top-right" />
        <span className="contact-section__handle contact-section__handle--bottom-left" />
        <span className="contact-section__handle contact-section__handle--bottom-right" />

        <h2>CONTACT</h2>
      </div>

      <div className="contact-section__links" aria-label="Contact links">
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
