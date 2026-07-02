import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(): React.RefObject<T | null> {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revelado");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const children = element.querySelectorAll(".revelar-scroll");
    children.forEach((child) => observer.observe(child));

    if (element.classList.contains("revelar-scroll")) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return elementRef;
}
