import React from 'react';

export default function Placements() {
  const steps = [
    {
      title: "HSE Resume Optimization",
      desc: "Our career experts rebuild your resume, focusing on safety keywords (such as JSA, hazard mitigations, LOTO, COSHH) and formatting it to pass ATS screening systems used by major corporations.",
      badge: "Step 1"
    },
    {
      title: "Safety Mock Interviews",
      desc: "Participate in simulated technical and HR panel interviews. Practice answering safety scenario queries: handling gas leaks, scaffolding tagging, and emergency coordination cases.",
      badge: "Step 2"
    },
    {
      title: "Gulf Placement Guidance",
      desc: "Receive customized coaching regarding Middle East visa rules, attestation of qualifications, and active safety inspector recruitment drives in Saudi Arabia, UAE, Qatar, and Kuwait.",
      badge: "Step 3"
    },
    {
      title: "Dedicated Safety Job Alerts",
      desc: "Get lifetime access to our private job notification broadcast, where we share verified daily requirements for safety officers, site engineers, and ISO auditors from our partner companies.",
      badge: "Step 4"
    }
  ];

  return (
    <section id="placements" className="section">
      <div className="container">
        
        {/* Placements Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '50px', alignItems: 'center' }} className="placements-grid">
          
          {/* Left Side Info Panel */}
          <div style={{ textAlign: 'left' }}>
            <span className="section-tag">Career Support</span>
            <h2 className="section-title">100% Placement Support & Gulf Job Guidance</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '20px', lineHeight: '1.6' }}>
              Universaal Safety Academy connects you directly with top construction, manufacturing, and petrochemical organizations across India and the Gulf region.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '30px', lineHeight: '1.5' }}>
              Our dedicated placement office has helped thousands of students transition from general engineering backgrounds into certified safety professionals with rewarding salary structures.
            </p>

            {/* Micro Partners Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '5px' }}>🚀 Gulf Recruitment Network</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                We guide you through the compliance standards required by Saudi Aramco, ADNOC, QatarEnergy, and leading international construction firms.
              </p>
            </div>
          </div>

          {/* Right Side Step Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '22px 25px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  transition: 'var(--transition-smooth)'
                }}
                className="placement-step-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Step Number Tag */}
                <div 
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    flexShrink: 0
                  }}
                >
                  {step.badge}
                </div>

                {/* Step Details */}
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '6px' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .placements-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .placement-step-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            padding: 18px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
