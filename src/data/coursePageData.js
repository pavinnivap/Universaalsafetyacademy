// ─────────────────────────────────────────────────────────────────
//  Universaal Safety Academy — Course Detail Page Data
//  Each slug maps to a full course family page config
// ─────────────────────────────────────────────────────────────────

export const coursePages = {
  // ══════════════════════════════════════════════
  //  IOSH
  // ══════════════════════════════════════════════
  iosh: {
    slug: 'iosh',
    badge: 'IOSH',
    heroTitle: 'IOSH Managing Safely Certification',
    heroSubtitle:
      'Build a successful career in occupational health and safety with globally recognized IOSH training.',
    heroImage:
      '/assets/course-hero-iosh.png',

    whatIs: {
      title: 'What is IOSH?',
      body: `IOSH (Institution of Occupational Safety and Health) is the world's largest chartered health and safety professional membership body, headquartered in the United Kingdom. It is globally recognized across industries — construction, manufacturing, oil & gas, healthcare, and beyond.

An IOSH certification demonstrates to employers that you understand how to manage health and safety risks effectively, make workplaces safer, and comply with international occupational safety standards.`,
      stats: [
        { icon: '🌍', label: 'Countries', value: '130+' },
        { icon: '👥', label: 'Members Worldwide', value: '50,000+' },
        { icon: '🏆', label: 'Years of Excellence', value: '70+' },
        { icon: '🎓', label: 'Certified Professionals', value: '1M+' },
      ],
    },

    overview: {
      title: 'Course Overview',
      subtitle: 'IOSH Managing Safely — Level 2',
      description: `The IOSH Managing Safely course is designed for managers and supervisors in any sector or organisation. It gives participants the tools and knowledge they need to tackle health and safety issues responsibly.

The course is results-focused and jargon-free, meaning it's practical, relevant and engaging. It includes a mix of group discussions, case studies, and a final project covering real workplace scenarios.`,
      modules: [
        'Introducing Managing Safely',
        'Assessing and Controlling Risks',
        'Understanding Your Responsibilities',
        'Identifying Hazards and Controls',
        'Investigating Incidents',
        'Measuring Safety Performance',
        'Protecting the Environment',
        'Final Assessment & Project',
      ],
    },

    highlights: [
      { icon: '🌐', title: 'Globally Recognized', desc: 'Accepted in 130+ countries worldwide' },
      { icon: '👨‍🏫', title: 'Expert Trainers', desc: 'IOSH-qualified safety professionals' },
      { icon: '💻', title: 'Online & Offline', desc: 'Flexible hybrid learning modes' },
      { icon: '📋', title: '100% Placement', desc: 'Career guidance & job support' },
    ],

    learningOutcomes: [
      'Evaluate and control common workplace risks effectively',
      'Investigate and analyze workplace incidents and near misses',
      'Understand legal health & safety duties as a manager',
      'Measure and monitor your team\'s safety performance',
      'Identify hazards across multiple work environments',
      'Protect workers and the environment from harm',
      'Implement a basic health and safety management system',
      'Communicate safety responsibilities clearly to your team',
    ],

    eligibility: [
      { icon: '📚', title: 'Education', desc: 'Minimum 10th grade or equivalent — no prior safety knowledge required' },
      { icon: '👔', title: 'Work Role', desc: 'Suitable for managers, supervisors, team leaders, and business owners' },
      { icon: '🌐', title: 'Language', desc: 'Course delivered in English and Tamil upon request' },
      { icon: '🎯', title: 'Experience', desc: 'Open to all experience levels — from beginners to professionals' },
    ],

    duration: {
      title: 'Course Duration',
      total: '3 Days – 1 Week',
      format: 'Classroom / Online / Hybrid',
      schedule: [
        { day: 'Day 1', topic: 'Introduction to Managing Safely + Hazard Identification' },
        { day: 'Day 2', topic: 'Risk Assessment Workshop + Legal Responsibilities' },
        { day: 'Day 3', topic: 'Incident Investigation + Safety Performance Metrics' },
        { day: 'Assessment', topic: 'Multiple-Choice Test + Practical Project Submission' },
      ],
    },

    // certification: {
    //   title: 'Certification Details',
    //   body: 'Upon successful completion of the written exam and project, you will receive the official IOSH Managing Safely certificate — internationally recognized and respected by top employers worldwide.',
    //   points: [
    //     'Awarded by IOSH (UK) — the world\'s largest safety body',
    //     'Valid for 3 years with CPD refresher options',
    //     'Recognized across Middle East, UK, EU, and Asia-Pacific',
    //     'Digital certificate + hard copy provided',
    //     'Eligible for GradIOSH progression pathway',
    //   ],
    // },

    careers: [
      { role: 'Safety Officer', salary: '₹3L – ₹8L/yr', icon: '🦺' },
      { role: 'HSE Manager', salary: '₹8L – ₹18L/yr', icon: '📋' },
      { role: 'Safety Supervisor', salary: '₹4L – ₹10L/yr', icon: '🔍' },
      { role: 'Compliance Officer', salary: '₹5L – ₹12L/yr', icon: '✅' },
      { role: 'Risk Analyst', salary: '₹6L – ₹15L/yr', icon: '📊' },
      { role: 'Gulf / Middle East HSE', salary: '₹12L – ₹30L/yr', icon: '🌍' },
    ],

    whyUs: [
      { icon: '🏅', title: 'Authorized Training Centre', desc: 'Officially affiliated with IOSH — not a third-party reseller' },
      { icon: '👨‍🎓', title: 'Industry Expert Trainers', desc: 'Faculty with 10+ years of real site safety experience' },
      { icon: '📱', title: 'Hybrid Learning', desc: 'Study at your own pace — live classes or self-paced online' },
      { icon: '💰', title: 'Affordable Fees', desc: 'EMI options Available' },
      { icon: '📍', title: 'Based in Trichy', desc: 'Best safety training institute' },
    ],

    // testimonials: [
    //   {
    //     name: 'Rajan K.',
    //     role: 'Safety Officer, Saudi Aramco',
    //     stars: 5,
    //     text: 'The IOSH training at Universaal Safety Academy completely transformed my career. Within 3 months of certification I landed a job in Saudi Arabia with a 3x salary jump!',
    //     avatar: 'RK',
    //   },
    //   {
    //     name: 'Priya S.',
    //     role: 'HSE Manager, L&T Construction',
    //     stars: 5,
    //     text: 'Excellent trainers who explain real site scenarios. The practical sessions and mock assessments made the exam very easy. Highly recommended!',
    //     avatar: 'PS',
    //   },
    //   {
    //     name: 'Muthu V.',
    //     role: 'Safety Supervisor, Qatar',
    //     stars: 5,
    //     text: 'I enrolled in the online IOSH batch and it was top quality. The WhatsApp support group and live Q&A sessions helped me a lot. Got placed in 6 weeks!',
    //     avatar: 'MV',
    //   },
    // ],

    faqs: [
      {
        q: 'Is IOSH Managing Safely recognized in the Gulf countries?',
        a: 'Yes! IOSH is globally recognized and widely accepted by employers in Saudi Arabia, UAE, Qatar, Oman, Bahrain, and Kuwait — making it ideal for those targeting Gulf safety jobs.',
      },
      {
        q: 'What is the exam format for IOSH Managing Safely?',
        a: 'The course has two assessment components: (1) A multiple-choice written test of 30 questions, and (2) A practical risk assessment project based on your actual workplace. Both must be passed to receive certification.',
      },
      {
        q: 'Can I take this course online?',
        a: 'Absolutely. We offer online live instructor-led classes via Zoom/Google Meet, plus self-paced recorded sessions. The exam can also be taken online under supervised conditions.',
      },
      {
        q: 'What is the validity of the IOSH certificate?',
        a: 'The IOSH Managing Safely certificate is valid for 3 years. After expiry, you can attend a 1-day IOSH Managing Safely Refresher course to renew it.',
      },
      {
        q: 'What is the course fee and are EMI options available?',
        a: 'Please contact us directly for current fee details. We offer flexible payment plans, EMI options, and special group discounts for 5 or more students.',
      },
      {
        q: 'How soon can I get a job after IOSH certification?',
        a: 'Most of our students receive interview calls within 2–8 weeks of certification. Our dedicated placement team actively connects students with hiring companies in India and the Middle East.',
      },
    ],
  },

  // ══════════════════════════════════════════════
  //  OSHA
  // ══════════════════════════════════════════════
  osha: {
    slug: 'osha',
    badge: 'OSHA',
    heroTitle: 'OSHA 30-Hour Safety Certification',
    heroSubtitle:
      'Master US Department of Labor occupational safety standards for General Industry and Construction sectors.',
    heroImage:
      '/assets/course-hero-osha.png',

    whatIs: {
      title: 'What is OSHA?',
      body: `OSHA (Occupational Safety and Health Administration) is a U.S. federal agency under the Department of Labor that sets and enforces protective workplace safety and health standards. OSHA outreach training cards are internationally recognized and demanded by construction, manufacturing, and industrial employers worldwide.`,
      stats: [
        { icon: '🇺🇸', label: 'US Federal Standard', value: 'DOL' },
        { icon: '🏗️', label: 'Industries Covered', value: '50+' },
        { icon: '📜', label: 'Standards Published', value: '1000+' },
        { icon: '🌍', label: 'Global Reach', value: '80+ Countries' },
      ],
    },

    overview: {
      title: 'Course Overview',
      subtitle: 'OSHA 30-Hour General Industry & Construction',
      description: `The OSHA 30-Hour program provides a broad overview of workplace hazards, prevention strategies, and OSHA regulations. It is designed for supervisors, safety personnel, and anyone wanting a more advanced understanding of OSHA standards — covering both General Industry (1910) and Construction (1926) standards.`,
      modules: [
        'Introduction to OSHA Standards',
        'Walking-Working Surfaces',
        'Electrical Safety (1910.303)',
        'Personal Protective Equipment (PPE)',
        'Hazard Communication (HazCom/GHS)',
        'Fire Prevention & Protection',
        'Machine Guarding & Lockout/Tagout',
        'Construction Focus Four Hazards',
      ],
    },

    highlights: [
      { icon: '🇺🇸', title: 'US DOL Recognized', desc: 'Official OSHA Outreach Program card' },
      { icon: '🏗️', title: 'General & Construction', desc: 'Two tracks to match your industry' },
      { icon: '💻', title: 'Online & Offline', desc: 'Flexible hybrid learning modes' },
      { icon: '🌍', title: 'Gulf Job Ready', desc: 'Accepted by Gulf & international employers' },
    ],

    learningOutcomes: [
      'Understand OSHA regulatory standards and compliance obligations',
      'Identify and control walking-working surface hazards',
      'Apply proper lockout/tagout (LOTO) and machine guarding procedures',
      'Implement Hazard Communication and GHS labeling systems',
      'Address the Focus Four construction hazards (falls, struck-by, caught-in, electrocution)',
      'Conduct effective PPE assessments and selection',
      'Establish fire prevention plans and emergency response procedures',
      'Perform basic workplace safety audits and inspections',
    ],

    eligibility: [
      { icon: '📚', title: 'Education', desc: 'Open to all — no prior OSHA knowledge required' },
      { icon: '👔', title: 'Work Role', desc: 'Supervisors, safety managers, site engineers, and construction workers' },
      { icon: '🌐', title: 'Language', desc: 'English (Tamil support available)' },
      { icon: '🎯', title: 'Experience', desc: 'Suitable for entry-level to senior safety professionals' },
    ],

    duration: {
      title: 'Course Duration',
      total: '5 Days (30 Hours)',
      format: 'Classroom / Online / Hybrid',
      schedule: [
        { day: 'Days 1–2', topic: 'OSHA Introduction + Walking Surfaces + Electrical Safety' },
        { day: 'Days 3–4', topic: 'PPE + HazCom + Machine Guarding + LOTO' },
        { day: 'Day 5', topic: 'Focus Four Hazards + Fire Safety + Final Assessment' },
        { day: 'Certification', topic: 'OSHA DOL 30-Hour Completion Card Issued' },
      ],
    },

    // certification: {
    //   title: 'Certification Details',
    //   body: 'Upon completing the 30-hour program, you will receive an official OSHA Outreach Training Completion Card issued by the US Department of Labor — accepted by employers across the USA, Middle East, and globally.',
    //   points: [
    //     'Official OSHA 10/30-Hour Completion Card — US DOL issued',
    //     'Permanent record maintained by OSHA',
    //     'Highly valued by Gulf and US construction employers',
    //     'Digital certificate + physical card delivered',
    //     'Pathway to OSHA 500/510 trainer certification',
    //   ],
    // },

    careers: [
      { role: 'OSHA Compliance Officer', salary: '₹4L – ₹10L/yr', icon: '✅' },
      { role: 'Construction Safety Manager', salary: '₹6L – ₹15L/yr', icon: '🏗️' },
      { role: 'Site Safety Supervisor', salary: '₹3L – ₹8L/yr', icon: '🦺' },
      { role: 'Industrial Safety Inspector', salary: '₹5L – ₹12L/yr', icon: '🔍' },
      { role: 'Gulf HSE Engineer', salary: '₹15L – ₹35L/yr', icon: '🌍' },
      { role: 'Safety Trainer', salary: '₹4L – ₹10L/yr', icon: '🎓' },
    ],

    whyUs: [
      { icon: '🏅', title: 'Authorized OSHA Trainer', desc: 'OSHA Outreach Authorized Training Provider' },
      { icon: '👨‍🎓', title: 'Experienced Faculty', desc: '10+ years of OSHA compliance and audit experience' },
      { icon: '📱', title: 'Flexible Learning', desc: 'Weekday, weekend, and self-paced batches available' },
      { icon: '💰', title: 'Best Fee Structure', desc: 'Group discounts and EMI options available' },
      { icon: '📍', title: 'Trichy\'s Best', desc: 'best safety academy' },
    ],

    // testimonials: [
    //   {
    //     name: 'Senthil R.',
    //     role: 'Site Safety Supervisor, UAE',
    //     stars: 5,
    //     text: 'OSHA 30-hour from Universaal opened the door to a high-paying UAE job. The trainers are brilliant and the study material is top-notch.',
    //     avatar: 'SR',
    //   },
    //   {
    //     name: 'Kavitha M.',
    //     role: 'Compliance Manager, Hyundai',
    //     stars: 5,
    //     text: 'The online batch was incredibly convenient. Live sessions, recorded videos, and WhatsApp doubt clearing — everything was perfect.',
    //     avatar: 'KM',
    //   },
    //   {
    //     name: 'Arun P.',
    //     role: 'HSE Officer, Aramco',
    //     stars: 5,
    //     text: 'Affordable course, world-class content. Got my OSHA card in one week and a Gulf job in 3 months. Universaal is the best!',
    //     avatar: 'AP',
    //   },
    // ],

    faqs: [
      {
        q: 'What is the difference between OSHA 10-hour and 30-hour?',
        a: 'The OSHA 10-hour is an introductory program for entry-level workers. The OSHA 30-hour is designed for supervisors and safety professionals who need a more comprehensive understanding of OSHA regulations — it covers more hazards and standards in greater depth.',
      },
      {
        q: 'Is OSHA certification recognized in Gulf countries?',
        a: 'Yes. The OSHA Outreach card is widely recognized and demanded by employers in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman for construction, oil & gas, and manufacturing roles.',
      },
      {
        q: 'How is the OSHA 30-hour assessment conducted?',
        a: 'There is no formal OSHA exam. Attendance and participation in all 30 hours are mandatory. After completing the program, your completion is submitted to OSHA and the official card is mailed within 2–4 weeks.',
      },
      {
        q: 'Can I take the OSHA 30-hour course fully online?',
        a: 'Yes. We offer OSHA-accepted online delivery via live instructor-led sessions. Self-paced online options are also available for certain modules.',
      },
      {
        q: 'Does the OSHA card expire?',
        a: 'OSHA 10 and 30-hour cards do not technically expire. However, many employers prefer cards issued within the last 5 years, so periodic refresher training is recommended.',
      },
      {
        q: 'What industries require OSHA 30-hour certification?',
        a: 'OSHA 30-hour is commonly required in construction, oil & gas, manufacturing, warehousing, maritime, and healthcare industries — especially for supervisor and management-level roles.',
      },
    ],
  },

  // ══════════════════════════════════════════════
  //  OTHM
  // ══════════════════════════════════════════════
  othm: {
    slug: 'othm',
    badge: 'OTHM',
    heroTitle: 'OTHM Occupational Health & Safety Diplomas',
    heroSubtitle:
      'UK-accredited qualifications from Level 3 to Level 7, designed to launch and advance your professional safety career globally.',
    heroImage:
      '/assets/course-hero-othm.png',

    whatIs: {
      title: 'What is OTHM?',
      body: `OTHM Qualifications is an awarding organization based in the United Kingdom, regulated by Ofqual (Office of Qualifications and Examinations Regulation). OTHM qualifications are recognized on the Regulated Qualifications Framework (RQF) and are respected by employers and universities worldwide.

OTHM offers a full suite of Occupational Health & Safety qualifications from Level 3 (entry) through to Level 7 (postgraduate equivalent) — making it a complete career pathway for aspiring and experienced safety professionals.`,
      stats: [
        { icon: '🇬🇧', label: 'Ofqual Regulated', value: 'UK RQF' },
        { icon: '📊', label: 'Levels Available', value: '3 to 7' },
        { icon: '🌍', label: 'Countries Recognized', value: '150+' },
        { icon: '🎓', label: 'University Progression', value: 'GradIOSH' },
      ],
    },

    overview: {
      title: 'Course Overview',
      subtitle: 'OTHM Level 3 to Level 7 Diploma Suite',
      description: `OTHM Occupational Health & Safety qualifications are structured as a progressive suite — from foundational Level 3 right through to postgraduate-equivalent Level 7. Each qualification builds on the previous, developing deeper safety management, risk governance, and leadership competencies.

At Universaal Safety Academy, we offer all OTHM levels in a flexible hybrid format designed for working professionals.`,
      modules: [
        'Principles of Health & Safety at Work',
        'Risk Assessment and Control Strategies',
        'Health & Safety Legislation and Compliance',
        'Workplace Hazard Identification',
        'Safety Management Systems (SMS)',
        'Occupational Health Programmes',
        'Emergency Planning & Business Continuity',
        'Strategic Safety Leadership (Level 6/7)',
      ],
    },

    highlights: [
      { icon: '🇬🇧', title: 'UK RQF Regulated', desc: 'Ofqual-accredited — globally accepted' },
      { icon: '📈', title: 'Level 3 to 7', desc: 'Complete career progression pathway' },
      { icon: '💻', title: 'Online & Offline', desc: 'Flexible hybrid learning modes' },
      { icon: '🎓', title: 'University Pathway', desc: 'Eligible for MSc Health & Safety progression' },
    ],

    learningOutcomes: [
      'Apply risk assessment methodologies across diverse work environments',
      'Understand and implement UK and international OHS legislation',
      'Design and manage Safety Management Systems (SMS)',
      'Investigate accidents and develop corrective action plans',
      'Lead organizational health & safety culture change programmes',
      'Conduct internal and third-party safety audits',
      'Develop emergency response and business continuity plans',
      'Progress toward Chartered Member of IOSH (CMIOSH) status',
    ],

    eligibility: [
      { icon: '📚', title: 'Level 3', desc: 'Open to all — minimum 10+2 or working adults' },
      { icon: '👔', title: 'Level 4 / 5', desc: 'Level 3 qualification or equivalent work experience' },
      { icon: '🌐', title: 'Level 6', desc: 'Level 5 or relevant degree + safety experience' },
      { icon: '🎓', title: 'Level 7', desc: 'Level 6 or equivalent — for senior safety professionals' },
    ],

    duration: {
      title: 'Course Duration',
      total: '2 Months – 6 Months (per level)',
      format: 'Classroom / Online / Hybrid',
      schedule: [
        { day: 'Level 3', topic: '2 Months — Foundation Diploma' },
        { day: 'Level 4 & 5', topic: '3 Months each — Advanced Diploma' },
        { day: 'Level 6', topic: '6 Months — Senior Professional Diploma' },
        { day: 'Level 7', topic: '4 Months — Postgraduate Diploma (ESG focus)' },
      ],
    },

    // certification: {
    //   title: 'Certification Details',
    //   body: 'OTHM qualifications are awarded by OTHM Qualifications UK, regulated by Ofqual under the RQF framework. They are recognized by employers, governments, and universities worldwide and provide a direct progression route to GradIOSH and Chartered IOSH membership.',
    //   points: [
    //     'Ofqual-regulated UK qualification — RQF framework',
    //     'Recognized by employers across Middle East, UK & Asia',
    //     'Pathway to GradIOSH and CMIOSH membership',
    //     'Eligible for postgraduate university top-up programmes',
    //     'Digital and physical certificates issued by OTHM UK',
    //   ],
    // },

    careers: [
      { role: 'Health & Safety Advisor', salary: '₹4L – ₹10L/yr', icon: '🦺' },
      { role: 'Safety Manager', salary: '₹8L – ₹20L/yr', icon: '📋' },
      { role: 'Risk Manager', salary: '₹10L – ₹25L/yr', icon: '📊' },
      { role: 'OHS Consultant', salary: '₹12L – ₹30L/yr', icon: '🔍' },
      { role: 'Gulf Safety Director', salary: '₹20L – ₹50L/yr', icon: '🌍' },
      { role: 'ESG / Sustainability Manager', salary: '₹12L – ₹28L/yr', icon: '🌿' },
    ],

    whyUs: [
      { icon: '🏅', title: 'OTHM Registered Centre', desc: 'Official OTHM centre — authentic UK qualifications' },
      { icon: '👨‍🎓', title: 'Qualified Assessors', desc: 'OTHM-certified assessors and internal verifiers' },
      { icon: '🎯', title: 'Career Progression', desc: 'We map your OTHM path to your career goal' },
      { icon: '📱', title: 'Assignment Support', desc: 'Expert guidance for all written assignments' },
      { icon: '📍', title: 'Trichy\'s Best', desc: 'Best OTHM centre' },
    ],

    // testimonials: [
    //   {
    //     name: 'Deepa A.',
    //     role: 'Safety Manager, Infosys',
    //     stars: 5,
    //     text: 'Completed OTHM Level 6 with Universaal and it was a fantastic experience. The assignment guidance was excellent and the trainers are very professional.',
    //     avatar: 'DA',
    //   },
    //   {
    //     name: 'Vinoth K.',
    //     role: 'HSE Manager, Qatar Airways',
    //     stars: 5,
    //     text: 'OTHM Level 7 through Universaal opened doors I never imagined. Now working in Qatar with a top aviation company. The placement support is unmatched!',
    //     avatar: 'VK',
    //   },
    //   {
    //     name: 'Anitha R.',
    //     role: 'OHS Consultant, London',
    //     stars: 5,
    //     text: 'The online mode was perfect for me as a working professional. Universaal\'s trainers are patient and knowledgeable. Got my OTHM Level 6 in 6 months!',
    //     avatar: 'AR',
    //   },
    // ],

    faqs: [
      {
        q: 'What is the difference between OTHM and NEBOSH?',
        a: 'Both are UK-accredited safety qualifications. OTHM is regulated by Ofqual on the RQF framework and offers a broader qualification suite from Level 3–7. NEBOSH is also reputable but limited to specific certificates and diplomas. OTHM qualifications provide a direct university progression pathway, which NEBOSH does not.',
      },
      {
        q: 'Is OTHM recognized in the UAE and Saudi Arabia?',
        a: 'Yes. OTHM qualifications are widely recognized by employers in the UAE, Saudi Arabia, Qatar, Oman, and Kuwait — especially for senior safety management positions.',
      },
      {
        q: 'How are OTHM assignments assessed?',
        a: 'OTHM uses written assignments and portfolio-based assessments rather than traditional exams. Each unit requires a written assignment (typically 2,000–4,000 words) evaluated by an OTHM-certified assessor and internally verified.',
      },
      {
        q: 'Can I progress from Level 3 directly to Level 7?',
        a: 'Progression is typically sequential — Level 3 → 4 → 5 → 6 → 7. However, if you have prior learning or relevant experience, Recognition of Prior Learning (RPL) may allow you to enter at a higher level.',
      },
      {
        q: 'Are OTHM qualifications equivalent to a degree?',
        a: 'OTHM Level 7 is equivalent to a postgraduate (Master\'s) level qualification on the RQF. Level 6 is equivalent to a Bachelor\'s degree level. They are not degrees themselves but are academically equivalent and recognized for university top-up pathways.',
      },
      {
        q: 'What support do you provide for OTHM assignments?',
        a: 'We provide dedicated assignment workshops, one-on-one tutor sessions, model answers for practice, and unlimited doubt-clearing sessions via WhatsApp and Zoom. Our pass rate is consistently above 95%.',
      },
    ],
  },

  // ══════════════════════════════════════════════
  //  ISO IRCA
  // ══════════════════════════════════════════════
  iso: {
    slug: 'iso',
    badge: 'ISO IRCA',
    heroTitle: 'ISO Lead Auditor Certification (IRCA)',
    heroSubtitle:
      'Become a certified ISO Lead Auditor for ISO 45001, 14001, 9001 & 27001 — your gateway to high-value auditing careers worldwide.',
    heroImage:
      '/assets/course-hero-iso.png',

    whatIs: {
      title: 'What is ISO IRCA?',
      body: `ISO (International Organization for Standardization) develops and publishes international management system standards used by organizations worldwide. IRCA (International Register of Certificated Auditors), now part of CQI (Chartered Quality Institute), is the world's leading professional body for management system auditors.

An IRCA-certified ISO Lead Auditor course qualifies you to plan, conduct, manage, and report on management system audits to internationally recognized ISO standards — a premium, high-demand qualification in the industry.`,
      stats: [
        { icon: '🌍', label: 'Countries Using ISO', value: '170+' },
        { icon: '🏢', label: 'ISO-Certified Companies', value: '1.5M+' },
        { icon: '🎓', label: 'Standards Available', value: '24,000+' },
        { icon: '✅', label: 'IRCA Registered Auditors', value: '60,000+' },
      ],
    },

    overview: {
      title: 'Course Overview',
      subtitle: 'ISO 45001 / 14001 / 9001 / 27001 Lead Auditor',
      description: `The ISO Lead Auditor course is a 5-day intensive programme that trains participants to audit management systems to ISO standards. The course follows the IRCA-approved methodology and covers audit planning, conducting opening meetings, evidence gathering, nonconformance reporting, and audit closure.

We offer Lead Auditor programs for four major ISO standards — ISO 45001 (OHSMS), ISO 14001 (EMS), ISO 9001 (QMS), and ISO 27001 (ISMS).`,
      modules: [
        'ISO Standard Requirements & Annex SL Framework',
        'Management Systems Principles (PDCA)',
        'Audit Types: Internal, External, Certification',
        'Planning an ISO Audit Programme',
        'Audit Evidence Collection Techniques',
        'Conducting Opening and Closing Meetings',
        'Writing Nonconformity (NC) Reports',
        'Lead Auditor Written Examination',
      ],
    },

    highlights: [
      { icon: '🏆', title: 'IRCA Certified Course', desc: 'Globally recognized lead auditor qualification' },
      { icon: '📋', title: '4 ISO Standards', desc: '45001 · 14001 · 9001 · 27001' },
      { icon: '💻', title: 'Online & Offline', desc: 'Flexible hybrid learning modes' },
      { icon: '🌍', title: 'Premium Career', desc: 'Top-paying ISO auditor roles globally' },
    ],

    learningOutcomes: [
      'Interpret and apply the requirements of ISO 45001/14001/9001/27001',
      'Plan and lead management system audits from initiation to closure',
      'Gather objective audit evidence through interviews and document reviews',
      'Write clear and defensible nonconformance (NC) reports',
      'Conduct audit opening, closing meetings, and debrief sessions',
      'Manage audit teams and resolve conflicts during fieldwork',
      'Evaluate organizational corrective action plans effectively',
      'Register as a certified IRCA Lead Auditor',
    ],

    eligibility: [
      { icon: '📚', title: 'Education', desc: 'Graduate degree in any discipline (Engineering preferred)' },
      { icon: '👔', title: 'Work Experience', desc: 'Minimum 2 years in a relevant industry or quality/safety role' },
      { icon: '🌐', title: 'Language', desc: 'Course delivered in English (Tamil support available)' },
      { icon: '🎯', title: 'Preferred Background', desc: 'Quality managers, safety officers, auditors, and compliance professionals' },
    ],

    duration: {
      title: 'Course Duration',
      total: '5 Days Intensive',
      format: 'Classroom / Online / Hybrid',
      schedule: [
        { day: 'Day 1', topic: 'ISO Standard Requirements + Management System Principles' },
        { day: 'Day 2', topic: 'Audit Principles + Planning an Audit Programme' },
        { day: 'Day 3', topic: 'Evidence Gathering + Audit Techniques (Role-Play)' },
        { day: 'Day 4', topic: 'NC Writing + Corrective Actions + Audit Closure' },
        { day: 'Day 5', topic: 'Mock Audit Simulation + Lead Auditor Written Exam' },
      ],
    },

    // certification: {
    //   title: 'Certification Details',
    //   body: 'Upon passing the IRCA-approved written examination, you will receive an ISO Lead Auditor certificate recognized worldwide. You can then register on the IRCA/CQI Auditor Register to demonstrate your credentials to employers globally.',
    //   points: [
    //     'IRCA-certified Lead Auditor certificate (internationally recognized)',
    //     'Eligible for IRCA/CQI Auditor Register listing',
    //     'Accepted by ISO certification bodies (CB) worldwide',
    //     'Pathway to Certified Lead Auditor (CLA) designation',
    //     'Opens access to third-party certification audit roles',
    //   ],
    // },

    careers: [
      { role: 'ISO Lead Auditor', salary: '₹8L – ₹20L/yr', icon: '✅' },
      { role: 'Third-Party Auditor (CB)', salary: '₹10L – ₹25L/yr', icon: '🔍' },
      { role: 'Quality Manager', salary: '₹8L – ₹18L/yr', icon: '📋' },
      { role: 'EHS Manager', salary: '₹10L – ₹22L/yr', icon: '🌿' },
      { role: 'Compliance Director', salary: '₹15L – ₹35L/yr', icon: '📊' },
      { role: 'Gulf Audit Consultant', salary: '₹20L – ₹50L/yr', icon: '🌍' },
    ],

    whyUs: [
      { icon: '🏅', title: 'IRCA-Approved Course', desc: 'Genuine IRCA-certified lead auditor training' },
      { icon: '👨‍🎓', title: 'Certified Lead Auditors', desc: 'Faculty who are practicing ISO Lead Auditors' },
      { icon: '📱', title: 'Practical Simulations', desc: 'Real audit role-play and mock NC writing' },
      { icon: '💰', title: 'Best Value', desc: 'IRCA exam fees included in course cost' },
      { icon: '📍', title: 'Trichy\'s Best', desc: 'Best ISO training centre' },
    ],

    // testimonials: [
    //   {
    //     name: 'Balamurugan S.',
    //     role: 'ISO 45001 Lead Auditor, TUV SUD',
    //     stars: 5,
    //     text: 'Cleared the IRCA exam in first attempt! The mock audits and NC writing practice sessions at Universaal were extremely useful. Now working with TUV SUD as a certified Lead Auditor.',
    //     avatar: 'BS',
    //   },
    //   {
    //     name: 'Nirmala V.',
    //     role: 'Quality Manager, Bosch India',
    //     stars: 5,
    //     text: 'ISO 9001 Lead Auditor course was brilliant. The trainers simplified complex Annex SL concepts beautifully. Highly professional training institute.',
    //     avatar: 'NV',
    //   },
    //   {
    //     name: 'Karthik R.',
    //     role: 'EHS Auditor, Abu Dhabi',
    //     stars: 5,
    //     text: 'Enrolled for ISO 14001 Lead Auditor and couldn\'t be happier. Got an EHS auditor position in Abu Dhabi within 2 months of certification. Thank you Universaal!',
    //     avatar: 'KR',
    //   },
    // ],

    faqs: [
      {
        q: 'What is the difference between ISO Lead Auditor and Internal Auditor?',
        a: 'An Internal Auditor is trained to audit within their own organization. A Lead Auditor is qualified to plan, manage, and lead audits in any organization — including third-party certification audits. The Lead Auditor qualification is a higher-level credential with greater career value.',
      },
      {
        q: 'Which ISO Lead Auditor course should I take?',
        a: 'ISO 45001 (OHSMS) is ideal for safety professionals. ISO 9001 (QMS) suits quality managers. ISO 14001 (EMS) is for environmental roles. ISO 27001 (ISMS) is for IT/information security. Many professionals pursue 2–3 standards to broaden their career options.',
      },
      {
        q: 'Is there a written exam at the end of the course?',
        a: 'Yes. The IRCA Lead Auditor exam is a 2-hour written test covering ISO standard requirements, audit methodology, and practical audit scenarios. A score of 65% or above is required to pass and receive certification.',
      },
      {
        q: 'Is the IRCA Lead Auditor certificate recognized globally?',
        a: 'Yes. IRCA (now CQI) is the world\'s leading auditor certification body. ISO Lead Auditor certificates are recognized and accepted by employers and certification bodies (TUV, Bureau Veritas, SGS, BVQI, etc.) worldwide.',
      },
      {
        q: 'Can I take this course without prior auditing experience?',
        a: 'Yes, but some knowledge of the relevant ISO standard and basic quality/safety management concepts is recommended. Our pre-course material and Day 1 foundation session cover all prerequisites.',
      },
      {
        q: 'What happens if I fail the IRCA exam on first attempt?',
        a: 'We offer a free exam re-sit within 90 days for students who do not pass on first attempt. Our supplementary coaching sessions and targeted exam practice help ensure you pass on the re-sit.',
      },
    ],
  },
};

// Helper: resolve slug from Hero badge label
export const badgeToSlug = {
  'IOSH': 'iosh',
  'OSHA': 'osha',
  'OTHM': 'othm',
  'ISO IRCA': 'iso',
};
