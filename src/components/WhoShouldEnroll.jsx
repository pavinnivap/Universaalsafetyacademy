import React from 'react';

export default function WhoShouldEnroll() {
  const audiences = [
    {
      role: "Health and Safety Officers",
      benefit: "Refresh technical skills, acquire advanced qualifications (OTHM, IOSH L6), and master regulatory safety audits.",
      metric: "HSE Officers / Managers"
    },
    {
      role: "Site Supervisors & Managers",
      benefit: "Gain command of hazard evaluation, scaffold tags, heights safety, and toolbox talks to lead site safety.",
      metric: "Construction & Factory Leaders"
    },
    {
      role: "Engineers & Technicians",
      benefit: "Qualify for high-demand HSE roles in chemical, oil, gas, manufacturing, and heavy infrastructure industries.",
      metric: "BE / BTech / Diploma Holders"
    },
    {
      role: "Auditors & Compliance Specialists",
      benefit: "Get certified as an IRCA ISO Lead Auditor (ISO 45001, 14001, 9001) to run official regulatory audits.",
      metric: "QMS / EMS Compliance Auditors"
    },
    {
      role: "HR & Risk Management Professionals",
      benefit: "Understand risk evaluation models, workplace liability prevention, and employee compensation guidelines.",
      metric: "Corporate Risk Advisors"
    },
    {
      role: "Environmental Specialists",
      benefit: "Master green audits and sustainability via OTHM Level 7 Environmental and ISO 14001 frameworks.",
      metric: "ESG & Eco Consultants"
    }
  ];

  return (
    <section id="enrollment" className="section section-bg">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Target Audience</span>
          <h2 className="section-title">Who Should Enroll in Our Training?</h2>
          <p className="section-subtitle">
            Our safety academy accommodates freshers entering the industry as well as senior leaders wishing to validate global HSE compliance standards.
          </p>
        </div>

        {/* Audiences Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}
          className="enroll-grid"
        >
          {audiences.map((aud, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '25px',
                textAlign: 'left',
                display: 'flex',
                gap: '15px',
                alignItems: 'flex-start',
                transition: 'var(--transition-smooth)'
              }}
              className="enroll-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Check Indicator */}
              <div 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 122, 0, 0.1)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  marginTop: '3px'
                }}
              >
                ✓
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>
                  {aud.role}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '10px' }}>
                  {aud.benefit}
                </p>
                <span 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold', 
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-main)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  🎯 Ideal for: {aud.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 480px) {
          .enroll-grid {
            grid-template-columns: 1fr !important;
          }
          .enroll-card {
            padding: 18px 15px !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
