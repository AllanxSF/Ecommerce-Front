import React from "react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`boton-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;


