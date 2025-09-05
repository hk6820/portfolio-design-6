// Configuration Helper
// This file provides helper functions to make portfolio configuration easier

import { FaCode, FaPaintBrush, FaMobileAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa';

// Helper function to create social links
export const createSocialLink = (type, url) => {
  const icons = {
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    twitter: <FaTwitter />
  };
  
  return {
    type,
    url,
    icon: icons[type] || null
  };
};

// Helper function to create navigation links
export const createNavLink = (label, href) => {
  const icons = {
    home: <FaHome />,
    about: <FaUser />,
    portfolio: <FaBriefcase />,
    services: <FaTools />,
    contact: <FaEnvelope />
  };
  
  return {
    label,
    href,
    icon: icons[label.toLowerCase()] || null
  };
};

// Helper function to create service items
export const createService = (title, description, iconType = 'code') => {
  const icons = {
    code: <FaCode />,
    design: <FaPaintBrush />,
    mobile: <FaMobileAlt />
  };
  
  return {
    icon: icons[iconType] || <FaCode />,
    title,
    description
  };
};

// Helper function to create project items
export const createProject = (title, description, imagePath, link, technologies = []) => {
  return {
    title,
    description,
    image: imagePath,
    link,
    technologies
  };
};

// Helper function to create about info items
export const createAboutInfo = (label, value) => {
  return { label, value };
};

// Helper function to create skill items
export const createSkill = (name, level) => {
  return { name, level };
};

// Validation helpers
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateSkillLevel = (level) => {
  return typeof level === 'number' && level >= 0 && level <= 100;
};

// Configuration validator
export const validatePortfolioConfig = (config) => {
  const errors = [];
  
  // Required fields
  if (!config.name) errors.push('Name is required');
  if (!config.headline) errors.push('Headline is required');
  if (!config.aboutDescription) errors.push('About description is required');
  
  // Email validation
  if (config.contactInfo?.email && !validateEmail(config.contactInfo.email)) {
    errors.push('Invalid email format');
  }
  
  // URL validation
  if (config.socialLinks) {
    config.socialLinks.forEach((link, index) => {
      if (!validateUrl(link.url)) {
        errors.push(`Invalid URL in social link ${index + 1}`);
      }
    });
  }
  
  // Skills validation
  if (config.skills) {
    config.skills.forEach((skill, index) => {
      if (!validateSkillLevel(skill.level)) {
        errors.push(`Invalid skill level in skill ${index + 1}`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Example configuration generator
export const generateExampleConfig = () => {
  return {
    name: "Your Name",
    headline: "Your Professional Headline",
    subHeadline: "Your Role | Specialization | Tagline",
    aboutDescription: "Tell your story here...",
    socialLinks: [
      createSocialLink('linkedin', 'https://linkedin.com/in/yourprofile'),
      createSocialLink('github', 'https://github.com/yourusername'),
      createSocialLink('twitter', 'https://twitter.com/yourusername')
    ],
    services: [
      createService('Web Development', 'Building modern web applications', 'code'),
      createService('UI/UX Design', 'Creating beautiful user experiences', 'design'),
      createService('Mobile Apps', 'Developing mobile applications', 'mobile')
    ],
    skills: [
      createSkill('React', 90),
      createSkill('JavaScript', 85),
      createSkill('CSS', 80)
    ],
    aboutInfo: [
      createAboutInfo('Location', 'Your City, Country'),
      createAboutInfo('Email', 'your@email.com'),
      createAboutInfo('Phone', '+123 456 7890')
    ]
  };
};

export default {
  createSocialLink,
  createNavLink,
  createService,
  createProject,
  createAboutInfo,
  createSkill,
  validateEmail,
  validateUrl,
  validateSkillLevel,
  validatePortfolioConfig,
  generateExampleConfig
};
