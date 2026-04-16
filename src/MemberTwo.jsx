import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext';
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

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // --- Neo-Brutalist Emerald & Gold Palette ---
  const darkTheme = {
    bg: '#050D0A',          
    panel: '#0D1A15',       
    accent: '#D4AF37',      
    text: '#F1F1F1',        
    muted: '#6A8077',       
    border: '#1A3329',      
    shadow: '8px 8px 0px #000000'
  };

  const lightTheme = {
    bg: '#F8FAF8',          
    panel: '#FFFFFF',       
    accent: '#1B4332',      
    text: '#121212',        
    muted: '#7A8B83',       
    border: '#1B4332',      
    shadow: '8px 8px 0px #1B4332'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Main Console' },
    { id: 'about', label: 'Identity Logs' },
    { id: 'achievements', label: 'Archive Records' },
    { id: 'projects', label: 'Schematics' },
    { id: 'connect', label: 'Establish Link' }
  ];

  const achievementsList = [
    { id: 1, img: certChamp, title: 'CEA Champion', desc: 'Awarded Championship Certificate in Computer Engineering.' },
    { id: 2, img: cert2nd, title: 'CEA 2nd Place', desc: 'Awarded 2nd Place Certificate for exemplary skills.' },
    { id: 3, img: excAward, title: 'Excellence Award', desc: 'Recognized for outstanding academic and extracurricular excellence.' },
    { id: 4, img: excAward2, title: 'Excellence Award II', desc: 'Continued recognition for dedication and performance.' }
  ];

  const projectsList = [
    {
      id: 1,
      title: "Enrollment System UI",
      desc: "Enhanced user interface for a student enrollment system, showcasing modern design principles and responsive layouts.",
      img: projectOneImg,
      vercel: "https://enrollmentstudent.netlify.app",
      github: "https://github.com/mksalinsub-prog/EnrollmentKarlAlinsub"
    },
    {
      id: 2,
      title: "Crypto Pulse",
      desc: "A real-time cryptocurrency tracking application that provides users with up-to-date market data and insights.",
      img: projectTwoImg,
      vercel: "https://crypto-pulse-rosy.vercel.app",
      github: "https://github.com/mksalinsub-prog/crypto-pulse"
    },
    {
      id: 3,
      title: "Logic Design +/- Calculator",
      desc: "A comprehensive logic design project for a basic calculator capable of performing addition and subtraction, utilizing combinational logic circuits.",
      img: visualArchiveImg,
      isVisualOnly: true
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "circOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      style={{ 
        display: 'flex', minHeight: '100vh', 
        fontFamily: '"Space Grotesk", sans-serif', 
        overflowX: 'hidden', 
        flexDirection: 'column' 
      }}
    >
      {/* Dynamic Grid Overlay */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: `radial-gradient(${theme.border} 1px, transparent 1px)`, backgroundSize: '30px 30px', opacity: 0.3, pointerEvents: 'none' }} />
      
      {/* Persistent Navigation Bar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '70px', borderBottom: `2px solid ${theme.border}`, backgroundColor: theme.bg, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button onClick={() => setIsSidebarOpen(true)} style={{ background: theme.accent, border: 'none', color: isDarkMode ? '#000' : '#FFF', padding: '8px 15px', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>MENU</button>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', color: theme.accent, display: window.innerWidth < 600 ? 'none' : 'block' }}>SYSTEM://ALINSUB.V2</span>
         </div>
         <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={toggleTheme} style={{ width: '40px', height: '40px', borderRadius: '50%', border: `2px solid ${theme.border}`, background: 'transparent', color: theme.accent, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {isDarkMode ? '☼' : '☾'}
            </button>
            <Link to="/"><button style={{ border: `2px solid ${theme.border}`, background: 'transparent', color: theme.text, padding: '0 20px', fontWeight: 'bold', cursor: 'pointer' }}>EXIT</button></Link>
         </div>
      </nav>

      {/* Modern Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }} onClick={() => setIsSidebarOpen(false)}>
            <motion.div onClick={e => e.stopPropagation()} style={{ width: 'clamp(300px, 40vw, 450px)', height: '100%', backgroundColor: theme.panel, borderRight: `4px solid ${theme.accent}`, padding: '100px 40px', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', marginBottom: '50px', lineHeight: 1 }}>THE<br/><span style={{ color: theme.accent }}>ARCHITECT.</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => { setActiveTab(tab.id); setIsSidebarOpen(false); }} style={{ textAlign: 'left', background: 'transparent', border: 'none', color: activeTab === tab.id ? theme.accent : theme.text, fontSize: '1.2rem', fontWeight: '900', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', padding: '10px 0', borderBottom: activeTab === tab.id ? `2px solid ${theme.accent}` : '2px solid transparent', transition: '0.3s' }}>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main style={{ flex: 1, padding: '120px 5% 60px 5%', maxWidth: '1400px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: '-10px', border: `3px solid ${theme.accent}`, zIndex: 0 }} />
                <img src={karlImg} alt="Karl" style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1, boxShadow: theme.shadow }} />
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: theme.accent, color: isDarkMode ? '#000' : '#FFF', padding: '10px 20px', fontWeight: '900', zIndex: 2 }}>EST. 2006</div>
              </div>
              <div>
                <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.8, margin: '0 0 30px 0' }}>THE<br/><span style={{ color: theme.accent, fontStyle: 'italic' }}>ARCHITECT</span></h1>
                <div style={{ backgroundColor: theme.panel, padding: '30px', border: `2px solid ${theme.border}`, boxShadow: theme.shadow }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                        19-year-old Computer Engineering student at TIP Manila, specializing in the fundamentals of programming and circuitry with a focus on logic design.
                    </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px' }}>
              <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '40px' }}>Identity <span style={{ color: theme.accent }}>Logs</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <section style={{ borderLeft: `5px solid ${theme.accent}`, paddingLeft: '30px' }}>
                  <h3 style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>[ Biography ]</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>Karl Siegfreid Dela Cruz Alinsub is a 19-year-old Computer Engineering student at TIP Manila residing in Mandaluyong. Driven by curiosity and a strong determination to adapt to the evolving tech landscape, he actively seeks opportunities to expand his expertise. Known for his natural humor and positive energy, Karl balances a serious dedication to his craft with a competitive spirit and a drive to succeed in all areas of interest.</p>
                </section>
                <section style={{ borderLeft: `5px solid ${theme.border}`, paddingLeft: '30px' }}>
                  <h3 style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>[ Skills Data ]</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {['Logic Circuit Architecture', 'Network Fundamentals', 'Collaborative Engineering', 'Analytical Problem-Solving'].map(skill => (
                      <div key={skill} style={{ padding: '15px', background: theme.panel, border: `1px solid ${theme.border}`, fontWeight: 'bold' }}>{skill}</div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div key="achievements" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
              <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '40px' }}>Milestone <span style={{ color: theme.accent }}>Records</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                {achievementsList.map((item) => (
                  <motion.div key={item.id} whileHover={{ y: -10 }} onClick={() => setSelectedAchievement(item)} style={{ background: theme.panel, border: `2px solid ${theme.border}`, padding: '15px', cursor: 'pointer', boxShadow: theme.shadow }}>
                    <img src={item.img} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '20px' }} alt={item.title} />
                    <h4 style={{ margin: 0, fontSize: '1rem', color: theme.accent, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
             <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
               <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '40px' }}>Blueprints & <span style={{ color: theme.accent }}>Schematics</span></h2>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                 {projectsList.map((project) => (
                   <div key={project.id} style={{ backgroundColor: theme.panel, border: `2px solid ${theme.border}`, padding: '25px', boxShadow: theme.shadow, position: 'relative' }}>
                     <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', color: theme.accent }}>REV.0{project.id}</div>
                     <img src={project.img} alt={project.title} style={{ width: '100%', height: '220px', objectFit: 'cover', border: `1px solid ${theme.border}`, marginBottom: '20px' }} />
                     <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', fontWeight: '900', textTransform: 'uppercase' }}>{project.title}</h3>
                     <p style={{ margin: '0 0 25px 0', fontSize: '0.9rem', color: theme.muted, lineHeight: 1.6 }}>{project.desc}</p>
                     {!project.isVisualOnly ? (
                       <div style={{ display: 'flex', gap: '10px' }}>
                         <a href={project.vercel} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                            <button style={{ width: '100%', padding: '12px', background: theme.accent, color: isDarkMode ? '#000' : '#FFF', border: 'none', fontWeight: '900', fontSize: '0.7rem', cursor: 'pointer' }}>EXECUTE LIVE</button>
                         </a>
                         <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                            <button style={{ width: '100%', padding: '12px', background: 'transparent', border: `2px solid ${theme.accent}`, color: theme.accent, fontWeight: '900', fontSize: '0.7rem', cursor: 'pointer' }}>REPO</button>
                         </a>
                       </div>
                     ) : (
                       <div style={{ padding: '12px', border: `1px dashed ${theme.accent}`, textAlign: 'center', fontSize: '0.7rem', color: theme.accent, fontWeight: 'bold' }}>LOGIC DATA MODULE ONLY</div>
                     )}
                   </div>
                 ))}
               </div>
             </motion.div>
          )}

          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ textAlign: 'center', padding: '100px 0' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', textTransform: 'uppercase', lineHeight: 1 }}>CONNECT TO<br/><span style={{ color: theme.accent }}>TERMINAL</span></h2>
              <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{ padding: '30px', background: theme.panel, border: `2px solid ${theme.border}`, boxShadow: theme.shadow, minWidth: '300px' }}>
                  <p style={{ fontSize: '0.7rem', color: theme.accent, letterSpacing: '4px', marginBottom: '10px' }}>UPLINK ADDRESS</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>karl_alinsub@tip.edu.ph</p>
                </div>
                <div style={{ padding: '30px', background: theme.panel, border: `2px solid ${theme.border}`, boxShadow: theme.shadow, minWidth: '300px' }}>
                  <p style={{ fontSize: '0.7rem', color: theme.accent, letterSpacing: '4px', marginBottom: '10px' }}>COORDINATES</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Mandaluyong, Philippines</p>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Modern Achievement Lightbox */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedAchievement(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()} style={{ backgroundColor: theme.bg, border: `3px solid ${theme.accent}`, padding: '20px', maxWidth: '800px', width: '100%', position: 'relative', boxShadow: theme.shadow }}>
              <img src={selectedAchievement.img} style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'contain' }} alt="Achievement" />
              <div style={{ marginTop: '20px', textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.8rem', color: theme.accent, marginBottom: '10px' }}>{selectedAchievement.title}</h3>
                  <p style={{ color: theme.text, fontSize: '1rem', lineHeight: 1.6 }}>{selectedAchievement.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MemberTwo;