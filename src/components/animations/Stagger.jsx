import { useState, useEffect } from "react";

const Stagger = ({ children, staggerDelay = 100, initialDelay = 0 }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev < children.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, staggerDelay);

      return () => clearInterval(interval);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [children.length, staggerDelay, initialDelay]);

  return (
    <div>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            index < visibleCount
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Stagger;
