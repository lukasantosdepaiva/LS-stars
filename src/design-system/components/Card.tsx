import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: string;
}

const MotionDiv = motion.div;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      hover = false,
      interactive = false,
      className = '',
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: 'bg-white dark:bg-slate-900 shadow-sm',
      elevated: 'bg-white dark:bg-slate-900 shadow-lg',
      outlined: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700',
      filled: 'bg-slate-50 dark:bg-slate-800/50',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const hoverStyles = hover
      ? 'hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200'
      : '';
    const interactiveStyles = interactive ? 'cursor-pointer active:scale-[0.98]' : '';

    return (
      <MotionDiv
        ref={ref}
        className={`rounded-xl ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${interactiveStyles} ${className}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={onClick}
        {...props}
      >
        {children}
      </MotionDiv>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', children, ...props }, ref) => (
    <h3
      ref={ref}
      className={`text-xl font-semibold text-slate-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = '', children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-slate-500 dark:text-slate-400 mt-1 ${className}`}
    {...props}
  >
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center pt-4 border-t border-slate-200 dark:border-slate-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';
