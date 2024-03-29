/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";

type Props = {
  text: string;
  className: string;
  onClick?: () => void;
  style?: React.CSSProperties | undefined
};

function SecondaryButton({ text, className, onClick, style }: Props) {
  return (
    <button
      className={`${className} flex justify-center items-center border border-blue text-blue font-bold py-2 px-4 rounded-md z-10 hover:bg-darkBlue`}
      onClick={onClick}
      style={style}
      type='button'
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
