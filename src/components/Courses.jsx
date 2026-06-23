import React, { useState } from 'react';
import { courseCategories, coursesData } from '../data/coursesData';

export default function Courses({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setExpandedCourseId(null);
  };

  const handleToggleExpand = (courseId) => {
    setExpandedCourseId(prev => prev === courseId ? null : courseId);
  };

  // Filter logic
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (course.subcat && course.subcat.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Helper to render custom course icons based on discipline
  const renderCourseIcon = (iconType) => {
    switch (iconType) {
      case 'fire':
      case 'fireman':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
        );
      case 'industry':
      case 'oil':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <rect x="2" y="10" width="20" height="11" rx="2" />
            <path d="M12 2v8" />
            <path d="M17 5H7" />
          </svg>
        );
      case 'construction':
      case 'height':
      case 'scaffold':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
          </svg>
        );
      case 'lightning':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case 'medical':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'chemical':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <path d="M10 2v7.31L4.75 19.3a1 1 0 0 0 .89 1.45h12.72a1 1 0 0 0 .89-1.45L14 9.31V2" />
            <path d="M8.5 2h7" />
            <path d="M7 16h10" />
          </svg>
        );
      case 'iosh':
      case 'osha':
      case 'othm':
      case 'iso':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
    }
  };

  const getWhatsAppLink = (title) => {
    return `https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20am%20interested%20in%20enrolling%20for%20the%20${encodeURIComponent(title)}%20course.`;
  };

  return (
    <section id="courses" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic Programs</span>
          <h2 className="section-title">Professional Safety Courses</h2>
          <p className="section-subtitle">
            Explore our curated range of diploma, certificate, and globally accredited safety programs. Fit for entry-level starters and experienced compliance engineers.
          </p>
        </div>

        {/* Filter Controls (Search + Tabs) */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-card)', 
            border: '1px solid var(--border-light)', 
            borderRadius: 'var(--radius-md)', 
            padding: '20px', 
            marginBottom: '40px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* Search bar & info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '15px', alignItems: 'center' }} className="search-row">
            <div style={{ position: 'relative', width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search safety courses (e.g. OSHA, Fire, Scaffold)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px 12px 40px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}
              />
              <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                🔍
              </span>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }} className="result-indicator">
              Showing {filteredCourses.length} programs
            </span>
          </div>

          {/* Category Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '10px', 
              flexWrap: 'wrap', 
              borderTop: '1px solid var(--border-light)', 
              paddingTop: '15px' 
            }}
          >
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  transition: 'var(--transition-smooth)',
                  border: '1px solid',
                  backgroundColor: selectedCategory === category.id ? 'var(--accent)' : 'transparent',
                  borderColor: selectedCategory === category.id ? 'var(--accent)' : 'var(--border-light)',
                  color: selectedCategory === category.id ? '#FFFFFF' : 'var(--text-muted)'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '30px'
            }}
            className="courses-grid"
          >
            {filteredCourses.map((course) => {
              const isExpanded = expandedCourseId === course.id;
              
              return (
                <div 
                  key={course.id}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '25px',
                    borderColor: isExpanded ? 'var(--accent)' : 'var(--border-light)'
                  }}
                >
                  <div>
                    {/* Header Row: Category Badge & Icon */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <span 
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          color: 'var(--accent)',
                          backgroundColor: 'rgba(255, 122, 0, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        {course.category === 'diploma' && '🎓 1-Month Diploma'}
                        {course.category === 'certificate' && '⚡ 1-Day Certificate'}
                        {course.category === 'international' && `🌍 ${course.subcat || 'International'}`}
                      </span>

                      <div style={{ color: 'var(--accent)' }}>
                        {renderCourseIcon(course.icon)}
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '750', marginBottom: '10px', lineHeight: '1.3' }}>
                      {course.title}
                    </h3>

                    {/* Meta Indicators */}
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span>⏳ Duration: <strong>{course.duration}</strong></span>
                      <span>📖 Mode: <strong>{course.mode}</strong></span>
                    </div>

                    {/* Short Description */}
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '15px' }}>
                      {course.description}
                    </p>

                    {/* Syllabus Bullet Points */}
                    {isExpanded && (
                      <div 
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          padding: '15px',
                          borderRadius: '6px',
                          marginBottom: '20px',
                          animation: 'fadeIn 0.3s ease-out',
                          textAlign: 'left'
                        }}
                      >
                        <h4 style={{ fontSize: '0.85rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>
                          Syllabus / Learning Outcomes:
                        </h4>
                        <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          {course.outcomes.map((item, idx) => (
                            <li key={idx} style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    
                    <button
                      onClick={() => handleToggleExpand(course.id)}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'var(--text-muted)',
                        alignSelf: 'center',
                        textDecoration: 'underline',
                        marginBottom: '5px'
                      }}
                    >
                      {isExpanded ? 'Hide Details ▲' : 'View Core Syllabus ▼'}
                    </button>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => onOpenEnquiry(course.id)}
                        className="btn btn-primary"
                        style={{ flex: 1, padding: '10px', fontSize: '0.85rem' }}
                      >
                        Apply Now
                      </button>
                      <a
                        href={getWhatsAppLink(course.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp"
                        style={{ flex: 1, padding: '10px', fontSize: '0.85rem' }}
                      >
                        💬 Chat Enquiry
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '50px', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '2rem' }}>🔍</span>
            <h3 style={{ marginTop: '10px' }}>No courses match your query</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '5px' }}>
              Try searching with a different term or clear filters to view all safety programs.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="btn btn-secondary" 
              style={{ marginTop: '15px', padding: '8px 20px' }}
            >
              Clear Search & Filter
            </button>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .search-row {
            grid-template-columns: 1fr !important;
          }
          .result-indicator {
            text-align: left !important;
          }
        }
        @media (max-width: 480px) {
          .courses-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
