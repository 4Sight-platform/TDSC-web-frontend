import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  id,
  delay = 0 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.15, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-16 scale-[0.98]'
      } ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
