import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import the wedding song
import weddingSong from './Wedding Song/Hambog Ng Sagpro Krew-Alaala Nalang ft. LUN (Lyrics).mp3';

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

  // --- Elegant Vintage Theme Palette ---
  const darkTheme = {
    bg: '#0D0C0B',
    panelBg: '#161413',
    accent: '#C5A880', // Antique Gold
    textMain: '#E8E4D9',
    textMuted: '#948D85',
    border: '#2C2724'
  };

  const lightTheme = {
    bg: '#F7F5F0',
    panelBg: '#FFFFFF',
    accent: '#9A7B4F', // Darker Gold for visibility
    textMain: '#2A2624',
    textMuted: '#78736E',
    border: '#E6DFD3'
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

  // Common Styles
  const sectionStyle = {
    padding: '100px 20px',
    borderBottom: `1px solid ${theme.border}`,
    textAlign: 'center'
  };

  const sectionSubtitle = {
    color: theme.accent,
    textTransform: 'uppercase',
    letterSpacing: '4px',
    fontSize: '0.75rem',
    marginBottom: '10px',
    fontFamily: 'sans-serif'
  };

  const sectionTitle = {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    letterSpacing: '4px',
    margin: '0 0 50px 0',
    textTransform: 'uppercase',
    color: theme.textMain
  };

  // Style for the new attire example images
  const attireImageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    border: `1px solid ${theme.border}`,
    filter: 'grayscale(100%)', // Optional: adds to the vintage feel
    opacity: isDarkMode ? 0.8 : 1, // Optional: softens them on dark mode
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
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '20px 40px', zIndex: 100, background: `linear-gradient(${theme.bg} 40%, transparent)` }}>
        <Link to="/" style={{ color: theme.accent, textDecoration: 'none', fontFamily: 'sans-serif', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          ← Return to Front Page
        </Link>
        <div style={{ display: 'flex', gap: '15px' }}>
          {/* Audio Toggle Button */}
          <button 
            onClick={toggleAudio}
            style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem' }}
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
        
        {/* Subtle background overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: isDarkMode ? 0.15 : 0.08, zIndex: 0, filter: 'grayscale(100%)' }} />

        <div style={{ zIndex: 1 }}>
          <p style={{ ...sectionSubtitle, color: theme.textMuted }}>Together with their families</p>
          <h1 style={{ fontSize: '6rem', margin: '20px 0 0 0', fontWeight: 'normal', lineHeight: '1', color: theme.textMain }}>
            DWYANE
          </h1>
          <div style={{ fontSize: '3rem', fontStyle: 'italic', color: theme.accent, margin: '-10px 0' }}>&</div>
          <h1 style={{ fontSize: '6rem', margin: '0 0 40px 0', fontWeight: 'normal', lineHeight: '1', color: theme.textMain }}>
            RAMIEL
          </h1>
          
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: theme.textMuted, margin: '30px 0 15px 0' }}>
            Request the honour of your presence<br/>at the celebration of their marriage
          </p>
          
          <p style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1rem', color: theme.accent }}>
            The First of November 2026
          </p>
        </div>
      </div>

      {/* 2. WHERE & WHEN */}
      <div style={sectionStyle}>
        <p style={sectionSubtitle}>The Ceremony</p>
        <h2 style={sectionTitle}>Where & When</h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', maxWidth: '1000px', margin: '0 auto', flexWrap: 'wrap' }}>
          {/* Ceremony */}
          <div style={{ flex: '1 1 300px', backgroundColor: theme.panelBg, padding: '60px 40px' }}>
            <div style={{ color: theme.accent, fontSize: '1.5rem', marginBottom: '15px' }}>💍</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', marginBottom: '10px' }}>Ceremony</h3>
            <p style={{ fontStyle: 'italic', color: theme.accent, marginBottom: '5px' }}>Twelve O'Clock at Midnight</p>
            <p style={{ color: theme.accent, fontSize: '0.8rem', letterSpacing: '1px' }}>1 NOVEMBER 2026</p>
          </div>
          
          {/* Middle Venue Info */}
          <div style={{ flex: '1 1 300px', backgroundColor: theme.panelBg, padding: '60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: theme.accent, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1.2rem', marginBottom: '15px' }}>Quiapo Church</h3>
            <p style={{ color: theme.textMuted, fontSize: '0.9rem', lineHeight: '1.8' }}>
              Minor Basilica of the Black Nazarene<br/>
              910 Plaza Miranda, Quiapo<br/>
              Manila, Philippines
            </p>
          </div>

          {/* Reception */}
          <div style={{ flex: '1 1 300px', backgroundColor: theme.panelBg, padding: '60px 40px' }}>
            <div style={{ color: theme.accent, fontSize: '1.5rem', marginBottom: '15px' }}>🥂</div>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '1rem', marginBottom: '10px' }}>Reception</h3>
            <p style={{ fontStyle: 'italic', color: theme.accent, marginBottom: '5px' }}>One Thirty in the Morning</p>
            <p style={{ color: theme.textMuted, fontSize: '0.8rem', letterSpacing: '1px' }}>The Manila Hotel<br/>Rizal Park, Manila</p>
          </div>
        </div>
      </div>

      {/* 3. GETTING THERE & MAP */}
      <div style={{ ...sectionStyle, backgroundColor: isDarkMode ? '#0A0908' : '#F2EFE9' }}>
        <p style={sectionSubtitle}>Directions</p>
        <h2 style={sectionTitle}>Getting There</h2>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2px' }}>
          
          <div style={{ backgroundColor: theme.panelBg, padding: '40px', textAlign: 'left' }}>
            <h4 style={{ color: theme.textMain, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '20px' }}>From Ninoy Aquino Int'l Airport (NAIA)</h4>
            <p style={{ color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 5px 0' }}>TAXI / GRAB</p>
            <p style={{ color: theme.textMuted, fontSize: '0.9rem', margin: '0 0 20px 0' }}>Direct to Quiapo Church — approx. 45 mins.</p>
          </div>

          <div style={{ backgroundColor: theme.panelBg, padding: '40px', textAlign: 'left' }}>
            <h4 style={{ color: theme.textMain, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '20px' }}>By Car & Parking</h4>
            <p style={{ color: theme.accent, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 5px 0' }}>PARKING</p>
            <p style={{ color: theme.textMuted, fontSize: '0.9rem', margin: '0 0 20px 0' }}>Available at Plaza Miranda perimeter or nearby designated secure lots.</p>
          </div>

        </div>

        {/* Filtered Google Map Image/Iframe representation */}
        <div style={{ maxWidth: '1000px', height: '400px', margin: '40px auto 0 auto', border: `1px solid ${theme.border}`, position: 'relative', overflow: 'hidden' }}>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0267265147814!2d120.9813298153406!3d14.597551081395567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca19888998bd%3A0xc48512140a33118b!2sQuiapo%20Church!5e0!3m2!1sen!2sph!4v1680000000000!5m2!1sen!2sph" 
             width="100%" height="100%" style={{ border: 0, filter: isDarkMode ? 'invert(90%) hue-rotate(180deg) grayscale(80%)' : 'grayscale(80%) sepia(20%)' }} 
             allowFullScreen="" loading="lazy">
           </iframe>
           
           {/* Map overlay card */}
           <div style={{ position: 'absolute', bottom: '30px', left: '30px', backgroundColor: theme.panelBg, padding: '20px', border: `1px solid ${theme.border}`, textAlign: 'left' }}>
             <p style={{ color: theme.accent, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 5px 0' }}>Ceremony Venue</p>
             <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: 'normal' }}>Quiapo Church</h4>
             <p style={{ color: theme.textMuted, fontSize: '0.8rem', margin: 0 }}>Plaza Miranda, Manila</p>
           </div>
        </div>
      </div>

      {/* 4. THE SETTING (Quiapo Church Background Integrated) */}
      <div style={{ ...sectionStyle, padding: '120px 20px', position: 'relative' }}>
        
        {/* Subtle background overlay with user's Quiapo Church image */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url("${quiapoBg}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: isDarkMode ? 0.2 : 0.1, zIndex: 0 }} />

        <div style={{ zIndex: 1, position: 'relative' }}>
          <p style={sectionSubtitle}>The Setting</p>
          <h2 style={sectionTitle}>Quiapo Church</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ color: theme.textMain, fontSize: '1rem', lineHeight: '2', marginBottom: '40px' }}>
              Standing as one of the most prominent basilicas in the country, Quiapo Church has graced the heart of Manila for centuries. Its soaring architecture and rich history radiate an enduring testament to devotion, artistry, and the timeless pursuit of beauty.
              <br/><br/>
              It is here, beneath centuries of history and stone, that Dwyane and Ramiel will begin their eternal journey together.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', borderTop: `1px solid ${theme.border}`, paddingTop: '30px' }}>
              <div>
                <p style={{ color: theme.accent, fontSize: '1.2rem', margin: '0 0 5px 0' }}>1588</p>
                <p style={{ color: theme.textMuted, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Parish Founded</p>
              </div>
              <div>
                <p style={{ color: theme.accent, fontSize: '1.2rem', margin: '0 0 5px 0' }}>1987</p>
                <p style={{ color: theme.textMuted, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Made Minor Basilica</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. PROGRAMME */}
      <div style={{ ...sectionStyle, backgroundColor: isDarkMode ? '#0A0908' : '#F2EFE9' }}>
        <p style={sectionSubtitle}>The Day</p>
        <h2 style={sectionTitle}>Programme</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          
          {[
            { time: '11:30 PM', title: 'GUESTS ARRIVE', desc: 'Quiapo Church' },
            { time: '12:00 AM', title: 'WEDDING CEREMONY', desc: 'Quiapo Church' },
            { time: '01:30 AM', title: 'RECEPTION & DINNER', desc: 'The Manila Hotel' },
            { time: '02:30 AM', title: 'FIRST DANCE & TOASTS', desc: 'Grand Ballroom' },
            { time: '03:00 AM', title: 'CELEBRATION & DANCING', desc: 'Grand Ballroom' }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '30px', padding: '25px 0', borderBottom: index !== 4 ? `1px solid ${theme.border}` : 'none' }}>
              <div style={{ color: theme.accent, fontFamily: 'sans-serif', fontSize: '0.85rem', letterSpacing: '1px', flexShrink: 0, width: '80px' }}>
                {item.time}
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', color: theme.textMain }}>{item.title}</h4>
                <p style={{ margin: 0, color: theme.textMuted, fontStyle: 'italic', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 6. WEDDING PARTY */}
      <div style={sectionStyle}>
        <p style={sectionSubtitle}>Our Beloved</p>
        <h2 style={sectionTitle}>Wedding Party</h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem', margin: '0 0 20px 0' }}>Family of the Couple</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '60px' }}>
            {['Parents of Ganados', 'Parents of Sepe'].map((role, i) => (
              <div key={i} style={{ backgroundColor: theme.panelBg, border: `1px solid ${theme.border}`, padding: '30px', width: '300px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, fontWeight: 'normal', fontSize: '1.2rem' }}>Mr. & Mrs. {role.split(' ')[2]}</h4>
                <p style={{ margin: 0, color: theme.accent, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{role}</p>
              </div>
            ))}
          </div>

          <p style={{ color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem', margin: '0 0 20px 0' }}>Principal Sponsors</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '60px' }}>
            {[1,2,3].map((i) => (
              <div key={i} style={{ backgroundColor: theme.panelBg, border: `1px solid ${theme.border}`, padding: '20px', width: '250px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: theme.textMain, fontWeight: 'normal', fontSize: '1rem' }}>Ninong & Ninang</h4>
                <p style={{ margin: 0, color: theme.accent, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Principal Sponsor</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. DRESS CODE (Attire Examples Integrated) */}
      <div style={{ ...sectionStyle, backgroundColor: isDarkMode ? '#0A0908' : '#F2EFE9' }}>
        <p style={sectionSubtitle}>Attire</p>
        <h2 style={sectionTitle}>Dress Code</h2>
        <h3 style={{ fontSize: '3rem', fontWeight: 'normal', letterSpacing: '10px', color: theme.textMain, margin: '0 0 60px 0' }}>BLACK TIE</h3>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
            
            {/* For Gentlemen with Suit Example Image */}
            <div style={{ flex: '1 1 400px', border: `1px solid ${theme.border}`, padding: '40px', textAlign: 'left' }}>
              
              <img src={suitExample} alt="Gentleman's Suit Example" style={attireImageStyle} />
              
              <p style={{ color: theme.accent, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px' }}>✦ For Gentlemen</p>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Black Tuxedo</h4>
                <p style={{ margin: 0, color: theme.textMuted, fontStyle: 'italic', fontSize: '0.9rem' }}>Classic black or midnight blue tuxedo with bow tie.</p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Formal Dark Suit</h4>
                <p style={{ margin: 0, color: theme.textMuted, fontStyle: 'italic', fontSize: '0.9rem' }}>Charcoal or navy suit with white dress shirt.</p>
              </div>
            </div>

            {/* For Ladies with Gown Example Image */}
            <div style={{ flex: '1 1 400px', border: `1px solid ${theme.border}`, padding: '40px', textAlign: 'left' }}>
              
              <img src={gownExample} alt="Lady's Gown Example" style={attireImageStyle} />

              <p style={{ color: theme.accent, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px' }}>✦ For Ladies</p>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Floor-Length Gown</h4>
                <p style={{ margin: 0, color: theme.textMuted, fontStyle: 'italic', fontSize: '0.9rem' }}>Evening gown in dark, neutral, or jewel tones.</p>
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: theme.textMain, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Elegant Cocktail Dress</h4>
                <p style={{ margin: 0, color: theme.textMuted, fontStyle: 'italic', fontSize: '0.9rem' }}>Sophisticated midi or knee-length dress.</p>
              </div>
            </div>
          </div>

          {/* Do's and Don'ts */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', border: `1px solid ${theme.border}`, padding: '30px', textAlign: 'left' }}>
              <p style={{ color: theme.accent, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>✓ Please Do</p>
              <ul style={{ color: theme.textMuted, fontSize: '0.9rem', lineHeight: '2', paddingLeft: '20px', margin: 0 }}>
                <li>Wear formal, elegant attire</li>
                <li>Choose dark, neutral, or jewel tones</li>
                <li>Accessorize tastefully</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', border: `1px solid ${theme.border}`, padding: '30px', textAlign: 'left' }}>
              <p style={{ color: theme.accent, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>✕ Please Avoid</p>
              <ul style={{ color: theme.textMuted, fontSize: '0.9rem', lineHeight: '2', paddingLeft: '20px', margin: 0 }}>
                <li>White, cream, or ivory (reserved for the couple)</li>
                <li>Casual wear, jeans, or sportswear</li>
                <li>Loud patterns or overly bright neon colors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 8. RSVP SECTION */}
      <div style={sectionStyle}>
        <p style={sectionSubtitle}>Your Response</p>
        <h2 style={sectionTitle}>RSVP</h2>
        
        <p style={{ color: theme.textMuted, fontStyle: 'italic', marginBottom: '40px' }}>
          Kindly respond by the 1st of October, 2026
        </p>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {!hasSubmitted ? (
            <form onSubmit={handleRsvpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: theme.accent, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>First Name</label>
                  <input required type="text" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${theme.textMuted}`, color: theme.textMain, padding: '10px 0', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: theme.accent, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Last Name</label>
                  <input required type="text" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${theme.textMuted}`, color: theme.textMain, padding: '10px 0', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: theme.accent, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Will you attend?</label>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <label style={{ flex: 1, border: `1px solid ${theme.border}`, padding: '15px', textAlign: 'center', cursor: 'pointer', color: theme.textMain, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <input type="radio" name="attend" value="yes" required style={{ marginRight: '10px' }} /> Joyfully Accepts
                  </label>
                  <label style={{ flex: 1, border: `1px solid ${theme.border}`, padding: '15px', textAlign: 'center', cursor: 'pointer', color: theme.textMain, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <input type="radio" name="attend" value="no" style={{ marginRight: '10px' }} /> Regretfully Declines
                  </label>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: theme.accent, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Additional Guests</label>
                <input type="text" placeholder="Guest names..." style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${theme.textMuted}`, color: theme.textMain, padding: '10px 0', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: theme.accent, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Notes (Optional)</label>
                <textarea placeholder="Dietary requirements, special requests..." rows="3" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${theme.textMuted}`, color: theme.textMain, padding: '10px 0', fontSize: '1rem', outline: 'none', fontFamily: 'inherit', resize: 'none' }}></textarea>
              </div>

              <button type="submit" style={{ background: 'transparent', border: `1px solid ${theme.accent}`, color: theme.accent, padding: '20px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', transition: 'all 0.3s', marginTop: '20px' }} onMouseOver={(e) => { e.target.style.backgroundColor = theme.accent; e.target.style.color = theme.bg; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = theme.accent; }}>
                Send Response
              </button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ border: `1px solid ${theme.accent}`, padding: '60px 40px' }}>
              <div style={{ fontSize: '3rem', color: theme.accent, marginBottom: '20px' }}>❦</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'normal', color: theme.textMain, margin: '0 0 15px 0' }}>Response Sealed</h3>
              <p style={{ color: theme.textMuted, fontStyle: 'italic', fontSize: '1.2rem' }}>Thank you. We eagerly await the hour of celebration.</p>
            </motion.div>
          )}

          {/* Live RSVP Counter */}
          <div style={{ marginTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: theme.accent }} />
            <p style={{ color: theme.textMuted, fontStyle: 'italic', fontSize: '1.1rem', margin: 0 }}>
              <strong style={{ color: theme.accent, fontSize: '1.4rem' }}>{rsvpCount}</strong> attending guests
            </p>
            <div style={{ width: '30px', height: '1px', backgroundColor: theme.accent }} />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: isDarkMode ? '#050505' : '#EAE6DD' }}>
        <p style={{ color: theme.accent, fontSize: '1.2rem', letterSpacing: '4px', margin: '0 0 10px 0' }}>D & R</p>
        <p style={{ color: theme.textMuted, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>11 · 01 · 2026</p>
      </div>

    </motion.div>
  );
}

export default WeddingInvite;