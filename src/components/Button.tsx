import React from 'react';
import styled, { css } from 'styled-components';

// Define styled component Button
// Use css helper for complex conditional styles
const StyledButton = styled.button<{ variant?: 'primary' | 'secondary'; size?: 'sm' | 'md' | 'lg'; disabled?: boolean }>`
  /* Base styles */
  padding: ${({ size }) =>
    size === 'sm' ? '0.4rem 0.8rem' :
    size === 'lg' ? '0.8rem 1.6rem' :
    '0.6rem 1.2rem'}; /* Size-based padding */
  border: none;
  border-radius: 6px; /* Example border radius */
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, opacity 0.2s;
  display: inline-flex; /* Align icon/text if needed */
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;

  /* Variant styles using theme */
  ${({ theme, variant = 'primary' }) => variant === 'primary' && css`
    background-color: ${theme.primary};
    color: ${theme.body === '#FFF' ? '#363537' : '#FAFAFA'}; /* Auto contrast text */
    &:hover {
      /* Slightly darken/lighten primary - needs theme helper later */
      opacity: 0.9;
    }
  `}

  ${({ theme, variant = 'primary' }) => variant === 'secondary' && css`
    background-color: ${theme.secondary};
    color: ${theme.body === '#FFF' ? '#363537' : '#FAFAFA'}; /* Auto contrast text */
     &:hover {
      opacity: 0.9;
    }
  `}

  /* Disabled state */
  &:disabled {
    background-color: #cccccc; /* Use theme color later */
    color: #666666;
    cursor: not-allowed;
    opacity: 0.7;
  }

  /* Example combining with Tailwind utilities via className prop */
  /* This button might receive classes like "ml-2" or "w-full" */
`;

// Define component props, extending standard button attributes
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // Add icon props later if needed: iconLeft?: React.ReactNode;
}

// Create the React component
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '', // Accept className prop
  ...props
}) => {
  return (
    // Pass variant to styled component, pass className for Tailwind utilities
    <StyledButton variant={variant} className={className} {...props}>
      {children}
    </StyledButton>
  );
};

// Export the component
export default Button; // Default export might be useful for lazy loading components