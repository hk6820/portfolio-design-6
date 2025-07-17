// PortfolioSection.jsx
import React from 'react';
import Slider from 'react-slick';
import './Portfolio.css';

const PortfolioSection = ({ heading, projects = [], id, viewProjectText }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards by default
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Below 768px (mobile)
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };


  return (
    <section className="portfolio-section" id={id || "portfolio"}>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>{heading}</h2>
        </div>
        <div className="portfolio-slider-wrapper">
          <Slider {...settings} className="portfolio-slider">
            {projects.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <div className="portfolio-image-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-image" />
                </div>
                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="view-project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {viewProjectText || 'View Project'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>

  );
};

export default PortfolioSection;