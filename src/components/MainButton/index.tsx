/* eslint-disable react/require-default-props */
import React from "react";

type Props = {
  text: string;
  className: string;
  onClick?: () => void;
  style?: React.CSSProperties | undefined
};

function MainButton({ text, className, onClick, style }: Props) {
  return (
    <button
      className={`${className} flex justify-center items-center bg-blue text-white font-bold py-2 px-4 rounded-md z-10 hover:bg-hoverBlue`}
      onClick={onClick}
      style={style}
      type='button'
    >
      {text}
    </button>
  );
}

export default MainButton;
