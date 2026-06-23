// import React from 'react';

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Ramesh Kumar",
//       course: "Diploma in Fire & Safety + OSHA 30 hrs",
//       role: "Safety Inspector",
//       company: "L&T Construction, Chennai",
//       text: "The practical firefighting and scaffolding drills at Universaal Safety Academy gave me the confidence to pass my technical rounds instantly. The training center in Trichy is top-notch, with excellent trainers.",
//       rating: 5,
//       avatarChar: "R"
//     },
//     {
//       name: "Mohammad Fazil",
//       course: "OTHM Level 6 Diploma + ISO 45001 LA",
//       role: "HSE Officer",
//       company: "Saudi Aramco Refinery Project",
//       text: "I enrolled in the OTHM Level 6 blended course. The online portal was very easy to use, and the live exam discussions helped me clear my assessment. Today, I am working in Saudi Arabia as a certified safety officer.",
//       rating: 5,
//       avatarChar: "M"
//     },
//     {
//       name: "Prakash Raj",
//       course: "IOSH Managing Safely + Scaffolding Inspector",
//       role: "Site Safety Supervisor",
//       company: "Drake & Scull International, Dubai",
//       text: "The placement support at Universaal is highly reliable. They helped format my resume to match Gulf ATS requirements and arranged mock interview sessions. I highly recommend them to all engineering graduates.",
//       rating: 5,
//       avatarChar: "P"
//     }
//   ];

//   return (
//     <section id="testimonials" className="section section-bg">
//       <div className="container">
        
//         {/* Header */}
//         <div className="section-header">
//           <span className="section-tag">Success Stories</span>
//           <h2 className="section-title">What Our Graduates Say</h2>
//           <p className="section-subtitle">
//             Hear from safety officers, site engineers, and project leads who launched their global safety careers through Universaal Safety Academy.
//           </p>
//         </div>

//         {/* Testimonials Cards Grid */}
//         <div 
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//             gap: '30px'
//           }}
//           className="testimonials-grid"
//         >
//           {testimonials.map((t, idx) => (
//             <div 
//               key={idx}
//               className="card"
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 textAlign: 'left',
//                 padding: '30px',
//                 position: 'relative'
//               }}
//             >
//               {/* Stars & Quote Icon */}
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
//                 <div style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>
//                   {"★".repeat(t.rating)}
//                 </div>
//                 <span style={{ fontSize: '2.5rem', color: 'rgba(255, 122, 0, 0.1)', fontFamily: 'serif', lineHeight: '0' }}>“</span>
//               </div>

//               {/* Review Text */}
//               <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '25px' }}>
//                 "{t.text}"
//               </p>

//               {/* Student Profile Info */}
//               <div 
//                 style={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   gap: '15px', 
//                   borderTop: '1px solid var(--border-light)', 
//                   paddingTop: '20px' 
//                 }}
//               >
//                 {/* Visual Initials Avatar */}
//                 <div 
//                   style={{
//                     width: '45px',
//                     height: '45px',
//                     borderRadius: '50%',
//                     backgroundColor: 'rgba(11, 31, 58, 0.1)',
//                     color: 'var(--primary)',
//                     fontWeight: 'bold',
//                     fontSize: '1.1rem',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flexShrink: 0
//                   }}
//                 >
//                   {t.avatarChar}
//                 </div>

//                 <div style={{ lineHeight: '1.3' }}>
//                   <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>
//                     {t.name}
//                   </h4>
//                   <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', margin: '2px 0' }}>
//                     {t.course}
//                   </span>
//                   <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 'bold' }}>
//                     💼 {t.role} — {t.company}
//                   </span>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//       <style>{`
//         @media (max-width: 480px) {
//           .testimonials-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
