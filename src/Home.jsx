import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from './context/ThemeContext';

import dwanImg from './assets/1x1.jpg'; 
import karlImg from './assets/2x2.jpg';
import jicobImg from './assets/2.2.jpg';

function Home() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // --- Modern Cinematic Palette ---
  const lightTheme = {
    bg: '#FBFBFB',           
    cardBg: '#FFFFFF',       
    accent: '#1A1A1A',       // Sharp Onyx
    secondary: '#707070',     
    muted: '#EAEAEA',
    textMain: '#121212',     
    textMuted: '#666666',    
    border: '#E0E0E0',       
    shadow: '0 20px 40px rgba(0, 0, 0, 0.05)'
  };

  const darkTheme = {
    bg: '#080808',           
    cardBg: '#111111',       
    accent: '#FFFFFF',       // Clean White
    secondary: '#A0A0A0',     
    muted: '#1A1A1A',
    textMain: '#F2F2F2',     
    textMuted: '#888888',    
    border: '#222222',       
    shadow: '0 25px 50px rgba(0, 0, 0, 0.4)'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const members = [
    { 
      id: '01', 
      name: 'Dwyane Jorge Ganados', 
      role: 'Hardware Specialist',
      desc: 'An aspiring technologist with an interest in mechanical and electrical systems, exploring how modern technologies function and interact.',
      path: '/member-one',
      img: dwanImg
    },
    { 
      id: '02', 
      name: 'Karl Seigfreid Alinsub', 
      role: 'System Architect',
      desc: 'A scholar of technology and architecture. Exploring the delicate interface between physical hardware and abstract software layers.',
      path: '/member-two',
      img: karlImg
    },
    { 
      id: '03', 
      name: 'Ramiel Jicob Sipi', 
      role: 'Network Correspondent',
      desc: 'A steadfast apprentice of the digital age. Endeavoring to master his craft through disciplined study and solid knowledge foundations.',
      path: '/member-three',
      img: jicobImg
    },
  ];

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.textMain }}
      transition={{ duration: 0.6 }}
      style={{ 
        minHeight: '100vh', 
        // Modern Font Stack: Clean Sans-Serif + Elegant Serif
        fontFamily: '"Inter", "EB Garamond", serif',
        padding: 'clamp(40px, 8vh, 100px) 5%', 
        overflowX: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          marginBottom: 'clamp(60px, 12vh, 120px)',
          borderBottom: `1px solid ${theme.border}`,
          paddingBottom: '30px'
        }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                letterSpacing: '4px', 
                textTransform: 'uppercase', 
                color: theme.textMuted 
            }}>
              Project Archive 2026
            </span>
            <h1 style={{ 
                fontSize: 'clamp(2.5rem, 10vw, 6rem)', 
                margin: '10px 0 0 0', 
                fontWeight: 400, 
                fontFamily: '"EB Garamond", serif', 
                lineHeight: 0.9 
            }}>
              Creative <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Collective</span>
            </h1>
          </motion.div>

          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: `1px solid ${theme.border}`,
              borderRadius: '50%',
              width: '60px', height: '60px',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              cursor: 'pointer', color: theme.textMain, fontSize: '1.2rem',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            {isDarkMode ? '☼' : '☾'}
          </button>
        </header>
        
        {/* Profile Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px', 
          marginBottom: '150px'
        }}>
          {members.map((member) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative', group: 'true' }}
            >
              <Link to={member.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  style={{ 
                    backgroundColor: theme.cardBg, 
                    border: `1px solid ${theme.border}`,
                    padding: '40px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: theme.shadow
                  }}
                >
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '3rem', 
                    fontWeight: 900, 
                    color: theme.muted,
                    lineHeight: 1,
                    marginBottom: '20px'
                  }}>
                    {member.id}
                  </span>

                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '30px' }}>
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      style={{ 
                        width: '80px', height: '80px', 
                        objectFit: 'cover', borderRadius: '50%',
                        filter: isDarkMode ? 'grayscale(100%) brightness(0.8)' : 'grayscale(100%)'
                      }} 
                    />
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 500, fontFamily: '"EB Garamond", serif' }}>{member.name}</h3>
                      <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: theme.textMuted }}>{member.role}</p>
                    </div>
                  </div>

                  <p style={{ 
                    fontSize: '1rem', 
                    lineHeight: 1.6, 
                    color: theme.textMuted,
                    marginBottom: '40px',
                    flexGrow: 1 
                  }}>
                    {member.desc}
                  </p>

                  <div style={{ 
                    borderTop: `1px solid ${theme.border}`, 
                    paddingTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>View Case Study</span>
                    <span style={{ fontSize: '1.2rem' }}>→</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Invitation Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ 
            border: `1px solid ${theme.border}`,
            padding: '80px 20px',
            textAlign: 'center',
            backgroundColor: theme.cardBg
          }}
        >
          <span style={{ letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700, color: theme.textMuted }}>Special Event</span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontFamily: '"EB Garamond", serif', 
            margin: '20px 0 40px 0' 
          }}>
            Dexter & Rita's <span style={{ fontStyle: 'italic' }}>Wedding</span>
          </h2>

          <Link to="/wedding" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              style={{ cursor: 'pointer', width: '240px', margin: '0 auto' }}
            >
              <svg width="240" height="160" viewBox="0 0 240 160" fill="none">
                <rect x="5" y="5" width="230" height="150" fill={theme.bg} stroke={theme.textMain} strokeWidth="1"/>
                <path d="M5 5 L120 90 L235 5" fill="transparent" stroke={theme.textMain} strokeWidth="1"/>
                <circle cx="120" cy="90" r="20" fill={theme.textMain} />
                <text x="116" y="97" fill={theme.bg} style={{ fontSize: '14px', fontWeight: 'bold' }}>♥</text>
              </svg>
            </motion.div>
          </Link>
          
          <p style={{ 
            marginTop: '40px', 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '3px',
            color: theme.textMuted
          }}>
            Click to open invitation
          </p>
        </motion.div>

        {/* Footer Stamp */}
        <footer style={{ marginTop: '100px', paddingBottom: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '10px', textTransform: 'uppercase', opacity: 0.3 }}>
              Technological Institute of the Philippines
            </p>
        </footer>

      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
          
          body {
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
        `}
      </style>
    </motion.div>
  );
}

export default Home;