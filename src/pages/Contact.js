import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY,
} from '../components/emailConfig';
import './Contact.css';

const Contact = ({ heading, subheading, contactInfo = {}, id }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            formData,
            EMAIL_PUBLIC_KEY
        )
            .then(() => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('EmailJS Error:', err);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <section className="contact-section" id={id || 'contact'}>
            <div className="contact-header">
                <h2>{heading}</h2>
                <p>{subheading}</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    {contactInfo.email && (
                        <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                    )}
                    {contactInfo.phone && (
                        <p><strong>Phone:</strong> {contactInfo.phone}</p>
                    )}
                    {contactInfo.location && (
                        <p><strong>Location:</strong> {contactInfo.location}</p>
                    )}
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
