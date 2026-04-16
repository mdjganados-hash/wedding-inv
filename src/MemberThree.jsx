import { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext'; 
import sipiImg from './assets/2.2.jpg';
import cert from './Memberthree/cert.jpg';
import p1 from './Memberthree/pr1.jpg';

function MemberThree() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const lightTheme = {
    bg: '#F4F1EA',
    panel: '#E8E4D9',
    accent: '#222222',
    text: '#333333',
    muted: '#777777',
    border: '#222222',
    shadow: '6px 6px 0px rgba(0,0,0,0.1)'
  };

  const darkTheme = {
    bg: '#1A1A1A',
    panel: '#242424',
    accent: '#E5E0D8',
    text: '#E5E0D8',
    muted: '#888888',
    border: '#E5E0D8',
    shadow: '6px 6px 0px rgba(255,255,255,0.05)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const tabs = [
    { id: 'home', label: 'Front Page' },
    { id: 'about', label: 'Biography' },
    { id: 'projects', label: 'Projects' },
    { id: 'milestones', label: 'Milestones' }, // NEW TAB
    { id: 'connect', label: 'Classifieds' }
  ];

  // PROJECT DATA STRUCTURE - Reduced to 1
  const projectEntries = [
    {
      id: 1,
      title: "CRYPTO PULSE",
      desc: "A cryptocurrency price tracking web application built with React and Tailwind CSS. It features real-time price updates, historical data visualization, and a user-friendly interface for monitoring the crypto market.",
      img: p1, 
      vercel: "https://crypto-pulse-plum.vercel.app",
      github: "https://github.com/mrjsepe-byte/crypto-pulse"
    }
  ];

  // MILESTONE DATA STRUCTURE - 1 Blank
  const milestoneEntries = [
    {
      id: 1,
      title: "75 OJT HOURS COMPLETED",
      desc: "Successfully completed 75 hours of On-the-Job Training (OJT) at a local tech company, gaining hands-on experience in software development and project management. This milestone reflects dedication to practical learning and professional growth in the field of computer engineering.",
      img: cert
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.text }}
      transition={{ duration: 0.5 }}
      style={{ 
        display: 'flex', 
        minHeight: '100vh', 
        fontFamily: '"Playfair Display", "Times New Roman", serif', 
        overflowX: 'hidden',
        backgroundImage: isDarkMode ? 'none' : 'url("https://www.transparenttextures.com/patterns/paper.png")' 
      }}
    >
      
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          position: 'fixed', bottom: '20px', right: '20px', zIndex: 100,
          background: theme.accent, color: theme.bg, border: 'none',
          padding: '15px', borderRadius: '50%', cursor: 'pointer',
          boxShadow: theme.shadow, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
            style={{ 
              width: '280px', backgroundColor: theme.panel, borderRight: `2px solid ${theme.border}`, 
              padding: '60px 30px', display: 'flex', flexDirection: 'column', zIndex: 90, 
              position: 'fixed', height: '100vh', boxShadow: '10px 0 30px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ marginBottom: '40px', textAlign: 'center', borderBottom: `4px double ${theme.border}`, paddingBottom: '20px' }}>
              <h2 style={{ margin: '0', fontSize: '1.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                The SEPE<br/>Chronicle
              </h2>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.7rem', fontFamily: 'monospace', textTransform: 'uppercase' }}>Vol. 2026 • No. 03</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id} onClick={() => { setActiveTab(tab.id); setIsSidebarOpen(false); }}
                  style={{ 
                    background: activeTab === tab.id ? theme.text : 'transparent', 
                    color: activeTab === tab.id ? theme.bg : theme.text, 
                    border: 'none', borderBottom: `1px solid ${theme.border}`, 
                    padding: '15px', textAlign: 'center', cursor: 'pointer', 
                    fontFamily: '"Courier New", Courier, monospace', 
                    fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 'bold'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ 
        flex: 1, 
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 50px)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px', zIndex: 50 }}>
            <button onClick={toggleTheme} style={{ background: theme.bg, border: `1px solid ${theme.text}`, color: theme.text, cursor: 'pointer', padding: '5px 10px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                {isDarkMode ? 'LIGHT' : 'DARK'}
            </button>
            <Link to="/" style={{ color: theme.text, textDecoration: 'none', fontWeight: 'bold', fontSize: '0.7rem', border: `1px solid ${theme.text}`, padding: '5px 10px' }}>
                [EXIT]
            </Link>
        </div>

        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', borderBottom: `8px double ${theme.border}`, paddingBottom: '10px', marginBottom: '40px' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5.5rem)', margin: '0', textTransform: 'uppercase', lineHeight: '0.9' }}>RAMIEL JACOB SEPE</h1>
                <p style={{ fontSize: 'clamp(0.7rem, 2vw, 1.2rem)', margin: '10px 0', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>Computer Engineering Correspondent</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                <div style={{ border: `1px solid ${theme.border}`, padding: '10px', height: 'fit-content' }}>
                  <img src={sipiImg} alt="Sipi" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%) contrast(1.1)' }} />
                  <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '10px', fontStyle: 'italic' }}>Fig 1. A study in determination.</p>
                </div>
                
                <div style={{ 
                    fontFamily: '"Courier New", Courier, monospace', 
                    fontSize: '1rem', lineHeight: '1.6', textAlign: 'justify', 
                    columnCount: window.innerWidth > 768 ? 2 : 1, columnGap: '30px' 
                }}>
                  <p>I am a person who always tries my best in everything I do. Hardworking and willing to learn, I keep trying to improve myself little by little.</p>
                  <p>Technology is a set of tools that help me grow. While school and life bring challenges, I do not give up easily. My goal is to finish my studies and secure a stable future for my family.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', borderBottom: `2px solid ${theme.border}`, paddingBottom: '10px', textTransform: 'uppercase' }}>Biography</h1>
              <div style={{ padding: '30px 0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                 <p><span style={{ fontSize: '4rem', float: 'left', lineHeight: '0.8', paddingRight: '10px' }}>R</span>amiel Jacob Sepe, born on June 7, 2006. Growing up in Parañaque City, Philippines, he developed a strong interest in technology and modern innovations. Currently pursuing a Bachelor of Science in Computer Engineering at the Technological Institute of the Philippines. Through these studies, he continues to build his knowledge, aiming to become a competent professional. Outside of academics, he enjoys the mechanics of cars and motorcycles and exploring culinary experiences.</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div key="projects" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', borderBottom: `2px solid ${theme.border}`, paddingBottom: '10px', textTransform: 'uppercase', marginBottom: '30px' }}>Project Portfolio</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {projectEntries.map((project) => (
                  <div key={project.id} style={{ border: `1px solid ${theme.border}`, padding: '15px', backgroundColor: theme.panel, display: 'flex', flexDirection: 'column', maxWidth: '450px' }}>
                    <img src={project.img} alt={project.title} style={{ width: '100%', filter: 'grayscale(100%)', border: `1px solid ${theme.border}`, marginBottom: '15px' }} />
                    <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', margin: '0 0 10px 0', borderBottom: `1px solid ${theme.border}` }}>{project.title}</h3>
                    <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '0.9rem', lineHeight: '1.4', flexGrow: 1, marginBottom: '20px' }}>{project.desc}</p>
                    
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <a href={project.vercel} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                        <button style={{ width: '100%', background: theme.accent, color: theme.bg, border: 'none', padding: '10px', cursor: 'pointer', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '0.7rem' }}>LIVE SITE</button>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
                        <button style={{ width: '100%', background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px', cursor: 'pointer', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '0.7rem' }}>GITHUB</button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'milestones' && (
            <motion.div key="milestones" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', borderBottom: `2px solid ${theme.border}`, paddingBottom: '10px', textTransform: 'uppercase', marginBottom: '30px' }}>Milestone Records</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {milestoneEntries.map((milestone) => (
                  <div key={milestone.id} style={{ border: `1px solid ${theme.border}`, padding: '15px', backgroundColor: theme.panel, display: 'flex', flexDirection: 'column', maxWidth: '450px' }}>
                    <img src={milestone.img} alt={milestone.title} style={{ width: '100%', filter: 'grayscale(100%)', border: `1px solid ${theme.border}`, marginBottom: '15px' }} />
                    <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', margin: '0 0 10px 0', borderBottom: `1px solid ${theme.border}` }}>{milestone.title}</h3>
                    <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: '0.9rem', lineHeight: '1.4', flexGrow: 1 }}>{milestone.desc}</p>
                    <div style={{ marginTop: '20px', textAlign: 'center', borderTop: `1px dashed ${theme.border}`, paddingTop: '10px', fontSize: '0.7rem', textTransform: 'uppercase' }}>Verified Entry</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ border: `2px solid ${theme.border}`, padding: 'clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', textTransform: 'uppercase', marginBottom: '20px' }}>Classifieds</h1>
                <p style={{ fontFamily: 'monospace', marginBottom: '30px', fontSize: '0.9rem' }}>Reach out for inquiries or collaborations.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                    <div style={{ border: `1px dashed ${theme.border}`, padding: '15px', width: '100%', boxSizing: 'border-box', overflowWrap: 'break-word' }}>
                        <strong style={{ fontSize: '0.8rem' }}>ELECTRONIC MAIL:</strong><br/>mrjsepe@tip.edu.ph
                    </div>
                    <div style={{ border: `1px dashed ${theme.border}`, padding: '15px', width: '100%', boxSizing: 'border-box' }}>
                        <strong style={{ fontSize: '0.8rem' }}>GITHUB ARCHIVE:</strong><br/>@mrjsepe
                    </div>
                    <div style={{ border: `1px dashed ${theme.border}`, padding: '15px', width: '100%', boxSizing: 'border-box' }}>
                        <strong style={{ fontSize: '0.8rem' }}>LOCATION:</strong><br/>Paranaque City, PH
                    </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MemberThree;