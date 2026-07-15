const { academy, contact, courses, courseNavItems, faqs, socialLinks } = require("./star-content");

const siteConfig = {
  siteUrl: "https://www.starpoliceacademy.in",
  siteName: "Star Police Academy",
  author: "Star Police Academy",
  geoRegion: "IN-TN",
  geoPlace: "Vellore, Tamil Nadu, India",
  language: "en-IN",
  defaultOgImage: "/assets/images/hero/star-police-academy-campus-hero.jpg",
  logoPath: "/assets/images/logos/star-police-academy-logo.png",
  founder: academy.founder,
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
};

const pageSeoByType = {
  home: {
    title: "Best TNUSRB Coaching Centre in Tamil Nadu | SI & Police Coaching",
    description:
      "Star Police Academy in Vellore offers TNUSRB SI & Police Constable coaching with expert faculty, physical training, mock tests, hostel facility and 14+ years of success.",
    keywords:
      "TNUSRB coaching, Police SI coaching Tamil Nadu, Police Constable coaching, Star Police Academy Vellore, TNUSRB SI coaching, police exam coaching centre",
    ogImage: "/assets/images/hero/star-police-academy-campus-hero.jpg",
  },
  about: {
    title: "About Star Police Academy | TNUSRB Coaching Centre in Vellore",
    description:
      "Learn about Star Police Academy, a dedicated TNUSRB SI and Police Constable coaching centre in Vellore with 14+ years of experience, expert faculty and physical training.",
    keywords:
      "About Star Police Academy, TNUSRB coaching centre Vellore, police coaching academy Tamil Nadu, Mr M Jeevanandham, police exam training institute",
    ogImage: "/assets/images/about/home/founder.jpg",
  },
  courses: {
    title: "Police Coaching Courses | TNUSRB SI, PC & Defence Exam Training",
    description:
      "Explore police coaching courses at Star Police Academy including TNUSRB SI, Police Constable, Indian Army, Navy, Air Force, RPF and CAPF exam preparation programmes.",
    keywords:
      "police coaching courses, TNUSRB courses, SI coaching, Police Constable coaching, defence exam coaching, Star Police Academy courses",
    ogImage: "/assets/images/courses/course-sub-inspector.png",
  },
  course: {
    title: null,
    description: null,
    keywords: null,
    ogImage: null,
  },
  register: {
    title: "Apply Now | Star Police Academy Student Registration",
    description:
      "Apply for TNUSRB SI, Police Constable and defence exam coaching at Star Police Academy. Register online for classroom, online and hostel-supported batches.",
    keywords:
      "Star Police Academy registration, TNUSRB coaching admission, police coaching apply now, SI coaching enrollment Vellore",
    ogImage: "/assets/images/logos/star-police-academy-logo.png",
  },
  contact: {
    title: "Contact Star Police Academy | Vellore TNUSRB Coaching Centre",
    description:
      "Contact Star Police Academy in Vellore for TNUSRB SI and Police Constable coaching admissions, fees, hostel details and batch schedules.",
    keywords:
      "Contact Star Police Academy, TNUSRB coaching Vellore address, police coaching phone number, Star Police Academy location map",
    ogImage: "/assets/images/gallery/gallery-academy-campus.jpg",
  },
  faq: {
    title: "Frequently Asked Questions | Star Police Academy",
    description:
      "Find answers about TNUSRB coaching fees, hostel facility, physical training, online classes, course duration and admissions at Star Police Academy.",
    keywords:
      "TNUSRB coaching FAQ, police coaching questions, Star Police Academy fees, hostel facility, physical training coaching",
    ogImage: "/assets/images/logos/star-police-academy-logo.png",
  },
  toppers: {
    title: "Toppers and Achievers | Star Police Academy Results",
    description:
      "View toppers and achievers from Star Police Academy with successful TNUSRB SI and Police Constable selections across Tamil Nadu.",
    keywords:
      "Star Police Academy toppers, TNUSRB results, police coaching achievers, SI selection success stories",
    ogImage: "/assets/images/gallery/gallery-student-briefing.jpg",
  },
  materials: {
    title: "Training Materials | Star Police Academy Study Resources",
    description:
      "Access TNUSRB SI and Police Constable study materials, notes, practice resources and training support from Star Police Academy.",
    keywords:
      "TNUSRB study materials, police coaching notes, SI exam materials, Star Police Academy resources",
    ogImage: "/assets/images/gallery/gallery-classroom-lecture.jpg",
  },
  questions: {
    title: "Question Papers | TNUSRB SI & Police Exam Practice",
    description:
      "Download and practice TNUSRB SI and Police Constable previous year question papers with Star Police Academy coaching support.",
    keywords:
      "TNUSRB question papers, police SI previous papers, constable exam papers, Star Police Academy question bank",
    ogImage: "/assets/images/gallery/gallery-smart-class-lecture.jpg",
  },
  "answer-keys": {
    title: "Answer Keys | TNUSRB & Police Exam Solutions",
    description:
      "Review answer keys for TNUSRB SI, Police Constable and related police exam practice tests at Star Police Academy.",
    keywords:
      "TNUSRB answer keys, police exam solutions, SI answer key, constable exam answers",
    ogImage: "/assets/images/gallery/gallery-classroom-session.jpg",
  },
  notification: {
    title: "Recruitment Notifications | TNUSRB & Police Exam Updates",
    description:
      "Stay updated with latest TNUSRB SI, Police Constable and police recruitment notifications, current affairs and exam updates from Star Police Academy.",
    keywords:
      "TNUSRB notification, police recruitment updates, SI notification Tamil Nadu, current affairs police exam",
    ogImage: "/assets/images/courses/course-tnusrb-constable.png",
  },
  youtube: {
    title: "Star Police Academy YouTube Channel | Coaching Videos",
    description:
      "Watch Star Police Academy coaching videos, exam guidance, physical training tips and TNUSRB preparation updates on our official YouTube channel.",
    keywords:
      "Star Police Academy YouTube, TNUSRB coaching videos, police exam preparation videos, SI coaching online",
    ogImage: "/assets/images/logos/star-police-academy-logo.png",
  },
  "si-landing": {
    title: "Police SI Coaching in Tamil Nadu",
    description:
      "Join the best Police Sub Inspector Coaching in Tamil Nadu. Expert faculty, TNUSRB syllabus, mock tests, physical training and high success rate. Enroll Today.",
    keywords:
      "Police SI Coaching, Sub Inspector Coaching, TNUSRB SI Coaching, Police SI Training, SI Coaching in Tamil Nadu, Police Sub Inspector Exam Coaching",
    canonicalPath: "/police-sub-inspector-coaching",
    ogImage: "/assets/images/courses/course-sub-inspector.png",
  },
  "tnusrb-landing": {
    title: "TNUSRB Police Constable Coaching Centre in Tamil Nadu",
    description:
      "Join the best TNUSRB Police Constable coaching in Tamil Nadu. Expert faculty, syllabus coverage, mock tests, physical training and high success rate. Enroll Today.",
    keywords:
      "TNUSRB Coaching, Police Constable Coaching, TNUSRB PC Coaching, Police Constable Training, PC Coaching in Tamil Nadu",
    canonicalPath: "/tnusrb",
    ogImage: "/assets/images/courses/course-tnusrb-constable.png",
  },
  "army-landing": {
    title: "Agnipath Indian Army Coaching | Star Police Academy",
    description:
      "Prepare for the Indian Army Agnipath pathway with written exam support, physical fitness guidance, medical readiness and online resources at Star Police Academy.",
    keywords:
      "Indian Army coaching, Agnipath coaching Tamil Nadu, army exam preparation, Star Police Academy army course",
    canonicalPath: "/indian-army",
    ogImage: "/assets/images/courses/course-indian-army.png",
  },
  "navy-landing": {
    title: "Agnipath Indian Navy Coaching | Star Police Academy",
    description:
      "Prepare for the Indian Navy pathway with written exam support, physical fitness guidance, medical readiness and online resources at Star Police Academy.",
    keywords:
      "Indian Navy coaching, Agnipath navy coaching, navy exam preparation Tamil Nadu, Star Police Academy navy course",
    canonicalPath: "/indian-navy",
    ogImage: "/assets/images/courses/course-indian-navy.png",
  },
  "air-force-landing": {
    title: "Indian Air Force Coaching | Star Police Academy",
    description:
      "Prepare for the Indian Air Force pathway with written exam support, physical fitness guidance, medical readiness and online resources at Star Police Academy.",
    keywords:
      "Indian Air Force coaching, IAF exam preparation, air force coaching Tamil Nadu, Star Police Academy air force course",
    canonicalPath: "/indian-air-force",
    ogImage: "/assets/images/courses/course-indian-air-force.png",
  },
  "rpf-landing": {
    title: "Railway Protection Force RPF Coaching | Star Police Academy",
    description:
      "Prepare for the Railway Protection Force with written exam support, physical fitness guidance, medical readiness and online resources at Star Police Academy.",
    keywords:
      "RPF coaching, Railway Protection Force exam coaching, RPF preparation Tamil Nadu, Star Police Academy RPF course",
    canonicalPath: "/rpf",
    ogImage: "/assets/images/courses/course-rpf.png",
  },
  "capf-landing": {
    title: "CAPF Coaching | CRPF, CISF, SSB & ITBP Exam Training",
    description:
      "Prepare for CAPF exams including CRPF, CISF, SSB and ITBP with written exam support, physical training and guidance at Star Police Academy.",
    keywords:
      "CAPF coaching, CRPF coaching, CISF exam coaching, SSB ITBP coaching Tamil Nadu, Star Police Academy CAPF course",
    canonicalPath: "/capf",
    ogImage: "/assets/images/courses/course-capf.png",
  },
};

const canonicalOverrides = {
  "/test-batch": "/test-batch",
  "/test-batch.php": "/test-batch",
};

function absoluteUrl(path = "/") {
  if (!path) {
    return siteConfig.siteUrl;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}

function getCourseByKey(courseKey) {
  return courses.find((course) => course.key === courseKey) || null;
}

function buildCourseSeo(course) {
  if (!course) {
    return null;
  }

  return {
    title: `${course.shortTitle || course.title} Coaching`,
    description: course.summary,
    keywords: `${course.shortTitle || course.title}, ${course.title}, police coaching Tamil Nadu, TNUSRB coaching, Star Police Academy Vellore`,
    canonicalPath: `/${course.key}`,
    ogImage: course.image,
  };
}

function resolveRouteSeo(page, pathname = "/") {
  const pathnameOverrides = {
    "/test-batch": {
      title: "Test Batches | TNUSRB SI & Police Constable Mock Tests",
      description:
        "Join Star Police Academy test batches for TNUSRB SI and Police Constable preparation with scheduled mock exams, answer discussion and performance tracking.",
      keywords:
        "TNUSRB test batch, police mock test, SI test schedule, Star Police Academy test batches, constable practice test",
      canonicalPath: "/test-batch",
      ogImage: "/assets/images/courses/course-tnusrb-constable.png",
    },
    "/training": {
      title: "Police Exam Training Programmes | Star Police Academy",
      description:
        "Explore classroom coaching, physical training, mock tests and mentorship programmes for TNUSRB and police competitive exams at Star Police Academy.",
      keywords:
        "police exam training, TNUSRB training programme, physical training coaching, Star Police Academy training",
      canonicalPath: "/training",
      ogImage: "/assets/images/gallery/gallery-training-ground-facility.jpg",
    },
  };

  const pathnameSeo = pathnameOverrides[pathname];
  const typeSeo = pageSeoByType[page?.type] || {};
  const course = page?.courseKey ? getCourseByKey(page.courseKey) : null;
  const courseSeo = page?.type === "course" ? buildCourseSeo(course) : null;
  const canonicalPath = canonicalOverrides[pathname]
    || pathnameSeo?.canonicalPath
    || page?.canonicalPath
    || typeSeo.canonicalPath
    || courseSeo?.canonicalPath
    || pathname;

  const title = pathnameSeo?.title || page?.title || courseSeo?.title || typeSeo.title || academy.name;
  const description = pathnameSeo?.description || page?.metaDescription || courseSeo?.description || typeSeo.description || academy.description;
  const keywords = pathnameSeo?.keywords || page?.keywords || courseSeo?.keywords || typeSeo.keywords;
  const ogImage = pathnameSeo?.ogImage || page?.ogImage || courseSeo?.ogImage || typeSeo.ogImage || siteConfig.defaultOgImage;

  return {
    title,
    description,
    keywords,
    canonicalPath,
    canonicalUrl: absoluteUrl(canonicalPath),
    ogTitle: title,
    ogDescription: description,
    ogImage: absoluteUrl(ogImage),
    ogType: "website",
    ogUrl: absoluteUrl(canonicalPath),
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: absoluteUrl(ogImage),
  };
}

function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: absoluteUrl(siteConfig.logoPath),
    description: academy.aboutIntro,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLines?.[0] || contact.address,
      addressLocality: "Vellore",
      addressRegion: "Tamil Nadu",
      postalCode: "632105",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phonePrimary,
      email: contact.email,
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
    sameAs: socialLinks.map((item) => item.href),
  };
}

function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  };
}

function buildLocalBusinessSchema(seo) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.siteName,
    image: seo.ogImage,
    url: siteConfig.siteUrl,
    telephone: contact.phonePrimary,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressLines?.[0] || contact.address,
      addressLocality: "Vellore",
      addressRegion: "Tamil Nadu",
      postalCode: "632105",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
  };
}

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Police & Defence Exam Coaching",
    provider: {
      "@type": "Organization",
      name: siteConfig.siteName,
    },
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Police Coaching Programs",
      itemListElement: courseNavItems.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.label,
          url: absoluteUrl(item.href),
        },
      })),
    },
  };
}

function buildFaqSchema(pageFaqs = faqs) {
  const items = (pageFaqs || []).filter((item) => item.question && item.answer);
  if (!items.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function buildWebPageSchema(seo, pathname) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: seo.canonicalUrl,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };
}

function buildPageSchemas(page, seo, pathname) {
  const schemas = [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
    buildLocalBusinessSchema(seo),
    buildServiceSchema(),
    buildWebPageSchema(seo, pathname),
  ];

  if (page?.type === "faq" || page?.type === "home" || page?.type === "si-landing" || page?.type === "tnusrb-landing") {
    const faqSchema = buildFaqSchema(faqs);
    if (faqSchema) {
      schemas.push(faqSchema);
    }
  }

  return schemas;
}

function buildPageSeo(page, pathname = "/") {
  const seo = resolveRouteSeo(page, pathname);

  return {
    ...seo,
    pageTitle: `${seo.title} | ${siteConfig.siteName}`,
    author: siteConfig.author,
    geoRegion: siteConfig.geoRegion,
    geoPlace: siteConfig.geoPlace,
    language: siteConfig.language,
    favicon: academy.logo,
    ogLogo: absoluteUrl(siteConfig.logoPath),
    schemas: buildPageSchemas(page, seo, pathname),
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  };
}

module.exports = {
  absoluteUrl,
  buildPageSeo,
  siteConfig,
};
