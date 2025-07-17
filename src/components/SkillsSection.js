import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const SkillsSection = ({ heading, description, skills = [] }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false); // for animation

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Always show skills on mobile
  useEffect(() => {
    if (isMobile) {
      setShowSkills(true);
      setLoaded(true); // trigger progress animation
    }
  }, [isMobile]);

  // Trigger progress animation when skills become visible
  useEffect(() => {
    if (showSkills) {
      const timer = setTimeout(() => setLoaded(true), 100); // delay ensures animation triggers
      return () => clearTimeout(timer);
    } else {
      setLoaded(false); // reset when hidden
    }
  }, [showSkills]);

  const handleMouseEnter = () => {
    if (!isMobile) setShowSkills(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setShowSkills(false);
  };

  return (
    <section
      className={`skills-section ${showSkills ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skills-header">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      <div className={`skills-wrapper ${showSkills ? 'expanded' : ''}`}>
        <div className="skills-list">
          {skills.map(({ name, level }, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-label">
                <span>{name}</span>
                <span>{level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className={`skill-progress ${loaded ? 'loaded' : ''}`}
                  style={{ '--progress': `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
