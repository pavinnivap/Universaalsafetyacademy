import { useState, useEffect } from 'react';

export default function Navbar({ onOpenEnquiry }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Courses', href: '#courses' },
    { label: 'Online Classes', href: '#online' },
    { label: 'Placements', href: '#placements' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const whatsappUrl = "https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20want%20to%20enquire%20about%20safety%20courses.";

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 99,
        transition: 'var(--transition-smooth)',
        backgroundColor: isScrolled ? 'var(--bg-card)' : 'rgba(11, 31, 58, 0.95)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Top Banner (Info Details) */}
      <div
        style={{
          backgroundColor: '#071527',
          color: '#FFFFFF',
          fontSize: '0.8rem',
          padding: '8px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: isScrolled ? 'none' : 'block'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} className="top-banner-info">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              📞 +91 70924 60477
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              ✉️ universaalsafetyacademy@gmail.com
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }} className="top-banner-address">
              📍 Cantonment, Trichy, TN
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }} className="top-banner-right">
            <span>Global Standard Safety Education</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 'bold' }}>
              💬 Live Chat
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ padding: isScrolled ? '12px 0' : '18px 0', transition: 'var(--transition-smooth)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/assets/logo.png"
              alt="Universaal Safety Academy Logo"
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                // Fallback text if logo fails to render
                e.target.style.display = 'none';
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                fontSize: '1.25rem',
                lineHeight: '1.1',
                color: isScrolled ? 'var(--text-main)' : '#FFFFFF',
                letterSpacing: '0.5px'
              }}>
                UNIVERSAAL
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontWeight: '600',
                fontSize: '0.65rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--accent)'
              }}>
                Safety Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="nav-links-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: isScrolled ? 'var(--text-main)' : '#E2E8F0'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? 'var(--text-main)' : '#E2E8F0'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>



            {/* WhatsApp CTA Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp nav-btn-hide"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              💬 WhatsApp
            </a>

            {/* Apply Now Button */}
            <button
              onClick={() => onOpenEnquiry()}
              className="btn btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Apply Now
            </button>

            {/* Hamburger Button (Mobile Only) */}
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                width: '30px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              aria-label="Toggle menu"
            >
              <span style={{ width: '100%', height: '3px', backgroundColor: isScrolled ? 'var(--text-main)' : '#FFFFFF', borderRadius: '2px', transition: 'var(--transition-smooth)', transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
              <span style={{ width: '100%', height: '3px', backgroundColor: isScrolled ? 'var(--text-main)' : '#FFFFFF', borderRadius: '2px', opacity: isMobileMenuOpen ? 0 : 1, transition: 'var(--transition-smooth)' }}></span>
              <span style={{ width: '100%', height: '3px', backgroundColor: isScrolled ? 'var(--text-main)' : '#FFFFFF', borderRadius: '2px', transition: 'var(--transition-smooth)', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
            </button>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-lg)',
              borderBottom: '1px solid var(--border-light)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              zIndex: 98,
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-main)',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ flex: 1, padding: '12px' }}
              >
                💬 WhatsApp
              </a>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenEnquiry(); }}
                className="btn btn-primary"
                style={{ flex: 1, padding: '12px' }}
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Embedded CSS for responsive navbar queries in App.css / index.css context */}
      <style>{`
        @media (max-width: 992px) {
          .nav-links-desktop {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
        @media (max-width: 576px) {
          .nav-btn-hide {
            display: none !important;
          }
          .top-banner-info {
            gap: 8px !important;
            font-size: 0.72rem !important;
          }
          .top-banner-address {
            display: none !important;
          }
          .top-banner-right {
            display: none !important;
          }
        }
        @media (max-width: 400px) {
          .top-banner-info > span {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </header>
  );
}
