import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={`menu-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
