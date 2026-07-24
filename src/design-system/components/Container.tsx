import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

type ContainerComponent = 'div' | 'main' | 'section' | 'header' | 'footer';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: ContainerComponent;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', as: Component = 'div', className = '', children, ...props }, ref) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    const motionProps = {
      ref,
      className: `mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizes[size]} ${className}`,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
      ...props,
    };

    const Comp = motion(Component) as React.ComponentType<typeof motionProps>;

    return <Comp {...motionProps}>{children}</Comp>;
  }
);

Container.displayName = 'Container';
