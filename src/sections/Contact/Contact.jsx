/* Contact 區塊：顯示 Email、GitHub、LinkedIn 等聯絡入口 */
import { GitBranch, Link, Mail } from 'lucide-react'

import profile from '../../data/profile'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Contact 面板：用介面視窗承接聯絡入口 */}
      <div className="contact-section__panel">
        <div className="contact-section__panel-top" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>contact.card</p>
        </div>

        <div className="contact-section__content">
          <div className="contact-section__badge">
            <span className="contact-section__handle contact-section__handle--top-left" />
            <span className="contact-section__handle contact-section__handle--top-right" />
            <span className="contact-section__handle contact-section__handle--bottom-left" />
            <span className="contact-section__handle contact-section__handle--bottom-right" />

            <h2>CONTACT</h2>
          </div>

          <p className="contact-section__caption">
            Open to junior frontend opportunities and creative web projects.
          </p>

          <div className="contact-section__links" aria-label="Contact links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} strokeWidth={2.5} />
              <span>
                EMAIL
                <small>send message</small>
              </span>
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <GitBranch size={18} strokeWidth={2.5} />
              <span>
                GITHUB
                <small>view code</small>
              </span>
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <Link size={18} strokeWidth={2.5} />
              <span>
                LINKEDIN
                <small>connect</small>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
