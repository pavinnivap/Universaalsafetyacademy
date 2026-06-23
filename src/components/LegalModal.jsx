import React, { useEffect } from 'react';

export default function LegalModal({ isOpen, onClose, type }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Admission';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--overlay-bg, rgba(7, 21, 39, 0.8))',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1100, // higher than normal modal to stay on top
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div
        className="legal-modal-container"
        style={{
          backgroundColor: 'var(--bg-card, #0B1E36)',
          borderRadius: 'var(--radius-md, 8px)',
          width: '90%',
          maxWidth: '800px',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: '40px',
          boxShadow: 'var(--shadow-lg, 0 15px 30px rgba(0,0,0,0.4))',
          position: 'relative',
          border: '1px solid var(--border-light, rgba(255,255,255,0.1))',
          animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          color: '#000000ff',
          lineHeight: '1.7',
          textAlign: 'left'
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
            fontSize: '1.8rem',
            color: 'var(--text-muted, #A0AEC0)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'var(--transition-smooth, 0.3s ease)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent, #FF7A00)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted, #A0AEC0)'}
        >
          &times;
        </button>

        {/* Modal Header */}
        <div style={{ borderBottom: '2px solid var(--accent, #FF7A00)', paddingBottom: '15px', marginBottom: '25px' }}>
          <span style={{
            color: 'var(--accent, #FF7A00)',
            fontWeight: '600',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            display: 'block',
            marginBottom: '5px'
          }}>
            Legal & Compliance
          </span>
          <h2 style={{ fontSize: '2rem', margin: 0, color: '#000000ff', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            {title}
          </h2>
          <p style={{ color: 'var(--text-muted, #A0AEC0)', fontSize: '0.85rem', margin: '5px 0 0 0' }}>
            Last Updated: June 2026
          </p>
        </div>

        {/* Modal Content */}
        <div style={{ fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {isPrivacy ? (
            <>
              <p>
                At <strong>UNIVERSAAL SAFETY ACADEMY</strong>, we prioritize the privacy of our students, candidates, and website visitors. This Privacy Policy documents the types of information we collect and how we use, process, and protect it.
              </p>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  1. Information We Collect
                </h3>
                <p>
                  We collect personal information that you voluntarily provide to us when you fill out an admission enquiry form, register for a course, or contact us. This includes:
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                  <li><strong>Personal details:</strong> Name, Email address, Phone number, and Academic/Professional qualifications.</li>
                  <li><strong>Course preferences:</strong> Preferred safety diplomas, international certifications (IOSH, OSHA, OTHM, ISO Lead Auditor), and study modes (Online/Offline).</li>
                  <li><strong>Communications:</strong> Any message, feedback, or inquiry sent through our contact forms or via WhatsApp.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  2. How We Use Your Information
                </h3>
                <p>
                  The information we collect is used strictly to enhance your experience and process academy requests. Specifically:
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                  <li>To process your admission enquiries and facilitate course registration.</li>
                  <li>To provide personalized coordination and guidance regarding batches, fees, and certificates.</li>
                  <li>To share academic updates, placement notifications, and training schedules.</li>
                  <li>To improve our website functionality, academic content, and client services.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  3. Data Security and Retention
                </h3>
                <p>
                  We implement robust, industry-standard administrative, technical, and physical security measures to protect your personal details from unauthorized access, modification, or exposure. Your records are only retained for as long as necessary to fulfill academic, placement, and regulatory compliance requirements.
                </p>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  4. Sharing of Information
                </h3>
                <p>
                  UNIVERSAAL SAFETY ACADEMY does not sell, rent, or lease student information to third parties. We may share necessary details with authorized external certification bodies (such as OTHM, IOSH, or ISO Registrars) strictly for enrollment, examination evaluation, and official certification purposes.
                </p>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  5. Contact Us
                </h3>
                <p>
                  If you have questions, corrections, or concerns regarding your data privacy, feel free to reach out to our administration office:
                </p>
                <p style={{ marginTop: '10px', backgroundColor: 'rgba(255, 122, 0, 0.05)', padding: '15px', borderRadius: '4px', borderLeft: '3px solid var(--accent, #FF7A00)' }}>
                  <strong>UNIVERSAAL SAFETY ACADEMY</strong><br />
                  3rd Floor, Sundaram Arcade, 13-A Williams Road, Cantonment, Trichy - 620001<br />
                  Email: <a href="mailto:universaalsafetyacademy@gmail.com" style={{ color: 'var(--accent, #FF7A00)' }}>universaalsafetyacademy@gmail.com</a><br />
                  Phone: +91 70924 60477
                </p>
              </div>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>UNIVERSAAL SAFETY ACADEMY</strong>. The following terms and conditions govern the admission, enrollment, and academic conduct of students enrolling in our safety diploma, certificate, and international certification courses.
              </p>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  1. Admission Eligibility and Criteria
                </h3>
                <p>
                  Admissions to our technical safety programs are granted based on the specific educational qualifications outlined in the course catalog. Candidates must fulfill minimum prerequisites (such as secondary education, technical diplomas, or engineering degrees) required by international awarding bodies like OTHM, IOSH, or OSHA.
                </p>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  2. Attendance and Course Completion
                </h3>
                <p>
                  To successfully qualify for academic diplomas or certifications, candidates must adhere to the scheduling guidelines:
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                  <li><strong>Offline Batches (Trichy Campus):</strong> A minimum of 80% attendance is highly recommended for all practical lab assessments, fire-drills, and simulation classes.</li>
                  <li><strong>Online Batches:</strong> Students must log in and complete designated assignments, digital lectures, and assessments within the allocated timeframes.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  3. Fee Structure and Refunds
                </h3>
                <p>
                  All course fees must be paid in accordance with the installment plans agreed upon at the time of admission. 
                  Fees paid to external international certification boards (e.g., IOSH, OTHM, ISO Lead Auditor) are non-refundable once registered with the respective boards. General tuition fee refunds are governed by internal campus policies and must be initiated through the administrative desk.
                </p>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  4. Placement Support Disclaimer
                </h3>
                <p>
                  While UNIVERSAAL SAFETY ACADEMY offers dedicated placement support, industry resume-sharing, and mock interview preparations for Indian and Gulf opportunities, securing employment remains subject to the candidate's performance, external interview selection, and recruitment conditions.
                </p>
              </div>

              <div>
                <h3 style={{ color: '#000000ff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
                  5. Code of Conduct
                </h3>
                <p>
                  Students are expected to maintain professional standards of behavior, academic integrity, and respect toward training faculty, campus staff, and peer candidates. Any form of academic dishonesty, misconduct, or damage to campus training equipment may result in disciplinary action, including suspension or termination of admission.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{
              padding: '12px 30px',
              backgroundColor: 'var(--accent, #FF7A00)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'var(--transition-smooth, 0.3s ease)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
          >
            I Understand & Close
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 576px) {
          .legal-modal-container {
            padding: 25px 20px !important;
            width: 95% !important;
          }
        }
      `}</style>
    </div>
  );
}
