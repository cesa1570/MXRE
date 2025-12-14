import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

// Simple utility since we haven't installed tailwind-merge yet, 
// but we will use a basic join for now if not available, 
// actually I'll just use template literals to be safe.
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-none font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider";

        const variants = {
            primary: "bg-white text-black hover:bg-gray-200",
            outline: "border border-white text-white hover:bg-white hover:text-black",
            ghost: "text-white hover:bg-white/10"
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-8 text-sm",
            lg: "h-14 px-10 text-base"
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
