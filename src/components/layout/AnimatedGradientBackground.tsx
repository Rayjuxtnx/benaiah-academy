"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function AnimatedGradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const variants = {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: '100% 50%',
    },
  };

  return (
    <div className={cn('relative w-full', className)}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundSize: '400% 400%',
          backgroundImage:
            'linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
        }}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
       <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
