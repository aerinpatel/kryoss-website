import { useEffect, useRef, useState } from "react";

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const translate =
    direction === "left"
      ? "-translate-x-16"
      : "translate-x-16";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${translate}`
        }`}
    >
      {children}
    </div>
  );
}
