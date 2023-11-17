import { useEffect, useRef, useState } from 'react';

const ScrollFadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const threshold = window.innerWidth < 600 ? 0.2 : 0.8 // Getting diff values to small and larger screens
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeInSection;
