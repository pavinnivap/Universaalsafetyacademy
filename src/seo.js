/**
 * Utility to inject structured data (JSON-LD) for SEO.
 */
export const injectJSONLD = () => {
  // Check if it already exists
  const existingSchema = document.getElementById('universaal-schema');
  if (existingSchema) {
    existingSchema.remove();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://universaalsafetyacademy.com/#organization",
        "name": "UNIVERSAAL SAFETY ACADEMY",
        "url": "https://universaalsafetyacademy.com",
        "logo": "https://universaalsafetyacademy.com/assets/logo.png",
        "sameAs": [
          "https://www.facebook.com/universaalsafetyacademy",
          "https://www.linkedin.com/company/universaal-safety-academy",
          "https://wa.me/917092460477"
        ],
        "description": "Premium industrial health, fire safety, OSHA, IOSH, OTHM, and ISO Lead Auditor training academy based in Trichy, India."
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://universaalsafetyacademy.com/#localbusiness",
        "name": "UNIVERSAAL SAFETY ACADEMY",
        "image": "https://universaalsafetyacademy.com/assets/office_building.png",
        "telephone": "+91 70924 60477",
        "email": "universaalsafetyacademy@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Upper Layer, 3rd Floor, Sundaram Arcade, 13-A Williams Road, Cantonment",
          "addressLocality": "Trichy",
          "addressRegion": "Tamil Nadu",
          "postalCode": "620001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "10.8037",
          "longitude": "78.6874"
        },
        "url": "https://universaalsafetyacademy.com",
        "priceRange": "$$",
        "areaServed": ["Trichy", "Tamil Nadu", "India", "Middle East", "Gulf"],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "Course",
        "name": "Diploma in Fire & Safety Engineering",
        "description": "Comprehensive 1-Month professional diploma course in Fire & Safety Engineering covering hazard inspection, fire defense, and practical drills.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "UNIVERSAAL SAFETY ACADEMY",
          "sameAs": "https://universaalsafetyacademy.com"
        }
      },
      {
        "@type": "Course",
        "name": "OSHA 30-Hour General Industry Safety",
        "description": "Globally recognized US Department of Labor OSHA 30 Hours certification for general manufacturing, safety management, and hazard auditing.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "UNIVERSAAL SAFETY ACADEMY",
          "sameAs": "https://universaalsafetyacademy.com"
        }
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'universaal-schema';
  script.innerHTML = JSON.stringify(schemaData);
  document.head.appendChild(script);
};

/**
 * Update page metadata dynamically for better SEO ranking
 */
export const updateMetadata = (title, description) => {
  document.title = title || "UNIVERSAAL SAFETY ACADEMY | Fire & Industrial Safety Training in Trichy";
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description || "Advance your career with Diploma, OSHA, IOSH, OTHM, and ISO Lead Auditor safety training courses in Trichy, India. Online & offline classes with 100% placement support.");
  }
};
