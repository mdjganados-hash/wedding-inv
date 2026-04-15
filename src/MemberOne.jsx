import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Profile Images (From assets folder)
import dwanImg from './assets/1x1.jpg';

// Project & Achievement Images (From MemberOne folder, no spaces)
import codeImg from './MemberOne/code.png';
import troubleshootImg from './MemberOne/troubleshoot.png';
import jhscert from './MemberOne/jhscert.png';
import shscert from './MemberOne/shscert.png';

function MemberOne() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // --- Unique "Vintage Engineer Blueprint" Theme ---
  const darkTheme = {
    bg: '#423414',          // Deep Blueprint Paper
    panel: '#433b15',       // Slightly lighter blueprint paper
    accent: '#E6C229',      // Antique Brass / Gold
    text: '#EAEAEA',        // ink
    muted: '#8aaebd',       // Faded blueprint ink
    border: '#704b07',      // Grid lines
    shadow: '4px 4px 0px rgba(0, 0, 0, 0.5)' // Hard retro shadow
  };

  const lightTheme = {
    bg: '#F5F2EB',          // Vintage Draft Paper
    panel: '#EBE5D9',       // Lighter paper layer
    accent: '#57321d',      // Dark Navy ink
    text: '#42332b',        // Typewriter black
    muted: '#7a9494',       // Faded text
    border: '#D0C8B6',      // Pencil lines
    shadow: '4px 4px 0px rgba(29, 53, 87, 0.15)' // Hard retro shadow
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Technical Profile' },
    { id: 'about', label: 'Biographical Data' },
    { id: 'journey', label: 'Experience Logs' },
    { id: 'projects', label: 'Schematics & Records' }, 
    { id: 'connect', label: 'Communications' }
  ];

  // Specific Data derived from your Portfolio Document
  const achievementsData = [
    { id: 1, img: jhscert, title: 'Academic Excellence', desc: 'With honors in Junior High School' },
    { id: 2, img: shscert, title: 'Academic Excellence', desc: 'With honors in Senior High School' }
  ];

  const projectsData = [
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
        overflow: 'hidden', 
        // Engineering Blueprint Grid Pattern
        backgroundImage: isDarkMode 
          ? `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)` 
          : `linear-gradient(${theme.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.border} 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      
      {/* Top Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ background: theme.panel, border: `2px solid ${theme.text}`, color: theme.text, padding: '10px', width: '45px', height: '45px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: theme.shadow }}
        >
          {isDarkMode ? '☼' : '☾'}
        </button>
        <Link to="/">
          <button style={{ background: theme.accent, border: `2px solid ${theme.accent}`, color: isDarkMode ? '#050505' : '#fff', padding: '10px 20px', cursor: 'pointer', fontFamily: '"Courier New", monospace', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', boxShadow: theme.shadow }}>
            ↤ Return to Archive
          </button>
        </Link>
      </div>

      {/* Sidebar: Styled like a technical manual index */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }} transition={{ type: 'tween', duration: 0.4 }}
            style={{ 
              width: '320px', backgroundColor: theme.panel, borderRight: `4px solid ${theme.accent}`, 
              padding: '80px 30px 30px 30px', display: 'flex', flexDirection: 'column', zIndex: 40, 
              position: 'fixed', height: '100vh', overflowY: 'auto'
            }}
          >
            <div style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: `2px solid ${theme.border}` }}>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.8rem', letterSpacing: '2px', color: theme.accent, fontFamily: '"Montserrat", "Arial Black", sans-serif', textTransform: 'uppercase' }}>
                Document Ref: CPE22S1
              </p>
              <h2 style={{ margin: '0', fontFamily: '"Montserrat", "Arial Black", sans-serif', fontSize: '2.2rem', color: theme.text, lineHeight: '1.2' }}>
                DWYANE JORGE<br/>GANADOS
              </h2>
              <p style={{ margin: '10px 0 0 0', color: theme.muted, fontFamily: '"Montserrat", "Arial Black", sans-serif', fontSize: '0.9rem' }}>Computer Engineering</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ 
                    background: activeTab === tab.id ? theme.text : 'transparent', 
                    color: activeTab === tab.id ? theme.bg : theme.text, 
                    border: `2px solid ${theme.text}`, 
                    padding: '12px 15px', textAlign: 'left', cursor: 'pointer', 
                    fontFamily: '"Montserrat", "Arial Black", sans-serif', fontSize: '1rem', fontWeight: 'bold',
                    boxShadow: activeTab === tab.id ? theme.shadow : 'none',
                    textTransform: 'uppercase', transition: 'all 0.2s'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Sidebar bottom stamp */}
            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: `1px dashed ${theme.border}`, textAlign: 'center' }}>
                <p style={{ color: theme.muted, fontFamily: '"Montserrat", "Arial Black", sans-serif', fontSize: '0.75rem', margin: 0 }}>CONFIDENTIAL DOSSIER</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '320px' : '0', transition: 'margin-left 0.4s ease', padding: '100px 5% 60px 5%', overflowY: 'auto' }}>
        <AnimatePresence mode="wait">
          
          {/* TAB: OVERVIEW */}
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '950px', margin: '0 auto' }}>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
                
                {/* Vintage Polaroid / Spec Sheet Image Container */}
                <div style={{ flex: '0 0 auto', border: `12px solid #FFF`, backgroundColor: '#FFF', padding: '0px', boxShadow: theme.shadow, transform: 'rotate(-2deg)' }}>
                  <img src={dwanImg} alt="Dwyane Jorge Ganados" style={{ width: '280px', height: '280px', objectFit: 'cover', filter: isDarkMode ? 'sepia(0.3) contrast(1.2)' : 'sepia(0.1) contrast(1.1)' }} />
                  <div style={{ padding: '15px 10px', backgroundColor: '#FFF', textAlign: 'center', borderTop: '2px solid #EEE' }}>
                    <p style={{ margin: 0, color: '#333', fontFamily: '"Courier New", monospace', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '1px' }}>FIG 1. PORTRAIT</p>
                  </div>
                </div>

                <div style={{ flex: '1 1 400px' }}>
                  <h1 style={{ fontSize: '4.5rem', margin: '0 0 20px 0', fontFamily: '"Playfair Display", serif', color: theme.text, lineHeight: '1' }}>
                    Dwyane Jorge <br/><span style={{ fontStyle: 'italic', color: theme.accent, fontSize: '3.5rem' }}>Ganados</span>
                  </h1>
                  
                  <div style={{ backgroundColor: theme.panel, border: `2px solid ${theme.border}`, padding: '30px', boxShadow: theme.shadow, position: 'relative' }}>
                     {/* Draftsman tape details */}
                     <div style={{ position: 'absolute', top: '-10px', left: '40%', width: '80px', height: '20px', backgroundColor: isDarkMode ? '#FFF' : '#EAEAEA', opacity: 0.2, transform: 'rotate(-2deg)' }} />

                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: theme.text, margin: 0 }}>
                      I’m a student who’s passionate about technology, problem-solving, and figuring out how things work. Whether it’s programming, computers, or strategy games, I love exploring new ideas and taking on challenges. Learning new skills keeps me motivated, even when it gets tricky.
                      I’d describe myself as curious, determined, and friendly. I give respect where it’s earned, and I try to approach problems thoughtfully—but I won’t lie, I can be a bit procrastinatic at times. I see mistakes as learning opportunities, and each one helps me grow both academically and personally.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: ABOUT ME */}
          {activeTab === 'about' && (
             <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
               <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: '0 0 30px 0', borderBottom: `4px double ${theme.border}`, paddingBottom: '15px' }}>Biographical Data</h1>

               <div style={{ backgroundColor: theme.panel, padding: '40px', border: `2px solid ${theme.border}`, boxShadow: theme.shadow, lineHeight: '1.9', fontSize: '1.15rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 
                 <p style={{ margin: 0 }}>
                   <strong style={{ fontFamily: '"Courier New", monospace', color: theme.accent, textTransform: 'uppercase', fontSize: '1rem' }}>[ Personal Background ]</strong><br/>
                   Dwyane Jorge R. Ganados was born on July 8, 2006, in Manila. He spent most of his childhood growing up in Puerto Princesa City, Palawan, where he developed his early experiences and values. For his college education, he is currently residing in Manila to pursue his studies and further expand his knowledge in the field of technology.
                 </p>
                 
                 <p style={{ margin: 0, paddingTop: '20px', borderTop: `1px dashed ${theme.border}` }}>
                   <strong style={{ fontFamily: '"Courier New", monospace', color: theme.accent, textTransform: 'uppercase', fontSize: '1rem' }}>[ Technical Interests ]</strong><br/>
                   At a very young age, Dwyane Jorge R. Ganados was instantly captivated by gadgets and technology. His curiosity about how devices work led him to explore electronics and hands-on activities throughout his school years. He developed a strong interest in understanding hardware configurations, such as computers and televisions, as well as learning basic logic circuits and emerging technologies. His passion continues to grow as he applies his knowledge to practical projects and real-world applications.
                 </p>

                 <p style={{ margin: 0, paddingTop: '20px', borderTop: `1px dashed ${theme.border}` }}>
                   <strong style={{ fontFamily: '"Courier New", monospace', color: theme.accent, textTransform: 'uppercase', fontSize: '1rem' }}>[ Core Competencies ]</strong><br/>
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

          {/* TAB: JOURNEY */}
          {activeTab === 'journey' && (
             <motion.div key="journey" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: '0 0 30px 0', borderBottom: `4px double ${theme.border}`, paddingBottom: '15px' }}>Experience Logs</h1>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
                  {[
                    "Game development & Programming",
                    "Basic logic circuits",
                    "Building a PC",
                    "Vice President in SHS",
                    "Vollunteer in cleaning during SHS",
                    "Math and spelling competitions",
                    "Joining local tournaments",
                    "Online safety awareness presentations"
                  ].map((exp, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: theme.panel, border: `2px solid ${theme.border}`, padding: '15px 20px', boxShadow: theme.shadow }}>
                      <span style={{ color: theme.accent, fontFamily: '"Courier New", monospace', fontSize: '1.2rem', fontWeight: 'bold' }}>{String(idx + 1).padStart(2, '0')}.</span>
                      <p style={{ margin: 0, fontSize: '1.05rem' }}>{exp}</p>
                    </div>
                  ))}
                </div>
             </motion.div>
          )}

          {/* TAB: PROJECTS & ACHIEVEMENTS */}
          {activeTab === 'projects' && (
             <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
               <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: '0 0 10px 0' }}>Schematics & Records</h1>
               <p style={{ color: theme.muted, fontFamily: '"Courier New", monospace', marginBottom: '40px', fontSize: '0.9rem' }}>&gt; DISPLAYING ARCHIVED TECHNICAL FILES...</p>

               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '40px' }}>
                 
                 {/* Combine Projects and Achievements into one technical view */}
                 {[...projectsData, ...achievementsData].map((item, idx) => (
                   <motion.div 
                     key={idx}
                     whileHover={{ y: -5 }}
                     style={{ 
                       backgroundColor: theme.panel, 
                       border: `2px solid ${theme.text}`, 
                       padding: '20px',
                       boxShadow: theme.shadow,
                       display: 'flex', flexDirection: 'column'
                     }}
                   >
                     <div style={{ borderBottom: `2px solid ${theme.border}`, paddingBottom: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h3 style={{ margin: 0, fontFamily: '"Playfair Display", serif', fontSize: '1.6rem', color: theme.accent }}>{item.title}</h3>
                        <span style={{ fontFamily: '"Courier New", monospace', fontSize: '0.8rem', color: theme.muted }}>REF-{String(idx + 1).padStart(3, '0')}</span>
                     </div>
                     
                     {item.img ? (
                        <div 
                          onClick={() => setSelectedImage(item.img)}
                          style={{ cursor: 'pointer', border: `1px solid ${theme.border}`, padding: '5px', backgroundColor: theme.bg, marginBottom: '20px' }}
                        >
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            style={{ width: '100%', height: '220px', objectFit: 'cover', filter: isDarkMode ? 'sepia(0.2) brightness(0.9)' : 'none' }} 
                          />
                          <p style={{ textAlign: 'center', margin: '5px 0 0 0', fontFamily: '"Courier New", monospace', fontSize: '0.7rem', color: theme.muted }}>[ CLICK TO ENLARGE FIGURE ]</p>
                        </div>
                     ) : (
                        <div style={{ height: '220px', border: `1px dashed ${theme.border}`, marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p style={{ fontFamily: '"Courier New", monospace', color: theme.muted }}>NO VISUAL DATA ATTACHED</p>
                        </div>
                     )}

                     <p style={{ margin: '0', color: theme.text, lineHeight: '1.6', fontSize: '1.05rem', flexGrow: 1 }}>{item.desc}</p>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          )}

          {/* TAB: CONTACT */}
          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: '0 0 30px 0', borderBottom: `4px double ${theme.border}`, paddingBottom: '15px' }}>Communications Uplink</h1>

              <div style={{ backgroundColor: theme.panel, border: `2px solid ${theme.text}`, padding: '40px', boxShadow: theme.shadow }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', fontStyle: 'italic', textAlign: 'center' }}>
                  To collaborate on hardware projects, software development, or discuss technological systems, utilize the channels below.
                </p>
                  
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  
                  <div style={{ border: `1px solid ${theme.border}`, padding: '20px', backgroundColor: theme.bg }}>
                    <p style={{ color: theme.muted, fontFamily: '"Courier New", monospace', textTransform: 'uppercase', fontSize: '0.8rem', margin: '0 0 10px 0' }}>Electronic Mail</p>
                    <a href="mailto:mjeicalabis@tip.edu.ph" style={{ display: 'block', color: theme.text, fontSize: '1.1rem', textDecoration: 'none', fontWeight: 'bold' }}>mdjganados@tip.edu.ph</a>
                  </div>

                  <div style={{ border: `1px solid ${theme.border}`, padding: '20px', backgroundColor: theme.bg }}>
                    <p style={{ color: theme.muted, fontFamily: '"Courier New", monospace', textTransform: 'uppercase', fontSize: '0.8rem', margin: '0 0 10px 0' }}>Current Base</p>
                    <p style={{ color: theme.text, fontSize: '1.1rem', margin: 0, fontWeight: 'bold' }}>Manila, Philippines</p>
                  </div>

                  <div style={{ gridColumn: '1 / -1', border: `1px solid ${theme.border}`, padding: '20px', backgroundColor: theme.bg }}>
                    <p style={{ color: theme.muted, fontFamily: '"Courier New", monospace', textTransform: 'uppercase', fontSize: '0.8rem', margin: '0 0 10px 0' }}>Academic Institution Details</p>
                    <p style={{ color: theme.text, fontSize: '1.2rem', margin: '0 0 5px 0', fontFamily: '"Playfair Display", serif' }}>Technological Institute of the Philippines</p>
                    <p style={{ color: theme.accent, fontSize: '1rem', margin: 0, fontFamily: '"Courier New", monospace' }}>Program: Computer Engineering (2nd Year)</p>
                  </div>

                </div>

                {/* NEW: Social Network Links */}
                <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: `1px dashed ${theme.border}`, textAlign: 'center' }}>
                  <p style={{ color: theme.muted, fontFamily: '"Courier New", monospace', fontSize: '0.9rem', marginBottom: '20px' }}>&gt; EXTERNAL_NETWORK_LINKS</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    
                    {/* GitHub Link */}
                    <a 
                      href="https://github.com/mdjganados-hash" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', border: `2px solid ${theme.text}`, color: theme.text, textDecoration: 'none', transition: 'all 0.3s', backgroundColor: theme.bg }} 
                      onMouseOver={(e) => {e.currentTarget.style.backgroundColor = theme.text; e.currentTarget.style.color = theme.bg}} 
                      onMouseOut={(e) => {e.currentTarget.style.backgroundColor = theme.bg; e.currentTarget.style.color = theme.text}}
                    >
                      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    {/* Facebook Link */}
                    <a 
                      href="https://www.facebook.com/dwyanejorge/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', border: `2px solid ${theme.text}`, color: theme.text, textDecoration: 'none', transition: 'all 0.3s', backgroundColor: theme.bg }} 
                      onMouseOver={(e) => {e.currentTarget.style.backgroundColor = theme.text; e.currentTarget.style.color = theme.bg}} 
                      onMouseOut={(e) => {e.currentTarget.style.backgroundColor = theme.bg; e.currentTarget.style.color = theme.text}}
                    >
                      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>

                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Full Screen Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 999,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '40px'
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} 
              style={{
                backgroundColor: theme.panel,
                padding: '20px',
                border: `2px solid ${theme.accent}`,
                maxWidth: '900px',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
              }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                style={{ 
                  position: 'absolute', top: '15px', right: '15px', 
                  background: 'transparent', border: 'none', color: theme.accent, 
                  fontSize: '2rem', cursor: 'pointer', fontFamily: 'sans-serif'
                }}
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Expanded Technical View" 
                style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', border: `1px solid ${theme.border}` }} 
              />
              <p style={{ color: theme.accent, fontFamily: '"Courier New", monospace', margin: '15px 0 0 0', textAlign: 'center' }}>ARCHIVE SPECIFICATION CLOSEUP</p>
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

export default MemberOne;