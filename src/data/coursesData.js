export const courseCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'diploma', name: 'Diploma Courses (1 Month)' },
  { id: 'certificate', name: 'Certificate Courses (1 Day)' },
  { id: 'international', name: 'International Certifications' }
];

export const coursesData = [
  // --- DIPLOMA COURSES (1 Month) ---
  {
    id: 'dip-fire-safety',
    title: 'Diploma in Fire & Safety Engineering',
    category: 'diploma',
    duration: '1 Month',
    mode: 'Online or Offline',
    icon: 'fire',
    description: 'Comprehensive training on fire prevention, control, emergency evacuation plans, and fire-fighting equipment management.',
    outcomes: ['Fire hazard evaluation', 'Active/passive defense systems', 'Evacuation planning', 'Practical drill administration'],
    imageType: 'fire_safety_classroom'
  },
  {
    id: 'dip-industrial-safety',
    title: 'Diploma in Industrial Safety',
    category: 'diploma',
    duration: '1 Month',
    mode: 'Online or Offline',
    icon: 'industry',
    description: 'Expert training on factory act regulations, machine guarding, industrial hazards, and chemical storage management.',
    outcomes: ['Factory acts compliance', 'Machine hazard guarding', 'Hazard analysis (HAZOP)', 'Personal protective gear audit'],
    imageType: 'industrial_safety_training'
  },
  {
    id: 'dip-construction-safety',
    title: 'Diploma in Construction Safety',
    category: 'diploma',
    duration: '1 Month',
    mode: 'Online or Offline',
    icon: 'construction',
    description: 'Focuses on excavation risks, scaffolding inspection, working at heights safety, and heavy machinery operations safety.',
    outcomes: ['Excavation inspection', 'Scaffolder certification training', 'Falls protection systems', 'Site inspection checklists'],
    imageType: 'construction_safety_image'
  },
  {
    id: 'dip-electrical-safety',
    title: 'Diploma in Electrical Safety',
    category: 'diploma',
    duration: '1 Month',
    mode: 'Online or Offline',
    icon: 'lightning',
    description: 'Provides in-depth knowledge of high voltage hazards, lockout/tagout (LOTO) protocols, and electrical grounding rules.',
    outcomes: ['Lockout/Tagout procedures', 'Static electricity hazards mitigation', 'Earthing system inspections', 'Substation safety audits'],
    imageType: 'electrical_safety_image'
  },
  {
    id: 'dip-oil-gas',
    title: 'Diploma in Oil & Gas Safety Management',
    category: 'diploma',
    duration: '1 Month',
    mode: 'Online or Offline',
    icon: 'oil',
    description: 'Tailored for petroleum, gas extraction, and refinery processes, covering toxic gas monitoring and offshore safety.',
    outcomes: ['H2S gas detection and handling', 'Offshore platform safety protocols', 'Confined space entry permits', 'Blowout prevention basics'],
    imageType: 'oil_and_gas_industry_image'
  },

  // --- CERTIFICATE COURSES (1 Day) ---
  {
    id: 'cert-first-aid',
    title: 'First Aid & CPR Certification',
    category: 'certificate',
    duration: '1 Day',
    mode: 'Online or Offline',
    icon: 'medical',
    description: 'Vital training on CPR, choking management, bleeding control, and primary emergency medical response.',
    outcomes: ['Cardiopulmonary Resuscitation (CPR)', 'AED operation knowledge', 'Trauma bleeding management', 'Shock treatment protocol'],
    imageType: 'first_aid_training_image'
  },
  {
    id: 'cert-working-height',
    title: 'Working at Height Safety',
    category: 'certificate',
    duration: '1 Day',
    mode: 'Online or Offline',
    icon: 'height',
    description: 'Essential certification covering fall arrest systems, harness wearing, safety netting, and suspension trauma prevention.',
    outcomes: ['Harness fitment and inspection', 'Anchor points installation', 'Fall calculation formulas', 'Rescue planning at heights'],
    imageType: 'working_at_height_image'
  },
  {
    id: 'cert-scaffolding',
    title: 'Scaffolding Inspector & Erector Safety',
    category: 'certificate',
    duration: '1 Day',
    mode: 'Online or Offline',
    icon: 'scaffold',
    description: 'Covers scaffolding components, load capacities, green/red tagging, safety regulations, and structure stabilization.',
    outcomes: ['Scafftag inspection systems', 'Load calculations & load limits', 'Erector team communication', 'Base plate safety inspection'],
    imageType: 'scaffolding_training_image'
  },
  {
    id: 'cert-chemical-handling',
    title: 'Chemical Handling & COSHH Safety',
    category: 'certificate',
    duration: '1 Day',
    mode: 'Online or Offline',
    icon: 'chemical',
    description: 'Hazard communication training focusing on MSDS sheets, spill containment kits, and chemical storage compatibility.',
    outcomes: ['Safety Data Sheet (SDS) analysis', 'Spill containment procedures', 'Corrosive chemical warehousing', 'Incompatible materials spacing'],
    imageType: 'chemical_handling_image'
  },
  {
    id: 'cert-fire-tech',
    title: 'Fire Technician Practical Training',
    category: 'certificate',
    duration: '1 Day',
    mode: 'Online or Offline',
    icon: 'fireman',
    description: 'Hands-on practical session teaching operation of various fire extinguisher classes, fire hoses, and fire panel handling.',
    outcomes: ['Extinguisher class matching', 'P.A.S.S. technique drills', 'Fire hose coupling & target practice', 'Fire alarm control panel response'],
    imageType: 'fire_technician_practical_image'
  },

  // --- INTERNATIONAL CERTIFICATIONS ---
  // IOSH
  {
    id: 'int-iosh-l2',
    title: 'IOSH Managing Safely (Level 2)',
    category: 'international',
    subcat: 'IOSH',
    duration: '3 Days to 1 Week',
    mode: 'Online or Offline',
    icon: 'iosh',
    description: 'Global standard for managers and supervisors to understand health and safety responsibilities and risk assessment.',
    outcomes: ['Evaluating common risks', 'Measuring safety performance', 'Investigating accidents', 'Understanding health/safety duties'],
    imageType: 'online_international_training_image'
  },
  {
    id: 'int-iosh-l3',
    title: 'IOSH Working Safely (Level 3 Equivalent)',
    category: 'international',
    subcat: 'IOSH',
    duration: '1 Week',
    mode: 'Online or Offline',
    icon: 'iosh',
    description: 'Essential grounding in the essentials of health and safety for any worker in any organization globally.',
    outcomes: ['Identifying everyday hazards', 'Contributing to safe work', 'Understanding green/safety signs', 'Reporting incidents properly'],
    imageType: 'international_classroom_image'
  },
  {
    id: 'int-iosh-l6',
    title: 'IOSH Level 6 Diploma in Occupational Safety',
    category: 'international',
    subcat: 'IOSH',
    duration: '6 Months',
    mode: 'Online or Offline',
    icon: 'iosh',
    description: 'Elite professional qualification for senior safety directors and corporate safety consultants globally.',
    outcomes: ['Safety management theory', 'Strategic risk management', 'Occupational health research', 'Corporate safety governance'],
    imageType: 'global_certification_image'
  },
  // OSHA
  {
    id: 'int-osha-30-general',
    title: 'OSHA 30-Hour General Industry Safety',
    category: 'international',
    subcat: 'OSHA',
    duration: '5 Days',
    mode: 'Online or Offline',
    icon: 'osha',
    description: 'US Department of Labor standard for general safety in manufacturing, storage, and chemical industries.',
    outcomes: ['OSHA standards compliance', 'Walking-working surfaces inspection', 'Hazard communication systems', 'Electrical safety regulations'],
    imageType: 'corporate_compliance_image'
  },
  {
    id: 'int-osha-30-construction',
    title: 'OSHA 30-Hour Construction Industry Safety',
    category: 'international',
    subcat: 'OSHA',
    duration: '5 Days',
    mode: 'Online or Offline',
    icon: 'osha',
    description: 'Rigorous training covering OSHA standards for building, excavation, scaffolding, and site operations.',
    outcomes: ['Focus Four safety (Falls, Caught-in, Struck-by, Electrocution)', 'Personal Protective Equipment', 'Stairways and ladders safety', 'Excavation safety'],
    imageType: 'construction_safety_image'
  },
  // OTHM
  {
    id: 'int-othm-l3',
    title: 'OTHM Level 3 Diploma in Occupational Health & Safety',
    category: 'international',
    subcat: 'OTHM',
    duration: '2 Months',
    mode: 'Online or Offline',
    icon: 'othm',
    description: 'UK-accredited foundation diploma validating core competency for entering the professional safety workforce.',
    outcomes: ['Risk assessment practices', 'Monitoring workplace health/safety', 'Incident investigation models', 'Regulatory standards mapping'],
    imageType: 'online_international_training_image'
  },
  {
    id: 'int-othm-l4-5-7',
    title: 'OTHM Level 4, 5 & 7 Safety Suite',
    category: 'international',
    subcat: 'OTHM',
    duration: 'Varies',
    mode: 'Online or Offline',
    icon: 'othm',
    description: 'Progressive suite of qualifications designed for safety management progression, up to executive level.',
    outcomes: ['Safety leadership principles', 'Policy implementation and audits', 'Continuous improvement design', 'Global hazard management'],
    imageType: 'global_certification_image'
  },
  {
    id: 'int-othm-l6',
    title: 'OTHM Level 6 Diploma in Occupational Health & Safety',
    category: 'international',
    subcat: 'OTHM',
    duration: '6 Months',
    mode: 'Online or Offline',
    icon: 'othm',
    description: 'Highly respected UK Level 6 diploma, paving the way for GradIOSH membership and safety career growth.',
    outcomes: ['Strategic health & safety design', 'Risk management frameworks', 'Culture development strategies', 'Occupational health audits'],
    imageType: 'international_classroom_image'
  },
  {
    id: 'int-othm-l7-env',
    title: 'OTHM Level 7 Environmental Sustainability Management',
    category: 'international',
    subcat: 'OTHM',
    duration: '4 Months',
    mode: 'Online or Offline',
    icon: 'othm',
    description: 'Postgraduate level course focusing on ecological sustainability, green audits, and corporate ESG.',
    outcomes: ['Corporate environmental policy', 'Waste management processes', 'Sustainability auditing', 'Carbon footprint tracking'],
    imageType: 'iso_audit_meeting_image'
  },
  // ISO
  {
    id: 'int-iso-45001',
    title: 'ISO 45001 Lead Auditor - OHSMS',
    category: 'international',
    subcat: 'ISO',
    duration: '5 Days',
    mode: 'Online or Offline',
    icon: 'iso',
    description: 'IRCA certified course enabling professionals to lead audits on Occupational Health and Safety Management Systems.',
    outcomes: ['OHSMS auditor requirements', 'Annex SL framework understanding', 'Lead audit simulation scenarios', 'Non-conformance report drafting'],
    imageType: 'iso_audit_meeting_image'
  },
  {
    id: 'int-iso-14001',
    title: 'ISO 14001 Lead Auditor - EMS',
    category: 'international',
    subcat: 'ISO',
    duration: '5 Days',
    mode: 'Online or Offline',
    icon: 'iso',
    description: 'IRCA course validating proficiency in auditing Environmental Management Systems to drive green operations.',
    outcomes: ['Environmental aspect evaluation', 'EMS auditing regulations', 'Mitigation compliance audits', 'Eco-efficiency reporting'],
    imageType: 'corporate_compliance_image'
  },
  {
    id: 'int-iso-9001',
    title: 'ISO 9001 Lead Auditor - QMS',
    category: 'international',
    subcat: 'ISO',
    duration: '5 Days',
    mode: 'Online or Offline',
    icon: 'iso',
    description: 'Global gold standard for auditing Quality Management Systems across manufacturing and service sectors.',
    outcomes: ['QMS principles auditing', 'Customer focus metrics verification', 'Process approach validation', 'Corrective action assessments'],
    imageType: 'global_certification_image'
  },
  {
    id: 'int-iso-27001',
    title: 'ISO 27001 Lead Auditor - ISMS',
    category: 'international',
    subcat: 'ISO',
    duration: '5 Days',
    mode: 'Online or Offline',
    icon: 'iso',
    description: 'Equips safety and IT risk officers to audit Information Security Management Systems to secure corporate assets.',
    outcomes: ['ISMS security controls auditing', 'Risk threat modeling evaluation', 'Access control inspections', 'IT compliance standards audits'],
    imageType: 'iso_audit_meeting_image'
  }
];
