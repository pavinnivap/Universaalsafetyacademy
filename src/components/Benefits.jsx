import React from 'react';

export default function Benefits() {
  const benefits = [
    {
      title: "Workplace Safety Enhancement",
      desc: "By establishing proactive inspection checklists and hazard controls, trained safety officers dramatically decrease the frequency of site accidents and occupational illness cases.",
      tag: "Shield"
    },
    {
      title: "Full Regulatory Compliance",
      desc: "Ensure your industrial facility or construction project aligns perfectly with local factories acts, national safety codes, and international mandates (OSHA, IOSH), eliminating heavy legal penalties.",
      tag: "Scale"
    },
    {
      title: "Accelerated Career Growth",
      desc: "Adding recognized credentials like OTHM and ISO Lead Auditor turns engineers and site supervisors into highly valuable candidates for high-paying HSE manager roles, especially in Gulf nations.",
      tag: "Growth"
    },
    {
      title: "Increased Operational Productivity",
      desc: "Fewer workplace injuries translate to zero downtime, lower equipment damage incidents, reduced insurance premiums, and boosted employee morale, improving the bottom-line.",
      tag: "Performance"
    },
    {
      title: "Proactive Risk Management",
      desc: "Establish a robust hazard reporting culture. Empower safety teams to execute Job Safety Analysis (JSA) and draft contingency plans to handle workplace emergencies seamlessly.",
      tag: "Strategy"
    }
  ];

  return (
    <section id="benefits" className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">Core Benefits of Safety Certification</h2>
          <p className="section-subtitle">
            Safety training is a win-win: it safeguards workers and secures compliance for corporations, while supercharging individual career growth.
          </p>
        </div>

        {/* Benefits Flex Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}
          className="benefits-grid"
        >
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
                border: '1px solid var(--border-light)',
                background: 'linear-gradient(145deg, var(--bg-card), var(--bg-main))'
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(255,122,0,0.1)',
                    color: 'var(--accent)',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    marginBottom: '15px'
                  }}
                >
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>

              {/* <div
                style={{
                  marginTop: '20px',
                  fontSize: '0.8rem',
                  color: 'var(--accent)',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                Learn outcome details ➔
              </div> */}
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 480px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
