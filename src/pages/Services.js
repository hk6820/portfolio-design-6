// Services.jsx
import React from 'react';
import './Services.css';


const Services = ({ heading, subheading, services = [], id }) => {
    return (
        <section className="services-section" id={id || "services"}>
            <div className="services-header fade-in">
                <h2>{heading}</h2>
                <p>{subheading}</p>
            </div>

            <div className="services-grid fade-in-delay">
                {services.map(({ icon, title, description }, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{icon}</div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
