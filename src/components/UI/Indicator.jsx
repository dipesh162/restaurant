import React, { useRef, useEffect, useState } from 'react';

function Indicator({ targetId }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(targetRef.current);

    return () => {
      observer.unobserve(targetRef.current);
    };
  }, []);

  return (
    <div ref={targetRef} className={`z-[10] fixed top-[50%] indicator ${isIntersecting ? 'highlighted' : ''}`}>
      Indicator content
    </div>
  );
}

export default Indicator;
