
import { useState, useEffect, useRef } from 'react';

export const usePhysics = (initialX: number, initialY: number, speed: number = 0.5, resetTrigger: number = 0) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const velocityRef = useRef({ 
    vx: (Math.random() - 0.5) * speed, 
    vy: (Math.random() - 0.5) * speed 
  });
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Reset velocities whenever resetTrigger changes
    velocityRef.current = { 
      vx: (Math.random() - 0.5) * speed, 
      vy: (Math.random() - 0.5) * speed 
    };
    lastTimeRef.current = 0;

    const animate = (currentTime: number) => {
      if (currentTime - lastTimeRef.current < 16) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      setPosition(prev => {
        let newX = prev.x + velocityRef.current.vx;
        let newY = prev.y + velocityRef.current.vy;

        if (newX <= 5 || newX >= 90) velocityRef.current.vx *= -1;
        if (newY <= 5 || newY >= 85) velocityRef.current.vy *= -1;

        return {
          x: Math.max(5, Math.min(90, newX)),
          y: Math.max(5, Math.min(85, newY))
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, [speed, resetTrigger]);

  return position;
};

