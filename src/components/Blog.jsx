import React, { useState } from 'react';
import { blogData } from '../data/blogData';

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState(null);

  const handleOpenBlog = (blog) => {
    setActiveBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBlog = () => {
    setActiveBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="blog" className="section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Safety Knowledge Hub</span>
          <h2 className="section-title">Latest Safety Blogs & Insights</h2>
          <p className="section-subtitle">
            Stay updated with corporate regulatory modifications, international certification guidelines, and safety recruitment reports.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}
          className="blog-grid"
        >
          {blogData.map((blog) => (
            <div 
              key={blog.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '25px',
                textAlign: 'left'
              }}
            >
              <div>
                {/* Meta details */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  <span>📅 {blog.date}</span>
                  <span>⏱️ {blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.15rem', fontWeight: '750', marginBottom: '10px', lineHeight: '1.4' }}>
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '20px' }}>
                  {blog.excerpt}
                </p>
              </div>

              {/* Author / CTA Row */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  borderTop: '1px solid var(--border-light)', 
                  paddingTop: '15px',
                  marginTop: '15px'
                }}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--text-main)', fontWeight: '600' }}>
                  ✍️ By {blog.author}
                </span>

                <button 
                  onClick={() => handleOpenBlog(blog)}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    cursor: 'pointer'
                  }}
                >
                  Read Article ➔
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Detail Overlay Modal */}
        {activeBlog && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--overlay-bg)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1001,
              animation: 'fadeIn 0.3s ease-out'
            }}
            onClick={handleCloseBlog}
          >
            <div 
              className="blog-modal-content"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                width: '95%',
                maxWidth: '680px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '40px 35px',
                position: 'relative',
                border: '1px solid var(--border-light)',
                animation: 'slideUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={handleCloseBlog}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '1.5rem',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                &times;
              </button>

              {/* Modal Content */}
              <div style={{ textAlign: 'left' }}>
                <span style={{ 
                   color: 'var(--accent)', 
                   fontWeight: '700', 
                   fontSize: '0.8rem', 
                   textTransform: 'uppercase',
                   letterSpacing: '1px' 
                }}>
                  Safety Hub Article
                </span>
                
                <h3 
                  className="blog-modal-title"
                  style={{ fontSize: '1.6rem', marginTop: '5px', marginBottom: '15px', lineHeight: '1.3' }}
                >
                  {activeBlog.title}
                </h3>
                
                <div 
                  className="blog-meta-row"
                  style={{ display: 'flex', gap: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '25px', paddingBottom: '10px', borderBottom: '1px solid var(--border-light)', flexWrap: 'wrap' }}
                >
                  <span>📅 Published: <strong>{activeBlog.date}</strong></span>
                  <span>⏱️ Read time: <strong>{activeBlog.readTime}</strong></span>
                  <span>✍️ Author: <strong>{activeBlog.author}</strong></span>
                </div>

                <div 
                  style={{ 
                    fontSize: '0.98rem', 
                    color: 'var(--text-main)', 
                    lineHeight: '1.7',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                  }}
                >
                  {/* Lead paragraph */}
                  <p style={{ fontWeight: '600', fontSize: '1.05rem', color: 'var(--accent)' }}>
                    {activeBlog.excerpt}
                  </p>
                  
                  {/* Main paragraph */}
                  <p>
                    {activeBlog.content}
                  </p>

                  <p>
                    For detailed career counselling on training methodologies, certification accreditations, and Middle East visa procedures, contact the Universaal Safety Academy advisory board at Cantonment, Trichy, Tamil Nadu.
                  </p>
                </div>

                <div style={{ marginTop: '35px', display: 'flex', gap: '15px', flexWrap: 'wrap' }} className="blog-modal-ctas">
                  <a 
                    href={`https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20am%20enquiring%20after%20reading%20your%20article:%20"${encodeURIComponent(activeBlog.title)}".`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                  >
                    💬 WhatsApp Advisory
                  </a>
                  <button 
                    onClick={handleCloseBlog}
                    className="btn btn-secondary"
                    style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <style>{`
        @media (max-width: 480px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-modal-content {
            padding: 25px 20px !important;
          }
          .blog-modal-title {
            font-size: 1.3rem !important;
          }
          .blog-meta-row {
            flex-direction: column !important;
            gap: 8px !important;
            align-items: flex-start !important;
          }
          .blog-modal-ctas {
            flex-direction: column !important;
          }
          .blog-modal-ctas > * {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
