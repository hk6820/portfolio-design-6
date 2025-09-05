import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaBars,
  FaTimes,
  FaArrowUp
} from 'react-icons/fa';
import './Sidebar.css';

const iconMap = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  github: <FaGithub />,
  twitter: <FaTwitter />
};

const Sidebar = ({ name, profileImage, socialLinks = [], navLinks = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="profile">
          {profileImage && (
            <img src={profileImage} alt="Profile" className="avatar" />
          )}
          {name && <h2>{name}</h2>}

          <div className="social-icons">
            {socialLinks && socialLinks.length > 0 ? (
              socialLinks.map(({ type, url, icon }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={type}
                >
                  {icon || iconMap[type.toLowerCase()] || type.charAt(0).toUpperCase()}
                </a>
              ))
            ) : (
              <div>No social links available</div>
            )}
          </div>
        </div>

        <nav className="nav-links">
          {navLinks && navLinks.length > 0 ? (
            navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={() => setIsOpen(false)}>
                <span className="nav-icon">{link.icon || '•'}</span>
                <span className="nav-label">{link.label}</span>
              </a>
            ))
          ) : (
            <div>No navigation links available</div>
          )}
        </nav>
      </aside>

      {/* Scroll to Top Button */}
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </>
  );
};

export default Sidebar;
