import { useEffect, useState } from "react";
import { ArrowIcon } from "./Icons";
import { ResponsiveImage } from "./ResponsiveImage";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const CAROUSEL_TRANSITION_MS = 780;

export function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [direction, setDirection] = useState("forward");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (projects.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      changeSlide((activeIndex + 1) % projects.length, "forward");
    }, 5200);

    return () => window.clearInterval(timer);
  }, [activeIndex, prefersReducedMotion, projects.length]);

  useEffect(() => {
    setActiveIndex(0);
    setPreviousIndex(null);
  }, [projects]);

  useEffect(() => {
    if (previousIndex === null || prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setPreviousIndex(null);
    }, CAROUSEL_TRANSITION_MS);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, previousIndex]);

  const changeSlide = (nextIndex, nextDirection) => {
    if (nextIndex === activeIndex) {
      return;
    }

    setDirection(nextDirection);

    if (prefersReducedMotion) {
      setPreviousIndex(null);
      setActiveIndex(nextIndex);
      return;
    }

    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
  };

  if (projects.length === 0) {
    return null;
  }

  const goPrevious = () => {
    changeSlide((activeIndex - 1 + projects.length) % projects.length, "backward");
  };

  const goNext = () => {
    changeSlide((activeIndex + 1) % projects.length, "forward");
  };

  const getSlideState = (index) => {
    if (index === activeIndex) {
      return "active";
    }

    if (index === previousIndex) {
      return "previous";
    }

    return "inactive";
  };

  return (
    <div className="project-carousel" aria-label="Карусель проєктів">
      <div className="project-carousel__viewport">
        {projects.map((project, index) => {
          const slideState = getSlideState(index);

          return (
            <article
              key={project.slug}
              className={`project-carousel__slide project-carousel__slide--${slideState}`}
              data-direction={direction}
              aria-hidden={slideState !== "active"}
            >
              <ResponsiveImage
                asset={project.media}
                className="project-carousel__media"
                imageClassName="media-frame media-frame--carousel"
                sizes="(min-width: 980px) 58vw, 100vw"
              />
            </article>
          );
        })}
      </div>

      <div className="project-carousel__controls">
        <div className="project-carousel__nav">
          <button
            type="button"
            className="project-carousel__button project-carousel__button--prev"
            onClick={goPrevious}
            aria-label="Попередній проєкт"
          >
            <ArrowIcon className="icon icon--arrow" />
          </button>
          <div className="project-carousel__pagination" aria-label="Навігація каруселі">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                className={`project-carousel__dot${index === activeIndex ? " is-active" : ""}`}
                onClick={() =>
                  changeSlide(index, index > activeIndex ? "forward" : "backward")
                }
                aria-label={`Показати проєкт ${project.title}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
          <button
            type="button"
            className="project-carousel__button"
            onClick={goNext}
            aria-label="Наступний проєкт"
          >
            <ArrowIcon className="icon icon--arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
