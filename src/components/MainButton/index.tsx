/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
type Props = {
  text: string;
  className: string;
  onClick?: () => void;
};

function MainButton({ text, className, onClick }: Props) {
  return (
    <button
      className={`${className} flex justify-center items-center bg-blue text-white font-bold py-2 px-4 rounded-md z-10`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default MainButton;
