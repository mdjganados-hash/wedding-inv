import { useState, useContext } from 'react'; // Added useContext
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext'; // Import your context
import karlImg from './assets/2x2.jpg';

// Importing Achievement Images
import cert2nd from './Membertwo/mlcert.jpg';
import certChamp from './Membertwo/mlcert2.jpg';
import excAward from './Membertwo/mlcert3.jpg';
import excAward2 from './Membertwo/intrams.jpg';
import projectOneImg from './Membertwo/p1.jpg';
import projectTwoImg from './Membertwo/p2.jpg';
import visualArchiveImg from './Membertwo/p3.jpg';

function MemberTwo() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // 1. PULL GLOBAL STATE
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

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
    { id: 'home', label: 'Primary Terminal' },
    { id: 'about', label: 'Biographical Data' },
    { id: 'achievements', label: 'Milestone Records' },
    { id: 'projects', label: 'Project Schematics' }, // NEW TAB
    { id: 'connect', label: 'Communications' }
  ];

  const achievementsList = [
    { id: 1, img: certChamp, title: 'CEA Champion', desc: 'Awarded Championship Certificate in Computer Engineering.' },
    { id: 2, img: cert2nd, title: 'CEA 2nd Place', desc: 'Awarded 2nd Place Certificate for exemplary skills.' },
    { id: 3, img: excAward, title: 'Excellence Award', desc: 'Recognized for outstanding academic and extracurricular excellence.' },
    { id: 4, img: excAward2, title: 'Excellence Award II', desc: 'Continued recognition for dedication and performance.' }
  ];

  // NEW PROJECT DATA
  const projectsList = [
    {
      id: 1,
      title: "Enrollment System UI",
      desc: "Enhanced user interface for a student enrollment system, showcasing modern design principles and responsive layouts.",
      img: projectOneImg, // Replace with your image
      vercel: "https://enrollmentstudent.netlify.app",
      github: "https://github.com/mksalinsub-prog/EnrollmentKarlAlinsub"
    },
    {
      id: 2,
      title: "Crypto Pulse",
      desc: "A real-time cryptocurrency tracking application that provides users with up-to-date market data and insights.",
      img: projectTwoImg, // Replace with your image
      vercel: "https://crypto-pulse-rosy.vercel.app",
      github: "https://github.com/mksalinsub-prog/crypto-pulse"
    },
    {
      id: 3,
      title: "LOGIC DESIGN FOR A +/- CALCULATOR",
      desc: "A comprehensive logic design project for a basic calculator capable of performing addition and subtraction, utilizing combinational logic circuits.",
      img: visualArchiveImg, // Replace with your image
      isVisualOnly: true
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.6 }}
      style={{ 
        display: 'flex', minHeight: '100vh', 
        fontFamily: '"Inter", sans-serif', 
        overflowX: 'hidden', 
        flexDirection: 'column' 
      }}
    >
      
      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }}
            style={{ 
              width: 'clamp(280px, 80vw, 320px)', backgroundColor: theme.panel, borderRight: `1px solid ${theme.border}`, 
              padding: '80px 25px 30px 25px', display: 'flex', flexDirection: 'column', zIndex: 100, 
              position: 'fixed', height: '100vh', boxShadow: '10px 0 30px rgba(0,0,0,0.5)' 
            }}
          >
            <div style={{ marginBottom: '40px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '20px' }}>
              <h2 style={{ margin: '0', fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: theme.text, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Karl Siegfreid<br/><span style={{ color: theme.accent }}>Alinsub</span>
              </h2>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.7rem', color: theme.muted, letterSpacing: '2px', textTransform: 'uppercase' }}>System Developer</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => { setActiveTab(tab.id); setIsSidebarOpen(false); }}
                  style={{ 
                    background: activeTab === tab.id ? `${theme.accent}15` : 'transparent', 
                    color: activeTab === tab.id ? theme.accent : theme.text, 
                    border: 'none', padding: '12px 15px', textAlign: 'left', cursor: 'pointer', 
                    fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s'
                  }}
                >
                  {activeTab === tab.id ? `// ${tab.label}` : tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ 
        flex: 1, 
        marginLeft: isSidebarOpen && window.innerWidth > 1024 ? '320px' : '0', 
        transition: 'margin-left 0.4s ease', 
        padding: 'clamp(80px, 10vh, 120px) clamp(20px, 5vw, 80px)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 110, display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ background: theme.panel, border: `1px solid ${theme.accent}`, color: theme.accent, padding: '8px 12px', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 'bold', boxShadow: theme.shadow }}
          >
            {isSidebarOpen ? 'CLOSE INDEX' : 'OPEN INDEX'}
          </button>
          <button 
            onClick={toggleTheme}
            style={{ background: theme.panel, border: `1px solid ${theme.border}`, color: theme.accent, width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: theme.shadow }}
          >
            {isDarkMode ? '☀' : '☾'}
          </button>
          <Link to="/">
            <button style={{ background: theme.accent, color: theme.bg, border: 'none', padding: '8px 15px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.7rem', boxShadow: theme.shadow }}>BACK</button>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', alignItems: 'center', gap: 'clamp(30px, 5vw, 60px)' }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{ position: 'absolute', top: '10px', left: '10px', width: '100%', height: '100%', border: `2px solid ${theme.accent}`, zIndex: 0 }}></div>
                  <img src={karlImg} alt="Profile" style={{ width: 'clamp(200px, 40vw, 280px)', height: 'auto', objectFit: 'cover', position: 'relative', zIndex: 1, filter: 'grayscale(0.3)' }} />
                </div>
                <div style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                  <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', margin: 0, lineHeight: 1.1 }}>The<br/><span style={{ color: theme.accent }}>Architect.</span></h1>
                  <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', lineHeight: '1.8', color: theme.muted, marginTop: '20px' }}>
                    19-year-old Computer Engineering student at TIP Manila, specializing in the fundamentals of programming and circuitry with a focus on logic design.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '850px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3rem)', borderBottom: `1px solid ${theme.border}`, paddingBottom: '15px', marginBottom: '30px' }}>Identity Logs</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8' }}>
                <section>
                  <h3 style={{ color: theme.accent, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>[ Personal Background ]</h3>
                  <p style={{ fontSize: '0.95rem' }}>Karl Siegfreid Dela Cruz Alinsub is a 19-year-old Computer Engineering student at TIP Manila residing in Mandaluyong. Driven by curiosity and a strong determination to adapt to the evolving tech landscape, he actively seeks opportunities to expand his expertise. Known for his natural humor and positive energy, Karl balances a serious dedication to his craft with a competitive spirit and a drive to succeed in all areas of interest.</p>
                </section>
                <section>
                  <h3 style={{ color: theme.accent, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>[ Core Competencies ]</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    {['Logic Circuit Architecture', 'Network Fundamentals', 'Collaborative Engineering', 'Analytical Problem-Solving'].map(skill => (
                      <li key={skill} style={{ paddingLeft: '15px', borderLeft: `2px solid ${theme.accent}`, fontSize: '0.9rem' }}>{skill}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div key="achievements" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '30px' }}>Milestones</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {achievementsList.map((item) => (
                  <motion.div 
                    key={item.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedAchievement(item)}
                    style={{ background: theme.panel, border: `1px solid ${theme.border}`, padding: '12px', cursor: 'pointer' }}
                  >
                    <img src={item.img} style={{ width: '100%', height: '160px', objectFit: 'cover', marginBottom: '12px' }} alt={item.title} />
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: theme.accent, textTransform: 'uppercase' }}>{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
             <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
               <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3rem)', borderBottom: `1px solid ${theme.border}`, paddingBottom: '15px', marginBottom: '30px' }}>Development Schematics</h2>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                 {projectsList.map((project) => (
                   <motion.div key={project.id} style={{ backgroundColor: theme.panel, border: `1px solid ${theme.border}`, padding: '20px', display: 'flex', flexDirection: 'column' }}>
                     <img src={project.img} alt={project.title} style={{ width: '100%', height: '180px', objectFit: 'cover', marginBottom: '15px', border: `1px solid ${theme.border}` }} />
                     <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: theme.accent, textTransform: 'uppercase' }}>{project.title}</h3>
                     <p style={{ margin: '0 0 20px 0', fontSize: '0.85rem', color: theme.muted, flexGrow: 1 }}>{project.desc}</p>
                     
                     {!project.isVisualOnly ? (
                       <div style={{ display: 'flex', gap: '10px' }}>
                         <a href={project.vercel} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                            <button style={{ width: '100%', padding: '10px', background: theme.accent, color: theme.bg, border: 'none', fontWeight: 'bold', fontSize: '0.7rem', cursor: 'pointer' }}>LIVE DEMO</button>
                         </a>
                         <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                            <button style={{ width: '100%', padding: '10px', background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, fontWeight: 'bold', fontSize: '0.7rem', cursor: 'pointer' }}>SOURCE</button>
                         </a>
                       </div>
                     ) : (
                       <div style={{ padding: '10px', border: `1px dashed ${theme.border}`, textAlign: 'center', fontSize: '0.7rem', color: theme.muted, textTransform: 'uppercase' }}>
                         Data Module Only
                       </div>
                     )}
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          )}

          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>Establish Uplink</h2>
              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <div style={{ padding: '25px', border: `1px solid ${theme.border}`, width: '100%', maxWidth: '400px', backgroundColor: theme.panel }}>
                  <p style={{ fontSize: '0.65rem', color: theme.accent, letterSpacing: '2px' }}>PRIMARY MAIL</p>
                  <p style={{ fontWeight: 'bold', fontSize: '0.9rem', wordBreak: 'break-all' }}>karl_alinsub@tip.edu.ph</p>
                </div>
                <div style={{ padding: '25px', border: `1px solid ${theme.border}`, width: '100%', maxWidth: '400px', backgroundColor: theme.panel }}>
                  <p style={{ fontSize: '0.65rem', color: theme.accent, letterSpacing: '2px' }}>LOCATION</p>
                  <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Mandaluyong, Philippines</p>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
          >
            <motion.div onClick={(e) => e.stopPropagation()} style={{ background: theme.bg, border: `2px solid ${theme.accent}`, padding: '20px', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
              <img src={selectedAchievement.img} style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain' }} alt="Milestone" />
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', marginTop: '15px' }}>{selectedAchievement.title}</h3>
              <p style={{ color: theme.muted, fontSize: '0.85rem' }}>{selectedAchievement.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MemberTwo;