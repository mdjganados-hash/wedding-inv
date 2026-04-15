import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import the wedding song
import weddingSong from './Wedding Song/Canon in D - Pachelbel.mp3';

// --- Import Images with Exact Repository Names ---
import quiapoBg from './Wedding Song/Quiapo Church.jpg';
import suitExample from './Wedding Song/BlackTuxedo.jpg';
import gownExample from './Wedding Song/Floor-Length Gown Evening gown.jpg';

function WeddingInvite() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [rsvpCount, setRsvpCount] = useState(142);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  // Audio state and ref
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // --- Premium Royal Gallery Palette ---
  const darkTheme = {
    bg: '#0A0A0A',
    panelBg: '#111111',
    accent: '#D4AF37', // Gold Leaf
    textMain: '#F8F8F8',
    textMuted: '#999999',
    border: '#262626'
  };

  const lightTheme = {
    bg: '#FCFAF7',
    panelBg: '#FFFFFF',
    accent: '#A68226', // Deep Ochre
    textMain: '#1A1A1A',
    textMuted: '#737373',
    border: '#E5E5E5'
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpCount(prev => prev + 1);
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

  // Common Styles (Maintaining original naming convention)
  const sectionStyle = {
    padding: '120px 20px',
    borderBottom: `1px solid ${theme.border}`,
    textAlign: 'center',
    position: 'relative'
  };

  const sectionSubtitle = {
    color: theme.accent,
    textTransform: 'uppercase',
    letterSpacing: '6px',
    fontSize: '0.85rem',
    marginBottom: '15px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  };

  const sectionTitle = {
    fontSize: '3.5rem',
    fontWeight: 'normal',
    letterSpacing: '10px',
    margin: '0 0 60px 0',
    textTransform: 'uppercase',
    color: theme.textMain,
    fontFamily: '"Playfair Display", serif'
  };

  const attireImageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '30px',
    border: `1px solid ${theme.accent}`,
    filter: isDarkMode ? 'contrast(1.1)' : 'none',
    opacity: isDarkMode ? 0.9 : 1,
    boxShadow: `20px 20px 0px ${theme.border}`
  };

  return (
    <motion.div 
      animate={{ backgroundColor: theme.bg, color: theme.textMain }}
      transition={{ duration: 0.8 }}
      style={{ fontFamily: '"Playfair Display", "Georgia", serif', minHeight: '100vh' }}
    >
      
      {/* Hidden Audio Player */}
      <audio ref={audioRef} src={weddingSong} loop />

      {/* Top Navigation Bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '30px 60px', zIndex: 100, background: `linear-gradient(${theme.bg} 40%, transparent)`, backdropFilter: 'blur(8px)' }}>
        <Link to="/" style={{ color: theme.textMain, textDecoration: 'none', fontFamily: 'sans-serif', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold', borderBottom: `1px solid ${theme.accent}` }}>
          ← Return to Archive
        </Link>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={toggleAudio}
            style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem' }}
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? '⏸' : '♪'}
          </button>

          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            title="Toggle Theme"
          >
            {isDarkMode ? '☼' : '☾'}
          </button>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderBottom: `1px solid ${theme.border}`, padding: '0 20px', position: 'relative' }}>
        
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1, zIndex: 0 }} />

        <div style={{ zIndex: 1, border: `1px solid ${theme.accent}`, padding: '100px 60px' }}>
          <p style={{ ...sectionSubtitle, color: theme.textMuted }}>Together with their families</p>
          <h1 style={{ fontSize: '7rem', margin: '20px 0 0 0', fontWeight: 'normal', lineHeight: '1', color: theme.textMain, letterSpacing: '15px' }}>
            DEXTER
          </h1>
          <div style={{ fontSize: '3rem', fontStyle: 'italic', color: theme.accent, margin: '10px 0' }}>and</div>
          <h1 style={{ fontSize: '7rem', margin: '0 0 40px 0', fontWeight: 'normal', lineHeight: '1', color: theme.textMain, letterSpacing: '15px' }}>
            RITA
          </h1>
          
          <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: theme.textMuted, margin: '30px 0 15px 0' }}>
            Request the honour of your presence at the celebration of their marriage
          </p>
          
          <p style={{ textTransform: 'uppercase', letterSpacing: '8px', fontSize: '1.1rem', color: theme.accent, marginTop: '20px' }}>
            The First of November 2026
          </p>
        </div>
      </div>

      {/* 2. WHERE & WHEN */}
      <div style={sectionStyle}>
        <p style={sectionSubtitle}>The Ceremony</p>
        <h2 style={sectionTitle}>Venue & Time</h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 350px', backgroundColor: theme.panelBg, padding: '80px 40px', border: `1px solid ${theme.border}` }}>
            <div style={{ color: theme.accent, fontSize: '2rem', marginBottom: '20px' }}>💍</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1.1rem', marginBottom: '15px' }}>Holy Matrimony</h3>
            <p style={{ fontStyle: 'italic', color: theme.accent, marginBottom: '5px', fontSize: '1.2rem' }}>Twelve O'Clock at Midnight</p>
            <p style={{ color: theme.textMuted, fontSize: '0.9rem', letterSpacing: '2px' }}>1 NOVEMBER 2026</p>
          </div>
          
          <div style={{ flex: '1 1 350px', backgroundColor: theme.panelBg, padding: '80px 40px', border: `1px solid ${theme.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', outline: `2px solid ${theme.accent}`, outlineOffset: '-15px' }}>
            <h3 style={{ color: theme.accent, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1.4rem', marginBottom: '20px' }}>Quiapo Church</h3>
            <p style={{ color: theme.textMain, fontSize: '1rem', lineHeight: '2' }}>
              Minor Basilica of the Black Nazarene<br/>
              910 Plaza Miranda, Quiapo<br/>
              Manila, Philippines
            </p>
          </div>

          <div style={{ flex: '1 1 350px', backgroundColor: theme.panelBg, padding: '80px 40px', border: `1px solid ${theme.border}` }}>
            <div style={{ color: theme.accent, fontSize: '2rem', marginBottom: '20px' }}>🥂</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1.1rem', marginBottom: '15px' }}>Reception</h3>
            <p style={{ fontStyle: 'italic', color: theme.accent, marginBottom: '5px', fontSize: '1.2rem' }}>One Thirty in the Morning</p>
            <p style={{ color: theme.textMuted, fontSize: '0.9rem', letterSpacing: '2px' }}>The Manila Hotel, Grand Ballroom</p>
          </div>
        </div>
      </div>

      {/* 3. GETTING THERE & MAP */}
      <div style={{ ...sectionStyle, backgroundColor: theme.panelBg }}>
        <p style={sectionSubtitle}>Travel Details</p>
        <h2 style={sectionTitle}>Getting There</h2>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          
          <div style={{ border: `1px solid ${theme.border}`, padding: '40px', textAlign: 'left' }}>
            <h4 style={{ color: theme.textMain, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '25px', borderBottom: `1px solid ${theme.accent}`, paddingBottom: '10px' }}>From Ninoy Aquino Int'l Airport</h4>
            <p style={{ color: theme.accent, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 8px 0' }}>TAXI / GRAB</p>
            <p style={{ color: theme.textMuted, fontSize: '0.95rem', lineHeight: '1.8' }}>Direct transit to Quiapo Church via Roxas Boulevard — approximately 45 minutes travel time depending on traffic conditions.</p>
          </div>

          <div style={{ border: `1px solid ${theme.border}`, padding: '40px', textAlign: 'left' }}>
            <h4 style={{ color: theme.textMain, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '25px', borderBottom: `1px solid ${theme.accent}`, paddingBottom: '10px' }}>By Private Vehicle</h4>
            <p style={{ color: theme.accent, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 8px 0' }}>PARKING & SECURITY</p>
            <p style={{ color: theme.textMuted, fontSize: '0.95rem', lineHeight: '1.8' }}>Secure parking is available at the Plaza Miranda perimeter and designated hotel valet services at the reception venue.</p>
          </div>

        </div>

        <div style={{ maxWidth: '1100px', height: '500px', margin: '0 auto', border: `1px solid ${theme.accent}`, position: 'relative' }}>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0114251268303!2d120.98116347576973!3d14.598501177114674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1d7d07936d%3A0x8898950d89859f51!2sQuiapo%20Church!5e0!3m2!1sen!2sph!4v1713222000000!5m2!1sen!2sph" 
             width="100%" height="100%" style={{ border: 0, filter: isDarkMode ? 'invert(90%) hue-rotate(180deg) contrast(1.2)' : 'grayscale(0.5)' }} 
             allowFullScreen="" loading="lazy">
           </iframe>
           <div style={{ position: 'absolute', bottom: '40px', left: '40px', backgroundColor: theme.bg, padding: '30px', border: `1px solid ${theme.accent}`, textAlign: 'left', boxShadow: '10px 10px 0px rgba(0,0,0,0.2)' }}>
             <p style={{ color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', margin: '0 0 10px 0' }}>Official Venue</p>
             <h4 style={{ margin: '0 0 10px 0', fontSize: '1.4rem', fontWeight: 'normal' }}>Quiapo Church</h4>
             <p style={{ color: theme.textMuted, fontSize: '0.85rem' }}>The Heart of Manila, Philippines</p>
           </div>
        </div>
      </div>

      {/* 4. THE SETTING */}
      <div style={{ ...sectionStyle, padding: '150px 20px', backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${quiapoBg}")`, backgroundSize: 'cover', backgroundAttachment: 'fixed', color: '#FFFFFF' }}>
        <div style={{ zIndex: 1, position: 'relative' }}>
          <p style={{ ...sectionSubtitle, color: theme.accent }}>Heritage</p>
          <h2 style={{ ...sectionTitle, color: '#FFFFFF' }}>The Minor Basilica</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '2.4', marginBottom: '50px' }}>
              A sanctuary of deep faith and historical resonance, Quiapo Church stands as a silent witness to centuries of devotion. Beneath its grand domes and storied stone, we invite you to witness the beginning of our union—a ceremony where time-honored tradition meets our shared future.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', borderTop: `1px solid rgba(255,255,255,0.3)`, paddingTop: '40px' }}>
              <div>
                <p style={{ color: theme.accent, fontSize: '1.8rem', margin: '0 0 10px 0' }}>1588</p>
                <p style={{ color: '#DDD', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px' }}>Foundation</p>
              </div>
              <div>
                <p style={{ color: theme.accent, fontSize: '1.8rem', margin: '0 0 10px 0' }}>1987</p>
                <p style={{ color: '#DDD', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px' }}>Royal Decree</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. PROGRAMME */}
      <div style={sectionStyle}>
        <p style={sectionSubtitle}>The Itinerary</p>
        <h2 style={sectionTitle}>The Programme</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {[
            { time: '11:30 PM', title: 'Arrival of Guests', desc: 'Quiapo Basilica Main Entrance' },
            { time: '12:00 AM', title: 'Wedding Ceremony', desc: 'The Exchange of Vows' },
            { time: '01:30 AM', title: 'Formal Dinner', desc: 'The Manila Hotel Ballroom' },
            { time: '02:30 AM', title: 'Toasts & Traditions', desc: 'Grand Celebration' },
            { time: '03:00 AM', title: 'Festivities', desc: 'Music & Dancing' }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '40px', padding: '35px 0', borderBottom: index !== 4 ? `1px solid ${theme.border}` : 'none' }}>
              <div style={{ color: theme.accent, fontFamily: 'sans-serif', fontSize: '0.9rem', letterSpacing: '2px', flexShrink: 0, width: '100px', fontWeight: 'bold' }}>
                {item.time}
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', color: theme.textMain }}>{item.title}</h4>
                <p style={{ margin: 0, color: theme.textMuted, fontStyle: 'italic' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. WEDDING PARTY */}
      <div style={{ ...sectionStyle, backgroundColor: theme.panelBg }}>
        <p style={sectionSubtitle}>The Entourage</p>
        <h2 style={sectionTitle}>Wedding Party</h2>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.75rem', marginBottom: '30px' }}>Guardians of the Couple</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '80px' }}>
            {[`Parents of Moser`, `Parents of Brandon`].map((role, i) => (
              <div key={i} style={{ border: `1px solid ${theme.border}`, padding: '40px', width: '350px', background: theme.bg }}>
                <h4 style={{ margin: '0 0 15px 0', color: theme.textMain, fontWeight: 'normal', fontSize: '1.5rem', letterSpacing: '2px' }}>Mr. & Mrs. {role.split(' ')[2]}</h4>
                <p style={{ margin: 0, color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px' }}>{role}</p>
              </div>
            ))}
          </div>

          <p style={{ color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.75rem', marginBottom: '30px' }}>Principal Witnesses</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
            {[1,2,3,4].map((i) => (
              <div key={i} style={{ border: `1px solid ${theme.border}`, padding: '30px', width: '220px', background: theme.bg }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, fontWeight: 'normal', fontSize: '1.1rem' }}>Ninong & Ninang</h4>
                <p style={{ margin: 0, color: theme.accent, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Principal Sponsor</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. DRESS CODE */}
      <div style={sectionStyle}>
        <p style={sectionSubtitle}>The Aesthetic</p>
        <h2 style={sectionTitle}>Dress Code</h2>
        <h3 style={{ fontSize: '4rem', fontWeight: 'normal', letterSpacing: '15px', color: theme.textMain, margin: '0 0 80px 0', opacity: 0.8 }}>BLACK TIE</h3>

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '60px' }}>
            
            <div style={{ flex: '1 1 450px', border: `1px solid ${theme.border}`, padding: '50px', textAlign: 'left', background: theme.panelBg }}>
              <img src={suitExample} alt="Gentleman's Suit" style={attireImageStyle} />
              <p style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px', fontWeight: 'bold' }}>✦ For Gentlemen</p>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Classic Tuxedo</h4>
                <p style={{ color: theme.textMuted, fontStyle: 'italic', lineHeight: '1.6' }}>Black or midnight blue tuxedo tailored with a crisp white shirt and formal bow tie.</p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Formal Evening Suit</h4>
                <p style={{ color: theme.textMuted, fontStyle: 'italic', lineHeight: '1.6' }}>Deep charcoal or navy three-piece suit with a conservative tie.</p>
              </div>
            </div>

            <div style={{ flex: '1 1 450px', border: `1px solid ${theme.border}`, padding: '50px', textAlign: 'left', background: theme.panelBg }}>
              <img src={gownExample} alt="Lady's Gown" style={attireImageStyle} />
              <p style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px', fontWeight: 'bold' }}>✦ For Ladies</p>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Floor-Length Gown</h4>
                <p style={{ color: theme.textMuted, fontStyle: 'italic', lineHeight: '1.6' }}>Elegant evening gown in deep jewel tones, neutral palettes, or formal black.</p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Sophisticated Couture</h4>
                <p style={{ color: theme.textMuted, fontStyle: 'italic', lineHeight: '1.6' }}>Formal evening wear that exudes grace and timeless sophistication.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 450px', border: `1px solid ${theme.accent}`, padding: '40px', textAlign: 'left' }}>
              <p style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>✓ Preferred Etiquette</p>
              <ul style={{ color: theme.textMuted, fontSize: '1rem', lineHeight: '2.5', paddingLeft: '20px', margin: 0 }}>
                <li>Timeless and conservative silhouettes</li>
                <li>Muted, rich, or classic color palettes</li>
                <li>Refined accessories and formal footwear</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 450px', border: `1px solid ${theme.border}`, padding: '40px', textAlign: 'left' }}>
              <p style={{ color: theme.textMuted, fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>✕ Restricted Attire</p>
              <ul style={{ color: theme.textMuted, fontSize: '1rem', lineHeight: '2.5', paddingLeft: '20px', margin: 0 }}>
                <li>White, ivory, or similar cream tones</li>
                <li>Denim, casual textiles, or sportswear</li>
                <li>Vibrant neon or aggressive patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 8. RSVP SECTION */}
      <div style={{ ...sectionStyle, backgroundColor: theme.panelBg }}>
        <p style={sectionSubtitle}>Response</p>
        <h2 style={sectionTitle}>The RSVP</h2>
        
        <p style={{ color: theme.textMuted, fontStyle: 'italic', marginBottom: '50px', fontSize: '1.1rem' }}>
          Kindly grace us with your response by the first of October, 2026
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {!hasSubmitted ? (
            <form onSubmit={handleRsvpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'left' }}>
              
              <div style={{ display: 'flex', gap: '30px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>First Name</label>
                  <input required type="text" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${theme.border}`, color: theme.textMain, padding: '15px 0', fontSize: '1.1rem', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>Last Name</label>
                  <input required type="text" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${theme.border}`, color: theme.textMain, padding: '15px 0', fontSize: '1.1rem', outline: 'none', fontFamily: 'inherit' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px' }}>Will you join us?</label>
                <div style={{ display: 'flex', gap: '30px' }}>
                  <label style={{ flex: 1, border: `1px solid ${theme.accent}`, padding: '25px', textAlign: 'center', cursor: 'pointer', color: theme.textMain, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.3s' }}>
                    <input type="radio" name="attend" value="yes" required style={{ marginRight: '15px' }} /> Accepts with Pleasure
                  </label>
                  <label style={{ flex: 1, border: `1px solid ${theme.border}`, padding: '25px', textAlign: 'center', cursor: 'pointer', color: theme.textMuted, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    <input type="radio" name="attend" value="no" style={{ marginRight: '15px' }} /> Regretfully Declines
                  </label>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>Guest Information</label>
                <input type="text" placeholder="Number of guests..." style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `2px solid ${theme.border}`, color: theme.textMain, padding: '15px 0', fontSize: '1.1rem', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>Special Considerations</label>
                <textarea placeholder="Dietary needs or special messages..." rows="4" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `2px solid ${theme.border}`, color: theme.textMain, padding: '15px 0', fontSize: '1.1rem', outline: 'none', fontFamily: 'inherit', resize: 'none' }}></textarea>
              </div>

              <button type="submit" style={{ background: theme.accent, color: theme.bg, border: 'none', padding: '25px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '5px', fontSize: '1rem', fontWeight: 'bold', transition: 'all 0.4s' }} onMouseOver={(e) => { e.target.style.filter = 'brightness(1.1)'; }} onMouseOut={(e) => { e.target.style.filter = 'brightness(1)'; }}>
                Submit Response
              </button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ border: `1px solid ${theme.accent}`, padding: '80px 40px', background: theme.bg }}>
              <div style={{ fontSize: '4rem', color: theme.accent, marginBottom: '20px' }}>❦</div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'normal', color: theme.textMain, margin: '0 0 20px 0', letterSpacing: '5px' }}>RESPONSE SEALED</h3>
              <p style={{ color: theme.textMuted, fontStyle: 'italic', fontSize: '1.3rem' }}>Your presence is eargly anticipated. Thank you for your response.</p>
            </motion.div>
          )}

          <div style={{ marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <div style={{ width: '50px', height: '1px', backgroundColor: theme.accent }} />
            <p style={{ color: theme.textMuted, fontStyle: 'italic', fontSize: '1.2rem', margin: 0 }}>
              <strong style={{ color: theme.accent, fontSize: '1.8rem' }}>{rsvpCount}</strong> Honored Guests Attending
            </p>
            <div style={{ width: '50px', height: '1px', backgroundColor: theme.accent }} />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '100px 20px', backgroundColor: isDarkMode ? '#050505' : '#F5F5F5', borderTop: `1px solid ${theme.border}` }}>
        <p style={{ color: theme.accent, fontSize: '2rem', letterSpacing: '15px', margin: '0 0 15px 0' }}>D & R</p>
        <p style={{ color: theme.textMuted, fontSize: '0.9rem', letterSpacing: '5px', textTransform: 'uppercase' }}>11 · 01 · 2026</p>
      </div>

    </motion.div>
  );
}

export default WeddingInvite;