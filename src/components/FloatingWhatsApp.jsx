import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/917092460477?text=Hi%20Universaal%20Safety%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20safety%20training%20courses.";

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        zIndex: 999,
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      className="whatsapp-float-btn"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
      }}
    >
      {/* Pulse Outer Rings */}
      <span 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          opacity: 0.4,
          zIndex: -1,
          animation: 'pulseGlow 2s infinite'
        }}
      ></span>
      
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '32px', height: '32px' }}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.489 4.973 1.49 5.305 0 9.622-4.294 9.625-9.577.002-2.558-.996-4.965-2.808-6.778C16.625 2.475 14.225 1.48 11.69 1.48c-5.31 0-9.628 4.295-9.63 9.58-.001 1.765.466 3.49 1.35 5.01L2.43 21.493l5.367-1.4c1.558.847 3.1 1.272 4.67 1.272 0-.001 0-.001 0 0zm11.385-6.848c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      </svg>
      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @media (max-width: 576px) {
          .whatsapp-float-btn {
            bottom: 20px !important;
            right: 20px !important;
            width: 50px !important;
            height: 50px !important;
          }
          .whatsapp-float-btn svg {
            width: 26px !important;
            height: 26px !important;
          }
        }
      `}</style>
    </a>
  );
}
