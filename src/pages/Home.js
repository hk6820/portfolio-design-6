import React from 'react';
import './Home.css';
import Sidebar from '../components/Sidebar';

const Home = ({
  name,
  roles,
  profileImage,
  targetImage,
  socialLinks,
  navLinks,
  headline,
  subHeadline,
  ctaPrimary,
  ctaSecondary,
  id
}) => {
  return (
    <div className="app-container" id={id || 'home'}>
      <Sidebar
        name={name}
        profileImage={profileImage}
        socialLinks={socialLinks}
        navLinks={navLinks}
      />

      <main
        className="hero-section"
        style={{
          backgroundImage: `url(${targetImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1 className="fade-in">{headline}</h1>
          <p className="fade-in-delay">{subHeadline}</p>
          <div className="cta-buttons fade-in-late">
            <button className="primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              {ctaPrimary}
            </button>

            <button className="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {ctaSecondary}
            </button>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
