import React from 'react';
import { DefaultBody } from '@/utils/Fonts';

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'outline' | 'filled' | 'double-outline';
    size?: 'sm' | 'md' | 'lg';
    spanColor?: 'white' | 'black' | 'blue' | 'red' | 'green' | 'current';
}

const StyledButton = React.forwardRef<HTMLButtonElement, StyledButtonProps>(
    ({ children, className = '', variant = 'outline', size = 'md', spanColor = 'current', ...props }, ref) => {
        const baseClasses = `${DefaultBody.className} font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`;

        const variantClasses = {
            outline: 'bg-transparent border-2 border-current ',
            filled: 'border-2 border-current bg-current text-white',
            'double-outline': 'bg-transparent border-2 border-current  relative'
        };

        const sizeClasses = {
            sm: 'px-4 py-2 text-sm rounded-full',
            md: 'px-6 py-3 text-base rounded-full',
            lg: 'px-8 py-4 text-lg rounded-full'
        };

        const spanColorClasses = {
            white: 'border-white',
            black: 'border-black',
            blue: 'border-blue-500',
            red: 'border-red-500',
            green: 'border-green-500',
            current: 'border-current'
        };

        const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

        return (
            <button
                ref={ref}
                className={combinedClasses}
                {...props}
            >
                {children}
                {variant === 'double-outline' && (
                    <div>
                        <span
                            className={`absolute -top-0.5 -left-0.5 w-full h-full border-2 rounded-full z-10 pointer-events-none ${spanColorClasses[spanColor]}`}
                            aria-hidden="true"
                        />
                        <span
                            className={`absolute top-0.5 left-0.5 w-full h-full border-2 rounded-full z-10 pointer-events-none ${spanColorClasses[spanColor]}`}
                            aria-hidden="true"
                        />

                    </div>
                )}
            </button>
        );
    }
);

StyledButton.displayName = 'StyledButton';

export default StyledButton;