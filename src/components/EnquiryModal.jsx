import React, { useState, useEffect } from 'react';
import { coursesData } from '../data/coursesData';

export default function EnquiryModal({ isOpen, onClose, preselectedCourseId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    mode: 'Offline Class',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Preselect course if provided
      if (preselectedCourseId) {
        setFormData(prev => ({ ...prev, course: preselectedCourseId }));
      } else {
        setFormData(prev => ({ ...prev, course: coursesData[0]?.id || '' }));
      }
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, preselectedCourseId]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.course) {
      alert("Please fill in your Name, Phone number and select a Course.");
      return;
    }
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
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
        zIndex: 1000,
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        className="enquiry-modal-container"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          width: '90%',
          maxWidth: '520px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '35px',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          border: '1px solid var(--border-light)',
          animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
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

        {!isSubmitted ? (
          <div>
            <div style={{ marginBottom: '25px', textAlign: 'center' }}>
              <span style={{ 
                color: 'var(--accent)', 
                fontWeight: '600', 
                fontSize: '0.8rem', 
                textTransform: 'uppercase',
                letterSpacing: '1px' 
              }}>
                Admissions 2026
              </span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '5px' }}>Admission Enquiry</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '5px' }}>
                Fill out the form below, and our coordinator will get back to you with details.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="enquiry-phone-email-row">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control"
                    placeholder="91xxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Select Safety Course *</label>
                <select 
                  name="course" 
                  className="form-control"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  {coursesData.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Study Mode</label>
                <div className="study-mode-row" style={{ display: 'flex', gap: '20px', marginTop: '5px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.95rem' }}>
                    <input 
                      type="radio" 
                      name="mode" 
                      value="Offline Class" 
                      checked={formData.mode === 'Offline Class'} 
                      onChange={handleChange}
                      style={{ accentColor: 'var(--accent)' }}
                    />
                    Offline (Trichy Campus)
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.95rem' }}>
                    <input 
                      type="radio" 
                      name="mode" 
                      value="Online Live Class" 
                      checked={formData.mode === 'Online Live Class'} 
                      onChange={handleChange}
                      style={{ accentColor: 'var(--accent)' }}
                    />
                    Online / Portal
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Message / Question</label>
                <textarea 
                  name="message"
                  className="form-control"
                  placeholder="Any questions about certificate validation, class batches, etc."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', marginTop: '10px' }}
                disabled={loading}
              >
                {loading ? 'Submitting details...' : 'Submit Admission Enquiry'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(37, 211, 102, 0.1)', 
              color: '#25D366',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              marginBottom: '20px'
            }}>
              ✓
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Enquiry Submitted!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px', lineHeight: '1.5' }}>
              Thank you, <strong>{formData.name}</strong>. Your request for information regarding <strong>{coursesData.find(c => c.id === formData.course)?.title}</strong> has been logged. Our admissions coordinator at Trichy will contact you via phone shortly.
            </p>
            <button 
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '12px 30px' }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 576px) {
          .enquiry-phone-email-row {
            grid-template-columns: 1fr !important;
          }
          .enquiry-modal-container {
            padding: 22px 20px !important;
          }
          .study-mode-row {
            flex-direction: column !important;
            gap: 10px !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}
