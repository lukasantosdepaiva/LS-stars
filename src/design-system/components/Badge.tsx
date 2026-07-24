import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'brand' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

const variantStyles = {
  default:
    'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  success:
    'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800',
  warning:
    'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
  error:
    'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
  info: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800',
  brand:
    'bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-800',
  accent:
    'bg-accent-50 text-accent-700 border border-accent-200 dark:bg-accent-900/30 dark:text-accent-400 dark:border-accent-800',
} as const;

const sizes = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-2.5 py-1 text-sm gap-1.5',
  lg: 'px-3 py-1.5 text-base gap-2',
} as const;

const dotColors = {
  default: 'bg-slate-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  brand: 'bg-brand-500',
  accent: 'bg-accent-500',
} as const;

const MotionSpan = motion.span;
const MotionButton = motion.button;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      dot = false,
      removable = false,
      onRemove,
      className = '',
      children,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <MotionSpan
        ref={ref}
        className={`
          inline-flex items-center font-medium rounded-full border
          transition-all duration-200
          ${variantStyles[variant]}
          ${sizes[size]}
          ${className}
        `}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {dot && (
          <motion.span
            className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        {children}
        {removable && (
          <MotionButton
            onClick={onRemove}
            className="ml-1.5 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={ariaLabel || 'Remover'}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </MotionButton>
        )}
      </MotionSpan>
    );
  }
);

Badge.displayName = 'Badge';
