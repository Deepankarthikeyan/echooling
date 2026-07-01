import Link from "next/link";
import { useState } from "react";
import { academy, contact, stats, testimonials } from "../lib/star-content";
import {
  siBatches,
  siCourseFeatures,
  siCourseTopics,
  siEligibilityRows,
  siFacultyCards,
  siFaqs,
  siFeeHighlights,
  siInternalLinks,
  siLearningModes,
  siMockTestPoints,
  siPhysicalEvents,
  siPhysicalProgram,
  siSelectionSteps,
  siStudyMaterials,
  siSyllabusSections,
  siTrainingFlow,
  siTrustPoints,
} from "../lib/si-landing-content";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function SiLandingPage() {
  const [openSyllabus, setOpenSyllabus] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="si-landing-page">
      <section className="si-landing-hero">
        <div className="si-landing-hero__bg" />
        <div className="container p-relative">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="si-landing-hero__badge">TNUSRB SI Coaching · Tamil Nadu</span>
              <h1>Police Sub Inspector (SI) Coaching in Tamil Nadu</h1>
              <p>
                Become a Tamil Nadu Police Sub Inspector with expert coaching, complete syllabus
                coverage, physical training, mock exams, interview guidance, and personal mentorship.
              </p>
              <div className="si-landing-hero__actions">
                <Link className="si-landing-btn si-landing-btn--primary" href="/register">
                  Join Now <ArrowIcon />
                </Link>
                <a className="si-landing-btn si-landing-btn--ghost" href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`}>
                  Call {contact.phonePrimary}
                </a>
              </div>
              <div className="si-landing-hero__stats">
                {stats.slice(0, 4).map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="si-landing-hero__card">
                <img
                  src="https://www.starpoliceacademy.in/img/service/service-01.jpg"
                  alt="Police Sub Inspector coaching at Star Police Academy"
                />
                <div className="si-landing-hero__card-body">
                  <span>Star Police Academy</span>
                  <h3>Best Police SI Coaching Centre in Tamil Nadu</h3>
                  <p>Written exam · PET · Viva · Medical · Final selection support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="si-landing-trust pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Why Choose Us</span>
            <h2>Why Choose Star Police Academy?</h2>
          </div>
          <div className="si-landing-trust__grid">
            {siTrustPoints.map((item) => (
              <article className="si-landing-trust__item" key={item.label}>
                <span aria-hidden="true" className="material-symbols-outlined">{item.icon}</span>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-about pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">About Course</span>
            <h2>Police Sub Inspector Coaching Course</h2>
            <p>Complete preparation for every stage of TNUSRB Sub Inspector recruitment.</p>
          </div>
          <div className="row g-4">
            {siCourseTopics.map((topic, index) => (
              <div className="col-lg-4 col-md-6" key={topic.title}>
                <article className="si-landing-topic-card">
                  <span className="si-landing-topic-card__num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{topic.title}</h3>
                  <p>{topic.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-features pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Course Highlights</span>
            <h2>Course Features</h2>
          </div>
          <div className="si-landing-features__grid">
            {siCourseFeatures.map((feature) => (
              <article className="si-landing-feature-card" key={feature}>
                <span aria-hidden="true" className="material-symbols-outlined">verified</span>
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-process pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Selection Journey</span>
            <h2>Tamil Nadu Police SI Selection Process</h2>
          </div>
          <div className="si-landing-process__track">
            {siSelectionSteps.map((step, index) => (
              <article className="si-landing-process__step" key={step}>
                <span className="si-landing-process__index">{index + 1}</span>
                <h3>{step}</h3>
                {index < siSelectionSteps.length - 1 ? (
                  <span aria-hidden="true" className="si-landing-process__arrow">↓</span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-eligibility pt---100 pb---100">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div className="si-landing-head">
                <span className="si-landing-eyebrow">TNUSRB SI Eligibility</span>
                <h2>Eligibility Criteria</h2>
                <p>Know the age, education, and reservation norms before you start your SI preparation journey.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="si-landing-table-wrap">
                <table className="si-landing-table">
                  <tbody>
                    {siEligibilityRows.map((row) => (
                      <tr key={row.label}>
                        <th>{row.label}</th>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="si-landing-physical pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Physical Standards</span>
            <h2>Physical Measurement &amp; Efficiency Test</h2>
          </div>
          <div className="row g-4">
            {siPhysicalEvents.map((event) => (
              <div className="col-lg-4 col-md-6" key={event.title}>
                <article className="si-landing-physical-card">
                  <span aria-hidden="true" className="material-symbols-outlined">{event.icon}</span>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-syllabus pt---100 pb---100">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="si-landing-head">
                <span className="si-landing-eyebrow">Detailed Syllabus</span>
                <h2>Police SI Written Exam Syllabus</h2>
                <p>Topic-wise coverage aligned with TNUSRB Sub Inspector written examination pattern.</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="si-landing-accordion">
                {siSyllabusSections.map((section, index) => (
                  <article className="si-landing-accordion__item" key={section.title}>
                    <button
                      type="button"
                      className={`si-landing-accordion__trigger${openSyllabus === index ? " is-open" : ""}`}
                      onClick={() => setOpenSyllabus(openSyllabus === index ? -1 : index)}
                    >
                      {section.title}
                      <span aria-hidden="true">+</span>
                    </button>
                    {openSyllabus === index ? (
                      <div className="si-landing-accordion__panel">
                        <ul>
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="si-landing-method pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Training Methodology</span>
            <h2>How We Train You</h2>
          </div>
          <div className="si-landing-method__flow">
            {siTrainingFlow.map((step, index) => (
              <div className="si-landing-method__node" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
                {index < siTrainingFlow.length - 1 ? <em aria-hidden="true">↓</em> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-split pt---100 pb---100">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="si-landing-panel">
                <span className="si-landing-eyebrow">Mock Tests</span>
                <h2>Regular Mock Tests</h2>
                <p>Exam-like practice with analysis, ranking, and mentor feedback after every major test cycle.</p>
                <ul className="si-landing-checklist">
                  {siMockTestPoints.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true" className="material-symbols-outlined">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="si-landing-panel si-landing-panel--dark">
                <span className="si-landing-eyebrow si-landing-eyebrow--light">Physical Training</span>
                <h2>Physical Training Program</h2>
                <div className="si-landing-tags">
                  {siPhysicalProgram.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="si-landing-materials pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Study Materials</span>
            <h2>Everything You Need to Prepare</h2>
          </div>
          <div className="si-landing-materials__grid">
            {siStudyMaterials.map((item) => (
              <article key={item}>
                <span aria-hidden="true" className="material-symbols-outlined">menu_book</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-faculty pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Faculty</span>
            <h2>Meet Our Expert Faculty</h2>
          </div>
          <div className="row g-4">
            {siFacultyCards.map((faculty) => (
              <div className="col-lg-3 col-md-6" key={faculty.title}>
                <article className="si-landing-faculty-card">
                  <span aria-hidden="true" className="material-symbols-outlined">{faculty.icon}</span>
                  <h3>{faculty.title}</h3>
                  <p>{faculty.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-success pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Student Success</span>
            <h2>Our Successful SI Candidates</h2>
          </div>
          <div className="row g-4">
            {testimonials.slice(0, 3).map((item) => (
              <div className="col-lg-4 col-md-6" key={item.name}>
                <article className="si-landing-testimonial">
                  <div className="si-landing-testimonial__rating">4.9 Rating</div>
                  <p>{item.text}</p>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-modes pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">Course Modes</span>
            <h2>Available Learning Modes</h2>
          </div>
          <div className="row g-4">
            {siLearningModes.map((mode) => (
              <div className="col-lg-4 col-md-6" key={mode.title}>
                <article className="si-landing-mode-card">
                  <span aria-hidden="true" className="material-symbols-outlined">{mode.icon}</span>
                  <h3>{mode.title}</h3>
                  <p>{mode.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-fees pt---100 pb---100">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="si-landing-head">
                <span className="si-landing-eyebrow">Fee Structure</span>
                <h2>Affordable Course Fees</h2>
                <p>Flexible payment support for serious TNUSRB SI aspirants across Tamil Nadu.</p>
              </div>
              <ul className="si-landing-checklist">
                {siFeeHighlights.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true" className="material-symbols-outlined">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="si-landing-batch-grid">
                {siBatches.map((batch) => (
                  <article key={batch.title}>
                    <h3>{batch.title}</h3>
                    <p>{batch.time}</p>
                    <span>{batch.mode}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="si-landing-faq pt---100 pb---100">
        <div className="container">
          <div className="si-landing-head text-center">
            <span className="si-landing-eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="si-landing-accordion si-landing-accordion--faq">
            {siFaqs.map((item, index) => (
              <article className="si-landing-accordion__item" key={item.question}>
                <button
                  type="button"
                  className={`si-landing-accordion__trigger${openFaq === index ? " is-open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  {item.question}
                  <span aria-hidden="true">+</span>
                </button>
                {openFaq === index ? (
                  <div className="si-landing-accordion__panel">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="si-landing-cta pt---100 pb---120">
        <div className="container">
          <div className="si-landing-cta__panel text-center">
            <span className="si-landing-eyebrow si-landing-eyebrow--light">Final CTA</span>
            <h2>Start Your Journey Towards Becoming a Police Sub Inspector</h2>
            <p>
              Join thousands of successful aspirants who have trusted {academy.name} for TNUSRB SI exam
              preparation. Get expert guidance, comprehensive study materials, physical training, and
              continuous mentorship to maximize your chances of selection.
            </p>
            <div className="si-landing-hero__actions justify-content-center">
              <Link className="si-landing-btn si-landing-btn--primary" href="/register">
                Book a Free Demo Class <ArrowIcon />
              </Link>
              <Link className="si-landing-btn si-landing-btn--ghost" href="/contact">
                Contact Admissions
              </Link>
            </div>
            <div className="si-landing-links">
              {siInternalLinks.map((link) => (
                <Link key={link.label} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
