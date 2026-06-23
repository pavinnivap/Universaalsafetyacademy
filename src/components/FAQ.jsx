import React, { useState } from 'react';
import { faqData } from '../data/faqData';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <section id="faq" className="section section-bg">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Common Queries</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to standard questions regarding admissions eligibility, certification validation, batch timings, and career placements.
          </p>
        </div>

        {/* FAQ Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }} className="faq-grid">
          
          {/* Accordion Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;
              
              return (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {/* Header Button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      color: 'var(--text-main)',
                      fontWeight: '700',
                      fontSize: '0.98rem'
                    }}
                  >
                    <span>{item.question}</span>
                    <span 
                      style={{ 
                        color: 'var(--accent)', 
                        fontSize: '1.2rem',
                        transition: 'transform 0.3s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Body Content Panel */}
                  {isOpen && (
                    <div 
                      style={{
                        padding: '0 24px 20px 24px',
                        color: 'var(--text-muted)',
                        fontSize: '0.88rem',
                        lineHeight: '1.6',
                        textAlign: 'left',
                        animation: 'fadeIn 0.3s ease-out'
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Student Counselling Advisory Desk Column */}
          <div 
            style={{
              backgroundColor: 'var(--primary)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '30px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-md)',
              alignSelf: 'start'
            }}
            className="faq-desk-card"
          >
            <div>
              <span style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
                Guidance & Counselling Desk
              </span>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '15px' }}>
                Need personalized course advice?
              </h3>
              <p style={{ opacity: 0.85, fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Our experienced training counsellors at our Trichy head campus will review your academic background and recommend the ideal safety programs tailored for Indian or overseas Gulf markets.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', opacity: 0.9 }}>
                <li>✔️ Free resume assessment check</li>
                <li>✔️ Detailed safety syllabus guides</li>
                <li>✔️ Middle East visa guidelines support</li>
              </ul>
            </div>

            <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
              <span style={{ fontSize: '0.75rem', opacity: 0.7, display: 'block', marginBottom: '8px' }}>Call Admissions Support:</span>
              <a href="tel:+917092460477" style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: '800', display: 'block', marginBottom: '15px' }}>
                📞 +91 70924 60477
              </a>
              <a 
                href="https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20need%20admissions%20counselling."
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}
              >
                💬 Ask a Counsellor
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
          .faq-desk-card {
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .faq-desk-card {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
