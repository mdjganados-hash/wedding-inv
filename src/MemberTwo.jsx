import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import karlImg from './assets/2x2.jpg';

// Importing Achievement Images
import cert2nd from './Membertwo/mlcert.jpg';
import certChamp from './Membertwo/mlcert2.jpg';
import excAward from './Membertwo/mlcert3.jpg';
import excAward2 from './Membertwo/intrams.jpg';


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
    { id: 'home', label: 'Primary Terminal' },
    { id: 'about', label: 'Biographical Data' },
    { id: 'achievements', label: 'Milestone Records' },
    { id: 'connect', label: 'Communications' }
  ];

  const achievementsList = [
    { id: 1, img: certChamp, title: 'CEA Champion', desc: 'Awarded Championship Certificate in Computer Engineering.' },
    { id: 2, img: cert2nd, title: 'CEA 2nd Place', desc: 'Awarded 2nd Place Certificate for exemplary skills.' },
    { id: 3, img: excAward, title: 'Excellence Award', desc: 'Recognized for outstanding academic and extracurricular excellence.' },
    { id: 4, img: excAward2, title: 'Excellence Award II', desc: 'Continued recognition for dedication and performance.' }
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
        overflow: 'hidden', 
        backgroundImage: `radial-gradient(circle at top right, ${theme.accent}05 0%, transparent 60%)` 
      }}
    >
      
      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }}
            style={{ 
              width: '320px', backgroundColor: theme.panel, borderRight: `1px solid ${theme.border}`, 
              padding: '100px 30px', display: 'flex', flexDirection: 'column', zIndex: 40, position: 'fixed', height: '100vh' 
            }}
          >
            <div style={{ marginBottom: '50px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '30px' }}>
              <h2 style={{ margin: '0', fontFamily: '"Playfair Display", serif', fontSize: '1.6rem', color: theme.text, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Karl Siegfreid<br/><span style={{ color: theme.accent }}>Alinsub</span>
              </h2>
              <p style={{ margin: '10px 0 0 0', fontSize: '0.75rem', color: theme.muted, letterSpacing: '2px', textTransform: 'uppercase' }}>System Developer</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ 
                    background: activeTab === tab.id ? `${theme.accent}15` : 'transparent', 
                    color: activeTab === tab.id ? theme.accent : theme.text, 
                    border: 'none', padding: '15px', textAlign: 'left', cursor: 'pointer', 
                    fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s'
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
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '320px' : '0', transition: '0.4s', padding: '100px 80px' }}>
        
        {/* Toggle Controls */}
        <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, padding: '8px 15px', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 'bold' }}
          >
            {isSidebarOpen ? 'CLOSE INDEX' : 'OPEN INDEX'}
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{ background: theme.panel, border: `1px solid ${theme.border}`, color: theme.accent, width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
          >
            {isDarkMode ? '☀' : '☾'}
          </button>
          <Link to="/">
            <button style={{ background: theme.accent, color: theme.bg, border: 'none', padding: '8px 20px', fontWeight: 'bold', cursor: 'pointer' }}>BACK</button>
          </Link>
        </div>

        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '15px', left: '15px', width: '100%', height: '100%', border: `2px solid ${theme.accent}`, zIndex: 0 }}></div>
                  <img src={karlImg} alt="Profile" style={{ width: '280px', height: '350px', objectFit: 'cover', position: 'relative', zIndex: 1, filter: 'grayscale(0.3)' }} />
                </div>
                <div>
                  <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4.5rem', margin: 0, lineHeight: 1 }}>The<br/><span style={{ color: theme.accent }}>Architect.</span></h1>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: theme.muted, marginTop: '30px' }}>
                    19-year-old Computer Engineering student at TIP Manila, specializing in the fundamentals of programming and circuitry with a focus on logic design.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '850px' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', borderBottom: `1px solid ${theme.border}`, paddingBottom: '20px', marginBottom: '40px' }}>Identity Logs</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', lineHeight: '1.8' }}>
                <section>
                  <h3 style={{ color: theme.accent, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '10px' }}>[ Personal Background ]</h3>
                  <p>Karl Siegfreid Dela Cruz Alinsub is a 19-year-old Computer Engineering student at TIP Manila residing in Mandaluyong. Driven by curiosity and a strong determination to adapt to the evolving tech landscape, he actively seeks opportunities to expand his technical expertise. Known for his natural humor and positive energy, Karl balances a serious dedication to his craft with a competitive spirit and a drive to succeed in all areas of interest.</p>
                </section>

                <section>
                  <h3 style={{ color: theme.accent, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '10px' }}>[ Technical Interests ]</h3>
                  <p>Karl has developed a deep fascination with the fundamental layers of technology, specifically <strong>Networking</strong> and <strong>Logic Circuit Design</strong>. He is particularly engaged in translating theoretical concepts like Boolean algebra into functional, hands-on designs. His technical exploration is fueled by a desire to understand systems at their most basic level, using these insights to drive innovation in the field of engineering.</p>
                </section>

                <section>
                  <h3 style={{ color: theme.accent, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', marginBottom: '10px' }}>[ Core Competencies ]</h3>
                  <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <li style={{ paddingLeft: '20px', borderLeft: `2px solid ${theme.accent}` }}>Logic Circuit Architecture</li>
                    <li style={{ paddingLeft: '20px', borderLeft: `2px solid ${theme.accent}` }}>Network Fundamentals</li>
                    <li style={{ paddingLeft: '20px', borderLeft: `2px solid ${theme.accent}` }}>Collaborative Engineering</li>
                    <li style={{ paddingLeft: '20px', borderLeft: `2px solid ${theme.accent}` }}>Analytical Problem-Solving</li>
                    <li style={{ paddingLeft: '20px', borderLeft: `2px solid ${theme.accent}` }}>Strategic Pressure Management</li>
                  </ul>
                </section>
              </div>
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div key="achievements" variants={contentVariants} initial="hidden" animate="visible" exit="exit">
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', marginBottom: '40px' }}>Milestone Records</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '25px' }}>
                {achievementsList.map((item) => (
                  <motion.div 
                    key={item.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedAchievement(item)}
                    style={{ background: theme.panel, border: `1px solid ${theme.border}`, padding: '15px', cursor: 'pointer' }}
                  >
                    <img src={item.img} style={{ width: '100%', height: '180px', objectFit: 'cover', marginBottom: '15px' }} alt={item.title} />
                    <h4 style={{ margin: 0, fontSize: '1rem', color: theme.accent }}>{item.title}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ textAlign: 'center', marginTop: '50px' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem' }}>Establish Uplink</h2>
              <p style={{ color: theme.muted, fontSize: '1.2rem' }}>Ready for system integration and collaboration.</p>
              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <div style={{ padding: '30px', border: `1px solid ${theme.border}`, minWidth: '280px' }}>
                  <p style={{ fontSize: '0.7rem', color: theme.accent, letterSpacing: '2px' }}>PRIMARY MAIL</p>
                  <p style={{ fontWeight: 'bold', marginTop: '10px' }}>karl_alinsub@tip.edu.ph</p>
                </div>
                <div style={{ padding: '30px', border: `1px solid ${theme.border}`, minWidth: '280px' }}>
                  <p style={{ fontSize: '0.7rem', color: theme.accent, letterSpacing: '2px' }}>LOCATION</p>
                  <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Mandaluyong, Philippines</p>
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
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}
          >
            <motion.div onClick={(e) => e.stopPropagation()} style={{ background: theme.bg, border: `2px solid ${theme.accent}`, padding: '30px', maxWidth: '700px', textAlign: 'center' }}>
              <img src={selectedAchievement.img} style={{ maxWidth: '100%', maxHeight: '60vh' }} alt="Milestone" />
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', marginTop: '20px' }}>{selectedAchievement.title}</h3>
              <p style={{ color: theme.muted }}>{selectedAchievement.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MemberTwo;