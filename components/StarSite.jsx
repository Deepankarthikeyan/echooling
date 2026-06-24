import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  academy,
  contact,
  courses,
  faqs,
  features,
  registrationCourses,
  socialLinks,
  stats,
  terms,
  testimonials,
  trainingSteps,
} from "../lib/star-content";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [{ label: "About Star Police Academy", href: "/about" }],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Tamilnadu Police Constable TNUSRB", href: "/tnusrb" },
      { label: "Tamilnadu Police Sub Inspector", href: "/sub-inspector" },
      { label: "Agnipath - Indian Army", href: "/indian-army" },
      { label: "Agnipath - Indian Navy", href: "/indian-navy" },
      { label: "Indian Air Force", href: "/indian-air-force" },
      { label: "Railway Protection Force", href: "/rpf" },
      { label: "CRPF,CISF,SSB,ITBF Course", href: "/capf" },
    ],
  },
  {
    label: "Notifications",
    href: "/notification",
    children: [
      { label: "Current Affairs", href: "/notification" },
      { label: "Youtube Channel", href: "/youtube" },
      { label: "Test Batches", href: "/test-batch" },
    ],
  },
  {
    label: "Training",
    href: "/training",
    children: [
      { label: "Toppers and Achievers", href: "/toppers" },
      { label: "Training Materials", href: "/materials" },
      { label: "Question papers", href: "/questions" },
      { label: "Answer Keys", href: "/ansewrkey" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Register", href: "/register" },
];

function SiteHead({ title }) {
  const pageTitle = title ? `${title} | Star Police Academy` : academy.title;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={academy.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href={academy.logo} />
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
    <header id="react-header" className="react-header star-header">
      <div className="topbar-area style1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="topbar-contact">
                <ul>
                  <li>
                    <span className="star-topbar-icon">☎</span>
                    <a href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`}>{contact.phonePrimary}</a>
                  </li>
                  <li>
                    <span className="star-topbar-icon">✉</span>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 text-right">
              <div className="toolbar-sl-share">
                <ul className="social-links">
                  {socialLinks.slice(0, 3).map((item) => (
                    <li key={item.label}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-part">
        <div className="container">
          <div className="react-main-menu">
            <nav>
              <div className="menu-toggle">
                <div className="logo star-logo">
                  <Link href="/" className="logo-text">
                    <img src={academy.logo} alt="Star Police Academy logo" />
                    <span>{academy.name}</span>
                  </Link>
                </div>
                <button
                  type="button"
                  id="menu-btn"
                  className={open ? "back__close" : ""}
                  aria-label="Toggle navigation"
                  onClick={() => setOpen((value) => !value)}
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className={`react-inner-menus star-nav-wrap ${open ? "is-open" : ""}`}>
                <ul id="backmenu" className="react-menus home react-sub-shadow star-nav">
                  {navItems.map((item) => (
                    <li
                      className={item.children ? "has-dropdown" : ""}
                      key={item.href}
                      onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                      onMouseLeave={() => item.children && setOpenDropdown("")}
                    >
                      <div className="star-nav-link-row">
                        <Link href={item.href} onClick={closeNavigation}>
                          {item.label}
                        </Link>
                        {item.children ? (
                          <button
                            aria-expanded={openDropdown === item.label}
                            aria-label={`Toggle ${item.label} menu`}
                            className="star-dropdown-toggle"
                            type="button"
                            onClick={(event) => {
                              event.preventDefault();
                              setOpenDropdown((current) => (current === item.label ? "" : item.label));
                            }}
                          >
                            <span className="arrow_carrot-down" />
                          </button>
                        ) : null}
                      </div>
                      {item.children ? (
                        <ul className={`star-dropdown ${openDropdown === item.label ? "is-open" : ""}`}>
                          {item.children.map((child) => (
                            <li key={child.href}>
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
                <div className="searchbar-part star-header-cta">
                  <Link href="/register" className="react-btn">
                    Apply Now
                  </Link>
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
    <footer id="react-footer" className="react-footer home-main star-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 md-mb-30">
              <div className="footer-widget footer-widget-1">
                <div className="footer-logo white">
                  <Link href="/">
                    <img src={academy.footerLogo} alt="Star Police Academy" />
                  </Link>
                </div>
                <p>{academy.aboutIntro}</p>
                <p className="star-footer-contact">
                  {contact.phonePrimary}
                  <br />
                  {contact.email}
                </p>
              </div>
            </div>
            <div className="col-lg-2 md-mb-30">
              <div className="footer-widget footer-widget-2">
                <h3 className="footer-title">Services</h3>
                <div className="footer-menu">
                  <ul>
                    {courses.slice(0, 6).map((course) => (
                      <li key={course.key}>
                        <Link href={`/${course.key}`}>{course.shortTitle}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-3">
                <h3 className="footer-title">Quick Links</h3>
                <div className="footer-menu">
                  <ul>
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/register">Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget footer-widget-4">
                <h3 className="footer-title">Our Contact Detail</h3>
                <p>{contact.address}</p>
                <a className="react-btn-border" href={contact.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="react-copy-left">
            © {new Date().getFullYear()} <Link href="/">{academy.name}.</Link> All Rights Reserved
          </div>
          <div className="react-copy-right">
            <ul className="social-links">
              <li className="follow">Follow us</li>
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
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

function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <AboutBlock />
      <CourseGrid limit={6} />
      <StatsBlock />
      <TrainingSteps />
      <Testimonials />
      <FAQList limit={3} />
      <CTA />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Star Police Academy" />
      <AboutBlock detailed />
      <StatsBlock />
      <FAQList />
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
          <input required type="text" placeholder="Your Name *" />
        </div>
        <div className="col-md-6">
          <input required type="email" placeholder="Your Email *" />
        </div>
        <div className="col-md-6">
          <input required type="text" placeholder="Your Subject *" />
        </div>
        <div className="col-md-6">
          <input type="tel" placeholder="Contact Number" />
        </div>
        <div className="col-12">
          <textarea required placeholder="Message *" rows={6} />
        </div>
        <div className="col-12">
          <button type="submit" className="react-btn">
            Send Message
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
      <Breadcrumb title="Contact Star Police Academy" />
      <section className="star-contact pt---100 pb---100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <SectionTitle title="Contact With Us" center={false} />
              <ContactForm />
            </div>
            <div className="col-lg-5">
              <div className="star-card star-contact-card">
                <h2>Our contact detail</h2>
                <p>Star Police Exam Coaching Center in Vellore. Write as some words about your question.</p>
                <h3>Phone Number</h3>
                <p>
                  {contact.phonePrimary}
                  <br />
                  {contact.phoneSecondary}
                </p>
                <h3>Email Address</h3>
                <p>{contact.email}</p>
                <h3>Location</h3>
                <p>{contact.address}</p>
              </div>
            </div>
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
