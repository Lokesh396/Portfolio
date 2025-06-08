import React, { useEffect, useState } from "react";

const CursorGradient = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.pageX, y: e.pageY }); // use pageX/pageY for scrolling page
    };

    document.addEventListener('mousemove', moveHandler);

    return () => {
      document.removeEventListener('mousemove', moveHandler);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29,78,216,0.15), transparent 80%)`,
      }}
    />
  );
};

export default CursorGradient;
