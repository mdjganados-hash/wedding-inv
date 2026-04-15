import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import dwanImg from './assets/1x1.jpg'; 
import karlImg from './assets/2x2.jpg';
import jicobImg from './assets/2.2.jpg';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Unique Vintage Palette ---
  const lightTheme = {
    bg: '#F3EFE7',           
    cardBg: '#FCFAF5',       
    accent: '#612929',       
    metallic: '#a36440',     
    textMain: '#2C302E',     
    textMuted: '#706e68',    
    border: '#D0C9B8',       
    shadow: '0 10px 25px rgba(41, 97, 87, 0.08)'
  };

  const darkTheme = {
    bg: '#0f0f17',           
    cardBg: '#172023',       
    accent: '#43d4cd',       
    metallic: '#5ba1b6',     
    textMain: '#E3E6E3',     
    textMuted: '#849396',    
    border: '#28363A',       
    shadow: '0 12px 30px rgba(0, 0, 0, 0.6)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const members = [
    { 
      id: 'No. 01', 
      name: 'Dwyane Jorge Ganados', 
      role: 'Computer Engineering Student',
      desc: 'A dedicated artisan with a profound interest in the mechanical and the electrical. Eager to unearth the workings of modern machinery and apply classic ingenuity.',
      skills: ['C++', 'HTML', 'CSS', 'PYTHON', 'HARDWARE'],
      path: '/member-one',
      img: dwanImg
    },
    { 
      id: 'No. 02', 
      name: 'Karl Seigfreid Alinsub', 
      role: 'Computer Engineering Student',
      desc: 'A scholar of technology and system architecture. Enjoys exploring the delicate interface between hardware and software, safeguarding systems like an archivist.',
      skills: ['C++', 'PYTHON', 'JAVA', 'MYSQL', 'NETWORKING'],
      path: '/member-two',
      img: karlImg
    },
    { 
      id: 'No. 03', 
      name: 'Ramiel Jicob Sipi', 
      role: 'Computer Engineering Student',
      desc: 'A steadfast apprentice of the digital age who endeavors to master his craft. Focused on building a solid foundation of knowledge to endure the test of time.',
      skills: ['HTML', 'CSS', 'C++', 'TROUBLESHOOTING', 'LOGIC'],
      path: '/member-three',
      img: jicobImg
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.textMain }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ 
        minHeight: '100vh', 
        fontFamily: '"Playfair Display", "Georgia", serif',
        padding: 'clamp(30px, 5vh, 60px) 20px', // Responsive padding
        overflowX: 'hidden'
      }}
    >
      {/* Texture Line - Hidden on very small mobile to save space */}
      <div style={{ position: 'fixed', top: 0, left: 'clamp(10px, 5vw, 40px)', bottom: 0, width: '1px', backgroundColor: theme.border, zIndex: 0, opacity: 0.5 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section - Mobile Responsive Flex */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          marginBottom: 'clamp(40px, 10vh, 80px)', 
          paddingLeft: 'clamp(15px, 5vw, 40px)' 
        }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <p style={{ fontFamily: '"Courier New", monospace', letterSpacing: '2px', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', color: theme.textMuted, margin: '0 0 10px 0', textTransform: 'uppercase' }}>
              Archive / Group 1
            </p>
            <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', margin: '0', fontWeight: 'normal', color: theme.textMain, lineHeight: '1.1' }}>
              The Team's <br/> <span style={{ fontStyle: 'italic', color: theme.accent }}>Portfolio</span>
            </h1>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              background: theme.cardBg,
              border: `2px solid ${theme.metallic}`,
              borderRadius: '50%',
              width: 'clamp(50px, 10vw, 65px)', 
              height: 'clamp(50px, 10vw, 65px)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              cursor: 'pointer', color: theme.metallic, fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              outline: 'none', boxShadow: theme.shadow,
              transition: 'all 0.3s',
              flexShrink: 0
            }}
            title="Toggle Era"
          >
            {isDarkMode ? '☽' : '☀'}
          </motion.button>
        </div>
        
        {/* Dossier Cards Grid - Auto-fit for Responsive Stacking */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Shrink min size for mobile
            gap: 'clamp(20px, 4vw, 40px)', 
            marginBottom: '100px', 
            paddingLeft: 'clamp(15px, 5vw, 40px)' 
          }}
        >
          {members.map((member) => (
            <motion.div 
              key={member.id} 
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: theme.shadow }}
              style={{ 
                backgroundColor: theme.cardBg,
                padding: '6px',
                border: `1px solid ${theme.border}`,
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{
                border: `1px solid ${theme.border}`,
                padding: 'clamp(15px, 4vw, 30px)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', top: '-12px', left: '20px', backgroundColor: theme.cardBg, padding: '0 10px', color: theme.metallic, fontFamily: '"Courier New", monospace', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {member.id}
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px', marginTop: '5px' }}>
                  <div style={{ width: '60px', height: '60px', border: `2px solid ${theme.accent}`, borderRadius: '50%', overflow: 'hidden', padding: '2px', flexShrink: 0 }}>
                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: isDarkMode ? 'sepia(0.3) brightness(0.9) grayscale(0.2)' : 'sepia(0.2) contrast(1.1)' }} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 2px 0', fontSize: '1.2rem', fontWeight: 'normal', lineHeight: '1.2' }}>{member.name}</h3>
                    <p style={{ margin: 0, fontSize: '0.7rem', color: theme.accent, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Courier New", monospace', fontWeight: 'bold' }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                <p style={{ color: theme.textMuted, fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                  {member.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                  {member.skills.map(skill => (
                    <span key={skill} style={{ 
                      borderBottom: `1px dashed ${theme.border}`, paddingBottom: '1px',
                      fontSize: '0.65rem', color: theme.textMuted, letterSpacing: '1px', fontFamily: '"Courier New", monospace'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div style={{ textAlign: 'right', borderTop: `1px solid ${theme.border}`, paddingTop: '12px' }}>
                  <Link to={member.path} style={{ textDecoration: 'none' }}>
                    <motion.span 
                      whileHover={{ color: theme.accent, letterSpacing: '2px' }}
                      style={{ fontSize: '0.75rem', color: theme.textMain, textTransform: 'uppercase', fontFamily: '"Courier New", monospace', fontWeight: 'bold', transition: 'all 0.3s', display: 'inline-block' }}
                    >
                      Check Profile →
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Project Section - Scale SVG for Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px', padding: '0 10px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: theme.metallic }} />
            <span style={{ fontFamily: '"Courier New", monospace', letterSpacing: '2px', fontSize: '0.7rem', color: theme.metallic, textTransform: 'uppercase' }}>
              Featured Project
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: theme.metallic }} />
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', margin: '0 0 30px 0', fontWeight: 'normal', color: theme.textMain }}>
            The Wedding <span style={{ fontStyle: 'italic', color: theme.accent }}>Invitation</span>
          </h2>

          <Link to="/wedding" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <motion.div 
              whileHover={{ y: -10, filter: `drop-shadow(0 15px 25px ${isDarkMode ? 'rgba(0,0,0,0.9)' : 'rgba(41,97,87,0.2)'})` }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: 'pointer', position: 'relative', width: '100%', maxWidth: '240px' }}
            >
              <svg width="100%" height="auto" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="230" height="150" fill={theme.cardBg} stroke={theme.border} strokeWidth="2"/>
                <rect x="12" y="12" width="216" height="136" fill="none" stroke={theme.border} strokeWidth="1" strokeDasharray="4 4"/>
                <path d="M5 5 L120 90 L235 5" fill={isDarkMode ? '#1E292D' : '#F6F3EC'} stroke={theme.border} strokeWidth="2" strokeLinejoin="round" filter="drop-shadow(0px 3px 3px rgba(0,0,0,0.1))"/>
                <path d="M5 155 L90 90" stroke={theme.border} strokeWidth="2"/>
                <path d="M235 155 L150 90" stroke={theme.border} strokeWidth="2"/>
                <circle cx="120" cy="90" r="24" fill={theme.accent} filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.3))" />
                <circle cx="120" cy="90" r="18" fill={isDarkMode ? '#B36332' : '#1F4F46'} />
                <path d="M120 78 L126 95 L114 95 Z" fill={theme.metallic} opacity="0.8"/>
                <circle cx="120" cy="90" r="14" stroke={theme.metallic} strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6"/>
              </svg>
            </motion.div>
          </Link>

          <p style={{ color: theme.textMuted, fontSize: '0.85rem', marginTop: '20px', fontStyle: 'italic', maxWidth: '300px' }}>
            Click the invitation to reveal the ceremony details.
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Home;