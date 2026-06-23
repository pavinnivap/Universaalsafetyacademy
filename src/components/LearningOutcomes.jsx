import React from 'react';

export default function LearningOutcomes() {
  const outcomes = [
    {
      id: "out-1",
      num: "01",
      title: "Risk Awareness & Hazard Identification",
      desc: "Learn to recognize structural, mechanical, chemical, and ergonomic hazards in heavy workplaces before they cause injuries. Develop hazard mapping checklists and master risk matrix tools.",
      color: "var(--accent)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    },
    {
      id: "out-2",
      num: "02",
      title: "Regulatory Compliance & Safety Standards",
      desc: "Gain fluency in statutory regulations including India's Factories Act, US OSHA standards, UK Health and Safety laws, and ISO environmental directives to protect businesses from liabilities.",
      color: "#007BFF",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      id: "out-3",
      num: "03",
      title: "Emergency Preparedness & Crisis Management",
      desc: "Acquire the protocols required to manage fire outbreaks, dangerous gas leaks, and physical injuries. Formulate evacuation route plans, coordinate first-aid triage, and command drills.",
      color: "#28A745",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    },
    {
      id: "out-4",
      num: "04",
      title: "Workplace Safety Culture & Behavioral Safety",
      desc: "Understand the human factors that lead to safety omissions. Learn to lead safety briefings (toolbox talks), audit safety behaviors, and build an active accountability culture.",
      color: "#6F42C1",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <section id="outcomes" className="section section-bg">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Learning Outcomes</span>
          <h2 className="section-title">Key Learning Outcomes & Skills</h2>
          <p className="section-subtitle">
            Our safety training goes beyond textbooks. We build functional competencies that enable safety engineers to identify risks and coordinate emergency systems.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}
          className="outcomes-grid"
        >
          {outcomes.map((item) => (
            <div 
              key={item.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                borderLeft: `5px solid ${item.color}`,
                padding: '35px 25px'
              }}
            >
              {/* Card Top Row */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  width: '100%', 
                  alignItems: 'center',
                  marginBottom: '20px'
                }}
              >
                <div style={{ color: item.color }}>
                  {item.icon}
                </div>
                <span 
                  style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '800', 
                    color: 'var(--text-muted)',
                    opacity: 0.18
                  }}
                >
                  {item.num}
                </span>
              </div>

              {/* Card Title */}
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: '750' }}>
                {item.title}
              </h3>
              
              {/* Card Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .outcomes-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .outcomes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
