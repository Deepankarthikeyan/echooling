"use client";

import { useEffect, useRef, useState } from "react";

export default function SiTrainingShowcase({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const transitionRef = useRef(null);

  const changeItem = (nextIndex) => {
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
    }, 350);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      changeItem((activeIndexRef.current + 1) % items.length);
    }, 4500);

    return () => {
      window.clearInterval(timer);
      if (transitionRef.current) {
        window.clearTimeout(transitionRef.current);
      }
    };
  }, [items.length]);

  const activeItem = items[activeIndex];
  const mockCount = items.filter((item) => item.group === "mock").length;

  return (
    <div className="si-training-showcase pt---30">
      <div className="si-training-showcase__filters" role="tablist" aria-label="Training categories">
        <button
          type="button"
          role="tab"
          aria-selected={activeItem.group === "mock"}
          className={activeItem.group === "mock" ? "is-active" : ""}
          onClick={() => changeItem(0)}
        >
          <span aria-hidden="true" className="material-symbols-outlined">quiz</span>
          Mock Tests
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeItem.group === "physical"}
          className={activeItem.group === "physical" ? "is-active" : ""}
          onClick={() => changeItem(mockCount)}
        >
          <span aria-hidden="true" className="material-symbols-outlined">fitness_center</span>
          Physical Training
        </button>
      </div>

      <div
        className={`si-training-showcase__spotlight si-training-showcase__spotlight--${activeItem.group}${isTransitioning ? " is-transitioning" : ""}`}
        aria-live="polite"
        key={`spotlight-${activeIndex}`}
      >
        <div className="si-training-showcase__spotlight-bg" aria-hidden="true">
          {activeItem.image ? (
            <img src={activeItem.image} alt="" loading="lazy" />
          ) : (
            <span className="si-training-showcase__spotlight-pattern" />
          )}
        </div>
        <div className="si-training-showcase__spotlight-content">
          <div className="si-training-showcase__spotlight-top">
            <span className="si-training-showcase__badge">{activeItem.groupLabel}</span>
            <span className="si-training-showcase__index">
              {String(activeIndex + 1).padStart(2, "0")}
              <em>/{String(items.length).padStart(2, "0")}</em>
            </span>
          </div>
          <span className="si-training-showcase__icon" aria-hidden="true">
            <span className="material-symbols-outlined">{activeItem.icon}</span>
          </span>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.text}</p>
        </div>
      </div>

      <div className="si-training-showcase__rail" aria-label="Training highlights">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`si-training-showcase__chip si-training-showcase__chip--${item.group}${index === activeIndex ? " is-active" : ""}`}
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Show ${item.title}`}
            onClick={() => changeItem(index)}
          >
            <span aria-hidden="true" className="material-symbols-outlined">{item.icon}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
