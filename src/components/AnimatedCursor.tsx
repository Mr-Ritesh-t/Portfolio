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
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const isMobile = useIsMobile(); 

  useEffect(() => {
    if (isMobile) return; 

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (!hoveredElement) return;

      const clickable = hoveredElement.closest('a, button, [role="button"], input, select, textarea');
      const labelElement = hoveredElement.closest('[data-cursor-text]') as HTMLElement;
      
      setIsPointer(!!clickable);
      setCursorLabel(labelElement?.dataset.cursorText || null);
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
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
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
          className={`rounded-full transition-all duration-200 flex items-center justify-center overflow-hidden ${
            isPointer ? 'bg-brand-blue/80 scale-[2.5]' : 'bg-white/50'
          }`}
          style={{
            width: cursorLabel ? '40px' : '12px',
            height: cursorLabel ? '40px' : '12px',
          }}
        >
          {cursorLabel && (
            <span className="text-[6px] font-bold text-white tracking-tighter animate-in fade-in zoom-in duration-200">
              {cursorLabel}
            </span>
          )}
        </div>

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
            animation: 'cursor-pulse 2s infinite'
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cursor-pulse {
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
      `}} />
    </>
  );
};

export default AnimatedCursor;
