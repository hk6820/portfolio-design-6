// About.js
import React from 'react';
import './About.css';
import { FaAngleRight } from 'react-icons/fa';
import SkillsSection from '../components/SkillsSection';
import resumePDF from '../assets/Resume.pdf';

const About = ({
    heading,
    subheading,
    introText,
    profileImage,
    description,
    infoHeading,
    id,
    info = [], 
    skills = [],
    skillsHeading,
    skillsDescription
}) => {
    return (
        <section className="about-section" id={id || "about"}>
            <div className="about-heading fade-in">
                <h2>{heading}</h2>
                <p>{subheading}</p>
            </div>

            <div className="about-content fade-in-delay">
                <div className="about-left">
                    <img src={profileImage} alt="About" className="profile-photo" />
                </div>

                <div className="about-right">
                    <h3>{infoHeading || 'UI/UX Designer & Web Developer'}</h3>
                    <p className="intro-text">{introText}</p>

                    <div className="info-grid">
                        {info.map(({ label, value }, idx) => (
                            <div key={idx} className="info-item">
                                <FaAngleRight className="info-icon" />
                                <strong>{label}:</strong> <span>{value}</span>
                            </div>
                        ))}
                    </div>

                    <p className="description fade-in-late">{description}</p>
                </div>
            </div>
            <div className="download-resume-container">
                <a
                    href={resumePDF}
                    download
                    className="download-resume-btn"
                >
                    Download Resume
                </a>
            </div>
            {/* Skills Section */}
            <SkillsSection
                heading={skillsHeading || "Skills"}
                description={skillsDescription || "Hover to see my core competencies and tools I work with"}
                skills={skills}
            />

        </section>
    );
};

export default About;
