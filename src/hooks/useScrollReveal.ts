import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export function useScrollReveal<T extends HTMLElement>(): React.RefObject<T | null> {
  const elementRef = useRef<T | null>(null);
  const { i18n } = useTranslation();

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
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const observeElements = () => {
      const children = element.querySelectorAll(".revelar-scroll");
      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          child.classList.add("revelado");
        } else {
          observer.observe(child);
        }
      });

      if (element.classList.contains("revelar-scroll")) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("revelado");
        } else {
          observer.observe(element);
        }
      }
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(element, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [i18n.language]);

  return elementRef;
}
