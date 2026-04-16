import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext';

// Profile Images
import dwanImg from './assets/1x1.jpg';

// Project & Achievement Images
import codeImg from './MemberOne/code.png';
import troubleshootImg from './MemberOne/troubleshoot.png';
import jhscert from './MemberOne/jhscert.png';
import shscert from './MemberOne/shscert.png';

function MemberOne() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const darkTheme = {
    bg: '#423414',
    panel: '#433b15',
    accent: '#E6C229',
    text: '#EAEAEA',
    muted: '#8aaebd',
    border: '#704b07',
    shadow: '4px 4px 0px rgba(0, 0, 0, 0.5)'
  };

  const lightTheme = {
    bg: '#F5F2EB',
    panel: '#EBE5D9',
    accent: '#57321d',
    text: '#42332b',
    muted: '#7a9494',
    border: '#D0C8B6',
    shadow: '4px 4px 0px rgba(29, 53, 87, 0.15)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Technical Profile' },
    { id: 'about', label: 'Biographical Data' },
    { id: 'journey', label: 'Experience Logs' },
    { id: 'records', label: 'Schematics & Records' }, // Renamed from projects to avoid confusion
    { id: 'webprojects', label: 'Project Terminal' }, // NEW TAB
    { id: 'connect', label: 'Communications' }
  ];

  const achievementsData = [
    { id: 1, img: jhscert, title: 'Academic Excellence', desc: 'With honors in Junior High School' },
    { id: 2, img: shscert, title: 'Academic Excellence', desc: 'With honors in Senior High School' }
  ];

  const staticRecords = [
    {
      id: 1,
      title: 'Algorithms & Flowcharts',
      desc: 'Created algorithms, flowcharts, and basic programs in Python and C++.',
      img: codeImg
    },
    {
      id: 2,
      title: 'Networking & Troubleshooting',
      desc: 'Developed fundamental understanding in computer networking and hardware troubleshooting.',
      img: troubleshootImg
    },
  ];

  // NEW: Blank placeholders for your Vercel/GitHub projects
  const webProjectsData = [
    {
      id: 1,
      title: 'Enrollment System UI',
      desc: 'A modern user interface for a student enrollment system.',
      vercel: 'https://enrollment-ui-design-eta.vercel.app',
      github: 'https://github.com/mdjganados-hash/enrollment-ui-design'
    },
    {
      id: 2,
      title: 'Crypto Pulse',
      desc: 'A real-time cryptocurrency tracking application.',
      vercel: 'https://crypto-pulse-self.vercel.app',
      github: 'https://github.com/mdjganados-hash/crypto-pulse'
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.5 }}
      style={{ 
        display: 'flex', minHeight: '100vh', 
        fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif', 
        overflowX: 'hidden', 
        flexDirection: 'column', 
        backgroundImage: `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      
      {/* Top Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 60, display: 'flex', gap: '10px' }}>
        <button 
          onClick={toggleTheme}
          style={{ background: theme.panel, border: `2px solid ${theme.text}`, color: theme.text, padding: '10px', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: theme.shadow }}
        >
          {isDarkMode ? '☼' : '☾'}
        </button>
        <Link to="/">
          <button style={{ background: theme.accent, border: `2px solid ${theme.accent}`, color: isDarkMode ? '#050505' : '#fff', padding: '10px 15px', cursor: 'pointer', fontFamily: '"Courier New", monospace', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 'bold', boxShadow: theme.shadow }}>
            ↤ Return
          </button>
        </Link>
      </div>

      {/* Menu Toggle */}
      <div 
        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 60 }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <button style={{ background: theme.panel, border: `2px solid ${theme.text}`, color: theme.text, padding: '10px', height: '40px', cursor: 'pointer', fontWeight: 'bold', boxShadow: theme.shadow }}>
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }} transition={{ type: 'tween', duration: 0.4 }}
            style={{ 
              width: 'clamp(260px, 80vw, 320px)', backgroundColor: theme.panel, borderRight: `4px solid ${theme.accent}`, 
              padding: '80px 20px 30px 20px', display: 'flex', flexDirection: 'column', zIndex: 50, 
              position: 'fixed', height: '100vh', overflowY: 'auto', boxShadow: '10px 0 30px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: `2px solid ${theme.border}` }}>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.7rem', letterSpacing: '2px', color: theme.accent, fontFamily: '"Montserrat", "Arial Black", sans-serif', textTransform: 'uppercase' }}>
                Ref: CPE22S1
              </p>
              <h2 style={{ margin: '0', fontFamily: '"Montserrat", "Arial Black", sans-serif', fontSize: '1.5rem', color: theme.text, lineHeight: '1.2' }}>
                DWYANE JORGE<br/>GANADOS
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => { setActiveTab(tab.id); if(window.innerWidth < 768) setIsSidebarOpen(false); }}
                  style={{ 
                    background: activeTab === tab.id ? theme.text : 'transparent', 
                    color: activeTab === tab.id ? theme.bg : theme.text, 
                    border: `2px solid ${theme.text}`, 
                    padding: '12px 15px', textAlign: 'left', cursor: 'pointer', 
                    fontFamily: '"Montserrat", "Arial Black", sans-serif', fontSize: '0.85rem', fontWeight: 'bold',
                    boxShadow: activeTab === tab.id ? theme.shadow : 'none',
                    textTransform: 'uppercase', transition: 'all 0.2s'
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
      <div style={{ 
        flex: 1, 
        padding: '100px 5% 60px 5%', 
        marginLeft: isSidebarOpen && window.innerWidth > 768 ? '320px' : '0',
        transition: 'margin-left 0.4s ease', 
        overflowY: 'auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <AnimatePresence mode="wait">
          
          {/* TECHNICAL PROFILE */}
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '950px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ flex: '0 0 auto', border: `8px solid #FFF`, backgroundColor: '#FFF', padding: '0px', boxShadow: theme.shadow, transform: 'rotate(-1deg)', maxWidth: '280px', width: '100%' }}>
                  <img src={dwanImg} alt="Portrait" style={{ width: '100%', height: 'auto', objectFit: 'cover', filter: isDarkMode ? 'sepia(0.3) contrast(1.2)' : 'sepia(0.1) contrast(1.1)' }} />
                  <div style={{ padding: '10px', backgroundColor: '#FFF', textAlign: 'center', borderTop: '1px solid #EEE' }}>
                    <p style={{ margin: 0, color: '#333', fontFamily: '"Courier New", monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>FIG 1. PORTRAIT</p>
                  </div>
                </div>
                <div style={{ flex: '1 1 300px', textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                  <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', margin: '0 0 20px 0', fontFamily: '"Playfair Display", serif', color: theme.text, lineHeight: '1.1' }}>
                    Dwyane Jorge <br/><span style={{ fontStyle: 'italic', color: theme.accent, fontSize: '0.7em' }}>Ganados</span>
                  </h1>
                  <div style={{ backgroundColor: theme.panel, border: `2px solid ${theme.border}`, padding: '20px', boxShadow: theme.shadow, position: 'relative' }}>
                    <p style={{ fontSize: '1rem', lineHeight: '1.8', color: theme.text, margin: 0 }}>
                      I’m a student who’s passionate about technology, problem-solving, and figuring out how things work. Whether it’s programming, computers, or strategy games, I love exploring new ideas and taking on challenges. Learning new skills keeps me motivated, even when it gets tricky. I’d describe myself as curious, determined, and friendly. I give respect where it’s earned, and I try to approach problems thoughtfully—but I won’t lie, I can be a bit procrastinatic at times. I see mistakes as learning opportunities, and each one helps me grow both academically and personally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* BIOGRAPHICAL DATA */}
          {activeTab === 'about' && (
             <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
               <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '0 0 30px 0', borderBottom: `4px double ${theme.border}`, paddingBottom: '15px' }}>Biographical Data</h1>
               <div style={{ backgroundColor: theme.panel, padding: 'clamp(20px, 5vw, 40px)', border: `2px solid ${theme.border}`, boxShadow: theme.shadow, lineHeight: '1.8', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 <p style={{ margin: 0 }}>
                   <strong style={{ fontFamily: '"Courier New", monospace', color: theme.accent, textTransform: 'uppercase', fontSize: '0.9rem' }}>[ Personal Background ]</strong><br/>
                   Dwyane Jorge R. Ganados was born on July 8, 2006, in Manila. He spent most of his childhood growing up in Puerto Princesa City, Palawan, where he developed his early experiences and values. For his college education, he is currently residing in Manila to pursue his studies and further expand his knowledge in the field of technology.
                 </p>
                 <p style={{ margin: 0, paddingTop: '15px', borderTop: `1px dashed ${theme.border}` }}>
                   <strong style={{ fontFamily: '"Courier New", monospace', color: theme.accent, textTransform: 'uppercase', fontSize: '0.9rem' }}>[ Technical Interests ]</strong><br/>
                   At a very young age, Dwyane Jorge R. Ganados was instantly captivated by gadgets and technology. His curiosity about how devices work led him to explore electronics and hands-on activities throughout his school years. He developed a strong interest in understanding hardware configurations, such as computers and televisions, as well as learning basic logic circuits and emerging technologies.
                 </p>
                 <p style={{ margin: 0, paddingTop: '15px', borderTop: `1px dashed ${theme.border}` }}>
                   <strong style={{ fontFamily: '"Courier New", monospace', color: theme.accent, textTransform: 'uppercase', fontSize: '0.9rem' }}>[ Core Competencies ]</strong><br/>
                   • Communication Skills<br/>
                   • Basic Coding (C++, HTML, CSS, PYTHON)<br/>
                   • Logic Circuit Knowledge<br/>
                   • Computer Hardware Building<br/>
                   • Problem-Solving and Critical Thinking<br/>
                   • Adaptability and Teamwork
                 </p>
               </div>
             </motion.div>
          )}

          {/* EXPERIENCE LOGS */}
          {activeTab === 'journey' && (
             <motion.div key="journey" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '0 0 30px 0', borderBottom: `4px double ${theme.border}`, paddingBottom: '15px' }}>Experience Logs</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                  {[
                    "Game development & Programming",
                    "Basic logic circuits",
                    "Building a PC",
                    "Vice President in SHS",
                    "Volunteer in cleaning during SHS",
                    "Math and spelling competitions",
                    "Joining local tournaments",
                    "Online safety awareness presentations"
                  ].map((exp, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: theme.panel, border: `2px solid ${theme.border}`, padding: '15px', boxShadow: theme.shadow }}>
                      <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace', fontSize: '1rem', fontWeight: 'bold' }}>{String(idx + 1).padStart(2, '0')}.</span>
                      <p style={{ margin: 0, fontSize: '0.9rem' }}>{exp}</p>
                    </div>
                  ))}
                </div>
             </motion.div>
          )}

          {/* SCHEMATICS & RECORDS */}
          {activeTab === 'records' && (
             <motion.div key="records" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
               <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '0 0 10px 0' }}>Schematics & Records</h1>
               <p style={{ color: theme.muted, fontFamily: '"Courier New", monospace', marginBottom: '30px', fontSize: '0.8rem' }}>&gt; DISPLAYING ARCHIVED TECHNICAL FILES...</p>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                 {[...staticRecords, ...achievementsData].map((item, idx) => (
                   <motion.div key={idx} style={{ backgroundColor: theme.panel, border: `2px solid ${theme.text}`, padding: '15px', boxShadow: theme.shadow, display: 'flex', flexDirection: 'column' }}>
                     <h3 style={{ margin: "0 0 15px 0", fontSize: '1.2rem', color: theme.accent }}>{item.title}</h3>
                     <img src={item.img} alt={item.title} onClick={() => setSelectedImage(item.img)} style={{ width: '100%', height: '180px', objectFit: 'cover', marginBottom: '15px', border: `1px solid ${theme.border}`, cursor: 'pointer' }} />
                     <p style={{ margin: '0', fontSize: '0.9rem', flexGrow: 1 }}>{item.desc}</p>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          )}

          {/* NEW TAB: PROJECT TERMINAL */}
          {activeTab === 'webprojects' && (
             <motion.div key="webprojects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
               <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '0 0 10px 0' }}>Project Terminal</h1>
               <p style={{ color: theme.muted, fontFamily: '"Courier New", monospace', marginBottom: '30px', fontSize: '0.8rem' }}>&gt; INITIALIZING LIVE DEPLOYMENT MODULES...</p>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                 {webProjectsData.map((proj) => (
                   <motion.div 
                     key={proj.id} 
                     style={{ backgroundColor: theme.panel, border: `2px solid ${theme.accent}`, padding: '25px', boxShadow: theme.shadow, display: 'flex', flexDirection: 'column', gap: '15px' }}
                   >
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ margin: 0, fontSize: '1.4rem', fontFamily: '"Playfair Display", serif' }}>{proj.title}</h3>
                        <span style={{ fontSize: '0.7rem', color: theme.muted, fontFamily: '"Courier New", monospace' }}>EXE_00{proj.id}</span>
                     </div>
                     <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: theme.text, flexGrow: 1 }}>{proj.desc}</p>
                     
                     <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <a href={proj.vercel} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                          <button style={{ width: '100%', padding: '12px', background: theme.text, color: theme.bg, border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Execute Live
                          </button>
                        </a>
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                          <button style={{ width: '100%', padding: '12px', background: 'transparent', color: theme.text, border: `1px solid ${theme.text}`, cursor: 'pointer', fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Source Code
                          </button>
                        </a>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          )}

          {/* COMMUNICATIONS */}
          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '0 0 30px 0', borderBottom: `4px double ${theme.border}`, paddingBottom: '15px' }}>Communications</h1>
              <div style={{ backgroundColor: theme.panel, border: `2px solid ${theme.text}`, padding: 'clamp(20px, 5vw, 40px)', boxShadow: theme.shadow }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                  <div style={{ border: `1px solid ${theme.border}`, padding: '15px', backgroundColor: theme.bg }}>
                    <p style={{ color: theme.muted, textTransform: 'uppercase', fontSize: '0.7rem', margin: '0 0 5px 0' }}>Electronic Mail</p>
                    <a href="mailto:mdjganados@tip.edu.ph" style={{ color: theme.text, fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold', wordBreak: 'break-all' }}>mdjganados@tip.edu.ph</a>
                  </div>
                  <div style={{ border: `1px solid ${theme.border}`, padding: '15px', backgroundColor: theme.bg }}>
                    <p style={{ color: theme.muted, textTransform: 'uppercase', fontSize: '0.7rem', margin: '0 0 5px 0' }}>Current Base</p>
                    <p style={{ color: theme.text, fontSize: '1rem', margin: 0, fontWeight: 'bold' }}>Manila, PH</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
          >
            <div style={{ backgroundColor: theme.panel, padding: '10px', border: `2px solid ${theme.accent}`, maxWidth: '100%', maxHeight: '90vh', position: 'relative' }}>
              <img src={selectedImage} alt="Fullscreen" style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

export default MemberOne;