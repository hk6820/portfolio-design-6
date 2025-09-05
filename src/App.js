import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PortfolioSection from './pages/Portfolio';
import personalInfo from './config/portfolioData';

const App = () => {
  return (
    <>
      <Home
        name={personalInfo.name}
        profileImage={personalInfo.profileImage}
        targetImage={personalInfo.targetImage}
        id='home'
        headline={personalInfo.headline}
        subHeadline={personalInfo.subHeadline}
        ctaPrimary={personalInfo.ctaPrimary}
        ctaSecondary={personalInfo.ctaSecondary}
        socialLinks={personalInfo.socialLinks}
        navLinks={personalInfo.navLinks}
      />

      <About
        heading={personalInfo.aboutHeading}
        subheading={personalInfo.aboutSubheading}
        infoHeading={personalInfo.aboutInfoHeading}
        introText={personalInfo.aboutIntroText}
        profileImage={personalInfo.profileImage}
        description={personalInfo.aboutDescription}
        info={personalInfo.aboutInfo}
        skills={personalInfo.skills}
        skillsHeading={personalInfo.sectionHeadings.skills.heading}
        skillsDescription={personalInfo.sectionHeadings.skills.description}
        id='about'
      />

      <PortfolioSection
        heading={personalInfo.sectionHeadings.portfolio.heading}
        subheading={personalInfo.sectionHeadings.portfolio.subheading}
        viewProjectText={personalInfo.sectionHeadings.portfolio.viewProjectText}
        projects={personalInfo.projects}
        id='portfolio'
      />

      <Services
        heading={personalInfo.sectionHeadings.services.heading}
        subheading={personalInfo.sectionHeadings.services.subheading}
        services={personalInfo.services}
        id='services'
      />
      
      <Contact
        heading={personalInfo.sectionHeadings.contact.heading}
        subheading={personalInfo.sectionHeadings.contact.subheading}
        contactInfo={personalInfo.contactInfo}
        id='contact'
      />
    </>
  );
};

export default App;
