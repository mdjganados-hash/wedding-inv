import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import mcleanImg from './assets/2.2.jpg';

// --- IMPORT CERTIFICATES FROM MemberThree FOLDER ---
import cert1 from './MemberThree/Conduct Award.jpg'; 
import cert2 from './MemberThree/Honesty Award.jpg';
import cert3 from './MemberThree/Marian Award.jpg';
import cert4 from './MemberThree/Most Active Participation Award.jpg';
import cert5 from './MemberThree/Squal Goals Certificate.jpg';

function MemberThree() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Chronicle Theme
  const lightTheme = {
    bg: '#F5F2EB',          
    panel: '#EBE6DC',       
    accent: '#8B0000',      
    text: '#1C1C1C',        
    muted: '#5A5A5A',       
    border: '#1C1C1C'       
  };

  const darkTheme = {
    bg: '#1C1C1C',          
    panel: '#262626',       
    accent: '#D32F2F',      
    text: '#E5E0D8',        
    muted: '#A0A0A0',       
    border: '#4A4A4A'       
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  // Updated Tab Order and Labels
  const tabs = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'About Me' },
    { id: 'journey', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Contact' }
  ];

  // Data populated from Portfolio using exact certificate images
  const timelineData = [
    { id: 1, img: cert1, title: 'Conduct Award', date: 'Academic Milestone', desc: 'Recognized for excellent behavior, strong moral principles, and serving as a role model to peers.' },
    { id: 2, img: cert2, title: 'Honesty Award', date: 'Academic Milestone', desc: 'Awarded for demonstrating integrity, truthfulness, and trustworthy character within the academic community.' },
    { id: 3, img: cert3, title: 'Marian Award', date: 'Academic Milestone', desc: 'Honored with the Marian Award for embodying the core values and spirit of the institution.' },
    { id: 4, img: cert4, title: 'Most Active Participation Award', date: 'Academic Milestone', desc: 'Acknowledged for consistent enthusiasm, engagement, and active involvement in school activities.' },
    { id: 5, img: cert5, title: 'Squad Goals Certificate', date: 'Team Achievement', desc: 'A special recognition highlighting teamwork, collaboration, and collective success with peers.' },
  ];

  // Updated Publications Data with Actual GitHub Repositories
  const publicationsData = [
    {
      id: 1,
      title: 'Interactive Dashboard',
      category: 'WEB DEVELOPMENT',
      desc: 'A dynamic interface designed to streamline data visualization and user management through an interactive dashboard layout.',
      codeLink: 'https://github.com/mjmadornado-byte/Dashboard',
      siteLink: null,
    },
    {
      id: 2,
      title: 'University Enrollment Portal',
      category: 'SYSTEMS ENGINEERING',
      desc: 'A comprehensive academic portal engineered to facilitate and manage the student enrollment process efficiently.',
      codeLink: 'https://github.com/mjmadornado-byte/university',
      siteLink: null,
    },
    {
      id: 3,
      title: 'Crypto Pulse',
      category: 'FINTECH',
      desc: 'A cryptocurrency tracking platform built to provide real-time data, market trends, and analytical insights.',
      codeLink: 'https://github.com/mjmadornado-byte/crypto-pulseee',
      siteLink: null,
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', minHeight: '100vh', fontFamily: '"Times New Roman", Times, serif', overflow: 'hidden' }}
    >
      
      {/* Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 50, background: theme.bg, border: `2px solid ${theme.text}`, color: theme.text, padding: '8px 12px', cursor: 'pointer', fontFamily: '"Courier New", Courier, monospace', fontWeight: 'bold', textTransform: 'uppercase' }}
      >
        {isSidebarOpen ? '[X] FOLD' : '[+] EXPAND'}
      </button>

      {/* Top Right Controls */}
      <div style={{ position: 'fixed', top: '20px', right: '30px', zIndex: 50, display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ background: 'transparent', border: `2px solid ${theme.text}`, color: theme.text, padding: '10px', borderRadius: '0', width: '45px', height: '45px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          title="Toggle Print"
        >
          {isDarkMode ? '☀' : '☾'}
        </button>
        <Link to="/">
          <button style={{ background: theme.text, border: `2px solid ${theme.text}`, color: theme.bg, padding: '10px 20px', cursor: 'pointer', fontFamily: '"Courier New", monospace', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            [ RETURN TO FRONT PAGE ]
          </button>
        </Link>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ type: 'tween', duration: 0.4 }}
            style={{ width: '280px', backgroundColor: theme.panel, borderRight: `3px solid ${theme.border}`, padding: '90px 30px 30px 30px', display: 'flex', flexDirection: 'column', zIndex: 40, position: 'fixed', height: '100vh', overflowY: 'auto' }}
          >
            <div style={{ marginBottom: '40px', textAlign: 'center', borderBottom: `2px solid ${theme.border}`, paddingBottom: '20px' }}>
              <h2 style={{ margin: '0', fontFamily: '"Playfair Display", serif', fontSize: '2rem', textTransform: 'uppercase', lineHeight: '1.1' }}>
                John Mclean A. Adornado
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ background: activeTab === tab.id ? theme.text : 'transparent', color: activeTab === tab.id ? theme.bg : theme.text, border: 'none', borderBottom: `1px dotted ${theme.text}`, padding: '15px 10px', textAlign: 'left', cursor: 'pointer', fontFamily: '"Courier New", monospace', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: activeTab === tab.id ? 'bold' : 'normal', transition: 'all 0.2s' }}
                >
                  {activeTab === tab.id ? `> ${tab.label}` : `  ${tab.label}`}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '280px' : '0', transition: 'margin-left 0.4s ease', padding: '100px 60px 60px 60px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          
          {/* HOME / OVERVIEW TAB */}
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
              
              <div style={{ borderBottom: `4px double ${theme.border}`, paddingBottom: '20px', marginBottom: '40px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '5rem', margin: '0', fontFamily: '"Playfair Display", serif', textTransform: 'uppercase', lineHeight: '1' }}>John McLean A. Adornado</h1>
                <p style={{ fontSize: '1.5rem', margin: '10px 0 0 0', fontStyle: 'italic' }}>Computer Engineering Student</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
                <div>
                  <img src={mcleanImg} alt="McLean" style={{ width: '100%', height: 'auto', border: `2px solid ${theme.border}`, padding: '5px', backgroundColor: theme.bg }} />
                  <p style={{ textAlign: 'center', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '10px', color: theme.muted }}>Captured on film.</p>
                </div>
                
                <div style={{ columnCount: 2, columnGap: '30px', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  <p>I am a simple person who always tries my best in everything I do. I can say that I am hardworking and willing to learn new things. I am not perfect, but I keep trying to improve myself little by little.</p>
                  <p>I like learning about technology, especially computers, because it is interesting and helpful for my future. Sometimes I experience challenges in school and in life, but I do not give up easily. I stay positive and continue working hard because I know it will help me grow.</p>
                  <h3 style={{ color: theme.accent, fontFamily: '"Courier New", monospace', marginTop: '20px' }}>// DIRECTIVE:</h3>
                  <p>My goal is to finish my studies and have a stable job someday. I want to help my family and make them proud. I believe that with hard work and determination, I can achieve my dreams.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* EDITORIAL / ABOUT ME TAB */}
          {activeTab === 'about' && (
            <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '900px', width: '100%' }}>
              <div style={{ borderBottom: `2px solid ${theme.border}`, paddingBottom: '20px', marginBottom: '30px' }}>
                 <p style={{ fontFamily: '"Courier New", monospace', color: theme.muted, textTransform: 'uppercase', fontSize: '0.8rem', margin: '0 0 10px 0' }}>COLUMN I.</p>
                 <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3.5rem', margin: 0, textTransform: 'uppercase' }}>About Me</h1>
              </div>

              <div style={{ backgroundColor: theme.panel, border: `2px solid ${theme.border}`, padding: '40px', columnCount: 2, columnGap: '40px', fontSize: '1.1rem', lineHeight: '1.9', textAlign: 'justify' }}>
                 <p><span style={{ fontSize: '4rem', float: 'left', lineHeight: '0.8', color: theme.text, paddingRight: '15px', fontFamily: '"Playfair Display", serif', marginTop: '5px' }}>J</span>ohn Mclean A. Adornado, born on March 22, 2005, and hailing from Infanta, Quezon, is a student who views technology not just as a set of tools, but as an ever-expanding language that needs to be deciphered and mastered.</p>
                 <p>Throughout his academic journey, he has focused on building a strong foundation in basic computer skills, coding in C++, HTML, and CSS, and troubleshooting hardware. He is hardworking, responsible, and possesses excellent time management skills, allowing him to handle challenges effectively.</p>
                 <p>Beyond the screen, John Mclean has a vibrant set of interests. He enjoys exploring new ideas, spending time with friends and family, and staying active through sports like basketball and cycling. He believes that the best path forward is through rigorous learning and an unwavering positive attitude.</p>
              </div>
            </motion.div>
          )}

          {/* TIMELINE / ACHIEVEMENTS TAB */}
          {activeTab === 'journey' && (
            <motion.div key="journey" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', width: '100%' }}>
               <div style={{ borderBottom: `4px double ${theme.border}`, paddingBottom: '10px', marginBottom: '40px', textAlign: 'center' }}>
                 <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: 0, textTransform: 'uppercase' }}>Achievements</h1>
                 <p style={{ fontFamily: '"Courier New", monospace', color: theme.accent, fontSize: '1rem', marginTop: '10px', fontWeight: 'bold' }}>// DOCUMENTED MILESTONES</p>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                 {timelineData.map((item) => (
                   <motion.div 
                     key={item.id}
                     whileHover={{ y: -5, backgroundColor: isDarkMode ? '#333' : '#E0D8C8' }}
                     onClick={() => setSelectedItem(item)}
                     style={{ 
                       backgroundColor: theme.bg, 
                       padding: '15px', 
                       border: `2px solid ${theme.border}`, 
                       cursor: 'pointer',
                       transition: 'background-color 0.3s ease'
                     }}
                   >
                     <div style={{ borderBottom: `2px solid ${theme.text}`, paddingBottom: '10px', marginBottom: '15px' }}>
                       <span style={{ fontFamily: '"Courier New", monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>DATE: {item.date}</span>
                     </div>
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       style={{ 
                         width: '100%', 
                         height: '180px', 
                         objectFit: 'cover', 
                         border: `1px solid ${theme.border}`,
                         marginBottom: '15px'
                       }} 
                     />
                     <h3 style={{ color: theme.text, fontSize: '1.3rem', margin: '0 0 10px 0', fontFamily: '"Playfair Display", serif' }}>{item.title}</h3>
                     <p style={{ color: theme.text, fontFamily: '"Courier New", monospace', fontSize: '0.8rem', margin: 0, textDecoration: 'underline' }}>[ VIEW ATTACHMENT ]</p>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          )}

          {/* PUBLICATIONS / PROJECTS TAB */}
          {activeTab === 'projects' && (
             <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', width: '100%' }}>
               <div style={{ borderBottom: `4px double ${theme.border}`, paddingBottom: '10px', marginBottom: '40px', textAlign: 'center' }}>
                 <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: 0, textTransform: 'uppercase' }}>Projects</h1>
                 <p style={{ fontFamily: '"Courier New", monospace', color: theme.accent, fontSize: '1rem', marginTop: '10px', fontWeight: 'bold' }}>// CATALOG OF PROJECTS</p>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '30px' }}>
                 {publicationsData.map((pub) => (
                   <motion.div 
                     key={pub.id}
                     whileHover={{ x: 5 }}
                     style={{ 
                       border: `2px solid ${theme.border}`, 
                       borderLeft: `8px solid ${theme.text}`,
                       padding: '25px',
                       backgroundColor: theme.panel,
                       display: 'flex',
                       flexDirection: 'column'
                     }}
                   >
                     <p style={{ color: theme.accent, fontFamily: '"Courier New", monospace', fontSize: '0.8rem', margin: '0 0 10px 0', fontWeight: 'bold' }}>
                       FILED UNDER: {pub.category}
                     </p>
                     <h3 style={{ color: theme.text, fontSize: '1.8rem', margin: '0 0 15px 0', fontFamily: '"Playfair Display", serif', lineHeight: '1.2' }}>
                       {pub.title}
                     </h3>
                     <p style={{ color: theme.text, fontSize: '1rem', lineHeight: '1.6', margin: '0 0 25px 0', flexGrow: 1 }}>
                       {pub.desc}
                     </p>

                     <div style={{ display: 'flex', gap: '15px', borderTop: `1px dashed ${theme.border}`, paddingTop: '15px' }}>
                       {pub.siteLink && (
                         <a href={pub.siteLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.text, fontFamily: '"Courier New", monospace', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold', borderBottom: `1px solid ${theme.text}` }}>
                           [ VIEW LIVE SITE ]
                         </a>
                       )}
                       {pub.codeLink && (
                         <a href={pub.codeLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.text, fontFamily: '"Courier New", monospace', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold', borderBottom: `1px solid ${theme.text}` }}>
                           [ SOURCE CODE ]
                         </a>
                       )}
                     </div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
          )}

          {/* CLASSIFIEDS / CONTACT TAB */}
          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '800px', width: '100%' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px', borderBottom: `4px double ${theme.border}`, paddingBottom: '20px' }}>
                <h1 style={{ fontFamily: '"Playfair Display", serif', color: theme.text, fontSize: '3rem', margin: '0', textTransform: 'uppercase' }}>Contact</h1>
                <p style={{ fontFamily: '"Courier New", monospace', color: theme.muted, fontSize: '1rem', marginTop: '10px' }}>// CONTACT & INQUIRIES</p>
              </div>

              <div style={{ border: `2px solid ${theme.border}`, padding: '10px', backgroundColor: theme.panel }}>
                <div style={{ border: `1px solid ${theme.text}`, padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  
                  {/* Ad Block 1 - Updated to Contact Information */}
                  <div style={{ borderBottom: `2px dashed ${theme.border}`, paddingBottom: '20px', marginBottom: '10px' }}>
                    <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', margin: '0 0 10px 0', textTransform: 'uppercase' }}>Contact Information</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                      Feel free to reach out for collaborations, project inquiries, or just to say hello. I am always open to discussing new opportunities in software engineering and connecting with fellow tech enthusiasts.
                    </p>
                  </div>

                  {/* Ad Block 2 - Updated with User Data */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <h3 style={{ fontFamily: '"Courier New", monospace', fontSize: '1.1rem', margin: '0 0 10px 0', color: theme.accent, fontWeight: 'bold' }}>DIRECT LINE:</h3>
                      <p style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>Email: <a href="mailto:mjmadornado@tip.edu.ph" style={{ color: theme.text, textDecoration: 'underline' }}>mjmadornado@tip.edu.ph</a></p>
                      <p style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>Location: Infanta, Quezon</p>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: '"Courier New", monospace', fontSize: '1.1rem', margin: '0 0 10px 0', color: theme.accent, fontWeight: 'bold' }}>SOCIAL TELEGRAPH:</h3>
                      <p style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>Github: <a href="https://github.com/mjmadornado-byte" target="_blank" rel="noopener noreferrer" style={{ color: theme.text, textDecoration: 'underline' }}>@mjmadornado-byte</a></p>
                      <p style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>Facebook: <a href="https://www.facebook.com/johnmclean.adornado2221" target="_blank" rel="noopener noreferrer" style={{ color: theme.text, textDecoration: 'underline' }}>John Mclean Adornado</a></p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* MODAL / LIGHTBOX FOR TIMELINE ACHIEVEMENTS */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: isDarkMode ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.8)', zIndex: 999,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '40px'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()} 
              style={{
                backgroundColor: theme.bg,
                padding: '20px',
                border: `4px solid ${theme.border}`,
                outline: `2px solid ${theme.bg}`,
                outlineOffset: '-8px',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '10px 10px 0px rgba(0,0,0,0.5)'
              }}
            >
              <button
                onClick={() => setSelectedItem(null)}
                style={{ 
                  position: 'absolute', top: '15px', right: '15px', 
                  background: theme.text, color: theme.bg, border: 'none', 
                  fontFamily: '"Courier New", monospace', fontWeight: 'bold',
                  padding: '5px 10px', cursor: 'pointer'
                }}
              >
                [X] CLOSE
              </button>

              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <img 
                  src={selectedItem.img} 
                  alt={selectedItem.title} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '50vh', 
                    objectFit: 'contain', 
                    border: `2px solid ${theme.border}`
                  }} 
                />
                <div style={{ borderTop: `2px dashed ${theme.border}`, marginTop: '20px', paddingTop: '20px' }}>
                  <h2 style={{ color: theme.text, fontFamily: '"Playfair Display", serif', margin: '0 0 10px 0', fontSize: '2.5rem', textTransform: 'uppercase' }}>
                    {selectedItem.title}
                  </h2>
                  <p style={{ fontFamily: '"Courier New", monospace', color: theme.accent, fontWeight: 'bold', marginBottom: '15px' }}>RECORDED: {selectedItem.date}</p>
                  <p style={{ color: theme.text, margin: 0, fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'justify' }}>
                    {selectedItem.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MemberThree;