"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

// Extend ProgressProps to include indicatorClassName
interface ExtendedProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    indicatorClassName?: string;
    value?: number | null; // Allow null value
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ExtendedProgressProps
>(({ indicatorClassName, className, value = 0, ...props }, ref) => {
    // Ensure value is not null before using it
    const percentageValue = value ?? 0; // Default to 0 if value is null

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn('h-full w-full flex-1 bg-primary transition-all', indicatorClassName)}
          style={{ transform: `translateX(-${100 - percentageValue}%)` }}
        />
      </ProgressPrimitive.Root>
    );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
