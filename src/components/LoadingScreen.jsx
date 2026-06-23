import React, { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 600); // match transition duration
      return () => clearTimeout(removeTimer);
    }, 1200); // load time

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0B1F3A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {/* Animated Custom Safety Gear + Shield Icon */}
        <div style={{ position: 'relative', width: '90px', height: '90px' }}>
          <svg 
            viewBox="0 0 100 100" 
            style={{
              width: '100%',
              height: '100%',
              animation: 'spinSlow 12s linear infinite'
            }}
          >
            {/* Gear Outer Ring */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#FF7A00" strokeWidth="4" strokeDasharray="6 4" />
          </svg>
          {/* Inner Safety Shield & Checkmark */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '45px',
              height: '45px',
              animation: 'float 2.5s ease-in-out infinite'
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
              <path 
                d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" 
                fill="#FF7A00" 
                opacity="0.25" 
              />
              <path 
                d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" 
                stroke="#FF7A00" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <path 
                d="M9 11l2 2 4-4" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        </div>
        
        {/* Text Logo */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Poppins', 
            fontSize: '1.6rem', 
            letterSpacing: '1px',
            marginBottom: '4px'
          }}>
            UNIVERSAAL
          </h2>
          <span style={{ 
            color: '#FF7A00', 
            fontFamily: 'Inter', 
            fontSize: '0.8rem', 
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Safety Academy
          </span>
        </div>
        
        {/* Progress Dots */}
        <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
          <span className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF7A00', animation: 'float 1s ease-in-out infinite alternate' }}></span>
          <span className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF7A00', animation: 'float 1s ease-in-out infinite alternate', animationDelay: '0.2s' }}></span>
          <span className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF7A00', animation: 'float 1s ease-in-out infinite alternate', animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </div>
  );
}
