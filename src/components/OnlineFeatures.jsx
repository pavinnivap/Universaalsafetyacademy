import React from 'react';

export default function OnlineFeatures() {
  const features = [
    {
      title: "Online Learning Portal",
      desc: "Get 24/7 access to our premium LMS (Learning Management System) to read course files, safety guidelines, and download textbooks.",
      icon: "💻"
    },
    {
      title: "Downloadable Certificates",
      desc: "Secure instant PDF e-certificates upon course completion, complete with verification QR codes for global employers.",
      icon: "📜"
    },
    {
      title: "Expert Safety Trainers",
      desc: "Participate in virtual interactive masterclasses led by board-certified HSE experts working in Indian and Gulf organizations.",
      icon: "👨‍🏫"
    },
    {
      title: "Mock Tests & Exams",
      desc: "Prepare for IOSH, OSHA, and OTHM board assessments with our specialized mock quiz engine and past paper discussions.",
      icon: "📝"
    },
    {
      title: "Live Virtual Classes",
      desc: "Join scheduled live webinars where you can raise questions, participate in hazard discussions, and discuss case reviews.",
      icon: "🎥"
    },
    {
      title: "Recorded Sessions",
      desc: "Missed a live class? Access full high-definition recordings of every lecture in the portal at any time to revise the material.",
      icon: "💾"
    },
    {
      title: "Direct WhatsApp Support",
      desc: "Connect directly to trainers and student support coordinators via a dedicated WhatsApp group for quick query solutions.",
      icon: "💬"
    },
    {
      title: "Placement Assistance",
      desc: "Distance learners get full access to online resume building, job notifications, and recruitment screening practice.",
      icon: "💼"
    }
  ];

  return (
    <section id="online" className="section section-bg">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Hybrid Learning</span>
          <h2 className="section-title">Online Learning Portal Features</h2>
          <p className="section-subtitle">
            Can't attend our offline center in Trichy? Our state-of-the-art virtual academy delivers high-definition safety training to your home screen.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px'
          }}
          className="online-features-grid"
        >
          {features.map((f, idx) => (
            <div 
              key={idx}
              className="card card-glass"
              style={{
                textAlign: 'left',
                padding: '25px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}
            >
              {/* Icon */}
              <div 
                style={{
                  fontSize: '2rem',
                  backgroundColor: 'var(--bg-main)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {f.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '8px' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .online-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .online-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
