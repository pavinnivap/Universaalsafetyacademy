import React, { useState, useEffect, useRef } from 'react';
import { coursePages } from '../data/coursePageData';

// ── Scroll-reveal hook ──────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Animated Section Wrapper ────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(.2,.8,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── Star Rating ─────────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '3px', color: '#FF7A00', fontSize: '1rem' }}>
      {Array.from({ length: count }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

// ── Section Tag ─────────────────────────────────────────────────────
function SectionTag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '5px 14px',
      background: 'rgba(255,122,0,0.1)',
      color: '#FF7A00',
      fontWeight: 700,
      fontSize: '0.78rem',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      borderRadius: '50px',
      marginBottom: '12px',
      border: '1px solid rgba(255,122,0,0.2)',
    }}>{children}</span>
  );
}

// ── Main Component ──────────────────────────────────────────────────
export default function CourseDetailPage({ slug, onBack, onOpenEnquiry }) {
  const data = coursePages[slug];
  const [openFaq, setOpenFaq] = useState(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20am%20interested%20in%20the%20${encodeURIComponent(data.heroTitle)}%20course.`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleScroll = () => setStickyVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return null;

  const handleFormChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => onOpenEnquiry(), 400);
  };

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>

      {/* ── Back Navigation Bar ─────────────────────────── */}
      <div style={{
        background: 'var(--primary)',
        padding: '12px 0',
        position: 'sticky',
        top: '70px',
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              color: '#FFFFFF', fontWeight: 600, fontSize: '0.85rem',
              padding: '6px 14px', borderRadius: '6px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,122,0,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            ← Back to Home
          </button>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>|</span>
          <span style={{ color: '#FF7A00', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px' }}>
            {data.badge} Certification
          </span>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, rgba(11,31,58,0.96) 0%, rgba(11,31,58,0.82) 60%, rgba(255,122,0,0.18) 100%), url('${data.heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        overflow: 'hidden',
        padding: '380px 0 60px',
      }}>
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,122,0,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />
        {/* Glowing orb */}
        <div style={{
          position: 'absolute', right: '8%', top: '20%',
          width: '380px', height: '380px',
          background: 'radial-gradient(circle, rgba(255,122,0,0.15) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
          {/* Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px',
              background: 'rgba(255,122,0,0.15)',
              border: '1px solid rgba(255,122,0,0.35)',
              borderRadius: '50px',
              color: '#FF7A00',
              fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase',
            }}>
              ⭐ Universaal Safety Academy · {data.badge}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900, lineHeight: 1.15,
            color: '#FFFFFF', marginBottom: '20px',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            fontFamily: 'var(--font-heading)',
          }}>
            {data.heroTitle}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#CBD5E1', marginBottom: '38px',
            lineHeight: 1.7, maxWidth: '680px',
          }}>
            {data.heroSubtitle}
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '48px' }}>
            <button
              onClick={() => onOpenEnquiry()}
              className="btn btn-primary"
              style={{ padding: '15px 38px', fontSize: '1rem', fontWeight: 700 }}
            >
              Apply Now ➔
            </button>
            <a
              href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '15px 32px', fontSize: '1rem', fontWeight: 700 }}
            >
              💬 WhatsApp Enquiry
            </a>
          </div>

          {/* Quick stats row */}
          {/* <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '24px',
            borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px',
          }}>
            {data.whatIs.stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '2px' }}>{s.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FF7A00' }}>{s.value}</div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ── HIGHLIGHTS CARDS ────────────────────────────── */}
      {/* <section style={{ background: 'var(--primary)', padding: '0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
          }}>
            {data.highlights.map((h, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                background: 'var(--primary)',
                textAlign: 'center',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,122,0,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--primary)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{h.icon}</div>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem', marginBottom: '5px', fontFamily: 'var(--font-heading)' }}>{h.title}</div>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── WHAT IS? ────────────────────────────────────── */}
      <section className="section section-bg" id="what-is">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <SectionTag>About the Body</SectionTag>
              <h2 className="section-title">{data.whatIs.title}</h2>
            </div>
            <div style={{
              background: 'var(--bg-main)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              lineHeight: 1.85,
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              maxWidth: '860px',
              margin: '0 auto',
              whiteSpace: 'pre-line',
            }}>
              {data.whatIs.body}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COURSE OVERVIEW ─────────────────────────────── */}
      <section className="section" id="overview">
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="overview-grid">
              {/* Text */}
              <div>
                <SectionTag>Program Details</SectionTag>
                <h2 className="section-title" style={{ marginBottom: '8px' }}>{data.overview.title}</h2>
                <p style={{ color: '#FF7A00', fontWeight: 700, fontSize: '1rem', marginBottom: '20px' }}>{data.overview.subtitle}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '30px' }}>
                  {data.overview.description}
                </p>
                <button onClick={() => onOpenEnquiry()} className="btn btn-primary">
                  Enroll Now ➔
                </button>
              </div>
              {/* Modules list */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow-md)',
              }}>
                <h4 style={{ marginBottom: '20px', fontSize: '1rem', color: 'var(--primary)' }}>
                  📚 Course Modules
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {data.overview.modules.map((m, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '10px 14px',
                      background: 'var(--bg-main)',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      color: 'var(--text-main)',
                      fontWeight: 500,
                    }}>
                      <span style={{
                        minWidth: '24px', height: '24px',
                        background: 'rgba(255,122,0,0.1)',
                        color: '#FF7A00',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.72rem', fontWeight: 800,
                      }}>{i + 1}</span>
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`.overview-grid { @media(max-width:768px){ grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* ── LEARNING OUTCOMES ───────────────────────────── */}
      <section className="section section-bg" id="outcomes">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <SectionTag>What You'll Learn</SectionTag>
              <h2 className="section-title">Learning Outcomes</h2>
              <p className="section-subtitle">Skills and competencies you will master by completing this programme</p>
            </div>
          </Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '18px',
          }}>
            {data.learningOutcomes.map((o, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '14px',
                  padding: '18px 20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,122,0,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                >
                  <span style={{
                    minWidth: '28px', height: '28px',
                    background: 'rgba(255,122,0,0.12)',
                    color: '#FF7A00', fontWeight: 800, fontSize: '0.8rem',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>✓</span>
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.5, fontWeight: 500 }}>{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ─────────────────────────────────── */}
      <section className="section" id="eligibility">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <SectionTag>Who Can Join</SectionTag>
              <h2 className="section-title">Eligibility Criteria</h2>
              <p className="section-subtitle">This course is designed to be accessible — check if you qualify</p>
            </div>
          </Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {data.eligibility.map((e, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  padding: '32px 28px', textAlign: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={ev => { ev.currentTarget.style.transform = 'translateY(-6px)'; ev.currentTarget.style.boxShadow = 'var(--shadow-lg)'; ev.currentTarget.style.borderColor = 'rgba(255,122,0,0.3)'; }}
                  onMouseLeave={ev => { ev.currentTarget.style.transform = 'translateY(0)'; ev.currentTarget.style.boxShadow = 'var(--shadow-sm)'; ev.currentTarget.style.borderColor = 'var(--border-light)'; }}
                >
                  <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{e.icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '10px', color: 'var(--primary)' }}>{e.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE DURATION ─────────────────────────────── */}
      <section className="section section-bg" id="duration"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0F2A4A 100%)', color: '#fff' }}
      >
        <div className="container">
          <Reveal>
            <div className="section-header">
              <SectionTag>Time Commitment</SectionTag>
              <h2 className="section-title" style={{ color: '#FFFFFF' }}>{data.duration.title}</h2>
              <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
                {data.duration.total} · {data.duration.format}
              </p>
            </div>
          </Reveal>

          {/* Timeline */}
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '22px', top: '28px', bottom: '28px',
              width: '2px', background: 'rgba(255,122,0,0.3)',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {data.duration.schedule.map((s, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    {/* Dot */}
                    <div style={{
                      minWidth: '44px', height: '44px',
                      background: i < data.duration.schedule.length - 1 ? 'rgba(255,122,0,0.2)' : '#FF7A00',
                      border: '2px solid #FF7A00',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.72rem', fontWeight: 800, color: '#FF7A00',
                      zIndex: 1,
                    }}>
                      {i + 1}
                    </div>
                    <div style={{
                      flex: 1, padding: '14px 20px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      backdropFilter: 'blur(6px)',
                    }}>
                      <span style={{ fontWeight: 800, color: '#FF7A00', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.day}</span>
                      <p style={{ color: '#CBD5E1', fontSize: '0.92rem', marginTop: '4px' }}>{s.topic}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── CAREER OPPORTUNITIES ─────────────────────────── */}
      <section className="section section-bg" id="careers">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <SectionTag>Job Prospects</SectionTag>
              <h2 className="section-title">Career Opportunities</h2>
              <p className="section-subtitle">Roles you can target after earning your {data.badge} certification</p>
            </div>
          </Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}>
            {data.careers.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  padding: '28px 20px', textAlign: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={ev => { ev.currentTarget.style.transform = 'translateY(-6px)'; ev.currentTarget.style.boxShadow = 'var(--shadow-lg)'; ev.currentTarget.style.borderColor = 'rgba(255,122,0,0.3)'; }}
                  onMouseLeave={ev => { ev.currentTarget.style.transform = 'translateY(0)'; ev.currentTarget.style.boxShadow = 'var(--shadow-sm)'; ev.currentTarget.style.borderColor = 'var(--border-light)'; }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{c.icon}</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>{c.role}</h4>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: 'rgba(255,122,0,0.1)',
                    color: '#FF7A00',
                    borderRadius: '50px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                  }}>{c.salary}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY UNIVERSAAL ──────────────────────────────── */}
      <section className="section" id="why-us"
        style={{ background: 'linear-gradient(135deg, #FF7A00 0%, #E06B00 100%)' }}
      >
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span style={{
                display: 'inline-block', padding: '5px 14px',
                background: 'rgba(255,255,255,0.2)',
                color: '#FFFFFF', fontWeight: 700, fontSize: '0.78rem',
                textTransform: 'uppercase', letterSpacing: '1.5px',
                borderRadius: '50px', marginBottom: '12px',
              }}>Our Edge</span>
              <h2 className="section-title" style={{ color: '#FFFFFF' }}>
                Why Choose Universaal Safety Academy?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>
                Trichy's most trusted safety training centre — 10,000+ students, 100% placement support
              </p>
            </div>
          </Reveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {data.whyUs.map((w, i) => (
              <Reveal key={i} delay={i * 70}>
                <div style={{
                  padding: '28px 24px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 'var(--radius-md)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={ev => { ev.currentTarget.style.background = 'rgba(255,255,255,0.2)'; ev.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={ev => { ev.currentTarget.style.background = 'rgba(255,255,255,0.1)'; ev.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{w.icon}</div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{w.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.88rem', lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="section" id="faq">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <SectionTag>Common Questions</SectionTag>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </Reveal>
          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  background: 'var(--bg-card)',
                  border: `1px solid ${openFaq === i ? 'rgba(255,122,0,0.4)' : 'var(--border-light)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', textAlign: 'left',
                      padding: '20px 24px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: '0.95rem', color: 'var(--primary)',
                    }}
                  >
                    {f.q}
                    <span style={{
                      minWidth: '28px', height: '28px', borderRadius: '50%',
                      background: openFaq === i ? '#FF7A00' : 'var(--bg-main)',
                      color: openFaq === i ? '#FFFFFF' : 'var(--text-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', transition: 'all 0.3s ease',
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    }}>+</span>
                  </button>
                  {openFaq === i && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: 'var(--text-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.75,
                      animation: 'fadeIn 0.3s ease-out',
                    }}>
                      {f.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ─────────────────────────────────── */}
      <section className="section section-bg" id="contact"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0F2A4A 100%)' }}
      >
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span style={{
                display: 'inline-block', padding: '5px 14px',
                background: 'rgba(255,255,255,0.1)',
                color: '#FF7A00', fontWeight: 700, fontSize: '0.78rem',
                textTransform: 'uppercase', letterSpacing: '1.5px',
                borderRadius: '50px', marginBottom: '12px',
              }}>Get In Touch</span>
              <h2 className="section-title" style={{ color: '#FFFFFF' }}>
                Enquire About This Course
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
                Fill in the form below and our counselors will contact you within 24 hours.
              </p>
            </div>
          </Reveal>

          <div style={{
            maxWidth: '620px', margin: '0 auto',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-lg)',
            padding: '44px 40px',
            backdropFilter: 'blur(12px)',
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#FFFFFF', marginBottom: '10px' }}>Enquiry Received!</h3>
                <p style={{ color: '#94A3B8' }}>Our team will reach you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ color: '#CBD5E1' }}>Full Name *</label>
                  <input
                    type="text" name="name" required value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your full name"
                    className="form-control"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ color: '#CBD5E1' }}>Email Address *</label>
                    <input
                      type="email" name="email" required value={formData.email}
                      onChange={handleFormChange}
                      placeholder="email@example.com"
                      className="form-control"
                      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF' }}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ color: '#CBD5E1' }}>Phone Number *</label>
                    <input
                      type="tel" name="phone" required value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="form-control"
                      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF' }}
                    />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ color: '#CBD5E1' }}>
                    Course Interested: <span style={{ color: '#FF7A00', fontWeight: 700 }}>{data.heroTitle}</span>
                  </label>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ color: '#CBD5E1' }}>Message</label>
                  <textarea
                    name="message" rows={4} value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Any specific questions or preferred batch dates..."
                    className="form-control"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF', resize: 'vertical' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary"
                    style={{ flex: '1 1 160px', padding: '15px', fontSize: '0.95rem', fontWeight: 700 }}
                  >
                    Send Enquiry ➔
                  </button>
                  <a
                    href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ flex: '1 1 160px', padding: '15px', fontSize: '0.95rem', fontWeight: 700 }}
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
        <style>{`
          @media(max-width:576px){
            .form-row { grid-template-columns:1fr !important; }
          }
        `}</style>
      </section>

      {/* ── STICKY APPLY NOW ─────────────────────────────── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        zIndex: 999,
        transform: stickyVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(.2,.8,.2,1)',
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #0B1F3A 0%, #0F2A4A 100%)',
          borderTop: '2px solid rgba(255,122,0,0.4)',
          padding: '14px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
          boxShadow: '0 -8px 30px rgba(0,0,0,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.4rem' }}>🎓</span>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1 }}>
                {data.badge} Certification
              </div>
              <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>
                Seats filling fast — Enroll today!
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '10px 18px', fontSize: '0.82rem' }}
            >
              💬 WhatsApp
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="btn btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.85rem', fontWeight: 700 }}
            >
              Apply Now ➔
            </button>
          </div>
        </div>
      </div>

      {/* Bottom padding for sticky bar */}
      <div style={{ height: '80px' }} />

      {/* ── Responsive overrides ─────────────────────────── */}
      <style>{`
        @media(max-width:768px) {
          .overview-grid { grid-template-columns: 1fr !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width:480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
