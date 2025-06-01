import './style sheets/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-heading">Let's Connect</h1>

      <div className="social-icon-links">
        <a href="https://www.linkedin.com/in/avaisaacson/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
        </a>
        <a href="https://github.com/avajeano" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/ava_jean/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="mailto:avajeano@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;