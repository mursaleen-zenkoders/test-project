import React from "react";

interface IProps {
  text: string;
  onCLick: () => void;
  isDisable: boolean;
  className?: string;
}

const Button = ({ isDisable, onCLick, text, className }: IProps) => {
  return (
    <button
      onClick={onCLick}
      disabled={isDisable}
      className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 disabled:text-white  ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
