
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedShapeProps {
  type: 'triangle' | 'square' | 'circle';
  color: string;
  size: number;
  className?: string;
  animationDelay?: string;
}

const AnimatedShape: React.FC<AnimatedShapeProps> = ({
  type,
  color,
  size,
  className,
  animationDelay,
}) => {
  const getShape = () => {
    switch (type) {
      case 'triangle':
        return (
          <div
            className={cn(
              'shape animate-float',
              className
            )}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
              animationDelay: animationDelay,
            }}
          />
        );
      case 'square':
        return (
          <div
            className={cn(
              'shape animate-rotate-slow',
              className
            )}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              animationDelay: animationDelay,
            }}
          />
        );
      case 'circle':
        return (
          <div
            className={cn(
              'shape rounded-full animate-float',
              className
            )}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              animationDelay: animationDelay,
            }}
          />
        );
      default:
        return null;
    }
  };

  return getShape();
};

export default AnimatedShape;
