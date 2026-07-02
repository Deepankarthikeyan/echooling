"use client";

import { useEffect, useRef, useState } from "react";

export default function SiCourseTopicsSlider({ topics }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const transitionRef = useRef(null);

  const changeTopic = (nextIndex) => {
    if (nextIndex === activeIndexRef.current || isTransitioningRef.current) {
      return;
    }

    isTransitioningRef.current = true;
    setIsTransitioning(true);

    if (transitionRef.current) {
      window.clearTimeout(transitionRef.current);
    }

    transitionRef.current = window.setTimeout(() => {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      transitionRef.current = window.setTimeout(() => {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      }, 500);
    }, 450);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      changeTopic((activeIndexRef.current + 1) % topics.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
      if (transitionRef.current) {
        window.clearTimeout(transitionRef.current);
      }
    };
  }, [topics.length]);

  const activeTopic = topics[activeIndex];

  return (
    <div className="si-landing-course-slider pt---30">
      <div
        className={`si-landing-course-slider__stage${isTransitioning ? " is-transitioning" : ""}`}
        aria-live="polite"
      >
        <div className="si-landing-course-slider__visual" key={`visual-${activeIndex}`}>
          <img src={activeTopic.image} alt={activeTopic.title} loading="lazy" />
        </div>
        <div className="si-landing-course-slider__content" key={`content-${activeIndex}`}>
          <div className="si-landing-course-slider__meta">
            <span className="si-landing-course-slider__index">
              {String(activeIndex + 1).padStart(2, "0")} / {String(topics.length).padStart(2, "0")}
            </span>
            <span className="si-landing-course-slider__icon" aria-hidden="true">
              <span className="material-symbols-outlined">{activeTopic.icon}</span>
            </span>
          </div>
          <h3>{activeTopic.title}</h3>
          <p>{activeTopic.text}</p>
        </div>
      </div>
      <div className="si-landing-course-slider__progress" role="tablist" aria-label="Course topics">
        {topics.map((topic, index) => (
          <button
            key={topic.title}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${topic.title}`}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => changeTopic(index)}
          />
        ))}
      </div>
    </div>
  );
}
