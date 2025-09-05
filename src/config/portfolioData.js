// Portfolio Data Configuration
// Update this file with your personal information

// Import assets
import profileImg from '../assets/profile.png';
import targetImg from '../assets/target1.png';
import projimg1 from '../assets/project1.png';
import projimg2 from '../assets/project2.png';
import projimg3 from '../assets/project3.png';
import resumePDF from '../assets/Resume.pdf';

// Import icons
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa';
import { FaCode, FaPaintBrush, FaMobileAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

// Navigation Links
export const navLinks = [
  { label: 'Home', href: '#home', icon: <FaHome /> },
  { label: 'About', href: '#about', icon: <FaUser /> },
  { label: 'Portfolio', href: '#portfolio', icon: <FaBriefcase /> },
  { label: 'Services', href: '#services', icon: <FaTools /> },
  { label: 'Contact', href: '#contact', icon: <FaEnvelope /> }
];

// Personal Information
export const personalInfo = {
  // Basic Info
  name: "Alex Smith",
  profileImage: profileImg,
  targetImage: targetImg,
  resumePDF: resumePDF,
  
  // Navigation Links
  navLinks: [
    { label: 'Home', href: '#home', icon: <FaHome /> },
    { label: 'About', href: '#about', icon: <FaUser /> },
    { label: 'Portfolio', href: '#portfolio', icon: <FaBriefcase /> },
    { label: 'Services', href: '#services', icon: <FaTools /> },
    { label: 'Contact', href: '#contact', icon: <FaEnvelope /> }
  ],
  
  // Home Section
  headline: "I Craft Content That Converts",
  subHeadline: "Content Marketer | SEO Strategist | Copywriting Enthusiast",
  ctaPrimary: "View My Work",
  ctaSecondary: "Let's Collaborate",
  
  // About Section
  aboutHeading: "About",
  aboutSubheading: "Some creative subheading goes here.",
  aboutInfoHeading: "UI/UX Designer & Web Developer",
  aboutIntroText: "I love solving problems and building products.",
  aboutDescription: "I specialize in turning ideas into high-performing digital experiences. With a passion for UI/UX, I blend creativity and logic to design clean, functional web interfaces.",
  
  // About Info Grid
  aboutInfo: [
    { label: 'Birthday', value: '1 May 1995' },
    { label: 'Website', value: 'www.example.com' },
    { label: 'Phone', value: '+123 456 7890' },
    { label: 'City', value: 'New York, USA' },
    { label: 'Age', value: '30' },
    { label: 'Degree', value: 'Master' },
    { label: 'Email', value: 'email@example.com' },
    { label: 'Freelance', value: 'Available' }
  ],
  
  // Skills
  skills: [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'Photoshop', level: 55 },
  ],
  
  // Social Links
  socialLinks: [
    { type: 'facebook', url: 'https://facebook.com', icon: <FaFacebook /> },
    { type: 'instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
    { type: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    { type: 'github', url: 'https://github.com', icon: <FaGithub /> },
    { type: 'twitter', url: 'https://twitter.com', icon: <FaTwitter /> }
  ],
  
  // Services
  services: [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building fast, responsive and SEO-friendly websites using modern frameworks.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences from wireframes to prototypes.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Design',
      description: 'Crafting engaging mobile-first interfaces with a strong focus on usability.'
    }
  ],
  
  // Portfolio Projects
  projects: [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio built with React and CSS.',
      image: projimg1,
      link: 'https://example.com/project1',
      technologies: ['React', 'CSS3', 'JavaScript']
    },
    {
      title: 'UI Component Library',
      description: 'Reusable components built for scalability.',
      image: projimg2,
      link: 'https://example.com/project2',
      technologies: ['React', 'TypeScript', 'Storybook']
    },
    {
      title: 'E-commerce Dashboard',
      description: 'An admin panel to manage orders and analytics.',
      image: projimg3,
      link: 'https://example.com/project3',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ],
  
  // Contact Information
  contactInfo: {
    email: 'you@example.com',
    phone: '+91 9876543210',
    location: 'New Delhi, India'
  },
  
  // Section Headings
  sectionHeadings: {
    portfolio: {
      heading: "My Projects",
      subheading: "Some recent works I've done",
      viewProjectText: "View Project"
    },
    services: {
      heading: "My Services",
      subheading: "I offer end-to-end design and development solutions tailored to your needs."
    },
    contact: {
      heading: "Contact Me",
      subheading: "Let's work together or just say hello!"
    },
    skills: {
      heading: "Skills",
      description: "Hover to see my core competencies and tools I work with"
    }
  }
};

// Email Configuration (Update with your EmailJS credentials)
export const emailConfig = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key'
};

// Theme Configuration
export const themeConfig = {
  primaryColor: '#2563eb',
  secondaryColor: '#0ea5e9',
  textColor: '#111',
  backgroundColor: '#f9f9f9',
  cardBackground: '#ffffff'
};

export default personalInfo;
