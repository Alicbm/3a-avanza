/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

type Props = {
  list: string[];
  name: string;
  valueList: string
  setItem: (arg: string) => void;
  setValueList: (arg: string) => void
};

function FilterList({ name, list, setItem, valueList, setValueList }: Props) {
  const [stateList, setStateList] = useState(false);
  const [itemSearch, setItemSearch] = useState('');

  const filterItems = list.filter(
    (item: string) => item.toLowerCase().includes(itemSearch) === true,
  );

  return (
    <div className="relative flex justify-center items-center gap-1 rounded-md cursor-pointer">
      <div
        className="flex items-center h-[45px] bg-hoverDarkBlue px-4 rounded-md"
        onClick={() => setStateList(!stateList)}
      >
        <p className="text-blue font-bold">{name}</p>
      </div>
      <div className="min-w-[200px]">
        <div
          className="flex justify-around items-center gap-4 h-[45px] bg-darkBlue hover:bg-hoverDarkBlue rounded-md px-4 py-2"
          onClick={() => setStateList(!stateList)}
        >
          <p className="text-gray font-bold">{valueList}</p>
          <span className='text-blue text-[30px]'>
            {
              !stateList ?
              <MdOutlineKeyboardArrowDown /> :
              <MdOutlineKeyboardArrowUp />
            }
          </span>
        </div>
        {stateList && (
          <div className="absolute top-[50px] left-0 right-0 bg-darkBlue border border-hoverGray rounded-md p-2">
            <div className="my-3">
              <input
                type="text"
                placeholder="Buscar..."
                onChange={(e) => setItemSearch(e.target.value)}
                className="w-full h-[40px] bg-hoverGray text-lg text-white rounded-md px-4 outline-none opacity-80"
              />
            </div>

            <ul className="max-h-[200px] overflow-y-scroll">
              {filterItems.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setStateList(false);
                    setValueList(item);
                    setItem(item);
                  }}
                  className="text-white text-md border-b border-hoverGray p-[5px] py-[10px] rounded-md cursor-pointer hover:bg-hoverGray"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterList;
