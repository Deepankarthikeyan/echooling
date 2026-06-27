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
  socialLinks,
  stats,
  terms,
  testimonials,
  trainingSteps,
  youtubeVideos,
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
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Register", href: "/register" },
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
        <div className="container-fluid star-header-inner">
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
        <div className="container-fluid star-header-inner">
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
      <div className="container">
        <div className="footer-top-cta">
          <div className="row">
            <div className="col-lg-8">
              <h4>Ready to dive in?</h4>
              <h3>Start your police exam coaching today.</h3>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/faq">Go to FAQ</Link>
            </div>
          </div>
        </div>
      </div>
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

const homeTopicIcons = [
  "/assets/images/topics/1.svg",
  "/assets/images/topics/2.svg",
  "/assets/images/topics/3.svg",
  "/assets/images/topics/4.svg",
];

const homeHeroStats = [
  { value: stats[1].value, label: stats[1].label, icon: "/assets/images/topics/icon.svg" },
  { value: stats[0].value, label: stats[0].label, icon: "/assets/images/topics/icon2.svg" },
  { value: stats[2].value, label: stats[2].label, icon: "/assets/images/topics/icon3.svg" },
];

const homeCourseFilters = [
  { key: "all", label: "See all" },
  { key: "tnusrb", label: "TNUSRB" },
  { key: "defence", label: "Defence" },
  { key: "capf", label: "CAPF" },
  { key: "rpf", label: "RPF" },
];

const homeCourseGroups = {
  all: courses.map((course) => course.key),
  tnusrb: ["tnusrb", "sub-inspector"],
  defence: ["indian-army", "indian-navy", "indian-air-force"],
  capf: ["capf"],
  rpf: ["rpf"],
};

function HomeHero() {
  return (
    <>
      <section className="hero3__area p-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero3__content">
                <h1 className="hero3__title">
                  {academy.heroSlides[0].title} <em>Star Police Academy</em>
                </h1>
                <form className="search-form" action="/courses" method="get">
                  <input type="text" name="q" placeholder="Search police exam courses..." />
                  <button type="submit" aria-label="Search courses">
                    <span className="icon_search" />
                  </button>
                </form>
                <p className="hero3__paragraph">
                  {academy.heroSlides[0].text}{" "}
                  <Link href="/register">Apply Now</Link>
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
                      <Link href="/about" aria-label={`Learn more about ${item.label}`}>
                        <span className="arrow_carrot-right" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hero3__image">
          <img
            className="hero3__image-1"
            src="https://www.starpoliceacademy.in/img/content/history-info.jpg"
            alt="Star Police Academy students"
          />
          <img
            className="hero3__image-2"
            src="https://www.starpoliceacademy.in/img/content/about-01.jpg"
            alt="Star Police Academy training"
          />
        </div>
      </section>
      <section className="category__area">
        <div className="container category__width">
          <div className="row">
            {stats.slice(0, 4).map((item, index) => (
              <div className="col-lg-3 col-md-6" key={item.label}>
                <div className="category__inner">
                  <div className={`category__wrapper category__wrapper${index === 1 ? "2" : index === 3 ? "6" : ""}`}>
                    <img src={homeTopicIcons[index] || homeTopicIcons[0]} alt="" />
                    <h4>
                      <Link href="/about">{item.value}</Link>
                    </h4>
                  </div>
                  <span className="star-category-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HomePopularTopics() {
  return (
    <section className="react_populars_topics react_populars_topics2 pt---100 pb---70">
      <div className="container">
        <div className="row align-items-end mb---50">
          <div className="col-lg-8">
            <div className="react__title__section-all">
              <h6>//Police Exam Training</h6>
              <h2>Star Police Academy Coaching Topics</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link href="/courses" className="react-btn">
              Browse all
            </Link>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={feature.title}>
              <div className="item__inner">
                <div className="icon">
                  <img src={homeTopicIcons[index] || homeTopicIcons[0]} alt="" />
                </div>
                <h3>
                  <Link href="/about">{feature.title}</Link>
                </h3>
                <p>{feature.text}</p>
                <Link href="/about">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeAboutVideo() {
  return (
    <section className="about2__area about__area_one p-relative pt---100 pb---100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about__image">
              <img
                src="https://www.starpoliceacademy.in/img/content/history-info.jpg"
                alt="Star Police Academy training session"
              />
              <div className="event__video-btn--play">
                <a
                  className="event__video-btn--play-btn popup-videos"
                  href="https://www.youtube.com/watch?v=1ppfH0p_UYM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon_triangle-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
              <div className="react__title__section-all">
                <h6>//About Us</h6>
                <h2>
                  Tamil Nadu&apos;s Leading <em>TNUSRB SI & Police</em> Coaching Centre
                </h2>
              </div>
              <p className="about__paragraph">{academy.aboutIntro}</p>
              <ul>
                {trainingSteps.map((step) => (
                  <li key={step.number}>
                    <span className="icon_check_alt2" /> {step.title}
                  </li>
                ))}
              </ul>
              <div className="about__btn">
                <Link href="/about" className="more-about">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCoursesFilter() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleCourses = courses.filter((course) =>
    homeCourseGroups[activeFilter].includes(course.key),
  );

  return (
    <section className="react-course-filter pb---100 pt---100">
      <div className="container">
        <div className="react__title__section text-center">
          <h2>Most Popular Courses</h2>
          <h6>Focused coaching for TNUSRB, Police, Defence and central force aspirants.</h6>
        </div>
        <div className="react-filter text-center">
          {homeCourseFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={activeFilter === filter.key ? "active" : ""}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="row">
          {visibleCourses.slice(0, 6).map((course) => (
            <div className="col-lg-4 col-md-6" key={course.key}>
              <div className="single-studies">
                <div className="inner-course">
                  <div className="case-img">
                    <img src={course.image} alt={course.shortTitle} />
                    <Link href={`/${course.key}`}>Course</Link>
                  </div>
                  <div className="case-content">
                    <ul className="react-ratings">
                      <li>★★★★★</li>
                      <li>1160+ Students</li>
                    </ul>
                    <h3 className="case-title">
                      <Link href={`/${course.key}`}>{course.shortTitle}</Link>
                    </h3>
                    <div className="react__user">
                      <img src={academy.logo} alt={academy.founder} />
                      {academy.founder}
                    </div>
                    <ul className="react-ratings">
                      <li>Expert Coaching</li>
                      <li className="price">Apply</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const visibleFaqs = faqs.slice(0, 5);

  return (
    <section className="accordion__area pt---100 pb---100">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="accordion__wrapper-1">
              <h6>FAQ</h6>
              <h2>Have any thought? Look here.</h2>
              <p>Find answers about police exam coaching, training duration and admission at Star Police Academy.</p>
              <Link href="/faq" className="border-btns">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="accordion" id="starHomeFaq">
              {visibleFaqs.map((item, index) => {
                const headingId = `star-faq-heading-${index}`;
                const collapseId = `star-faq-collapse-${index}`;
                const isOpen = openIndex === index;

                return (
                  <div className="accordion-item" key={item.question}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={collapseId}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                      aria-labelledby={headingId}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeInstructors() {
  return (
    <section className="instructor__area pt---100 pb---100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="instructors_lefts">
              <h6>Course Instructors</h6>
              <h2>Meet our Class Instructors</h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {aboutInstructors.map((instructor) => (
                <div className="col-lg-3 col-md-6" key={instructor.name}>
                  <div className="instructor__content instructor__content-one">
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
      </div>
    </section>
  );
}

function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleItems = testimonials.slice(activeIndex, activeIndex + 2);
  const paddedItems =
    visibleItems.length === 2
      ? visibleItems
      : [...visibleItems, testimonials[0]].slice(0, 2);

  return (
    <section className="react-clients home-testimonial pt---100 pb---100">
      <div className="container">
        <div className="react__title__section text-center">
          <h2>What our clients say about</h2>
        </div>
        <div className="star-testimonial-slider">
          <button
            type="button"
            className="star-testimonial-nav star-testimonial-prev"
            aria-label="Previous testimonial"
            onClick={() =>
              setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
            }
          >
            ‹
          </button>
          <ul className="client-slider">
            {paddedItems.map((item) => (
              <li className="single-client" key={`${item.name}-${item.text.slice(0, 12)}`}>
                <div className="client-author">
                  <img src={academy.logo} alt={item.name} />
                </div>
                <div className="client-content">
                  <span className="client-title">
                    {item.name} <em>{item.role}</em>
                  </span>
                  <p>{item.text}</p>
                  <div className="testimonial__ratings">★★★★★</div>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="star-testimonial-nav star-testimonial-next"
            aria-label="Next testimonial"
            onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function HomeBlog() {
  return (
    <section className="react-blog__area graybg-home blog__area pb---120 pt---100">
      <div className="container">
        <div className="react__title__section text-center">
          <h6>Updates</h6>
          <h2>Star Police Academy News and Notifications</h2>
        </div>
        <div className="row">
          {notificationItems.slice(0, 4).map((item, index) => (
            <div className="col-lg-3 col-md-6" key={item.title}>
              <article className="blog__card">
                <div className="blog__thumb">
                  <div className="blog__thumb--image">
                    <img src={courses[index]?.image || courses[0].image} alt={item.title} />
                  </div>
                  <em className="b_date">{item.date}</em>
                </div>
                <div className="blog__card--content">
                  <span className="blog__card--date">{item.category}</span>
                  <h3 className="blog__card--title">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <a className="blog__card--link" href={item.href} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </article>
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
      <HomeHero />
      <HomePopularTopics />
      <HomeAboutVideo />
      <HomeCoursesFilter />
      <HomeFAQ />
      <HomeInstructors />
      <HomeTestimonials />
      <HomeBlog />
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
      <main className={`react-wrapper star-main ${page?.type === "home" ? "star-home" : ""}`}>
        <PageContent page={page} />
      </main>
      <Footer />
      <div id="backscrollUp" className="home">
        <span aria-hidden="true" className="arrow_carrot-up" />
      </div>
    </>
  );
}
