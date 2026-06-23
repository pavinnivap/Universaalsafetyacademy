import React from 'react';

export default function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#071527',
        color: '#A0AEC0',
        padding: '70px 0 25px 0',
        borderTop: '5px solid var(--accent)',
        position: 'relative',
        // Subtle industrial safety cross-mesh style texture via linear-gradients
        backgroundImage: 'linear-gradient(rgba(7, 21, 39, 0.96), rgba(7, 21, 39, 0.98)), repeating-linear-gradient(45deg, rgba(255, 122, 0, 0.03) 0px, rgba(255, 122, 0, 0.03) 2px, transparent 2px, transparent 10px)',
        textAlign: 'left'
      }}
    >
      <div className="container">

        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr',
            gap: '40px',
            marginBottom: '50px'
          }}
          className="footer-grid"
        >

          {/* Col 1: About Academy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <img
                src="/assets/logo.png"
                alt="Universaal Safety Academy"
                style={{ height: '36px', width: 'auto' }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.15rem', color: '#FFFFFF' }}>
                UNIVERSAAL
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: '1.6', marginBottom: '20px' }}>
              A premium, globally recognized safety educational institute based in Cantonment, Trichy, Tamil Nadu. Preparing engineering aspirants and HSE professionals for rewarding careers in India and the Gulf region.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: '750', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li><a href="#home" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>Home Page</a></li>
              <li><a href="#about" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>About Us</a></li>
              <li><a href="#placements" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>Placements support</a></li>
              <li><a href="#blog" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>Latest Blogs</a></li>
              <li><a href="#faq" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>FAQ Helpdesk</a></li>
              <li><a href="#contact" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>Contact Info</a></li>
            </ul>
          </div>

          {/* Col 3: Key Course links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: '750', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Key Courses
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li><a href="#courses" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>Fire & Safety Diploma</a></li>
              <li><a href="#courses" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>Industrial Safety Course</a></li>
              <li><a href="#courses" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>First Aid Certification</a></li>
              <li><a href="#courses" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>OSHA 30-Hour Training</a></li>
              <li><a href="#courses" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>IOSH Managing Safely</a></li>
              <li><a href="#courses" style={{ color: '#A0AEC0' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>ISO 45001 Lead Auditor</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Coordinates */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.98rem', fontWeight: '750', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Office Address
            </h4>
            <p style={{ fontSize: '0.82rem', lineHeight: '1.6', marginBottom: '15px' }}>
              Upper Layer, 3rd Floor, Sundaram Arcade,<br />
              13-A Williams Road, Cantonment,<br />
              Trichy – 620001<br />
              Opposite Central Bus Stand
            </p>
            <p style={{ fontSize: '0.82rem', margin: 0 }}>
              📞 <strong>Phone:</strong> +91 70924 60477<br />
              ✉️ <strong>Email:</strong> universaalsafetyacademy@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright and disclaimer */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            fontSize: '0.78rem'
          }}
          className="footer-bottom"
        >
          <span>
            © {currentYear} UNIVERSAAL SAFETY ACADEMY. All Rights Reserved. Designed for Safety Auditing & Education Excellence.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button 
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              style={{
                background: 'none',
                border: 'none',
                color: '#A0AEC0',
                fontSize: '0.78rem',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline',
                fontFamily: 'inherit',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              style={{
                background: 'none',
                border: 'none',
                color: '#A0AEC0',
                fontSize: '0.78rem',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline',
                fontFamily: 'inherit',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}
            >
              Terms of Admission
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

