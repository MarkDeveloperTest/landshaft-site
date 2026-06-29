import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  variant = "up",
  delay = 0,
  staggerIndex,
  staggerStep = 70,
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const totalDelay = delay + (staggerIndex ?? 0) * staggerStep;

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, prefersReducedMotion]);

  return (
    <Tag
      ref={ref}
      className={`${className} reveal${visible ? " is-visible" : ""}`.trim()}
      data-reveal-variant={variant}
      style={{ "--reveal-delay": `${totalDelay}ms` }}
    >
      {children}
    </Tag>
  );
}
