import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import michaelImg from './assets/2x2.jpg';

// Importing Achievement Images
import cert2nd from './Membertwo/CEA CERT 2nd.jpg';
import certChamp from './Membertwo/CEA CERT Champ.jpg';
import champPubmat from './Membertwo/Champion CEA MLBB.jpg';
import excAward from './Membertwo/Excellence Award.jpg';
import excAward2 from './Membertwo/Excellence Award 2.jpg';
import intercampus from './Membertwo/Intercampus.jpg';
import intertown1 from './Membertwo/Intertown Cavite 1st runner up.jpg';
import intertown2 from './Membertwo/Intertown Cavite 1st runner.jpg';
import intertownCert from './Membertwo/Intertown Cavite Cert.jpg';
import introCyber from './Membertwo/Introduction to Cyber.jpg';
import kkb from './Membertwo/KKB.jpg';
import mvp from './Membertwo/MVP.jpg';
import squadGoals from './Membertwo/Squad Goals.jpg';

// Importing Project Images
import projCarting from './Membertwo/Projects/Carting System.png';
import projCrypto from './Membertwo/Projects/Crypto Pulse.png';
import projGit from './Membertwo/Projects/Git Frontend.png';
import projLogin from './Membertwo/Projects/Interactive Login Dashboard.png';
import projMeatshop from "./Membertwo/Projects/Lovier's Meatshop Database.jpg";
import projEnrollment from './Membertwo/Projects/University Enrollment Portal.png';
import projWedding from './Membertwo/Projects/Wedding Invitation.png';

function MemberTwo() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // --- The System Architect / Emerald & Gold Theme ---
  const darkTheme = {
    bg: '#0A1C15',          
    panel: '#122A21',       
    accent: '#D4AF37',      
    text: '#F3EFE0',        
    muted: '#8DA399',       
    border: '#234A3A',      
    shadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
  };

  const lightTheme = {
    bg: '#FDFBF7',          
    panel: '#F4F6F0',       
    accent: '#1B4332',      
    text: '#2D2A26',        
    muted: '#7A8B83',       
    border: '#DCE0D5',      
    shadow: '0 10px 30px rgba(27, 67, 50, 0.08)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' }, 
    { id: 'connect', label: 'Contact' }
  ];

  // Achievement Data List
  const achievementsList = [
    { id: 1, img: certChamp, title: 'CEA Champion', desc: 'Awarded Championship Certificate in Computer Engineering.' },
    { id: 2, img: cert2nd, title: 'CEA 2nd Place', desc: 'Awarded 2nd Place Certificate for exemplary skills.' },
    { id: 3, img: excAward, title: 'Excellence Award', desc: 'Recognized for outstanding academic and extracurricular excellence.' },
    { id: 4, img: excAward2, title: 'Excellence Award II', desc: 'Continued recognition for dedication and performance.' },
    { id: 5, img: mvp, title: 'MVP Award', desc: 'Most Valuable Player award for exceptional sportsmanship and skill.' },
    { id: 6, img: champPubmat, title: 'CEA MLBB Champions', desc: 'Official publication material for the CEA MLBB Champions' },
    { id: 7, img: intercampus, title: 'Intercampus Participant', desc: 'Represented the campus in high-stakes intercampus events.' },
    { id: 8, img: intertown1, title: 'Intertown 1st Runner Up', desc: 'Secured 1st Runner Up position in the competitive Intertown event.' },
    { id: 9, img: intertown2, title: 'Intertown Commendation', desc: 'Additional recognition for the Intertown competition.' },
    { id: 10, img: intertownCert, title: 'Intertown Cavite Certificate', desc: 'Official Certificate of Recognition for Intertown Cavite participation.' },
    { id: 11, img: introCyber, title: 'Cybersecurity Certification', desc: 'Successfully completed the Introduction to Cybersecurity course.' },
    { id: 12, img: kkb, title: 'KKB Participation', desc: 'Active participation and contribution to KKB initiatives.' },
    { id: 13, img: squadGoals, title: 'Squad Goals', desc: 'Commendation for outstanding teamwork and team achievement.' }
  ];

  // Projects Data List
  const projectsList = [
    {
      id: 1,
      title: 'Portfolio & Wedding Invitation',
      desc: 'A sophisticated digital portfolio and wedding invitation platform featuring interactive components and an elegant vintage aesthetic.',
      codeLink: 'https://github.com/mmbtoledo/portfolio-invite',
      siteLink: 'https://wedding-invitation-project-olive.vercel.app/',
      img: projWedding
    },
    {
      id: 2,
      title: 'Lovier\'s Meatshop Database',
      desc: 'A comprehensive database management system built to streamline operations and inventory for Lovier\'s Meatshop.',
      codeLink: 'https://github.com/mmbtoledo/meatshop-system',
      siteLink: null,
      img: projMeatshop
    },
    {
      id: 3,
      title: 'Crypto Pulse',
      desc: 'A modern cryptocurrency tracking platform delivering real-time market data, trends, and analytical insights.',
      codeLink: 'https://github.com/mmbtoledo/crypto-pulse',
      siteLink: 'https://crypto-pulse-26jurd0q0-mmbtoledo-4878s-projects.vercel.app/',
      img: projCrypto
    },
    {
      id: 4,
      title: 'University Enrollment Portal',
      desc: 'An intuitive user interface design engineered specifically to simplify and enhance university enrollment processes.',
      codeLink: 'https://github.com/mmbtoledo/enrollment-ui-design',
      siteLink: 'https://enrollment-ui-design.netlify.app/',
      img: projEnrollment
    },
    {
      id: 5,
      title: 'Interactive Login Dashboard',
      desc: 'Project Gatekeeper: A highly secure, interactive, and responsive dashboard designed for smooth user authentication.',
      codeLink: 'https://github.com/mmbtoledo/project-gatekeeper',
      siteLink: 'https://mmbtoledo.github.io/project-gatekeeper/',
      img: projLogin
    },
    {
      id: 6,
      title: 'Git Front End',
      desc: 'A frontend interface project that heavily utilizes Git for version control, showcasing clean deployment strategies.',
      codeLink: 'https://github.com/mmbtoledo/git-frontend-project',
      siteLink: 'https://mmbtoledo.github.io/git-frontend-project/',
      img: projGit
    },
    {
      id: 7,
      title: 'Text Based Carting System',
      desc: 'A robust command-line interface application developed to efficiently manage a text-based shopping cart system.',
      codeLink: 'https://github.com/mmbtoledo/Carting-System',
      siteLink: null,
      img: projCarting
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.05, filter: 'blur(4px)', transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.6 }}
      style={{ 
        display: 'flex', minHeight: '100vh', fontFamily: '"Georgia", serif', overflow: 'hidden', 
        backgroundImage: `radial-gradient(circle at top right, ${theme.accent}15 0%, transparent 60%), radial-gradient(circle at bottom left, ${theme.border}20 0%, transparent 50%)` 
      }}
    >
      
      {/* Top Left: Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{ 
          position: 'fixed', top: '20px', left: '20px', zIndex: 50, background: theme.bg, 
          border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px 15px', 
          cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase',
          boxShadow: theme.shadow, transition: 'all 0.3s'
        }}
      >
        {isSidebarOpen ? '✕ CLOSE DIRECTORY' : '☰ OPEN DIRECTORY'}
      </button>

      {/* Top Right Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ background: theme.panel, border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: theme.shadow }}
          title="Toggle Lighting"
        >
          {isDarkMode ? '☼' : '☾'}
        </button>
        <Link to="/">
          <button style={{ background: theme.accent, border: `1px solid ${theme.accent}`, color: isDarkMode ? theme.bg : '#fff', padding: '10px 20px', cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', boxShadow: theme.shadow }}>
            ↤ Front Page
          </button>
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }} transition={{ type: 'tween', duration: 0.4 }}
            style={{ 
              width: '300px', backgroundColor: theme.panel, borderRight: `1px solid ${theme.border}`, 
              padding: '100px 30px 30px 30px', display: 'flex', flexDirection: 'column', zIndex: 40, 
              position: 'fixed', height: '100vh', overflowY: 'auto', boxShadow: '10px 0 30px rgba(0,0,0,0.15)' 
            }}
          >
            <div style={{ marginBottom: '50px', textAlign: 'center', borderBottom: `2px dashed ${theme.border}`, paddingBottom: '30px' }}>
              <div style={{ fontSize: '1.8rem', color: theme.accent, marginBottom: '10px' }}>✧</div>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.8rem', letterSpacing: '3px', color: theme.muted, textTransform: 'uppercase' }}>Volume II</p>
              <h2 style={{ margin: '0', fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: theme.text, lineHeight: '1.4' }}>
                MICHAEL BENEDICT<br/>TOLEDO
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ 
                    background: 'transparent', color: activeTab === tab.id ? theme.accent : theme.text, 
                    border: 'none', borderLeft: `3px solid ${activeTab === tab.id ? theme.accent : 'transparent'}`, 
                    padding: '12px 15px', textAlign: 'left', cursor: 'pointer', fontFamily: '"Playfair Display", serif', 
                    fontSize: '1.1rem', fontStyle: activeTab === tab.id ? 'italic' : 'normal', transition: 'all 0.3s',
                    backgroundColor: activeTab === tab.id ? `${theme.accent}10` : 'transparent'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '300px' : '0', transition: 'margin-left 0.4s ease', padding: '120px 60px 60px 60px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
              
              <div style={{ display: 'inline-block', position: 'relative', marginBottom: '50px' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '-15px', right: '-15px', bottom: '-15px', border: `1px dashed ${theme.accent}`, borderRadius: '50%', animation: 'spin 60s linear infinite' }} />
                <div style={{ position: 'absolute', top: '-5px', left: '-5px', right: '-5px', bottom: '-5px', border: `2px solid ${theme.accent}`, borderRadius: '50%' }} />
                
                <img src={michaelImg} alt="Michael Benedict Toledo" style={{ width: '240px', height: '240px', borderRadius: '50%', objectFit: 'cover', filter: isDarkMode ? 'sepia(0.3) brightness(0.9) contrast(1.1)' : 'sepia(0.2) contrast(1.1)', position: 'relative', zIndex: 2, padding: '5px', backgroundColor: theme.bg }} />
              </div>

              <h3 style={{ color: theme.muted, textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.9rem', margin: '0 0 15px 0' }}>
                Computer Engineering Student
              </h3>
              <h1 style={{ fontSize: '4.2rem', margin: '0 0 30px 0', fontFamily: '"Playfair Display", serif', color: theme.text, lineHeight: '1.1' }}>
                Michael Benedict <br/><span style={{ fontStyle: 'italic', color: theme.accent }}>Toledo</span>
              </h1>
              
              <p style={{ fontSize: '1.2rem', lineHeight: '2', color: theme.muted, maxWidth: '700px', margin: '0 auto', borderTop: `1px solid ${theme.border}`, paddingTop: '30px' }}>
                A 2nd-year Computer Engineering student at TIP-Manila, I am passionate about building innovative systems, writing efficient code, and designing functional electronic circuits. My academic journey has allowed me to explore both the theoretical and practical aspects of computing, strengthening my problem-solving skills and technical foundation. I am particularly interested in the dynamic intersection where software meets hardware, where I can develop solutions that bridge digital logic with real-world applications. Through continuous learning, hands-on projects, and active exploration of emerging technologies, I strive to improve my skills and prepare myself for a future career in the tech industry, especially in fields like system development and cybersecurity.
              </p>
            </motion.div>
          )}

          {activeTab === 'about' && (
             <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', width: '100%' }}>
               <div style={{ borderBottom: `2px solid ${theme.accent}`, paddingBottom: '20px', marginBottom: '40px' }}>
                 <p style={{ color: theme.muted, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', margin: '0 0 10px 0' }}>Chapter One</p>
                 <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3.5rem', margin: 0 }}>About Me</h1>
               </div>

               <div style={{ backgroundColor: theme.panel, padding: '50px', boxShadow: theme.shadow, border: `1px solid ${theme.border}`, lineHeight: '2.2', fontSize: '1.1rem', position: 'relative' }}>
                 <div style={{ position: 'absolute', top: 10, left: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />
                 <div style={{ position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />
                 <div style={{ position: 'absolute', bottom: 10, left: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />
                 <div style={{ position: 'absolute', bottom: 10, right: 10, width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.accent }} />

                 <p><span style={{ fontSize: '3.5rem', float: 'left', lineHeight: '0.8', color: theme.accent, paddingRight: '15px', fontFamily: '"Playfair Display", serif', marginTop: '5px' }}>M</span>ichael Benedict F. Toledo is a 2nd-year Computer Engineering student at TIP-Manila who is passionate about technology and how systems work. He is currently developing his skills in both hardware and software, learning concepts in programming, system development, and basic circuit design. Through his studies, he continues to explore how different components of computer systems interact and function together.

He is particularly interested in cybersecurity, as he wants to understand how to protect systems from threats and vulnerabilities. He enjoys trying out new things, whether it’s experimenting with code, working on small projects, or learning beyond what is taught in class. For him, learning is a continuous process that goes beyond lectures and requires constant practice and self-improvement.

As a student, he describes himself as determined, curious, and adaptable. He understands that there is still a lot for him to learn, and he is open to challenges that help him grow. He believes that mistakes are part of the learning process and uses them as motivation to improve both academically and personally.

In the future, he aims to become a successful computer engineer who can build useful systems and contribute to solving real-world problems. He is continuously working on improving his knowledge and skills to prepare himself for opportunities in the tech industry, especially in areas such as cybersecurity and system development.</p>
               </div>
             </motion.div>
          )}

          {activeTab === 'achievements' && (
             <motion.div key="achievements" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', width: '100%' }}>
               <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                 <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3.5rem', margin: 0, letterSpacing: '2px' }}>Achievements</h1>
                 <p style={{ color: theme.muted, fontStyle: 'italic', fontSize: '1.1rem', marginTop: '10px' }}>
                   In my 20 years of living, these are some of the achievements I am proud of.
                 </p>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '30px', paddingBottom: '40px' }}>
                 {achievementsList.map((item) => (
                   <motion.div 
                     key={item.id}
                     whileHover={{ y: -8, boxShadow: theme.shadow, borderColor: theme.accent }}
                     onClick={() => setSelectedAchievement(item)}
                     style={{ 
                       backgroundColor: theme.panel, 
                       padding: '15px', 
                       border: `1px solid ${theme.border}`, 
                       borderRadius: '4px', 
                       cursor: 'pointer',
                       transition: 'border-color 0.3s ease'
                     }}
                   >
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       style={{ 
                         width: '100%', 
                         height: '200px', 
                         objectFit: 'cover', 
                         border: `1px solid ${theme.border}`, 
                         marginBottom: '15px',
                         filter: isDarkMode ? 'brightness(0.9)' : 'none',
                         borderRadius: '4px'
                       }} 
                     />
                     <h3 style={{ color: theme.text, fontSize: '1.1rem', margin: '0 0 5px 0', fontFamily: '"Playfair Display", serif' }}>{item.title}</h3>
                     <p style={{ color: theme.muted, fontSize: '0.8rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Click to view ↗</p>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          )}

          {/* PROJECTS SECTION */}
          {activeTab === 'projects' && (
             <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', width: '100%' }}>
               <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                 <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3.5rem', margin: 0, letterSpacing: '2px' }}>Projects</h1>
                 <p style={{ color: theme.muted, fontStyle: 'italic', fontSize: '1.1rem', marginTop: '10px' }}>
                   A collection of systems, interfaces, and architecture I have built.
                 </p>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px', paddingBottom: '40px' }}>
                 {projectsList.map((project) => (
                   <motion.div 
                     key={project.id}
                     whileHover={{ y: -8, boxShadow: theme.shadow, borderColor: theme.accent }}
                     style={{ 
                       backgroundColor: theme.panel, 
                       border: `1px solid ${theme.border}`, 
                       borderRadius: '10px', 
                       overflow: 'hidden',
                       display: 'flex',
                       flexDirection: 'column',
                       transition: 'border-color 0.3s ease'
                     }}
                   >
                     {/* Image Container */}
                     <div style={{ 
                       height: '180px', 
                       backgroundColor: theme.bg, 
                       borderBottom: `1px solid ${theme.border}`,
                       display: 'flex', justifyContent: 'center', alignItems: 'center',
                       position: 'relative', overflow: 'hidden'
                     }}>
                       {project.img ? (
                         <img 
                           src={project.img} 
                           alt={project.title} 
                           style={{ 
                             width: '100%', height: '100%', objectFit: 'cover', 
                             filter: isDarkMode ? 'brightness(0.85)' : 'none' 
                           }} 
                         />
                       ) : (
                         <>
                           <div style={{ position: 'absolute', top: 10, left: 10, right: 10, bottom: 10, border: `1px dashed ${theme.border}`, borderRadius: '6px' }} />
                           <div style={{ fontSize: '4.5rem', color: theme.accent, opacity: 0.15, fontFamily: '"Playfair Display", serif', fontWeight: 'bold', textAlign: 'center', lineHeight: '1' }}>
                             {project.title.substring(0, 2).toUpperCase()}
                           </div>
                           <div style={{ position: 'absolute', bottom: '15px', right: '20px', color: theme.muted, fontSize: '0.7rem', fontFamily: 'sans-serif', letterSpacing: '2px', textTransform: 'uppercase' }}>
                             System Arch.
                           </div>
                         </>
                       )}
                     </div>

                     <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                       <h3 style={{ color: theme.text, fontSize: '1.3rem', margin: '0 0 10px 0', fontFamily: '"Playfair Display", serif', lineHeight: '1.3' }}>{project.title}</h3>
                       <p style={{ color: theme.muted, fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 25px 0', flexGrow: 1 }}>
                         {project.desc}
                       </p>

                       <div style={{ display: 'flex', gap: '20px', borderTop: `1px solid ${theme.border}`, paddingTop: '20px', marginTop: 'auto' }}>
                         {project.siteLink && (
                           <a href={project.siteLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: theme.text, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = theme.accent} onMouseOut={(e) => e.currentTarget.style.color = theme.text}>
                             Site <span style={{ color: theme.accent, fontSize: '1.2rem', lineHeight: '1' }}>↗</span>
                           </a>
                         )}
                         {project.codeLink && (
                           <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: theme.text, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = theme.accent} onMouseOut={(e) => e.currentTarget.style.color = theme.text}>
                             Source Code <span style={{ color: theme.accent, fontSize: '1.2rem', lineHeight: '1' }}>↗</span>
                           </a>
                         )}
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          )}

          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', width: '100%' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{ fontSize: '2rem', color: theme.accent, marginBottom: '10px' }}>✉</div>
                <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: 0, letterSpacing: '2px' }}>Direct Inquiries</h1>
              </div>

              <div style={{ backgroundColor: theme.panel, border: `2px solid ${theme.border}`, padding: '4px', boxShadow: theme.shadow }}>
                <div style={{ border: `1px dashed ${theme.accent}`, padding: '50px', position: 'relative' }}>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
                    <div style={{ flex: '1 1 300px' }}>
                      <h3 style={{ color: theme.accent, fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', borderBottom: `1px solid ${theme.border}`, paddingBottom: '10px', margin: '0 0 20px 0' }}>
                        Contact Details
                      </h3>
                      
                      <div style={{ marginBottom: '25px' }}>
                        <p style={{ color: theme.muted, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem', margin: '0 0 5px 0' }}>Email Address</p>
                        <a href="mailto:mmbtoledo@tip.edu.ph" style={{ display: 'block', color: theme.text, fontSize: '1rem', textDecoration: 'none', marginBottom: '5px', fontStyle: 'italic' }}>mmbtoledo@tip.edu.ph</a>
                        <a href="mailto:benedicttoledo001@gmail.com" style={{ display: 'block', color: theme.text, fontSize: '1rem', textDecoration: 'none', fontStyle: 'italic' }}>benedicttoledo001@gmail.com</a>
                      </div>

                      <div>
                        <p style={{ color: theme.muted, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem', margin: '0 0 5px 0' }}>Current Location</p>
                        <p style={{ color: theme.text, fontSize: '1rem', margin: 0, lineHeight: '1.6', fontStyle: 'italic' }}>Noveleta, Cavite<br/>Philippines</p>
                      </div>
                    </div>

                    <div style={{ flex: '1 1 300px' }}>
                      <h3 style={{ color: theme.accent, fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', borderBottom: `1px solid ${theme.border}`, paddingBottom: '10px', margin: '0 0 20px 0' }}>
                        Academic Institution
                      </h3>
                      
                      <div style={{ marginBottom: '25px' }}>
                        <p style={{ color: theme.muted, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem', margin: '0 0 5px 0' }}>Institution</p>
                        <p style={{ color: theme.text, fontSize: '1rem', margin: 0, fontStyle: 'italic' }}>Technological Institute of the Philippines<br/>Manila Campus</p>
                      </div>

                      <div style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}`, padding: '20px' }}>
                        <p style={{ color: theme.muted, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem', margin: '0 0 10px 0' }}>Program Chair</p>
                        <h4 style={{ margin: '0 0 5px 0', color: theme.text, fontFamily: '"Playfair Display", serif', fontSize: '1.2rem' }}>Dr. Jennifer B. Enriquez</h4>
                        <p style={{ margin: '0 0 10px 0', color: theme.accent, fontSize: '0.8rem' }}>Computer Engineering Department</p>
                        <a href="mailto:jennifer.enriquez@tip.edu.ph" style={{ color: theme.muted, fontSize: '0.8rem', textDecoration: 'none', fontStyle: 'italic' }}>jennifer.enriquez@tip.edu.ph</a>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '50px', borderTop: `1px solid ${theme.border}`, paddingTop: '40px', textAlign: 'center' }}>
                    <p style={{ color: theme.muted, fontStyle: 'italic', margin: '0 0 20px 0' }}>Connect with me on my professional networks:</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                      <a href="https://github.com/mmbtoledo" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', borderRadius: '50%', border: `1px solid ${theme.accent}`, color: theme.accent, textDecoration: 'none', transition: 'all 0.3s' }} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = theme.accent; e.currentTarget.style.color = theme.bg}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.accent}}>
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                      
                      <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', borderRadius: '50%', border: `1px solid ${theme.border}`, color: theme.muted, textDecoration: 'none', transition: 'all 0.3s', cursor: 'not-allowed' }} title="Line Currently Inactive">
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>

                      <a href="https://www.facebook.com/benedict.toledo.90" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', borderRadius: '50%', border: `1px solid ${theme.accent}`, color: theme.accent, textDecoration: 'none', transition: 'all 0.3s' }} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = theme.accent; e.currentTarget.style.color = theme.bg}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.accent}}>
                        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* MODAL / LIGHTBOX FOR ACHIEVEMENTS */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 999,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '40px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              style={{
                backgroundColor: theme.bg,
                padding: '30px',
                border: `2px solid ${theme.accent}`,
                borderRadius: '8px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
              }}
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                style={{ 
                  position: 'absolute', top: '15px', right: '15px', 
                  background: 'transparent', border: 'none', color: theme.accent, 
                  fontSize: '1.8rem', cursor: 'pointer', transition: 'transform 0.2s' 
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                ✕
              </button>

              <img 
                src={selectedAchievement.img} 
                alt={selectedAchievement.title} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '60vh', 
                  objectFit: 'contain', 
                  border: `1px solid ${theme.border}`, 
                  marginBottom: '20px',
                  backgroundColor: theme.panel,
                  padding: '5px'
                }} 
              />
              <h2 style={{ color: theme.text, fontFamily: '"Playfair Display", serif', margin: '0 0 10px 0', fontSize: '2rem' }}>
                {selectedAchievement.title}
              </h2>
              <p style={{ color: theme.muted, textAlign: 'center', margin: 0, fontSize: '1.1rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                {selectedAchievement.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </motion.div>
  );
}

export default MemberTwo;