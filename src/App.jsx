import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import LearningOutcomes from './components/LearningOutcomes';
import Benefits from './components/Benefits';
import WhoShouldEnroll from './components/WhoShouldEnroll';
import Courses from './components/Courses';
import OnlineFeatures from './components/OnlineFeatures';
import Placements from './components/Placements';
// import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import LegalModal from './components/LegalModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CourseDetailPage from './components/CourseDetailPage';
import { injectJSONLD, updateMetadata } from './seo';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: 'privacy' });
  const [activeCourseFamily, setActiveCourseFamily] = useState(null); // 'iosh'|'osha'|'othm'|'iso'|null

  // Clean up any previously saved theme settings on mount
  useEffect(() => {
    localStorage.removeItem('academy-theme');
    document.documentElement.removeAttribute('data-theme');
    
    // Inject JSON-LD Schema on mount
    injectJSONLD();
    updateMetadata(
      "UNIVERSAAL SAFETY ACADEMY | Fire & Industrial Safety Training Trichy",
      "Enroll in top-tier safety diploma, OSHA, IOSH, OTHM, and ISO Lead Auditor courses in Trichy, India. 100% placement support and hybrid learning modes."
    );
  }, []);

  const handleOpenEnquiry = (courseId = null) => {
    setSelectedCourseId(courseId);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedCourseId(null);
  };

  const handleOpenLegal = (type) => {
    setLegalModal({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleOpenCourseDetail = (slug) => {
    setActiveCourseFamily(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseCourseDetail = () => {
    setActiveCourseFamily(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Premium Loading Screen */}
      <LoadingScreen />

      {/* Main Layout */}
      <Navbar 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      <main>
        {activeCourseFamily ? (
          /* ── Course Detail Page ───────────────────── */
          <CourseDetailPage
            slug={activeCourseFamily}
            onBack={handleCloseCourseDetail}
            onOpenEnquiry={handleOpenEnquiry}
          />
        ) : (
          /* ── Homepage Sections ────────────────────── */
          <>
            <Hero
              onOpenEnquiry={handleOpenEnquiry}
              onOpenCourseDetail={handleOpenCourseDetail}
            />

            <About onOpenEnquiry={handleOpenEnquiry} />

            <WhyChooseUs />

            <div id="certifications">
              <LearningOutcomes />
            </div>

            <Benefits />

            <WhoShouldEnroll />

            <Courses onOpenEnquiry={handleOpenEnquiry} />

            <OnlineFeatures />

            <Placements />

            {/* <Testimonials /> */}

            <Blog />

            <FAQ />

            <Contact />
          </>
        )}
      </main>

      <Footer onOpenLegal={handleOpenLegal} />

      {/* Floating Elements & Modals */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={handleCloseEnquiry} 
        preselectedCourseId={selectedCourseId} 
      />

      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={handleCloseLegal} 
        type={legalModal.type} 
      />
      
      <FloatingWhatsApp />
    </>
  );
}

