/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  placeholder: string;
  setSearch: (arg: string) => void;
  setSimilarSearch: (arg: string) => void;
  listSimilarSearches: string[];
  similarSearch: string;
};

function InputSearch({
  placeholder,
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
    setTest('');
  };  

  return (
    <form
      className="max-w-[1000px] w-full gap-[2px] mx-auto py-50"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="grid place-content-center grid-cols-8 bg-bgGreen rounded-md">
        <div className="relative flex items-center col-span-7 h-[50px]">
          <div className='px-4'>
            <span className='text-gray text-xl'>
              <IoSearchOutline />
            </span>
          </div>
          <input
            type="text"
            placeholder={placeholder}
            value={test}
            className="w-full h-full text-md text-white bg-transparent px-2 outline-none rounded-tl-md rounded-bl-md"
            onChange={(e) => {
              setTest(e.target.value);
              setSimilarSearch(e.target.value);
              setModalSearch(true);
            }}
          />
          {similarSearch.length >= 1 && modalSearch && (
            <ul className="col-span-7 absolute top-[50px] left-0 w-full bg-darkBlue rounded-lg mx-auto z-10">
              {listSimilarSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="w-full text-white text-start text-md border-b border-hoverGray px-[15px] py-[12px] rounded-md cursor-pointer hover:bg-hoverGray"
                  onClick={() => {
                    setSearch(item);
                    setTest('');
                    setModalSearch(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="col-span-1 text-bgGreen text-md font-bold h-full bg-green rounded-tr-md rounded-br-md"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

export default InputSearch;
