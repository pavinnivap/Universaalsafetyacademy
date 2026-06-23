import React from 'react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Industry Expert Trainers",
      desc: "Learn from board-certified safety professionals with extensive HSE command in Middle East oil fields and construction sectors.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "International Certifications",
      desc: "Equip your profile with IOSH, OSHA, OTHM, and IRCA ISO Lead Auditor qualifications directly recognized by worldwide employers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      title: "Online & Offline Classes",
      desc: "Study online through our interactive student learning management portal, or join classroom sessions and practical workshops at our Trichy center.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Placement Assistance",
      desc: "Our dedicated career division optimizes your resume, matches you with industry job drives, and schedules recruiter interviews.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: "Flexible Learning Schedules",
      desc: "We offer tailored batches (weekday morning/evening, or intensive Sunday programs) to suit both freshers and working engineering graduates.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      title: "Practical Safety Training",
      desc: "Gain hands-on competencies in using fire extinguishers (PASS methods), scaffold inspections, and first-aid kits at our customized lab.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px' }}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )
    }
  ];

  return (
    <section className="section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Why Choose UNIVERSAAL for Safety Education?</h2>
          <p className="section-subtitle">
            We deliver result-oriented occupational safety programs that transform engineering aspirants into internationally qualified safety officers.
          </p>
        </div>

        {/* Feature Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px' 
          }} 
          className="why-choose-grid"
        >
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left'
              }}
            >
              {/* Icon Holder */}
              <div 
                style={{
                  backgroundColor: 'rgba(255, 122, 0, 0.1)',
                  color: 'var(--accent)',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {card.icon}
              </div>

              {/* Content */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 480px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
