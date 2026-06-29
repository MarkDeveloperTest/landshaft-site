import { useEffect, useState } from "react";
import { ArrowIcon } from "./Icons";
import { ResponsiveImage } from "./ResponsiveImage";

export function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [projects.length]);

  const goTo = (index) => setActiveIndex(index);
  const goPrevious = () =>
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  const goNext = () => setActiveIndex((current) => (current + 1) % projects.length);

  return (
    <div className="project-carousel" aria-label="Карусель проєктів">
      <div className="project-carousel__viewport">
        <div
          className="project-carousel__track"
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {projects.map((project) => (
            <article key={project.slug} className="project-carousel__slide">
              <ResponsiveImage
                asset={project.media}
                className="project-carousel__media"
                imageClassName="media-frame"
                sizes="(min-width: 960px) 52vw, 100vw"
              />

              <div className="project-carousel__copy">
                <p className="project-carousel__index">{project.index}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-carousel__location">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
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
          <button
            type="button"
            className="project-carousel__button"
            onClick={goNext}
            aria-label="Наступний проєкт"
          >
            <ArrowIcon className="icon icon--arrow" />
          </button>
        </div>

        <div className="project-carousel__dots" aria-label="Навігація слайдів">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={`project-carousel__dot${index === activeIndex ? " is-active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Перейти до проєкту ${project.title}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
