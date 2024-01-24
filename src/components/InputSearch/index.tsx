/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */

import { useState } from 'react';

type Props = {
  placeholder: string;
  search: string;
  setSearch: (arg: string) => void;
  setSimilarSearch: (arg: string) => void;
  listSimilarSearches: string[];
  similarSearch: string;
};

function InputSearch({
  placeholder,
  search,
  setSearch,
  listSimilarSearches,
  setSimilarSearch,
  similarSearch,
}: Props) {
  const [modalSearch, setModalSearch] = useState(true);
  const [test, setTest] = useState('');

  const handleSubmit = () => {
    setSearch(test);
    setModalSearch(false);
    setTest('')
  };

  return (
    <form
      className="h-auto py-50"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="max-w-[800px] w-[80%] grid place-content-center grid-cols-8 gap-[2px] mx-auto">
        <div className="relative col-span-7 h-[45px]">
          <input
            type="text"
            placeholder={placeholder}
            value={search}
            className="w-full h-full px-4 text-lg text-darkBlue font-bold outline-none rounded-tl-md rounded-bl-md"
            onChange={(e) => {
              setTest(e.target.value);
              setSimilarSearch(e.target.value);
              setModalSearch(true);
            }}
          />
          {similarSearch.length >= 1 && modalSearch && (
            <ul className="col-span-7 absolute top-[50px] left-0 w-full bg-darkBlue rounded-lg mx-auto z-10">
              {listSimilarSearches.map((item) => (
                <li
                  key={item}
                  className="text-white text-md border-b border-hoverGray px-[15px] py-[10px] rounded-md cursor-pointer hover:bg-hoverGray"
                  onClick={() => {
                    setTest(item);
                    setSearch(item);
                    setModalSearch(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="col-span-1 text-white font-title text-lg w-full h-[45px] bg-blue rounded-tr-md rounded-br-md hover:bg-hoverBlue">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default InputSearch;
