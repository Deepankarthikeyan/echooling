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

const echoolingNavItems = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home Main", href: "/" },
      { label: "Online Courses", href: "/courses" },
    ],
  },
  {
    label: "Pages",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Instructors", href: "/instructors" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Course Grid", href: "/courses" },
      { label: "Popular Courses", href: "/courses" },
      { label: "Course Details", href: "/tnusrb" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Resources", href: "/materials" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const echoolingTopics = [
  { title: "Art & Design", courses: "15 Courses", icon: "/assets/images/topics/1.svg" },
  { title: "Programming", courses: "38 Courses", icon: "/assets/images/topics/2.png" },
  { title: "Accounting", courses: "24 Courses", icon: "/assets/images/topics/3.svg" },
  { title: "Content Writing", courses: "17 Courses", icon: "/assets/images/topics/4.svg" },
];

const echoolingCourses = [
  {
    title: "The Most Complete Design Thinking Course On The Market.",
    category: "Web Design",
    image: "/assets/images/course-filter/1.jpg",
    lessons: "Lessones",
    students: "44 Students",
    review: "4.5 review",
    author: "Justin Case",
    price: "$34.00",
  },
  {
    title: "Everything You Need to Know About Business.",
    category: "Marketing",
    image: "/assets/images/course-filter/2.jpg",
    lessons: "9 Lessones",
    students: "55 Students",
    review: "3.5 review",
    author: "Natasha Pawel",
    price: "$89.00",
  },
  {
    title: "Statistics Data Scince and Business Analysis",
    category: "Development",
    image: "/assets/images/course-filter/3.jpg",
    lessons: "8 Lessones",
    students: "44 Students",
    review: "3.8 review",
    author: "Will Barrow",
    price: "$39.00",
  },
  {
    title: "Become a UI/UX Designer Everything You need To Know.",
    category: "Beginner",
    image: "/assets/images/course-filter/4.jpg",
    lessons: "70 Lessones",
    students: "49 Students",
    review: "4.2 review",
    author: "Justin Case",
    price: "$34.00",
  },
  {
    title: "Learn Essentials of User Interface Design in Figma.",
    category: "Audio & Music",
    image: "/assets/images/course-filter/5.jpg",
    lessons: "66 Lessones",
    students: "46 Students",
    review: "4.9 review",
    author: "Penny Tool",
    price: "$74.00",
  },
  {
    title: "AWS Certified Solutions Architect Associate.",
    category: "Mechanical",
    image: "/assets/images/course-filter/6.jpg",
    lessons: "7 Lessones",
    students: "75 Students",
    review: "4.8 review",
    author: "Auston Ager",
    price: "$94.00",
  },
];

const echoolingInstructors = [
  { name: "Jason Response", role: "Education Assistant", image: "/assets/images/instructor/01.jpg" },
  { name: "Jonquil Von", role: "Teaching Assistant", image: "/assets/images/instructor/02.jpg" },
  { name: "Piff Jenkins", role: "Teacher", image: "/assets/images/instructor/03.jpg" },
  { name: "Brian Cumin", role: "Lead Teacher", image: "/assets/images/instructor/04.jpg" },
  { name: "Hanson Deck", role: "Teacher", image: "/assets/images/instructor/05.jpg" },
  { name: "Alan Fresco", role: "Teacher", image: "/assets/images/instructor/06.jpg" },
];

const echoolingBlogCards = [
  {
    date: "April 12",
    category: "Campaigns",
    title: "Fostering future Schools & social Innovation",
    image: "/assets/images/blog/1.jpg",
    author: "Nerte Gronw",
  },
  {
    date: "April 18",
    category: "Education",
    title: "The Surprising Reason College Tuition",
    image: "/assets/images/blog/2.jpg",
    author: "Charlie Doyle",
  },
  {
    date: "June 16",
    category: "Students",
    title: "Those other College Expenses about",
    image: "/assets/images/blog/3.jpg",
    author: "Owen Christ",
  },
  {
    date: "May 22",
    category: "Strategy",
    title: "Creative Skills Improve Course Growth",
    image: "/assets/images/blog/4.png",
    author: "Owen Christ",
  },
];

const echoolingFaqs = [
  {
    question: "How delete my account?",
    answer:
      "Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse.",
  },
  {
    question: "You’ll have everything you’ll need?",
    answer:
      "The bee's knees chimney pot William chap Jeffrey mush tinkety tonk old fruit cup of tea, bamboozled dropped a clanger.",
  },
  {
    question: "How delete my account?",
    answer:
      "The bee's knees chimney pot William chap Jeffrey mush tinkety tonk old fruit cup of tea, bamboozled dropped a clanger.",
  },
  {
    question: "Website & Mobile App Design?",
    answer:
      "The bee's knees chimney pot William chap Jeffrey mush tinkety tonk old fruit cup of tea, bamboozled dropped a clanger.",
  },
];

function SiteHead({ title }) {
  const pageTitle = title ? `${title} | Echooling` : "Echooling - Online Learning Platform";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Echooling online learning homepage with courses, instructors, FAQs, and student testimonials." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="/assets/images/fav.png" />
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

function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const closeNavigation = () => {
    setOpen(false);
    setOpenDropdown("");
  };

  return (
    <header className="echooling-header">
      <div className="container">
        <nav className="echooling-header-inner" aria-label="Main navigation">
          <Link href="/" className="echooling-logo" onClick={closeNavigation}>
            <img src="/assets/images/logo.png" alt="Echooling" />
          </Link>
          <button
            type="button"
            className={`echooling-menu-button ${open ? "is-open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`echooling-nav-panel ${open ? "is-open" : ""}`}>
            <ul className="echooling-nav">
              {echoolingNavItems.map((item) => (
                <li
                  className={item.children ? "has-dropdown" : ""}
                  key={item.label}
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.children && setOpenDropdown("")}
                >
                  <div className="echooling-nav-link-row">
                    <Link href={item.href} onClick={closeNavigation}>
                      {item.label}
                    </Link>
                    {item.children ? (
                      <button
                        aria-expanded={openDropdown === item.label}
                        aria-label={`Toggle ${item.label} menu`}
                        className="echooling-dropdown-toggle"
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          setOpenDropdown((current) => (current === item.label ? "" : item.label));
                        }}
                      >
                        <span>⌄</span>
                      </button>
                    ) : null}
                  </div>
                  {item.children ? (
                    <ul className={`echooling-dropdown ${openDropdown === item.label ? "is-open" : ""}`}>
                      {item.children.map((child) => (
                        <li key={`${item.label}-${child.label}`}>
                          <Link href={child.href} onClick={closeNavigation}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="echooling-header-actions">
              <a className="echooling-phone" href="tel:+40276244183">
                <span>☎</span>
                +(402) 762 441 83
              </a>
              <Link href="/contact" className="echooling-signin" onClick={closeNavigation}>
                Book a visit →
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="echooling-footer">
      <div className="echooling-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="echooling-footer-widget echooling-footer-brand">
                <Link href="/">
                  <img src="/assets/images/footer-logo.png" alt="Echooling" />
                </Link>
                <p>
                  There are course and event custom post types so you can build and manage
                  learning content with a clean education layout.
                </p>
                <ul className="echooling-footer-contact">
                  <li>
                    <span>☎</span>
                    <a href="tel:+18002345678">+1 (800) 234 5678</a>
                  </li>
                  <li>
                    <span>✉</span>
                    <a href="mailto:support@echooling.com">support@echooling.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="echooling-footer-widget">
                <h3>About Us</h3>
                <ul>
                  {["About", "Courses", "Events", "Career", "Become a Teacher"].map((item) => (
                    <li key={item}>
                      <Link href={item === "About" ? "/about" : "/courses"}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="echooling-footer-widget">
                <h3>Useful Links</h3>
                <ul>
                  {["Browse Library", "Library", "Partners", "News & Blog", "FAQ"].map((item) => (
                    <li key={item}>
                      <Link href={item === "FAQ" ? "/faq" : "/courses"}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="echooling-footer-widget">
                <h3>Newsletter</h3>
                <p>Get the latest Echooling news, course updates, and learning resources.</p>
                <form
                  className="echooling-newsletter"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <input type="email" placeholder="Enter your email" aria-label="Email address" />
                  <button type="submit">Subscribe</button>
                </form>
                <div className="echooling-social-links">
                  {["f", "t", "in", "ig"].map((item) => (
                    <a href="/" key={item} aria-label={`Follow on ${item}`}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="echooling-footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Echooling. All Rights Reserved</p>
          <ul>
            <li>
              <Link href="/contact">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Terms & Conditions</Link>
            </li>
          </ul>
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
          {echoolingTopics.map((topic) => (
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
          {echoolingCourses.map((course) => (
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
              {echoolingFaqs.map((item, index) => (
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
              {echoolingInstructors.map((instructor, index) => (
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
          {echoolingBlogCards.map((item) => (
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
  return (
    <>
      <EchoolingHero />
      <EchoolingTopics />
      <EchoolingVideoBlock />
      <EchoolingCourseGrid />
      <EchoolingQuestionSection />
      <EchoolingInstructors />
      <EchoolingTestimonials />
      <EchoolingCta />
    </>
  );
}

function AboutIntroPageSection() {
  return (
    <section className="about__area about__area_one p-relative pt---100 pb---100 star-about-screenshot">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="star-about-collage">
              <img
                className="star-about-collage-main"
                src="https://www.starpoliceacademy.in/img/content/history-info.jpg"
                alt="Star Police Academy training"
              />
              <img
                className="star-about-collage-card"
                src="https://www.starpoliceacademy.in/img/content/about-01.jpg"
                alt="Star Police Academy classroom"
              />
              <div className="star-about-award">
                <strong>12+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content star-about-copy">
              <span className="star-eyebrow">//About Us</span>
              <h2 className="about__title">About Star Police Academy</h2>
              <p className="about__paragraph">{academy.aboutIntro}</p>
              <p>
                Star Police academy is an organisation engulfed with state of the art competence
                to provide more relevant and comprehensive training for Police Exams coaching
                centre in Vellore Deticated For TNUSRB PC, ARMY, NAVY, AIRFORCE SI & PC Exams.
              </p>
              <p>
                Since its inception the Paraipatti police coaching centre has helped over 1000
                students to enter the police department, Best police coaching centre in tamilnadu.
              </p>
              <ul className="star-about-actions">
                <li>
                  <Link href="/register" className="more-about">
                    Register Now
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
    </section>
  );
}

function AboutLearningSection() {
  return (
    <section className="star-about-learning pt---90 pb---70">
      <div className="container">
        <SectionTitle
          eyebrow="Police Exam Coaching"
          title="Online Coaching Lessons For Remote Learning"
          text="Star Police Academy supports students with flexible learning, regular exams and focused police career guidance."
        />
        <div className="row justify-content-center">
          {aboutLearningCards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={card.title}>
              <div className="star-card star-about-service-card">
                <span className="star-about-service-icon">{index + 1}</span>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
                <Link href="/courses">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutInstructorsSection() {
  return (
    <section className="star-about-instructors pt---80 pb---80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="star-about-left-title">
              <span className="star-eyebrow">Course Instructors</span>
              <h2>Meet our Class Instructors</h2>
              <p>
                Star Police Academy is guided by experienced teaching and physical training
                faculty around Tamilnadu.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {aboutInstructors.map((instructor) => (
                <div className="col-md-6" key={instructor.name}>
                  <div className="star-about-instructor">
                    <img src={instructor.image} alt={instructor.name} />
                    <div>
                      <h4>{instructor.name}</h4>
                      <span>{instructor.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFeedbackSection() {
  return (
    <section className="star-about-feedback pt---90 pb---80">
      <div className="container">
        <SectionTitle
          eyebrow="Student Testimonial"
          title="Student Community Feedback"
          text="What students say about Star Police Academy."
        />
        <div className="row">
          {testimonials.slice(0, 3).map((item) => (
            <div className="col-lg-4" key={item.name}>
              <blockquote className="star-card star-about-feedback-card">
                <div className="star-rating">★★★★★</div>
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

function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Star Police Academy" />
      <AboutIntroPageSection />
      <AboutLearningSection />
      <AboutInstructorsSection />
      <AboutFeedbackSection />
      <StatsBlock />
      <CTA />
    </>
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
