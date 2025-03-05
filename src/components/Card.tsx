
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  color: string;
  to: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  color,
  to,
  className,
  children,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        'relative overflow-hidden rounded-3xl p-8 flex flex-col card-hover',
        `bg-${color}`,
        className
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-medium">{title}</h2>
        {icon && <div>{icon}</div>}
      </div>
      
      {children}
      
      <div className="mt-auto flex justify-end">
        <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default Card;
