# Portfolio Configuration Template

Copy this template and paste it into `src/config/portfolioData.js` to quickly set up your portfolio.

## 📝 Quick Setup Template

```javascript
// Portfolio Data Configuration
// Replace the example values with your information

// Import assets (update paths as needed)
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

// Personal Information - UPDATE THESE VALUES
export const personalInfo = {
  // Basic Info
  name: "YOUR NAME HERE",
  profileImage: profileImg,
  targetImage: targetImg,
  resumePDF: resumePDF,
  
  // Home Section
  headline: "YOUR PROFESSIONAL HEADLINE",
  subHeadline: "Your Role | Your Specialization | Your Tagline",
  ctaPrimary: "View My Work",
  ctaSecondary: "Let's Collaborate",
  
  // About Section
  aboutHeading: "About",
  aboutSubheading: "Your creative subheading goes here",
  aboutInfoHeading: "Your Professional Title",
  aboutIntroText: "Your intro text here",
  aboutDescription: "Your detailed description about yourself and your work",
  
  // About Info Grid - UPDATE WITH YOUR INFO
  aboutInfo: [
    { label: 'Birthday', value: 'Your Birthday' },
    { label: 'Website', value: 'your-website.com' },
    { label: 'Phone', value: '+123 456 7890' },
    { label: 'City', value: 'Your City, Country' },
    { label: 'Age', value: 'Your Age' },
    { label: 'Degree', value: 'Your Degree' },
    { label: 'Email', value: 'your@email.com' },
    { label: 'Freelance', value: 'Available/Not Available' }
  ],
  
  // Skills - UPDATE WITH YOUR SKILLS AND LEVELS (0-100)
  skills: [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'Photoshop', level: 55 },
  ],
  
  // Social Links - UPDATE WITH YOUR PROFILES
  socialLinks: [
    { type: 'facebook', url: 'https://facebook.com/yourprofile', icon: <FaFacebook /> },
    { type: 'instagram', url: 'https://instagram.com/yourprofile', icon: <FaInstagram /> },
    { type: 'linkedin', url: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin /> },
    { type: 'github', url: 'https://github.com/yourusername', icon: <FaGithub /> },
    { type: 'twitter', url: 'https://twitter.com/yourusername', icon: <FaTwitter /> }
  ],
  
  // Services - UPDATE WITH YOUR SERVICES
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
  
  // Portfolio Projects - UPDATE WITH YOUR PROJECTS
  projects: [
    {
      title: 'Project Name 1',
      description: 'Description of your project',
      image: projimg1,
      link: 'https://your-project-link.com',
      technologies: ['React', 'CSS3', 'JavaScript']
    },
    {
      title: 'Project Name 2',
      description: 'Description of your project',
      image: projimg2,
      link: 'https://your-project-link.com',
      technologies: ['React', 'TypeScript', 'Storybook']
    },
    {
      title: 'Project Name 3',
      description: 'Description of your project',
      image: projimg3,
      link: 'https://your-project-link.com',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ],
  
  // Contact Information - UPDATE WITH YOUR CONTACT INFO
  contactInfo: {
    email: 'your@email.com',
    phone: '+123 456 7890',
    location: 'Your City, Country'
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

// Email Configuration - UPDATE WITH YOUR EMAILJS CREDENTIALS
export const emailConfig = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key'
};

// Theme Configuration - CUSTOMIZE COLORS
export const themeConfig = {
  primaryColor: '#2563eb',
  secondaryColor: '#0ea5e9',
  textColor: '#111',
  backgroundColor: '#f9f9f9',
  cardBackground: '#ffffff'
};

export default personalInfo;
```

## 🚀 Quick Start Steps

1. **Copy the template above**
2. **Replace all "YOUR_*" placeholders** with your actual information
3. **Update image imports** if you've added new images
4. **Save the file**
5. **Run `npm start`** to test locally
6. **Run `npm run build`** when ready to deploy

## 📸 Image Requirements

- **Profile Photo**: 400x400px, square format
- **Hero Background**: 1920x1080px, landscape format
- **Project Images**: 800x600px, consistent aspect ratio
- **Resume**: PDF format

## 🔧 Customization Tips

- **Skills**: Use levels from 0-100
- **Social Links**: Only include platforms you actively use
- **Projects**: Add your best 3-6 projects
- **Services**: Focus on what you do best
- **About Info**: Include relevant personal details

## 📱 Testing

After updating the config:
1. Run `npm start`
2. Check all sections load correctly
3. Test on mobile and desktop
4. Verify all links work
5. Test contact form (if configured)

---

**Need help?** Check `USER_GUIDE.md` for detailed instructions!
