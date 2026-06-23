import React from 'react';

export default function About({ onOpenEnquiry }) {
  return (
    <section id="about" className="section section-bg">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '50px', alignItems: 'center' }} className="about-grid">
          
          {/* Left Side: Images Collage */}
          <div style={{ position: 'relative' }} className="about-image-side">
            {/* Background Accent Grid */}
            <div 
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '120px',
                height: '120px',
                backgroundImage: 'radial-gradient(var(--accent) 2px, transparent 2px)',
                backgroundSize: '15px 15px',
                zIndex: 1,
                opacity: 0.3
              }}
            ></div>

            {/* Main Classroom Training Image */}
            <div 
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid var(--bg-card)',
                position: 'relative',
                zIndex: 2
              }}
            >
              <img 
                src="/assets/classroom.png" 
                alt="Fire Safety Classroom and Practical Session" 
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.01)' }}
              />
              {/* Image Overlay Label */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(11, 31, 58, 0.95)',
                  borderLeft: '4px solid var(--accent)',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  color: '#FFFFFF',
                  zIndex: 3
                }}
              >
                <span style={{ fontWeight: '800', display: 'block', fontSize: '0.95rem' }}>100% Practical Focus</span>
                <span style={{ fontSize: '0.75rem', opacity: '0.8' }}>Fire extingushing & rescue drills</span>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div 
              style={{
                position: 'absolute',
                top: '30px',
                right: '-20px',
                backgroundColor: 'var(--accent)',
                color: '#FFFFFF',
                padding: '15px 20px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                zIndex: 4,
                textAlign: 'center'
              }}
              className="about-badge-float"
            >
              <span style={{ fontSize: '1.8rem', fontWeight: '800', display: 'block', lineHeight: '1' }}>10+</span>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Years of Safety<br/>Training Excellence</span>
            </div>
          </div>

          {/* Right Side: Professional Intro Content */}
          <div style={{ textAlign: 'left' }}>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">About UNIVERSAAL SAFETY ACADEMY</h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: '1.7' }}>
              Based in the corporate hub of <strong>Trichy, India</strong>, Universaal Safety Academy is a premier fire and industrial safety training institute. We are dedicated to providing high-quality, international-standard safety education to groom the next generation of Health, Safety, and Environment (HSE) professionals.
            </p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px', lineHeight: '1.6' }}>
              Whether you are an engineering graduate looking to qualify for high-paying safety jobs in the Gulf or an auditor looking to master ISO standards, we offer a specialized learning path with state-of-the-art practical safety labs, live drills, and UK-accredited certifications.
            </p>

            {/* Structured Highlight Bullet Points */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '35px' }} className="about-bullets">
              {[
                { title: "Expert Safety Trainers", desc: "Taught by certified safety officers with 15+ years of Gulf HSE experience." },
                { title: "International Standards", desc: "Syllabi aligned with UK OTHM, IOSH, and US OSHA frameworks." },
                { title: "Classroom & Practical Labs", desc: "Equipped safety labs for fire, scaffold and height safety drills." },
                { title: "Direct Placement Support", desc: "Resume reviews and recruiter networks covering Gulf & Indian sectors." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '2px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }} className="about-ctas">
              <button 
                onClick={() => onOpenEnquiry()}
                className="btn btn-primary"
              >
                Learn More About Admissions
              </button>
              <a 
                href="#courses" 
                className="btn btn-secondary"
              >
                Explore Courses
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* About Responsive Style */}
      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-image-side {
            max-width: 500px;
            margin: 0 auto;
          }
          .about-badge-float {
            right: 0 !important;
          }
        }
        @media (max-width: 576px) {
          .about-bullets {
            grid-template-columns: 1fr !important;
          }
          .about-ctas {
            flex-direction: column !important;
          }
          .about-ctas .btn {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
