import { useState, useRef, useContext, useEffect } from 'react'; // Added useEffect
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import { ThemeContext } from './context/ThemeContext';

// Import the wedding song
import weddingSong from './Wedding Song/Canon in D - Pachelbel.mp3';

// --- Import Images with Exact Repository Names ---
import quiapoBg from './Wedding Song/quiapo_church-1.jpg';
import suitExample from './Wedding Song/BlackTuxedo.jpg';
import gownExample from './Wedding Song/Floor-Length Gown Evening gown.jpg';

function WeddingInvite() {
  // 1. PULL GLOBAL STATE
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.isDarkMode;
  const toggleTheme = themeContext?.toggleTheme;
  
  // 2. RSVP COUNT LOGIC (Loads from localStorage so it stays on restart)
  const [rsvpCount, setRsvpCount] = useState(() => {
    const savedCount = localStorage.getItem('wedding_rsvp_count');
    return savedCount ? parseInt(savedCount) : 0; 
  });
  
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  // Audio state and ref
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // SAVE TO LOCAL STORAGE whenever count changes
  useEffect(() => {
    localStorage.setItem('wedding_rsvp_count', rsvpCount);
  }, [rsvpCount]);

  // --- Premium Royal Gallery Palette ---
  const darkTheme = {
    bg: '#0A0A0A',
    panelBg: '#111111',
    accent: '#D4AF37', 
    textMain: '#F8F8F8',
    textMuted: '#999999',
    border: '#262626'
  };

  const lightTheme = {
    bg: '#FCFAF7',
    panelBg: '#FFFFFF',
    accent: '#A68226', 
    textMain: '#1A1A1A',
    textMuted: '#737373',
    border: '#E5E5E5'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const attendance = formData.get('attend');
    
    if (attendance === 'yes') {
      setRsvpCount(prev => prev + 1);
    }
    
    setHasSubmitted(true);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Common Styles
  const sectionStyle = {
    padding: 'clamp(60px, 10vh, 120px) 20px', 
    borderBottom: `1px solid ${theme.border}`,
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box'
  };

  const sectionSubtitle = {
    color: theme.accent,
    textTransform: 'uppercase',
    letterSpacing: 'clamp(2px, 1vw, 6px)',
    fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
    marginBottom: '15px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  };

  const sectionTitle = {
    fontSize: 'clamp(1.8rem, 8vw, 3.5rem)', 
    fontWeight: 'normal',
    letterSpacing: 'clamp(4px, 2vw, 10px)',
    margin: '0 0 60px 0',
    textTransform: 'uppercase',
    color: theme.textMain,
    fontFamily: '"Playfair Display", serif',
    lineHeight: '1.2'
  };

  const attireImageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '600px',
    objectFit: 'cover',
    marginBottom: '30px',
    border: `1px solid ${theme.accent}`,
    boxShadow: `clamp(10px, 2vw, 20px) clamp(10px, 2vw, 20px) 0px ${theme.border}`
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.textMain }}
      transition={{ duration: 0.8 }}
      style={{ fontFamily: '"Playfair Display", "Georgia", serif', minHeight: '100vh', overflowX: 'hidden' }}
    >
      <audio ref={audioRef} src={weddingSong} loop />

      {/* Navigation */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: 'clamp(15px, 3vh, 30px) clamp(20px, 5vw, 60px)', zIndex: 100, background: `linear-gradient(${theme.bg} 80%, transparent)`, backdropFilter: 'blur(8px)', borderBottom: `1px solid ${theme.border}` }}>
        <Link to="/" style={{ color: theme.textMain, textDecoration: 'none', fontFamily: 'sans-serif', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold', borderBottom: `1px solid ${theme.accent}`, display: 'flex', alignItems: 'center' }}>
          ← <span style={{ marginLeft: '5px' }}>ARCHIVE</span>
        </Link>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={toggleAudio} style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem' }}>
            {isPlaying ? '⏸' : '♪'}
          </button>
          <button onClick={toggleTheme} style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {isDarkMode ? '☼' : '☾'}
          </button>
        </div>
      </div>

      {/* 1. HERO */}
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderBottom: `1px solid ${theme.border}`, padding: '0 20px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1, zIndex: 0 }} />
        <div style={{ zIndex: 1, border: `1px solid ${theme.accent}`, padding: 'clamp(40px, 8vh, 100px) clamp(20px, 4vw, 60px)', width: '90%', maxWidth: '800px', boxSizing: 'border-box' }}>
          <p style={sectionSubtitle}>Together with their families</p>
          <h1 style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', margin: '10px 0', fontWeight: 'normal', lineHeight: '1', color: theme.textMain, letterSpacing: 'clamp(5px, 2vw, 15px)' }}>DEXTER</h1>
          <div style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontStyle: 'italic', color: theme.accent, margin: '5px 0' }}>and</div>
          <h1 style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', margin: '10px 0', fontWeight: 'normal', lineHeight: '1', color: theme.textMain, letterSpacing: 'clamp(5px, 2vw, 15px)' }}>RITA</h1>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)', fontStyle: 'italic', color: theme.textMuted, margin: '20px 0' }}>Request the honour of your presence</p>
          <p style={{ textTransform: 'uppercase', letterSpacing: 'clamp(3px, 1vw, 8px)', fontSize: 'clamp(0.75rem, 2vw, 1.1rem)', color: theme.accent }}>01 NOVEMBER 2026</p>
        </div>
      </div>

      {/* 2. VENUE */}
      <div style={sectionStyle}>
        <p style={sectionSubtitle}>The Ceremony</p>
        <h2 style={sectionTitle}>Venue & Time</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ backgroundColor: theme.panelBg, padding: 'clamp(40px, 5vh, 80px) 20px', border: `1px solid ${theme.border}` }}>
            <div style={{ color: theme.accent, fontSize: '1.5rem', marginBottom: '20px' }}>💍</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem' }}>Holy Matrimony</h3>
            <p style={{ fontStyle: 'italic', color: theme.accent, margin: '10px 0' }}>Midnight</p>
            <p style={{ color: theme.textMuted, fontSize: '0.85rem' }}>1 NOVEMBER 2026</p>
          </div>
          <div style={{ backgroundColor: theme.panelBg, padding: 'clamp(40px, 5vh, 80px) 20px', border: `1px solid ${theme.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', outline: `1px solid ${theme.accent}`, outlineOffset: '-10px' }}>
            <h3 style={{ color: theme.accent, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1.2rem' }}>Quiapo Church</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>Manila, Philippines</p>
          </div>
          <div style={{ backgroundColor: theme.panelBg, padding: 'clamp(40px, 5vh, 80px) 20px', border: `1px solid ${theme.border}` }}>
            <div style={{ color: theme.accent, fontSize: '1.5rem', marginBottom: '20px' }}>🥂</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem' }}>Reception</h3>
            <p style={{ fontStyle: 'italic', color: theme.accent, margin: '10px 0' }}>01:30 AM</p>
            <p style={{ color: theme.textMuted, fontSize: '0.85rem' }}>The Manila Hotel</p>
          </div>
        </div>
      </div>

      {/* 3. MAP */}
      <div style={{ ...sectionStyle, backgroundColor: theme.panelBg }}>
        <h2 style={sectionTitle}>Getting There</h2>
        <div style={{ width: '100%', height: 'clamp(300px, 50vh, 500px)', border: `1px solid ${theme.accent}`, position: 'relative' }}>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1685350414456!2d120.98188157580637!3d14.598651877332356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1808603681%3A0x6a053070d655f412!2sQuiapo%20Church!5e0!3m2!1sen!2sph!4v1700000000000" 
             width="100%" height="100%" style={{ border: 0, filter: isDarkMode ? 'invert(90%) hue-rotate(180deg)' : 'none' }} allowFullScreen="" loading="lazy">
           </iframe>
        </div>
      </div>

      {/* 4. SETTING */}
      <div style={{ ...sectionStyle, padding: 'clamp(100px, 15vh, 150px) 20px', backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${quiapoBg}")`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#FFF' }}>
          <h2 style={{ ...sectionTitle, color: '#FFFFFF' }}>The Minor Basilica</h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', lineHeight: '2', maxWidth: '800px', margin: '0 auto' }}>A sanctuary of deep faith and historical resonance.</p>
      </div>

      {/* 5. PROGRAMME */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Programme</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {[
            { time: '11:30 PM', title: 'Arrival of Guests', desc: 'Basilica Main Entrance' },
            { time: '12:00 AM', title: 'Wedding Ceremony', desc: 'Exchange of Vows and Ring' },
            { time: '01:00 AM', title: 'Photo Opportunity', desc: 'Main Altar' },
            { time: '01:30 AM', title: 'Grand Reception', desc: 'The Manila Hotel Ballroom' },
            { time: '02:00 AM', title: 'Dinner & Toasts', desc: 'Formal Banquet' },
            { time: '03:00 AM', title: 'Cake Cutting', desc: 'Celebration Ritual' },
            { time: '03:30 AM', title: 'Festivities', desc: 'Music & Dancing' }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '20px', padding: '25px 0', borderBottom: `1px solid ${theme.border}`, textAlign: 'left' }}>
              <div style={{ color: theme.accent, fontSize: '0.85rem', width: '80px', flexShrink: 0, fontWeight: 'bold' }}>{item.time}</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', textTransform: 'uppercase', fontSize: '0.9rem' }}>{item.title}</h4>
                <p style={{ margin: 0, color: theme.textMuted, fontStyle: 'italic', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. PARENTS SECTION */}
      <div style={{ ...sectionStyle, backgroundColor: theme.panelBg }}>
        <p style={sectionSubtitle}>The Wedding Party</p>
        <h2 style={sectionTitle}>Our Families</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
            {[`Parents of Moser`, `Parents of Brandon`].map((role, i) => (
              <div key={i} style={{ border: `1px solid ${theme.border}`, padding: '30px 20px', width: '100%', maxWidth: '350px', background: theme.bg }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, fontSize: '1.4rem' }}>Mr. & Mrs. {role.split(' ')[2]}</h4>
                <p style={{ margin: 0, color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px' }}>{role}</p>
              </div>
            ))}
        </div>
      </div>

      {/* 7. DRESS CODE */}
      <div style={sectionStyle}>
        <h2 style={sectionTitle}>Dress Code</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'left' }}><img src={suitExample} style={attireImageStyle} alt="Suit" /><h4 style={{ color: theme.accent }}>Gentlemen</h4></div>
          <div style={{ textAlign: 'left' }}><img src={gownExample} style={attireImageStyle} alt="Gown" /><h4 style={{ color: theme.accent }}>Ladies</h4></div>
        </div>
      </div>

      {/* 8. RSVP */}
      <div style={{ ...sectionStyle, backgroundColor: theme.panelBg }}>
        <p style={sectionSubtitle}>Your Response</p>
        <h2 style={sectionTitle}>RSVP</h2>
        <p style={{ color: theme.textMuted, fontStyle: 'italic', marginBottom: '40px' }}>Kindly respond by the 1st of October, 2026</p>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            {!hasSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onSubmit={handleRsvpSubmit} 
                style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'left' }}
              >
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 300px' }}>
                    <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>First Name</label>
                    <input required name="fname" type="text" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `2px solid ${theme.border}`, padding: '15px 0', color: theme.textMain, fontSize: '1.1rem', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ flex: '1 1 300px' }}>
                    <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>Last Name</label>
                    <input required name="lname" type="text" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `2px solid ${theme.border}`, padding: '15px 0', color: theme.textMain, fontSize: '1.1rem', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px' }}>Will you join us?</label>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <label style={{ flex: '1 1 200px', border: `1px solid ${theme.accent}`, padding: '25px', textAlign: 'center', cursor: 'pointer', color: theme.textMain, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                      <input type="radio" name="attend" value="yes" required style={{ marginRight: '15px' }} /> Accepts
                    </label>
                    <label style={{ flex: '1 1 200px', border: `1px solid ${theme.border}`, padding: '25px', textAlign: 'center', cursor: 'pointer', color: theme.textMuted, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                      <input type="radio" name="attend" value="no" style={{ marginRight: '15px' }} /> Declines
                    </label>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>Notes</label>
                  <textarea placeholder="Special requests..." rows="4" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `2px solid ${theme.border}`, color: theme.textMain, padding: '15px 0', fontSize: '1.1rem', outline: 'none', resize: 'none' }}></textarea>
                </div>

                <button type="submit" style={{ background: theme.accent, color: theme.bg, border: 'none', padding: '25px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '5px', fontSize: '1rem', fontWeight: 'bold' }}>Submit</button>
              </motion.form>
            ) : (
              <motion.div 
                key="thanks"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                style={{ border: `1px solid ${theme.accent}`, padding: '80px 40px', background: theme.bg }}
              >
                <div style={{ fontSize: '4rem', color: theme.accent }}>❦</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>RESPONSE SEALED</h3>
                <button 
                  onClick={() => setHasSubmitted(false)}
                  style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, padding: '10px 20px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.7rem' }}
                >
                  Submit Another Guest
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <p style={{ marginTop: '80px', fontStyle: 'italic' }}>
            <strong style={{ color: theme.accent, fontSize: '1.5rem' }}>{rsvpCount}</strong> Honored Guests Attending
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', padding: '100px 20px', borderTop: `1px solid ${theme.border}` }}>
        <p style={{ color: theme.accent, fontSize: '2rem', letterSpacing: '15px' }}>D & R</p>
      </div>
    </motion.div>
  );
}

export default WeddingInvite;