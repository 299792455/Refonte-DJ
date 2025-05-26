'use client';
import { useEffect, useState } from 'react';

export default function LightOverlay() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      setPosition((prev) => (prev >= 100 ? 0 : prev + 0.2));
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="light-scan"
      style={{
        top: `${position}%`
      }}
    />
  );
}
