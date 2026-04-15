import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import sipiImg from './assets/2.2.jpg';

function MemberThree() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- New Editorial "Newsprint" Theme ---
  const lightTheme = {
    bg: '#F4F1EA',          // Aged paper
    panel: '#E8E4D9',       // Folded paper shadow
    accent: '#222222',      // Ink Black
    text: '#333333',        // Soft Black
    muted: '#777777',       
    border: '#222222',      // Heavy ink lines
    shadow: '6px 6px 0px rgba(0,0,0,0.1)'
  };

  const darkTheme = {
    bg: '#1A1A1A',          // Dark Archive
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
    { id: 'connect', label: 'Classifieds' }
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
        // 1. GLOBAL FONT: Classic serif for that "published" feel
        fontFamily: '"Playfair Display", "Times New Roman", serif', 
        overflow: 'hidden',
        backgroundImage: isDarkMode ? 'none' : 'url("https://www.transparenttextures.com/patterns/paper.png")' 
      }}
    >
      
      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
            style={{ 
              width: '280px', backgroundColor: theme.panel, borderRight: `2px solid ${theme.border}`, 
              padding: '90px 30px', display: 'flex', flexDirection: 'column', zIndex: 40, position: 'fixed', height: '100vh' 
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
                  key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ 
                    background: activeTab === tab.id ? theme.text : 'transparent', 
                    color: activeTab === tab.id ? theme.bg : theme.text, 
                    border: 'none', borderBottom: `1px solid ${theme.border}`, 
                    padding: '15px', textAlign: 'center', cursor: 'pointer', 
                    // 2. NAV FONT: Monospace for a typewriter effect
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

      {/* Main Content Area */}
      <div style={{ flex: 1, marginLeft: isSidebarOpen ? '280px' : '0', transition: 'margin-left 0.4s ease', padding: '80px 50px' }}>
        
        {/* Top Controls */}
        <div style={{ position: 'absolute', top: '20px', right: '30px', display: 'flex', gap: '15px' }}>
            <button onClick={() => setIsDarkMode(!isDarkMode)} style={{ background: 'transparent', border: `1px solid ${theme.text}`, color: theme.text, cursor: 'pointer', padding: '5px 10px' }}>
                {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
            </button>
            <Link to="/" style={{ color: theme.text, textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem', border: `1px solid ${theme.text}`, padding: '5px 10px' }}>
                [EXIT ARCHIVE]
            </Link>
        </div>

        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', borderBottom: `8px double ${theme.border}`, paddingBottom: '10px', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '5.5rem', margin: '0', textTransform: 'uppercase', lineHeight: '0.9' }}>RAMIEL JACOB SEPE</h1>
                <p style={{ fontSize: '1.2rem', margin: '10px 0', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 'bold' }}>Computer Engineering Correspondent</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '40px' }}>
                <div style={{ border: `1px solid ${theme.border}`, padding: '10px' }}>
                  <img src={sipiImg} alt="Sipi" style={{ width: '100%', filter: 'grayscale(100%) contrast(1.1)' }} />
                  <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '10px', fontStyle: 'italic' }}>Fig 1. A study in determination.</p>
                </div>
                
                <div style={{ 
                    fontFamily: '"Courier New", Courier, monospace', 
                    fontSize: '1rem', lineHeight: '1.6', textAlign: 'justify', columnCount: 2, columnGap: '30px' 
                }}>
                  <p>I am a person who always tries my best in everything I do. Hardworking and willing to learn, I keep trying to improve myself little by little.</p>
                  <p>Technology is a set of tools that help me grow. While school and life bring challenges, I do not give up easily. My goal is to finish my studies and secure a stable future for my family.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div key="about" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{ fontSize: '3.5rem', borderBottom: `2px solid ${theme.border}`, paddingBottom: '10px', textTransform: 'uppercase' }}>Biography</h1>
              <div style={{ padding: '30px 0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                 <p><span style={{ fontSize: '4rem', float: 'left', lineHeight: '0.8', paddingRight: '10px' }}>R</span>amiel Jacob Sepe, i was born on June 7, 2006, and currently 19 years old.  I lives in Parañaque City, Philippines. Growing up in a vibrant urban environment, i developed a strong interest in technology and modern innovations.
I am currently pursuing a Bachelor of Science in Computer Engineering at the Technological Institute of the Philippines. Through this studies, i continues to build my knowledge and skills in the field of computing, aiming to become a competent professional in the future.
Outside of academics, i  enjoys cars and motorcycles, showing a passion for machines and how they work. im also a food lover, always open to trying different kinds of dishes and experiences.
One of my key achievements is  determination to finish college, which reflects to dedication and perseverance. Looking ahead, my dreams of becoming successful and achieving financial stability, with the goal of building a secure and fulfilling life for me
</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'connect' && (
            <motion.div key="connect" variants={contentVariants} initial="hidden" animate="visible" exit="exit" style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ border: `2px solid ${theme.border}`, padding: '40px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '20px' }}>Classifieds</h1>
                <p style={{ fontFamily: 'monospace', marginBottom: '30px' }}>Reach out for inquiries or collaborations.</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                    <div style={{ border: `1px dashed ${theme.border}`, padding: '15px', width: '100%' }}>
                        <strong>ELECTRONIC MAIL:</strong> mrjsepe@tip.edu.ph
                    </div>
                    <div style={{ border: `1px dashed ${theme.border}`, padding: '15px', width: '100%' }}>
                        <strong>GITHUB ARCHIVE:</strong> @mrjsepe
                    </div>
                    <div style={{ border: `1px dashed ${theme.border}`, padding: '15px', width: '100%' }}>
                        <strong>LOCATION:</strong> paranaque city, philippines
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