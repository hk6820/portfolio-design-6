# Portfolio User Guide

Welcome to your dynamic portfolio! This guide will help you easily customize and update your portfolio content.

## 📁 File Structure

```
src/
├── config/
│   └── portfolioData.js    # Main configuration file - UPDATE THIS FILE
├── assets/
│   ├── profile.png         # Your profile photo
│   ├── target1.png         # Hero background image
│   ├── project1.png        # Project images
│   ├── project2.png
│   ├── project3.png
│   └── Resume.pdf          # Your resume PDF
└── components/
    └── emailConfig.js      # Email configuration
```

## 🚀 Quick Start

1. **Replace Images**: Update images in the `src/assets/` folder
2. **Update Content**: Edit `src/config/portfolioData.js`
3. **Configure Email**: Update `src/components/emailConfig.js`
4. **Deploy**: Run `npm run build` and deploy the `build` folder

## 📝 Content Configuration

### 1. Personal Information

Edit the `personalInfo` object in `src/config/portfolioData.js`:

```javascript
export const personalInfo = {
  // Basic Info
  name: "Your Name",
  profileImage: profileImg,  // Update the import path
  targetImage: targetImg,    // Update the import path
  resumePDF: resumePDF,      // Update the import path
  
  // Home Section
  headline: "Your Professional Headline",
  subHeadline: "Your Role | Specialization | Tagline",
  ctaPrimary: "Primary Button Text",
  ctaSecondary: "Secondary Button Text",
  
  // About Section
  aboutHeading: "About",
  aboutSubheading: "Your creative subheading",
  aboutInfoHeading: "Your Professional Title",
  aboutIntroText: "Your intro text",
  aboutDescription: "Your detailed description",
  
  // ... rest of the configuration
};
```

### 2. About Information Grid

Update the `aboutInfo` array with your personal details:

```javascript
aboutInfo: [
  { label: 'Birthday', value: 'Your Birthday' },
  { label: 'Website', value: 'your-website.com' },
  { label: 'Phone', value: '+123 456 7890' },
  { label: 'City', value: 'Your City, Country' },
  { label: 'Age', value: 'Your Age' },
  { label: 'Degree', value: 'Your Degree' },
  { label: 'Email', value: 'your@email.com' },
  { label: 'Freelance', value: 'Available/Not Available' }
]
```

### 3. Skills Section

Update your skills with proficiency levels (0-100):

```javascript
skills: [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'Photoshop', level: 55 },
]
```

### 4. Social Links

Add your social media profiles:

```javascript
socialLinks: [
  { type: 'facebook', url: 'https://facebook.com/yourprofile', icon: <FaFacebook /> },
  { type: 'instagram', url: 'https://instagram.com/yourprofile', icon: <FaInstagram /> },
  { type: 'linkedin', url: 'https://linkedin.com/in/yourprofile', icon: <FaLinkedin /> },
  { type: 'github', url: 'https://github.com/yourusername', icon: <FaGithub /> },
  { type: 'twitter', url: 'https://twitter.com/yourusername', icon: <FaTwitter /> }
]
```

### 5. Services

Update your services:

```javascript
services: [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Your service description here.'
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Your service description here.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Design',
    description: 'Your service description here.'
  }
]
```

### 6. Portfolio Projects

Add your projects:

```javascript
projects: [
  {
    title: 'Project Name',
    description: 'Project description',
    image: projimg1,  // Update import path
    link: 'https://your-project-link.com',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  // Add more projects...
]
```

### 7. Contact Information

Update your contact details:

```javascript
contactInfo: {
  email: 'your@email.com',
  phone: '+123 456 7890',
  location: 'Your City, Country'
}
```

## 🖼️ Image Management

### Required Images

1. **Profile Photo** (`profile.png`):
   - Size: 400x400px recommended
   - Format: PNG or JPG
   - Square aspect ratio

2. **Hero Background** (`target1.png`):
   - Size: 1920x1080px recommended
   - Format: PNG or JPG
   - High quality for background

3. **Project Images** (`project1.png`, `project2.png`, etc.):
   - Size: 800x600px recommended
   - Format: PNG or JPG
   - Consistent aspect ratio

4. **Resume PDF** (`Resume.pdf`):
   - Your updated resume
   - PDF format

### Adding New Images

1. Add your image to `src/assets/`
2. Import it in `portfolioData.js`:
   ```javascript
   import newImage from '../assets/newImage.png';
   ```
3. Use it in your configuration:
   ```javascript
   image: newImage,
   ```

## 📧 Email Configuration

### Setting up EmailJS

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account and verify your email
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your credentials

### Update Email Configuration

Edit `src/components/emailConfig.js`:

```javascript
export const EMAIL_SERVICE_ID = 'your_service_id';
export const EMAIL_TEMPLATE_ID = 'your_template_id';
export const EMAIL_PUBLIC_KEY = 'your_public_key';
```

### Email Template Variables

Use these variables in your EmailJS template:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{message}}` - Sender's message

## 🎨 Customization Options

### Colors and Theme

Update the `themeConfig` object:

```javascript
export const themeConfig = {
  primaryColor: '#2563eb',      // Main blue color
  secondaryColor: '#0ea5e9',    // Accent blue color
  textColor: '#111',            // Main text color
  backgroundColor: '#f9f9f9',   // Background color
  cardBackground: '#ffffff'     // Card background
}
```

### Navigation Menu

Add or remove navigation items:

```javascript
export const navLinks = [
  { label: 'Home', href: '#home', icon: <FaHome /> },
  { label: 'About', href: '#about', icon: <FaUser /> },
  { label: 'Portfolio', href: '#portfolio', icon: <FaBriefcase /> },
  { label: 'Services', href: '#services', icon: <FaTools /> },
  { label: 'Contact', href: '#contact', icon: <FaEnvelope /> }
];
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files.

### Deploy to Netlify

1. Drag and drop the `build` folder to [Netlify](https://netlify.com)
2. Your site will be live instantly!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and imports
2. **Email not working**: Verify EmailJS credentials
3. **Build errors**: Check for syntax errors in portfolioData.js
4. **Styling issues**: Clear browser cache

### Getting Help

1. Check the browser console for errors
2. Verify all imports are correct
3. Ensure all required fields are filled
4. Test locally with `npm start`

## 📱 Mobile Optimization

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Best Practices

1. **Keep images optimized** - Use tools like TinyPNG
2. **Update content regularly** - Keep your portfolio fresh
3. **Test on different devices** - Ensure compatibility
4. **Backup your data** - Keep a copy of portfolioData.js
5. **Use high-quality images** - Professional appearance matters

## 📞 Support

If you need help customizing your portfolio:
1. Check this guide first
2. Review the code comments
3. Test changes locally before deploying
4. Keep backups of working versions

---

**Happy customizing! 🎉**

Your portfolio is now ready to showcase your skills and projects professionally.
