import { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      data-src={src} // Guardamos la URL en data-src
      alt={alt}
      className={className}
      loading="lazy"
      style={{ visibility: isInView ? 'visible' : 'hidden' }} // Mantener la imagen invisible hasta que entre en vista
      src={isInView ? src : null} // Asignamos null al src antes de que la imagen esté en vista
    />
  );
};

export default LazyImage;
