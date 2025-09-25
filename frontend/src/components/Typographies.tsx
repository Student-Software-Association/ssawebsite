import React from 'react';
import Link from 'next/link';
import { DefaultHeaders, DefaultBody } from '@/utils/Fonts';

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

interface LinkTypographyProps extends TypographyProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

// Header Components - Using DefaultHeaders font
export const H1: React.FC<TypographyProps> = ({ className = '', children }) => (
  <h1 className={`${DefaultHeaders.className} text-4xl md:text-6xl font-bold ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ className = '', children }) => (
  <h2 className={`${DefaultHeaders.className} text-3xl md:text-5xl font-bold ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ className = '', children }) => (
  <h3 className={`${DefaultHeaders.className} text-2xl md:text-4xl font-semibold ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ className = '', children }) => (
  <h4 className={`${DefaultHeaders.className} text-xl md:text-3xl font-semibold ${className}`}>
    {children}
  </h4>
);

export const H5: React.FC<TypographyProps> = ({ className = '', children }) => (
  <h5 className={`${DefaultHeaders.className} text-lg md:text-2xl font-medium ${className}`}>
    {children}
  </h5>
);

export const H6: React.FC<TypographyProps> = ({ className = '', children }) => (
  <h6 className={`${DefaultHeaders.className} text-base md:text-xl font-medium ${className}`}>
    {children}
  </h6>
);

// Body Text Components - Using DefaultBody font
export const P: React.FC<TypographyProps> = ({ className = '', children }) => (
  <p className={`${DefaultBody.className} text-base leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Span: React.FC<TypographyProps> = ({ className = '', children }) => (
  <span className={`${DefaultBody.className} ${className}`}>
    {children}
  </span>
);

export const Small: React.FC<TypographyProps> = ({ className = '', children }) => (
  <small className={`${DefaultBody.className} text-sm ${className}`}>
    {children}
  </small>
);

export const Strong: React.FC<TypographyProps> = ({ className = '', children }) => (
  <strong className={`${DefaultBody.className} font-bold ${className}`}>
    {children}
  </strong>
);

export const Em: React.FC<TypographyProps> = ({ className = '', children }) => (
  <em className={`${DefaultBody.className} italic ${className}`}>
    {children}
  </em>
);

// Link Components - Using DefaultBody font for consistency
export const LinkText: React.FC<LinkTypographyProps> = ({ 
  className = '', 
  children, 
  href, 
  external = false,
  onClick 
}) => {
  const linkClasses = `${DefaultBody.className} ${className}`;
  
  if (external) {
    return (
      <a 
        href={href} 
        className={linkClasses}
        target="_blank" 
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses} onClick={onClick}>
      {children}
    </Link>
  );
};

// Specialty Typography
export const Lead: React.FC<TypographyProps> = ({ className = '', children }) => (
  <p className={`${DefaultBody.className} text-xl text-gray-600 leading-7 ${className}`}>
    {children}
  </p>
);

export const Caption: React.FC<TypographyProps> = ({ className = '', children }) => (
  <span className={`${DefaultBody.className} text-sm text-gray-500 ${className}`}>
    {children}
  </span>
);

export const Label: React.FC<TypographyProps> = ({ className = '', children }) => (
  <label className={`${DefaultBody.className} text-sm font-medium ${className}`}>
    {children}
  </label>
);

// Button Components
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

export const StyledButton: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'outline', 
  size = 'md',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    outline: 'bg-transparent border-2 border-current hover:bg-current hover:text-white',
    filled: 'bg-current text-white border-2 border-current hover:bg-transparent hover:text-current'
  };

  return (
    <button 
      className={`${DefaultBody.className} ${sizeClasses[size]} ${variantClasses[variant]} 
        rounded-full transition-all duration-300 font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
