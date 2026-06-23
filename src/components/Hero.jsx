import React, { useState, useEffect } from 'react';

// Simple helper hook for counting up animation
function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function Hero({ onOpenEnquiry }) {
  const studentsCount = useCounter(10500);
  const placementsCount = useCounter(100);
  const partnersCount = useCounter(15);
  const coursesCount = useCounter(50);

  const handleDownloadBrochure = () => {
    alert("Your download of the Universaal Safety Academy Course Brochure has started! (Syllabus PDF)");
    // Alternatively, open contact form
    onOpenEnquiry();
  };

  const whatsappUrl = "https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20want%20to%20apply%20for%20safety%20courses.";

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(11, 31, 58, 0.9), rgba(11, 31, 58, 0.85)), url("/assets/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        color: '#FFFFFF',
        padding: '100px 0 60px 0',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(rgba(255, 122, 0, 0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }} className="hero-grid">

          {/* Hero Content */}
          <div className="animate-slide-up" style={{ textAlign: 'left' }}>
            {/* Top Tagline */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: 'rgba(255, 122, 0, 0.15)',
                border: '1px solid rgba(255, 122, 0, 0.3)',
                borderRadius: '50px',
                color: 'var(--accent)',
                fontSize: '0.85rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}
            >
              <span>⭐</span> Top Rated Safety Academy in Trichy
            </div>

            {/* Main Title */}
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: '3rem',
                lineHeight: '1.2',
                fontWeight: '800',
                marginBottom: '20px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
              className="hero-title"
            >
              Build a Safer Future with <span style={{ color: 'var(--accent)' }}>Internationally Recognized</span> Safety Certifications
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: '1.15rem',
                color: '#E2E8F0',
                marginBottom: '35px',
                lineHeight: '1.6',
                maxWidth: '650px'
              }}
            >
              Advance your career with Diploma, OSHA, IOSH, OTHM, and ISO Lead Auditor safety training courses available online and offline.
            </p>

            {/* CTA Group */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '45px' }} className="hero-ctas">
              <button
                onClick={() => onOpenEnquiry()}
                className="btn btn-primary"
                style={{ padding: '15px 35px', fontSize: '1rem', flex: '0 1 auto' }}
              >
                Apply Now ➔
              </button>
              {/* <button 
                onClick={handleDownloadBrochure}
                className="btn btn-secondary"
                style={{ padding: '15px 30px', fontSize: '1rem', flex: '0 1 auto' }}
              >
                📥 Download Brochure
              </button> */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '15px 30px', fontSize: '1rem', flex: '0 1 auto' }}
              >
                💬 WhatsApp Enquiry
              </a>
            </div>

            {/* International Trust Logos */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#A0AEC0', display: 'block', marginBottom: '15px' }}>
                Accredited Course Partners & Frameworks:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', opacity: '0.85' }} className="partner-badges">
                {['IOSH', 'OSHA', 'OTHM', 'ISO IRCA'].map((b) => (
                  <div
                    key={b}
                    style={{
                      padding: '8px 18px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      fontSize: '0.95rem',
                      fontWeight: '800',
                      color: b === 'OSHA' ? 'var(--accent)' : '#FFFFFF',
                      letterSpacing: '1px'
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Floating Stats Widget */}
          {/* <div className="animate-float hero-stats-side" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             */}
          {/* Main Stats Card */}
          {/* <div 
              style={{
                backgroundColor: 'rgba(11, 31, 58, 0.85)',
                border: '1px solid rgba(255,122,0,0.3)',
                borderRadius: 'var(--radius-lg)',
                padding: '30px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                textAlign: 'center'
              }} */}
          {/* > */}
          {/* <h3 style={{ color: '#FFFFFF', marginBottom: '20px', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                🏆 Academy Track Record
              </h3> */}

          {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                 */}
          {/* <div style={{ padding: '15px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--accent)', display: 'block' }}>
                    {studentsCount.toLocaleString()}+
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#A0AEC0' }}>Trained Students</span>
                </div> */}

          {/* <div style={{ padding: '15px' }}>
                  <span style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--accent)', display: 'block' }}>
                    {placementsCount}%
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#A0AEC0' }}>Placement Support</span>
                </div> */}

          {/* <div style={{ padding: '15px', borderRight: '1px solid rgba(255,255,255,0.08)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '1.85rem', fontWeight: '800', color: '#FFFFFF', display: 'block' }}>
                    {coursesCount}+
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#A0AEC0' }}>Safety Courses</span>
                </div> */}

          {/* <div style={{ padding: '15px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '1.85rem', fontWeight: '800', color: '#FFFFFF', display: 'block' }}>
                    {partnersCount}+
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#A0AEC0' }}>Global Accreditations</span>
                </div> */}

        </div>

        {/* Trust Badge */}
        {/* <div 
                style={{ 
                  marginTop: '20px', 
                  backgroundColor: 'rgba(255,122,0,0.1)', 
                  border: '1px dashed var(--accent)', 
                  padding: '10px', 
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}
              >
                🔒 ISO 9001:2015 Certified Academy
              </div> */}
        {/* </div> */}

        {/* Micro Badge Card: Active Placements */}
        {/* <div 
              style={{
                backgroundColor: '#FF7A00',
                color: '#FFFFFF',
                padding: '15px 25px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                boxShadow: '0 10px 20px rgba(255, 122, 0, 0.3)'
              }}
            >
              <span style={{ fontSize: '1.8rem' }}>🌍</span>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: '800', display: 'block', fontSize: '0.95rem' }}>Middle East & Gulf Placement</span>
                <span style={{ fontSize: '0.75rem', opacity: '0.9' }}>Special Guidance for Saudi, UAE & Qatar Jobs</span>
              </div>
            </div> */}

        {/* </div> */}

        {/* </div> */}
      </div>

      {/* Hero Responsive CSS */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .hero-grid > div {
            text-align: center !important;
          }
          .hero-ctas {
            justify-content: center !important;
          }
          .partner-badges {
            justify-content: center !important;
          }
          .hero-title {
            font-size: 2.3rem !important;
          }
          .hero-stats-side {
            max-width: 500px;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.9rem !important;
          }
          .hero-stats-side {
            max-width: 100% !important;
          }
        }
        @media (max-width: 576px) {
          .hero-ctas {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-ctas > button, .hero-ctas > a {
            width: 100% !important;
            text-align: center !important;
          }
          .hero-title {
            font-size: 1.6rem !important;
          }
          .partner-badges > div {
            font-size: 0.8rem !important;
            padding: 6px 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
