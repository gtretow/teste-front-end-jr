import React from "react";
import { ButtonProps } from "../../types/ButtonProps";



const Button: React.FC<ButtonProps> = ({
  className,
  ariaLabel,
  onClick,
  children,
}) => {
  return (
    <button className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
