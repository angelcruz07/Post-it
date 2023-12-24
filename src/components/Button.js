import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="btn btn-outline-secondary text-light m-1 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
