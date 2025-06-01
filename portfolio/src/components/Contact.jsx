import './style sheets/Contact.css'

function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-heading">Let's Connect</h1>

      <div className="social-icon-links">
        <a href="https://www.linkedin.com/in/avaisaacson/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/avajeano" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="mailto:avajeano@gmail.com">
          <img src={emailIcon} alt="Email" className="social-icon" />
        </a>
      </div>
    </section>
  )
}
  
export default Contact;  