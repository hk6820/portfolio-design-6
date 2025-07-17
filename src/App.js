import Home from './pages/Home';
import targetImg from './assets/target1.png'
import profile from './assets/profile.png'
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PortfolioSection from './pages/Portfolio';
import projimg1 from './assets/project1.png';
import projimg2 from './assets/project2.png';
import projimg3 from './assets/project3.png';

const navLinks = [
  { label: 'Home', href: '#home', icon: <FaHome /> },
  { label: 'About', href: '#about', icon: <FaUser /> },
  { label: 'Portfolio', href: '#portfolio', icon: <FaBriefcase /> },
  { label: 'Services', href: '#services', icon: <FaTools /> },
  { label: 'Contact', href: '#contact', icon: <FaEnvelope /> }
]
const skills = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'Photoshop', level: 55 },
]
const services = [
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
]
const socialLinks = [
  { type: 'facebook', url: 'https://facebook.com' },
  { type: 'instagram', url: 'https://instagram.com' },
  { type: 'linkedin', url: 'https://linkedin.com' }
]
const aboutInfo = [
  { label: 'Birthday', value: '1 May 1995' },
  { label: 'Website', value: 'www.example.com' },
  { label: 'Phone', value: '+123 456 7890' },
  { label: 'City', value: 'New York, USA' },
  { label: 'Age', value: '30' },
  { label: 'Degree', value: 'Master' },
  { label: 'Email', value: 'email@example.com' },
  { label: 'Freelance', value: 'Available' }
]
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React and CSS.',
    image: projimg1,
    link: 'https://example.com/project1',
  },
  {
    title: 'UI Component Library',
    description: 'Reusable components built for scalability.',
    image: projimg2,
    link: 'https://example.com/project2',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'An admin panel to manage orders and analytics.',
    image: projimg3,
    link: 'https://example.com/project3',
  },
];

const contactInfo = {
  email: 'you@example.com',
  phone: '+91 9876543210',
  location: 'New Delhi, India'
}

const App = () => {
  return (
    <>
      <Home
        name="Alex Smith"
        profileImage={profile}
        targetImage={targetImg}
        id='home'
        headline="I Craft Content That Converts"
        subHeadline="Content Marketer | SEO Strategist | Copywriting Enthusiast"
        ctaPrimary="View My Work"
        ctaSecondary="Let's Collaborate"
        socialLinks={socialLinks}
        navLinks={navLinks}
      />


      <About
        heading="About"
        subheading="Some creative subheading goes here."
        infoHeading='UI/UX Designer & Web Developer'
        introText="I love solving problems and building products."
        profileImage={profile}
        description="I specialize in turning ideas into high-performing digital experiences. With a passion for UI/UX, I blend creativity and logic to design clean, functional web interfaces."
        info={aboutInfo}
        skills={skills}
        id='about'
      />

      <PortfolioSection
        heading="My Projects"
        subheading="Some recent works I've done"
        viewProjectText='View Project'
        projects={projects}
        id='portfolio'
      />

      <Services
        heading="My Services"
        subheading="I offer end-to-end design and development solutions tailored to your needs."
        services={services}
        id='services'
      />
      <Contact
        heading="Contact Me"
        subheading="Let's work together or just say hello!"
        contactInfo={contactInfo}
        id='contact'
      />

    </>
  );
};

export default App;
