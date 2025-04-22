import React, { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface CursorPosition {
  x: number;
  y: number;
}

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile(); // 🔍 use mobile detection

  useEffect(() => {
    if (isMobile) return; // 🚫 Skip setup if mobile

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable = hoveredElement?.matches('a, button, [role="button"], input, select, textarea');
      setIsPointer(!!isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', updateCursorStyle);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', updateCursorStyle);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y, isMobile]);

  if (isMobile) return null; // ✅ Don't render anything on mobile

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Main cursor */}
        <div
          className={`rounded-full transition-transform duration-200 ${
            isPointer ? 'bg-brand-blue/50 scale-150' : 'bg-white/50'
          }`}
          style={{
            width: '12px',
            height: '12px',
          }}
        />

        {/* Outer ring */}
        <div
          className={`absolute rounded-full border transition-all duration-200 ${
            isPointer ? 'border-brand-blue/30 scale-150' : 'border-white/30'
          }`}
          style={{
            width: '40px',
            height: '40px',
            top: '-14px',
            left: '-14px',
            animation: 'pulse 2s infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default AnimatedCursor;
