import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Name and Phone number are required.");
      return;
    }
    setLoading(true);

    // Build the mailto link to send details to universaalsafetyacademy@gmail.com
    const subject = `Quick Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:universaalsafetyacademy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger mailto link (opens email client)
    window.location.href = mailtoUrl;

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1200);
  };

  const address = "Upper Layer, 3rd Floor, Sundaram Arcade, 13-A Williams Road, Cantonment, Trichy - 620001 (Opp: Central Bus Stand)";

  return (
    <section id="contact" className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Reach Us</span>
          <h2 className="section-title">Contact Our Admissions Office</h2>
          <p className="section-subtitle">
            Get in touch with our representative or drop by our Cantonment center for a direct campus visit.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px' }} className="contact-grid">

          {/* Left Side: Info & Maps */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>

            {/* Contact Info Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-info-cards">

              <div style={{ padding: '20px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>📞</span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '5px' }}>Admissions Helpline</h4>
                <a href="tel:+917092460477" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                  +91 70924 60477
                </a>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>✉️</span>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '5px' }}>Email Support</h4>
                <a href="mailto:universaalsafetyacademy@gmail.com" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', wordBreak: 'break-all' }}>
                  universaalsafetyacademy@gmail.com
                </a>
              </div>

            </div>

            {/* Address Card */}
            <div style={{ padding: '25px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>📍</span>
              <h4 style={{ fontSize: '1rem', fontWeight: '750', marginBottom: '6px' }}>Campus Address</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                Upper Layer, 3rd Floor, Sundaram Arcade,<br />
                13-A Williams Road, Cantonment,<br />
                Trichy – 620001<br />
                <strong>Landmark:</strong> Opposite Central Bus Stand
              </p>
            </div>

            {/* Google Maps Iframe Integration */}
            {/* <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                height: '240px',
                boxShadow: 'var(--shadow-sm)'
              }} */}
            {/* > */}
              {/* Embed static maps or standard location coords */}
              {/* <iframe
                title="Universaal Safety Academy Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3918.9959616016624!2d78.68266207504245!3d10.81161308933909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50772aaaaab%3A0xe21689255a6d9de4!2sSundaram%20Arcade!5e0!3m2!1sen!2sin!4v1718100000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            {/* </div> */}

          </div>

          {/* Right Side: Contact Form Card */}
          <div
            className="contact-form-card"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '40px 30px',
              boxShadow: 'var(--shadow-md)',
              alignSelf: 'start'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>Send Quick Message</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '25px', lineHeight: '1.5' }}>
              Have a query? Type your message below, and our coordinator will respond to your questions within 2 hours.
            </p>

            {success ? (
              <div style={{ padding: '30px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#25D366', marginBottom: '15px' }}>✓</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Message Sent!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '20px' }}>
                  Thank you for contacting us. We have received your query and will reply via email or phone call shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn btn-secondary"
                  style={{ padding: '8px 25px', fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

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

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="State your question about course duration, fees, mock tests, etc."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '13px', marginTop: '10px' }}
                  disabled={loading}
                >
                  {loading ? 'Sending details...' : 'Send Message'}
                </button>
              </form>
            )}

            <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Prefer instant chats?</span>
              <a
                href="https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20have%20an%20instant%20enquiry."
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.8rem', color: '#25D366', fontWeight: 'bold' }}
              >
                💬 Open WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .contact-info-cards {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .contact-form-card {
            padding: 25px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
