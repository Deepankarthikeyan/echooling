import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  academy,
  contact,
  courses,
  faqs,
  features,
  notificationItems,
  questionPapers,
  registrationCourses,
  stats,
  terms,
  testimonials,
  trainingSteps,
  youtubeVideos,
} from "../lib/star-content";

const aboutLearningIcons = [
  "/assets/images/topics/icon.png",
  "/assets/images/topics/icon2.png",
  "/assets/images/topics/icon3.png",
];

const aboutCounterItems = [
  { icon: "/assets/images/counter/1.png", value: stats[0].value, suffix: "+", label: stats[0].label },
  { icon: "/assets/images/counter/2.png", value: stats[1].value.replace("+", ""), suffix: "+", label: stats[1].label },
  { icon: "/assets/images/counter/3.png", value: stats[2].value.replace("+", ""), suffix: "+", label: stats[2].label },
  { icon: "/assets/images/counter/4.png", value: stats[3].value.replace("+", ""), suffix: "+", label: stats[3].label },
];

const aboutTestimonialImages = [
  "/assets/images/testimonial/1.png",
  "/assets/images/testimonial/2.png",
  "/assets/images/testimonial/3.png",
];

const aboutLearningCards = [
  {
    title: "Online/Offline Classes",
    text: "Flexible police exam coaching with classroom and online support for TNUSRB, SI and defence aspirants.",
  },
  {
    title: "Daily Online Exams",
    text: "Regular practice tests and performance tracking help students prepare better for written examinations.",
  },
  {
    title: "Toppers and Achievers",
    text: "The outstanding success of our students are our proudest testimony and motivation.",
  },
];

const aboutInstructors = [
  {
    name: academy.founder,
    role: academy.founderRole,
    image: "https://www.starpoliceacademy.in/img/avatar/avatar-01.jpg",
  },
  {
    name: "Subject Expert Faculty",
    role: "TNUSRB Written Exam",
    image: "https://www.starpoliceacademy.in/img/content/about-02.png",
  },
  {
    name: "Physical Training Team",
    role: "Fitness & PET Training",
    image: "https://www.starpoliceacademy.in/img/content/history-01.jpg",
  },
  {
    name: "Mentoring Team",
    role: "Interview & Guidance",
    image: "https://www.starpoliceacademy.in/img/content/history-04.jpg",
  },
];

const homeTopics = features.map((feature, index) => ({
  title: feature.title,
  courses: feature.text,
  icon: `/assets/images/topics/${index + 1}.svg`,
}));

const homeCourseFilterTags = [
  ["filter2", "filter3"],
  ["filter5", "filter1"],
  ["filter3", "filter2"],
  ["filter4", "filter6"],
  ["filter6", "filter3"],
  ["filter5", "filter2"],
];

const courseFilterTabs = [
  { label: "See All", value: "*" },
  { label: "Trending", value: "filter1" },
  { label: "Featured", value: "filter2" },
  { label: "Popularity", value: "filter3" },
  { label: "Web Design", value: "filter4" },
];

const homeCourses = courses.slice(0, 6).map((course, index) => ({
  key: course.key,
  title: course.summary,
  category: course.shortTitle,
  image: course.image || `/assets/images/course-filter/${index + 1}.jpg`,
  lessons: "Expert Coaching",
  students: `${stats[1].value} Students`,
  review: "4.8 review",
  author: academy.founder,
  price: "Apply",
  filters: homeCourseFilterTags[index] || ["filter1"],
}));

const homeHeroStats = [
  { value: stats[1].value, label: stats[1].label, icon: "/assets/images/banner2/bg.png" },
  { value: stats[3].value, label: stats[3].label, icon: "/assets/images/banner2/bg11.png" },
];

const homeInstructors = [
  ...aboutInstructors,
  {
    name: "Interview Panel Team",
    role: "Mentoring Team",
    image: "/assets/images/instructor/05.jpg",
  },
  {
    name: "Admissions Team",
    role: "Counseling Support",
    image: "/assets/images/instructor/06.jpg",
  },
];

const homeBlogCards = notificationItems.slice(0, 4).map((item, index) => ({
  date: item.date,
  category: item.category,
  title: item.title,
  image: courses[index]?.image || `/assets/images/blog/${index + 1}.jpg`,
  author: academy.name,
  href: item.href,
}));

function SiteHead({ title }) {
  const pageTitle = title ? `${title} | Star Police Academy` : academy.title;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={academy.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href={academy.logo} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/menus.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css" />
      <link rel="stylesheet" type="text/css" href="/assets/fonts/elegant-icon.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/all.min.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/animations.css" />
      <link rel="stylesheet" type="text/css" href="/style.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/custom-spacing.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
    </Head>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const closeNavigation = () => {
    setOpen(false);
  };

  return (
    <header id="react-header" className="react-header react-header-two exact-home-header">
      <div className="menu-part">
        <div className="container">
          <div className="react-main-menu">
            <nav>
              <div className="menu-toggle">
                <div className="logo">
                  <Link href="/" className="logo-text" onClick={closeNavigation}>
                    <img src={academy.logo} alt="Star Police Academy logo" />
                  </Link>
                </div>
                <button
                  type="button"
                  id="menu-btn"
                  className={open ? "back__close" : ""}
                  aria-label="Toggle navigation"
                  aria-expanded={open}
                  onClick={() => setOpen((value) => !value)}
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className={`react-inner-menus exact-home-menus ${open ? "is-open" : ""}`}>
                <ul id="backmenu" className="react-menus react-sub-shadow">
                  <li>
                    <Link href="/" onClick={closeNavigation}>Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                    <ul>
                      <li><Link href="/about" onClick={closeNavigation}>About Star Police Academy</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/courses" onClick={closeNavigation}>Courses</Link>
                    <ul>
                      <li><Link href="/tnusrb" onClick={closeNavigation}>Tamilnadu Police Constable TNUSRB</Link></li>
                      <li><Link href="/sub-inspector" onClick={closeNavigation}>Tamilnadu Police Sub Inspector</Link></li>
                      <li><Link href="/indian-army" onClick={closeNavigation}>Agnipath - Indian Army</Link></li>
                      <li><Link href="/indian-navy" onClick={closeNavigation}>Agnipath - Indian Navy</Link></li>
                      <li><Link href="/indian-air-force" onClick={closeNavigation}>Indian Air Force</Link></li>
                      <li><Link href="/rpf" onClick={closeNavigation}>Railway Protection Force</Link></li>
                      <li><Link href="/capf" onClick={closeNavigation}>CRPF,CISF,SSB,ITBF Course</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/notification" onClick={closeNavigation}>Notifications</Link>
                    <ul>
                      <li><Link href="/notification" onClick={closeNavigation}>Current Affairs</Link></li>
                      <li><Link href="/youtube" onClick={closeNavigation}>Youtube Channel</Link></li>
                      <li><Link href="/test-batch" onClick={closeNavigation}>Test Batches</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/training" onClick={closeNavigation}>Training</Link>
                    <ul>
                      <li><Link href="/toppers" onClick={closeNavigation}>Toppers and Achievers</Link></li>
                      <li><Link href="/materials" onClick={closeNavigation}>Training Materials</Link></li>
                      <li><Link href="/questions" onClick={closeNavigation}>Question papers</Link></li>
                      <li><Link href="/ansewrkey" onClick={closeNavigation}>Answer Keys</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/contact" onClick={closeNavigation}>Contact</Link></li>
                  <li><Link href="/register" onClick={closeNavigation}>Register</Link></li>
                </ul>
                <div className="searchbar-part">
                  <div className="phone-part">
                    <a href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`}>
                      <PhoneIcon /> {contact.phonePrimary}
                    </a>
                  </div>
                  <div className="react-logins">
                    <Link href="/register" onClick={closeNavigation}>
                      Apply Now <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="react-footer" className="react-footer react-footer-two pt---120">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-cta">
            <div className="row">
              <div className="col-lg-7">
                <h4>Star Police Academy</h4>
                <h3>
                  Ready to dive in? <br /> Start your police exam coaching today.
                </h3>
              </div>
              <div className="col-lg-5 text-right">
                <Link href="/register">
                  Apply Now <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-1">
                <div className="footer-logo white">
                  <Link href="/" className="logo-text">
                    <img src={academy.footerLogo} alt="Star Police Academy" />
                  </Link>
                </div>
                <h5 className="footer-subtitle">{academy.aboutIntro}</h5>
                <ul className="footer-address">
                  <li>
                    <PhoneIcon />
                    <a href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`}>{contact.phonePrimary}</a>
                  </li>
                  <li>
                    <MailIcon />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-2">
                <h3 className="footer-title">About Us</h3>
                <div className="footer-menu">
                  <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/notification">Notifications</Link></li>
                    <li><Link href="/toppers">Toppers</Link></li>
                    <li><Link href="/training">Training</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-3">
                <h3 className="footer-title">Useful Links</h3>
                <div className="footer-menu">
                  <ul>
                    <li><Link href="/tnusrb">TNUSRB Constable</Link></li>
                    <li><Link href="/sub-inspector">Sub Inspector</Link></li>
                    <li><Link href="/materials">Training Materials</Link></li>
                    <li><Link href="/notification">News & Updates</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/register">Register</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget footer-widget-4">
                <h3 className="footer-title">Newsletter</h3>
                <div className="footer3__form">
                  <p>
                    Get the latest Star Police Academy news <br />
                    delivered to your inbox
                  </p>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <input type="email" placeholder="Enter your email" />
                    <button className="footer3__form-1" type="submit">
                      <i className="arrow_right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="react-copy-left">
            © {new Date().getFullYear()} <Link href="/">Star Police Academy.</Link> All Rights Reserved
          </div>
          <div className="react-copy-right">
            <ul className="social-links">
              <li className="follow">Follow us</li>
              <li>
                <a href="#" aria-label="Facebook">
                  <span aria-hidden="true" className="social_facebook" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <span aria-hidden="true" className="social_twitter" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <span aria-hidden="true" className="social_linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ eyebrow, title, text, center = true }) {
  return (
    <div className={`star-section-title ${center ? "text-center" : ""}`}>
      {eyebrow ? <span className="star-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function ExactBreadcrumb({ title }) {
  return (
    <div className="react-breadcrumbs">
      <div className="breadcrumbs-wrap">
        <img className="desktop" src="/assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
        <img className="mobile" src="/assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs" />
        <div className="breadcrumbs-inner">
          <div className="container">
            <div className="breadcrumbs-text">
              <h1 className="breadcrumbs-title">{title}</h1>
              <div className="back-nav">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Breadcrumb({ title }) {
  return (
    <div className="react-breadcrumbs star-breadcrumbs">
      <div className="breadcrumbs-wrap">
        <div className="breadcrumbs-inner">
          <div className="container">
            <div className="breadcrumbs-text">
              <h1 className="breadcrumbs-title">{title}</h1>
              <div className="back-nav">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="react-slider-part star-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <span className="slider-pretitle">{academy.heroSlides[0].eyebrow}</span>
            <h1 className="slider-title">
              {academy.heroSlides[0].title}
              <br />
              <em>Star Police Academy</em>
            </h1>
            <p>{academy.heroSlides[0].text}</p>
            <div className="star-hero-actions">
              <Link href="/register" className="react-btn">
                {academy.heroSlides[0].cta}
              </Link>
              <Link href="/courses" className="react-btn-border">
                How IT Works
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="star-hero-card">
              <img src={academy.logo} alt="Star Police Academy" />
              <h3>{academy.tagline}</h3>
              <p>{academy.description}</p>
              <ul>
                <li>TNUSRB Police Constable</li>
                <li>TNUSRB Sub Inspector</li>
                <li>Army, Navy, Air Force, RPF and CAPF Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section className="react_popular_topics pt---100 pb---70">
      <div className="container">
        <SectionTitle
          eyebrow="//Police Exam Training"
          title="Star Police Academy"
          text="We are one of the best training center for Police competitive exams over 15 years."
        />
        <div className="row">
          {features.map((feature) => (
            <div className="col-lg-3 col-md-6" key={feature.title}>
              <div className="star-card star-feature-card">
                <span className="star-card-icon">{feature.title.charAt(0)}</span>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
                <Link href="/about">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBlock({ detailed = false }) {
  return (
    <section className="about__area about__area_one p-relative pt---100 pb---100 star-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="star-about-panel">
              <span>//About Us</span>
              <h2>Tamil Nadu's Leading TNUSRB SI & Police Coaching Centre</h2>
              <p>{academy.aboutIntro}</p>
              <div className="star-founder">
                <strong>{academy.founder}</strong>
                <em>{academy.founderRole}</em>
              </div>
              <div className="star-about-badges">
                <span>Experts Around Tamilnadu</span>
                <span>Best Coaching Centres</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="star-history">
              {(detailed ? academy.aboutDetails : academy.aboutDetails.slice(0, 1)).map((item) => (
                <article key={item.title}>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseGrid({ limit }) {
  const visibleCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="react-course-filter back__course__area pb---100 pt---100 star-courses">
      <div className="container">
        <SectionTitle
          eyebrow="//Exams Training//"
          title="“Being with a WINNER, make you a WINNER”."
          text="Focused coaching for TNUSRB, Police, Defence and central force aspirants."
        />
        <div className="row">
          {visibleCourses.map((course) => (
            <div className="col-lg-4 col-md-6" key={course.key}>
              <article className="star-card star-course-card">
                <img src={course.image} alt={course.shortTitle} />
                <div className="star-course-card-content">
                  <h3>{course.shortTitle}</h3>
                  <p>{course.summary}</p>
                  <Link href={`/${course.key}`}>Read More</Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBlock() {
  return (
    <section className="count__area star-stats">
      <div className="container">
        <div className="row">
          {stats.map((item) => (
            <div className="col-lg col-md-4 col-6" key={item.label}>
              <div className="star-stat">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingSteps() {
  return (
    <section className="star-training pt---100 pb---100">
      <div className="container">
        <SectionTitle eyebrow="//How we Train//" title="How it helps your career succeed" />
        <div className="row">
          {trainingSteps.map((step) => (
            <div className="col-lg-3 col-md-6" key={step.number}>
              <div className="star-card star-step">
                <span>{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="star-testimonials pt---100 pb---100">
      <div className="container">
        <SectionTitle title="Testimonials" text="What students say about Star Police Academy." />
        <div className="row">
          {testimonials.map((item) => (
            <div className="col-lg-6" key={item.name}>
              <blockquote className="star-card star-testimonial">
                <p>{item.text}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQList({ limit }) {
  const visibleFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="star-faq pt---100 pb---100">
      <div className="container">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {visibleFaqs.map((item) => (
              <details className="star-faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="star-cta">
      <div className="container">
        <div className="star-cta-inner">
          <h2>Ready to Serve and Protect? Join Our Star Police Academy Today!</h2>
          <div>
            <Link href="/register" className="react-btn">
              Register
            </Link>
            <a href={contact.whatsapp} className="react-btn-border" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExactHomeHero() {
  return (
    <div className="hero3__area p-relative">
      <div className="hero3__shape">
        <img className="hero3__shape-1" src="/assets/images/banner2/shape/01.png" alt="Banner shape" />
        <img className="hero3__shape-2" src="/assets/images/banner2/shape/02.png" alt="Banner shape" />
        <img className="hero3__shape-3" src="/assets/images/banner2/shape/03.png" alt="Banner shape" />
      </div>
      <div className="container p-relative">
        <div className="hero3__content">
          <h1 className="hero3__title">
            Learn Course Online <br /> <em>New Today</em>
          </h1>
          <img src="/assets/images/banner2/line_01.png" alt="line" />
          <form
            className="search-form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input type="text" className="form-input" placeholder="Search Course" />
            <button type="submit" className="form-button" aria-label="Search">
              <SearchIcon />
            </button>
          </form>
          <p className="hero3__paragraph">
            Have questions? <Link href="/contact">Get Free Sample <ArrowIcon /></Link>
          </p>
        </div>
        <div className="about__content">
          <ul>
            {homeHeroStats.map((item) => (
              <li key={item.label}>
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="text">
                  <h4>{item.value}</h4>
                  <p>{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero3__image">
          <img className="hero3__image-1" src="/assets/images/banner2/normal-image/01.png" alt="student" />
          <img className="hero3__image-2" src="/assets/images/banner2/normal-image/02.png" alt="course highlights" />
        </div>
      </div>
    </div>
  );
}

function ExactPopularTopics() {
  return (
    <div className="react_populars_topics pt---120 pb---120">
      <div className="container">
        <div className="react__title__section react__title__section2">
          <div className="row align-v">
            <div className="col-md-8">
              <h2 className="react__tittle">
                Popular Topic, Which are Most <br /> Favourite To Students
              </h2>
            </div>
            <div className="col-md-4 text-right">
              <Link href="/contact">Book a visit <ArrowIcon /></Link>
            </div>
          </div>
        </div>
        <div className="row pt---30">
          {homeTopics.map((topic) => (
            <div className="col-md-3" key={topic.title}>
              <div className="item__inner">
                <div className="icon">
                  <img src={topic.icon} alt="Icon" />
                </div>
                <div className="react-content">
                  <h3 className="react-title"><Link href="/courses">{topic.title}</Link></h3>
                  <p>{topic.courses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExactAboutSection() {
  return (
    <div className="about__area about2__area p-relative pb---120">
      <div className="container about__area-width">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__image">
              <img className="react__shape__11" src="/assets/images/about/dot.png" alt="Shape" />
              <img className="react__shape__1" src="/assets/images/about/shape_02.png" alt="Shape" />
              <img src="/assets/images/about/about22.png" alt="About" />
              <img className="react__shape__2" src="/assets/images/about/shape_01.png" alt="Shape" />
              <img className="react__shape__33" src="/assets/images/about/shape_03.png" alt="Shape" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
              <h2 className="about__title">
                One of The Largest, <br /> <em>Most Online Course</em>
              </h2>
              <p className="about__paragraph">{academy.aboutIntro}</p>
              <ul>
                {trainingSteps.slice(0, 2).map((step) => (
                  <li key={step.number}><i className="icon_check" /> {step.title}</li>
                ))}
              </ul>
              <div className="about__btn">
                <Link href="/about">Read More <ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExactCourseCard({ course, index }) {
  const smallImages = [1, 5, 2, 3, 4, 5];

  return (
    <div className={`single-studies col-lg-4 grid-item ${course.filters.join(" ")}`}>
      <div className="inner-course">
        <div className="case-img">
          <Link href={`/${course.key}`} className="cate-w">{course.category}</Link>
          <img src={course.image} alt={course.category} />
        </div>
        <div className="case-content">
          <ul className="meta-course">
            <li><StarIcon /> {course.review}</li>
            <li><UserIcon /> {course.students}</li>
          </ul>
          <h4 className="case-title">
            <Link href={`/${course.key}`}>{course.title}</Link>
          </h4>
          <div className="react__user">
            <img src={`/assets/images/course/small-image/${smallImages[index]}.png`} alt={course.author} /> {course.author}
          </div>
          <ul className="react-ratings">
            <li className="react-book"><FileTextIcon /> {course.lessons}</li>
            <li className="price">{course.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ExactCourses() {
  const [activeFilter, setActiveFilter] = useState("*");

  const visibleCourses = homeCourses.filter((course) => {
    if (activeFilter === "*") {
      return true;
    }

    return course.filters.includes(activeFilter);
  });

  return (
    <div className="react-course-filter pb---100 pt---120">
      <div className="container">
        <div className="row d-flex align-items-end">
          <div className="col-lg-5">
            <div className="react__title__section text-left">
              <h2 className="react__tittle">Most Popular Courses</h2>
              <h6 className="react__subtitle">{academy.description}</h6>
            </div>
          </div>
          <div className="col-lg-7 text-right">
            <div className="react-filter">
              {courseFilterTabs.map((tab) => (
                <button
                  className={activeFilter === tab.value ? "active" : ""}
                  data-filter={tab.value === "*" ? "*" : `.${tab.value}`}
                  type="button"
                  key={tab.label}
                  onClick={() => setActiveFilter(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row react-grid">
          {visibleCourses.map((course, index) => (
            <ExactCourseCard course={course} index={index} key={course.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExactAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 4);

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="accordion__area p-relative pt---110">
      <div className="accordion__shape">
        <img className="accordion__shape-1" src="/assets/images/acc.png" alt="shape" />
        <img className="accordion__shape-1a" src="/assets/images/banner2/shape_01.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="accordion__wrapper">
              <div className="accordion__wrapper-1">
                <h6>Find Your Answers</h6>
                <h2>
                  Have any thought? <br />Look here.
                </h2>
                <p>{academy.description}</p>
                {showAllFaqs ? (
                  <Link href="/faq" className="border-btns">
                    View All FAQs <ArrowIcon />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="border-btns exact-read-more-btn"
                    onClick={() => {
                      setShowAllFaqs(true);
                      if (faqs.length > 4) {
                        setOpenIndex(4);
                      }
                    }}
                  >
                    Read More <ArrowIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion__wrapper1">
              <div className="accordion" id="accordionExample">
                {visibleFaqs.map((item, index) => (
                  <div className="accordion-item" key={`${item.question}-${index}`}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={openIndex === index}
                        onClick={() => toggleFaq(index)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}>
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExactInstructors() {
  return (
    <div className="instructor__area pt---115 pb---85 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-sm-6">
            <div className="instructor__content instructor__content-one">
              <div className="instructors_lefts">
                <h6>Course Instructors</h6>
                <h2>
                  Meet our <br /> Class Instructors
                </h2>
              </div>
            </div>
          </div>
          {homeInstructors.map((instructor) => (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6" key={instructor.name}>
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src={instructor.image} alt={instructor.name} />
                </div>
                <div className="instructor__content-2">
                  <h4><Link href="/about">{instructor.name}</Link></h4>
                  <p>{instructor.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExactClients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const activeItem = testimonials[activeTestimonial];

  return (
    <div className="react-clients react-clientso pt---120 pb---120">
      <div className="container">
        <div className="react__title__section text-center">
          <h6 className="react__subtitle">Student Community Feedback</h6>
          <h2 className="react__tittle">What our clients say about</h2>
        </div>
        <div className="exact-client-slider-wrap">
          <div className="client-slider exact-client-slider">
            <button
              type="button"
              className="exact-client-arrow exact-client-prev"
              aria-label="Previous testimonial"
              onClick={() => setActiveTestimonial((current) => (current + testimonials.length - 1) % testimonials.length)}
            >
              ‹
            </button>
            <div className="single-client" key={activeTestimonial}>
              <div className="client-bottom">
                <span className="client-author"><img src="/assets/images/testimonial/testimonial.png" alt="Testimonials" /></span>
              </div>
              <div className="client-content">
                <span className="client-title">{activeItem.name} <em> {activeItem.role}</em></span>
                <p>{activeItem.text}</p>
                <div className="testimonial__ratings">
                  <em className="icon_star" />
                  <em className="icon_star" />
                  <em className="icon_star" />
                  <em className="icon_star" />
                  <em className="icon_star_alt" />
                  <span><em>4.9</em> (14 Reviews)</span>
                </div>
                <img className="comma" src="/assets/images/testimonial/coma.png" alt="quote" />
              </div>
            </div>
            <button
              type="button"
              className="exact-client-arrow exact-client-next"
              aria-label="Next testimonial"
              onClick={() => setActiveTestimonial((current) => (current + 1) % testimonials.length)}
            >
              ›
            </button>
            <div className="exact-client-dots" aria-label="Testimonial slides">
              {testimonials.map((item, index) => (
                <button
                  type="button"
                  key={`${item.name}-${index}`}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={index === activeTestimonial ? "is-active" : ""}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExactBlog() {
  return (
    <div className="react-blog__area blog__area pt---90 pb---120">
      <div className="container blog__width pb---120">
        <div className="react__title__section text-center">
          <h6 className="react__subtitle">Recent News.</h6>
          <h2 className="react__tittle">Star Police Academy News and Blogs</h2>
        </div>
        <div className="row">
          {homeBlogCards.map((item) => (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12" key={item.title}>
              <div className="blog__card mb-50">
                <div className="blog__thumb w-img p-relative">
                  <Link className="blog__thumb--image" href={item.href}>
                    <img src={item.image} alt={item.title} />
                  </Link>
                  <em className="b_date">{item.date}</em>
                </div>
                <div className="blog__card--content">
                  <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">{item.category}</span>
                    <h3 className="blog__card--title"><Link href={item.href}>{item.title}</Link></h3>
                  </div>
                  <div className="blog__card--icon d-flex align-items-center">
                    <div className="blog__card--icon-1">
                      <UserIcon />
                      <span>{item.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExactHomePage() {
  return (
    <div className="react-wrapper-inner exact-home-page">
      <ExactHomeHero />
      <ExactPopularTopics />
      <ExactAboutSection />
      <ExactCourses />
      <ExactAccordion />
      <ExactInstructors />
      <ExactClients />
      <ExactBlog />
    </div>
  );
}

function EchoolingHero() {
  return (
    <section className="echooling-hero">
      <div className="container">
        <div className="echooling-hero-stage">
          <img className="echooling-hero-shape echooling-hero-shape-one" src="/assets/images/hero/04.png" alt="" />
          <img className="echooling-hero-shape echooling-hero-shape-two" src="/assets/images/hero/shape_03.png" alt="" />
          <img className="echooling-hero-shape echooling-hero-shape-three" src="/assets/images/hero/shape_05.png" alt="" />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="echooling-hero-copy">
                <h1>
                  Learn Course Online
                  <br />
                  <span>New Today</span>
                </h1>
                <img className="echooling-title-line" src="/assets/images/banner2/line_01.png" alt="" />
                <form
                  className="echooling-search"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <input type="search" placeholder="Search Course" aria-label="Search course" />
                  <button type="submit" aria-label="Search">
                    ⌕
                  </button>
                </form>
                <p className="echooling-hero-question">
                  Have questions? <Link href="/contact">Get Free Sample →</Link>
                </p>
                <div className="echooling-hero-stats-inline">
                  <div>
                    <strong>9.4k+</strong>
                    <span>Total active students taking gifted courses.</span>
                  </div>
                  <div>
                    <strong>70+</strong>
                    <span>Available field programs gifted courses.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="echooling-hero-visual">
                <div className="echooling-hero-circle" />
                <img className="echooling-hero-person" src="/assets/images/hero/02.png" alt="Student learning online" />
                <div className="echooling-floating-card echooling-floating-card-left">
                  <small>Online Courses</small>
                  <span>25K+</span>
                  <p>Largest collection in every course.</p>
                </div>
                <div className="echooling-floating-card echooling-floating-card-right">
                  <small>Congratulations</small>
                  <span>Admission Completed</span>
                  <p>Start learning today</p>
                </div>
                <div className="echooling-floating-card echooling-floating-card-bottom">
                  <small>Total Students</small>
                  <span>37K+</span>
                  <p>Experts Instructor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EchoolingSectionHeading({ eyebrow, title, action }) {
  return (
    <div className="echooling-section-heading">
      <div>
        {eyebrow ? <span>{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      {action ? (
        <Link href={action.href} className="echooling-small-button">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}

function EchoolingTopics() {
  return (
    <section className="echooling-topics">
      <div className="container">
        <EchoolingSectionHeading
          title="Popular Topic, Which are Most Favourite To Students"
          action={{ label: "Book a visit", href: "/contact" }}
        />
        <div className="row">
          {homeTopics.map((topic) => (
            <div className="col-lg-3 col-sm-6" key={topic.title}>
              <Link href="/courses" className="echooling-topic-card">
                <img src={topic.icon} alt="" />
                <h3>{topic.title}</h3>
                <p>{topic.courses}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EchoolingVideoBlock() {
  return (
    <section className="echooling-video-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="echooling-video-card">
              <img src="/assets/images/course/1.png" alt="Online class preview" />
              <a className="echooling-play-button" href="/courses" aria-label="Play intro video">
                ▶
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="echooling-video-copy">
              <span>Start learning today</span>
              <h2>
                One of The Largest,
                <br />
                <strong>Most Online Course</strong>
              </h2>
              <p>
                Why I say old chap that is spiffing in my flat such a fibber mufty mush,
                porkies barney pukka only a quid a what a load of rubbish good time.
              </p>
              <ul>
                <li>Access more then 100K online courses</li>
                <li>Upskill your organization.</li>
              </ul>
              <Link href="/courses" className="echooling-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EchoolingCourseGrid() {
  return (
    <section className="echooling-course-section">
      <div className="container">
        <div className="echooling-course-top">
          <EchoolingSectionHeading title="Most Popular Courses" />
          <p className="echooling-course-subtitle">
            Why I say old chap that is spiffing in my flat such a fibber mufty.
          </p>
          <div className="echooling-course-tabs" aria-label="Course categories">
            {["See All", "Trending", "Featured", "Popularity", "Web Design"].map((item) => (
              <button type="button" key={item} className={item === "See All" ? "is-active" : ""}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {homeCourses.map((course) => (
            <div className="col-lg-4 col-md-6" key={course.title}>
              <article className="echooling-course-card">
                <Link href="/courses" className="echooling-course-image">
                  <img src={course.image} alt={course.title} />
                  <span>{course.category}</span>
                </Link>
                <div className="echooling-course-body">
                  <div className="echooling-course-meta">
                    <span>★ {course.review}</span>
                    <span>{course.students}</span>
                  </div>
                  <h3>
                    <Link href="/courses">{course.title}</Link>
                  </h3>
                  <p className="echooling-course-author">{course.author}</p>
                  <div className="echooling-course-footer">
                    <span>{course.lessons}</span>
                    <strong>{course.price}</strong>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EchoolingQuestionSection() {
  return (
    <section className="echooling-questions">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="echooling-question-copy">
              <span>Find Your Answers</span>
              <h2>
                Have any thought?
                <br />
                Look here.
              </h2>
              <p>
                Completely plagiarize fully researched collaboration and
                idea-sharing for covalent.
              </p>
              <Link href="/faq" className="echooling-outline-btn">
                Read More →
              </Link>
              <div className="echooling-question-decoration" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="echooling-accordion">
              {faqs.slice(0, 4).map((item, index) => (
                <details key={`${item.question}-${index}`} open={index === 0}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EchoolingInstructors() {
  return (
    <section className="echooling-instructors">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="echooling-instructors-title">
              <span>Course Instructors</span>
              <h2>Meet our Class Instructors</h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="echooling-instructor-orbit">
              {homeInstructors.map((instructor, index) => (
                <div className={`echooling-instructor-card echooling-instructor-${index + 1}`} key={instructor.name}>
                <img src={instructor.image} alt={instructor.name} />
                <h3>{instructor.name}</h3>
                <p>{instructor.role}</p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EchoolingTestimonials() {
  return (
    <section className="echooling-testimonials">
      <div className="container">
        <EchoolingSectionHeading eyebrow="Graat Words About Echooling." title="What our clients say about" />
        <div className="echooling-testimonial-wrap">
          <button type="button" className="echooling-slider-arrow echooling-slider-prev" aria-label="Previous testimonial">
            ‹
          </button>
          <div className="echooling-testimonial-card">
            <img src="/assets/images/testimonial/testimonial.png" alt="Student testimonial" />
            <div>
              <span className="echooling-quote-mark">"</span>
              <h3>Justin Case <em>Student</em></h3>
              <p>
                Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed,
                convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                Quisque velit nisi, pretium ut lacinia in.
              </p>
              <span className="echooling-rating">★★★★☆ <em>4.9</em> (14 Reviews)</span>
            </div>
          </div>
          <button type="button" className="echooling-slider-arrow echooling-slider-next" aria-label="Next testimonial">
            ›
          </button>
        </div>
        <div className="echooling-blog-strip">
          {homeBlogCards.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt="" />
              <div className="echooling-blog-date">{item.date}</div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <Link href="/blog">Read More</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EchoolingCta() {
  return (
    <section className="echooling-cta">
      <div className="container">
        <div className="echooling-cta-inner">
          <div>
            <span>Join our course today</span>
            <h2>Ready to dive in? Start your free Course today.</h2>
          </div>
          <Link href="/register" className="echooling-white-button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return <ExactHomePage />;
}

function AboutIntroPageSection() {
  return (
    <div className="about__area about__area_one p-relative pt---100 pb---120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__image">
              <img src="/assets/images/about/ab.png" alt="Star Police Academy" />
              <img className="react__shape__ab" src="/assets/images/about/badge.png" alt="Best Academy badge" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
              <h2 className="about__title">
                Welcome to <br /> <em>Star Police Academy</em>
              </h2>
              <p className="about__paragraph">{academy.aboutIntro}</p>
              <p className="about__paragraph2">
                Have questions? <Link href="/contact">Get Free Guide</Link>
              </p>
              <p>
                Star Police Academy is an organisation with state of the art competence to provide relevant and
                comprehensive training for Police Exams coaching in Vellore, dedicated for TNUSRB PC, Army, Navy,
                Air Force, SI and PC exams.
              </p>
              <ul>
                <li>
                  <Link href="/courses" className="more-about">
                    Read More <ArrowIcon />
                  </Link>
                </li>
                <li className="last-li">
                  <em>Get Support</em>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutLearningSection() {
  return (
    <div className="react_populars_topics react_populars_topics2 react_populars_topics_about pb---80">
      <div className="react__title__section react__title__section-all">
        <div className="container exact-about-coaching-head">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6>Police Exam Coaching Programs</h6>
              <h2 className="react__tittle">
                Star Police Academy Coaching For <br /> TNUSRB, SI &amp; Defence Exams
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pt---30">
          {aboutLearningCards.map((card, index) => (
            <div className="col-md-4" key={card.title}>
              <div className="item__inner">
                <div className="icon">
                  <img src={aboutLearningIcons[index]} alt={card.title} />
                </div>
                <div className="react-content">
                  <h3 className="react-title">
                    <Link href="/courses">{card.title}</Link>
                  </h3>
                  <p>{card.text}</p>
                  <Link href="/courses">
                    Learn More <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutInstructorsSection() {
  return (
    <div className="instructor__area pt---0 pb---110 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-sm-6">
            <div className="instructor__content instructor__content-one">
              <div className="instructors_lefts">
                <h6>Course Instructors</h6>
                <h2>
                  Meet our <br /> Class Instructors
                </h2>
              </div>
            </div>
          </div>
          {homeInstructors.map((instructor) => (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6" key={instructor.name}>
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src={instructor.image} alt={instructor.name} />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <Link href="/about">{instructor.name}</Link>
                  </h4>
                  <p>{instructor.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutFeedbackSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 991) {
        setVisibleCount(1);
        return;
      }

      setVisibleCount(Math.min(3, testimonials.length));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleItems = Array.from({ length: visibleCount }, (_, index) => {
    const item = testimonials[(startIndex + index) % testimonials.length];
    return {
      ...item,
      image: aboutTestimonialImages[(startIndex + index) % aboutTestimonialImages.length],
    };
  });

  const showPrevious = () => {
    setStartIndex((current) => (current + testimonials.length - 1) % testimonials.length);
  };

  const showNext = () => {
    setStartIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="student_satisfaction-section pt---110 pb---120">
      <div className="container">
        <div className="react__title__section-all pb---30">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6>Student Satisfaction</h6>
              <h2 className="react__tittle">
                Student Community <br />Feedback
              </h2>
            </div>
          </div>
        </div>
        <div className="feedreact-slider exact-about-feedback-slider">
          <button
            type="button"
            className="exact-feedback-arrow exact-feedback-prev"
            aria-label="Previous testimonial"
            onClick={showPrevious}
          >
            ‹
          </button>
          <div className="exact-about-feedback-track">
            {visibleItems.map((item, index) => (
              <div className="event__card" key={`${item.name}-${startIndex}-${index}`}>
                <div className="event__card--content">
                  <div className="event__card--content-area">
                    <div className="testimonial__ratings">
                      <em className="icon_star" />
                      <em className="icon_star" />
                      <em className="icon_star" />
                      <em className="icon_star" />
                      <em className="icon_star_alt" />
                      <span> (14 Reviews) </span>
                    </div>
                    <div className="parag">{item.text}</div>
                  </div>
                  <img className="poly" src="/assets/images/testimonial/poly.png" alt="" />
                </div>
                <div className="author-sec">
                  <div className="icon">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="text">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="exact-feedback-arrow exact-feedback-next"
            aria-label="Next testimonial"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      </div>
      <div className="count__area2 pb---100">
        <div className="container">
          <ul className="row">
            {aboutCounterItems.map((item) => (
              <li className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6" key={item.label}>
                <div className="count__content">
                  <div className="icon">
                    <img src={item.icon} alt={item.label} />
                  </div>
                  <div className="text">
                    <span className="count__content-title counter">{item.value}</span>
                    <em>{item.suffix}</em>
                    <p className="count__content">{item.label}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="react-wrapper-inner exact-about-page">
      <ExactBreadcrumb title="About Us" />
      <AboutIntroPageSection />
      <AboutLearningSection />
      <AboutInstructorsSection />
      <AboutFeedbackSection />
    </div>
  );
}

function CoursesPage() {
  return (
    <>
      <Breadcrumb title="Courses" />
      <CourseGrid />
      <TrainingSteps />
      <CTA />
    </>
  );
}

function CourseDetailPage({ courseKey }) {
  const course = courses.find((item) => item.key === courseKey) || courses[0];

  return (
    <>
      <Breadcrumb title={course.shortTitle} />
      <section className="star-course-detail pt---100 pb---100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <article className="star-card star-detail-card">
                <img src={course.image} alt={course.shortTitle} />
                <span>Star Police Academy</span>
                <h2>Explore our {course.shortTitle} Course</h2>
                <p>{course.summary}</p>
                {course.sections.map((section) => (
                  <div className="star-detail-section" key={section.title}>
                    <h3>{section.title}</h3>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </article>
            </div>
            <div className="col-lg-4">
              <aside className="star-card star-sidebar">
                <h3>Courses</h3>
                <ul>
                  {courses.map((item) => (
                    <li key={item.key}>
                      <Link href={`/${item.key}`}>{item.shortTitle}</Link>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="react-btn">
                  Register
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function ToppersPage() {
  return (
    <>
      <Breadcrumb title="Toppers and Achievers" />
      <CourseGrid limit={4} />
      <Testimonials />
      <CTA />
    </>
  );
}

function FormMessage({ message }) {
  return message ? <p className="star-form-message">{message}</p> : null;
}

function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="star-form"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("Thank you. Your enquiry is ready to be sent to Star Police Academy.");
      }}
    >
      <div className="row">
        <div className="col-md-6">
          <input required type="text" placeholder="Name" />
        </div>
        <div className="col-md-6">
          <input required type="email" placeholder="Email" />
        </div>
        <div className="col-md-6">
          <input required type="text" placeholder="Subject" />
        </div>
        <div className="col-md-6">
          <input type="tel" placeholder="Phone" />
        </div>
        <div className="col-12">
          <textarea required placeholder="Message *" rows={6} />
        </div>
        <div className="col-12">
          <button type="submit" className="react-btn">
            Send Message →
          </button>
          <FormMessage message={message} />
        </div>
      </div>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <section className="star-contact star-contact-screen pt---100 pb---100">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-4">
              <div className="star-contact-info-panel">
                <div className="star-contact-info-item">
                  <span>⌂</span>
                  <div>
                    <h3>Address</h3>
                    <p>{contact.address}</p>
                  </div>
                </div>
                <div className="star-contact-info-item">
                  <span>☎</span>
                  <div>
                    <h3>Contact</h3>
                    <p>
                      Mobile: {contact.phonePrimary}
                      <br />
                      Office: {contact.phoneSecondary}
                      <br />
                      Mail: {contact.email}
                    </p>
                  </div>
                </div>
                <div className="star-contact-info-item">
                  <span>◷</span>
                  <div>
                    <h3>Hour of operation</h3>
                    <p>
                      Monday - Saturday: 09:00 - 20:00
                      <br />
                      Sunday: Contact office for batch timings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="star-contact-form-panel">
                <h2>
                  Questions?
                  <br />
                  Feel free to contact us.
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="star-contact-map">
            <iframe
              title="Star Police Academy location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function RegistrationForm() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="star-form"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("Application captured. Please contact the office to complete admission.");
      }}
    >
      <select required defaultValue="">
        <option value="" disabled>
          Courses Willing to Join *
        </option>
        {registrationCourses.map((course) => (
          <option key={course}>{course}</option>
        ))}
      </select>
      <div className="row">
        {[
          "Name*",
          "Father Name*",
          "Mother Name*",
          "Husband/Spouse Name*",
          "Date of Birth*",
          "Nationality*",
          "Religion*",
          "Community*",
          "Educational Qualification*",
          "Medium of Instruction*",
          "Height*",
          "Covid vaccination Particulars*",
          "Mobile Number*",
          "Parents/Spouse Mobile No*",
        ].map((placeholder) => (
          <div className="col-md-6" key={placeholder}>
            <input required={placeholder.endsWith("*")} type="text" placeholder={placeholder} />
          </div>
        ))}
      </div>
      <div className="star-radio-group">
        <span>Gender *</span>
        <label>
          <input required type="radio" name="gender" /> Male
        </label>
        <label>
          <input required type="radio" name="gender" /> Female
        </label>
      </div>
      <textarea placeholder="Full Address" rows={5} />
      <input required type="text" placeholder="Type the word *" />
      <button type="submit" className="react-btn">
        Apply Now
      </button>
      <FormMessage message={message} />
    </form>
  );
}

function RegisterPage() {
  return (
    <>
      <Breadcrumb title="Students Application" />
      <section className="star-register pt---100 pb---100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <SectionTitle
                eyebrow="Star Police Academy Registration"
                title="Students Application"
                text="Star Police Academy - Students Registration Application."
                center={false}
              />
              <RegistrationForm />
            </div>
            <div className="col-lg-5">
              <div className="star-card star-terms">
                <h3>Terms & Conditions:</h3>
                <ul>
                  {terms.map((term) => (
                    <li key={term}>{term}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQPage() {
  return (
    <>
      <Breadcrumb title="Frequently Asked Questions" />
      <FAQList />
      <CTA />
    </>
  );
}

function QuestionPapersPage() {
  return (
    <>
      <Breadcrumb title="Questions Paper" />
      <section className="star-question-papers pt---70 pb---100">
        <div className="container">
          <SectionTitle eyebrow="Question papers" title="Police Training Question papers" />
          <div className="star-question-list">
            {questionPapers.map((paper) => (
              <article className="star-question-card" key={`${paper.title}-${paper.testNo}-${paper.date}`}>
                <div className="star-question-main">
                  <span className="star-question-category">{paper.category}</span>
                  <h3>{paper.title}</h3>
                  <strong>{paper.testNo}</strong>
                  <p>{paper.description}</p>
                </div>
                <div className="star-question-action">
                  <span>
                    Date : <strong>{paper.date}</strong>
                  </span>
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                    Download Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function NotificationPage() {
  return (
    <>
      <Breadcrumb title="Recruitment Notification" />
      <section className="star-notification pt---80 pb---100">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mb-4 mb-lg-0">
              <div className="star-notification-intro">
                <div className="star-notification-video">
                  <a
                    aria-label="Watch Star Police Academy intro video"
                    href="https://www.youtube.com/watch?v=1ppfH0p_UYM"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▶
                  </a>
                </div>
                <div className="star-notification-copy">
                  <p>
                    Direct Recruitment of Sub-Inspectors of Police (Taluk, AR & TSP) - 2023.
                    <br />
                    <br />
                    The TNUSRB SI notification 2023 Notification will be issued soon at the
                    official website tnusrb.tn.gov.in.
                    <br />
                    <br />
                    The online application process will be conducted from ? at the official
                    website.
                  </p>
                  <div className="star-notification-support">
                    <span>☏</span>
                    <div>
                      <h3>“Being With A WINNER", Make You A WINNER”.</h3>
                      <strong>{contact.phonePrimary}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="star-notification-counter">
                <h2>12</h2>
                <h5>Years Of Experience</h5>
                <p>
                  1000+ Job Placement
                  <br />
                  Join US
                </p>
              </div>
            </div>
          </div>

          <div className="star-schedule-frame">
            <iframe
              title="SPA Test Schedule"
              src="https://www.starpoliceacademy.in/SPA%20Test%20Schedule.pdf#toolbar=0"
            />
          </div>

          <div className="star-notification-list">
            {notificationItems.map((item) => (
              <article className="star-notification-card" key={`${item.title}-${item.date}`}>
                <div className="star-notification-main">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="star-notification-subtitle">{item.subtitle}</p>
                  <p>{item.description}</p>
                </div>
                <div className="star-notification-download">
                  <p>
                    <strong>Date:</strong> {item.date}
                  </p>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    Download Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function YoutubePage() {
  return (
    <>
      <Breadcrumb title="Our Recent Videos" />
      <section className="star-youtube-page pt---100 pb---100">
        <div className="container">
          <div className="row">
            {youtubeVideos.map((videoId) => (
              <div className="col-md-6 col-xl-4" key={videoId}>
                <div className="star-video-card">
                  <iframe
                    title={`Star Police Academy video ${videoId}`}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PageContent({ page }) {
  switch (page.type) {
    case "about":
      return <AboutPage />;
    case "courses":
      return <CoursesPage />;
    case "course":
      return <CourseDetailPage courseKey={page.courseKey} />;
    case "register":
      return <RegisterPage />;
    case "contact":
      return <ContactPage />;
    case "faq":
      return <FAQPage />;
    case "questions":
      return <QuestionPapersPage />;
    case "notification":
      return <NotificationPage />;
    case "youtube":
      return <YoutubePage />;
    case "toppers":
      return <ToppersPage />;
    case "home":
    default:
      return <HomePage />;
  }
}

export default function StarSite({ page }) {
  const title = useMemo(() => page?.title || academy.name, [page]);

  useEffect(() => {
    document.body.className = "star-site";
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }, []);

  return (
    <>
      <SiteHead title={title} />
      <Header />
      <main className="react-wrapper star-main">
        <PageContent page={page} />
      </main>
      <Footer />
      <div id="backscrollUp" className="home">
        <span aria-hidden="true" className="arrow_carrot-up" />
      </div>
    </>
  );
}
