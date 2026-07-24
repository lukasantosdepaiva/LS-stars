import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const MotionButton = motion.button;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      className = '',
      onClick,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 font-semibold rounded-lg
      transition-all duration-200 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      ${fullWidth ? 'w-full' : ''}
    `;

    const variants = {
      primary: `
        bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800
        focus:ring-brand-500
        shadow-sm hover:shadow-md
        dark:bg-brand-600 dark:hover:bg-brand-700
      `,
      secondary: `
        bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700
        focus:ring-accent-500
        shadow-sm hover:shadow-md
        dark:bg-accent-500 dark:hover:bg-accent-600
      `,
      outline: `
        border-2 border-brand-600 text-brand-600 hover:bg-brand-50 active:bg-brand-100
        focus:ring-brand-500
        dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-900/30
      `,
      ghost: `
        text-slate-700 hover:bg-slate-100 active:bg-slate-200
        focus:ring-slate-500
        dark:text-slate-300 dark:hover:bg-slate-800 dark:active:bg-slate-700
      `,
      destructive: `
        bg-red-600 text-white hover:bg-red-700 active:bg-red-800
        focus:ring-red-500
        shadow-sm hover:shadow-md
        dark:bg-red-600 dark:hover:bg-red-700
      `,
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
      xl: 'px-8 py-4 text-xl gap-3',
    };

    return (
      <MotionButton
        ref={ref}
        disabled={disabled || loading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: loading || disabled ? 1 : 1.02 }}
        whileTap={{ scale: loading || disabled ? 1 : 0.98 }}
        onClick={onClick}
        type={type}
        {...props}
      >
        {loading ? (
          <>
            <motion.svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <motion.path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
            <span>Carregando...</span>
          </>
        ) : (
          <>
            {leftIcon && !loading && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && !loading && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';
