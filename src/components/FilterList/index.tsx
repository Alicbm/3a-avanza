/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { TfiPlus, TfiMinus  } from "react-icons/tfi";

type Props = {
  list: string[];
  name: string;
  valueList: string
  setItem: Function
  setValueList: Function
  color?: string;
  bgColor?: string;
};

function FilterList({ name, list, setItem, valueList, setValueList, color, bgColor }: Props) {
  const [stateList, setStateList] = useState(false);
  const [itemSearch, setItemSearch] = useState('');

  const filterItems = list.filter(
    (item: string) => item.toLowerCase().includes(itemSearch.toLowerCase()) === true,
  );

  return (
    <div className="relative grid w-full rounded-md cursor-pointer">
    <div
      className="flex justify-start items-center gap-4 bg-bgGreen px-4 py-2 rounded-md"
      onClick={() => setStateList(!stateList)}
      style={{ background: bgColor }}
    >
      <span className='text-green text-md' style={{ color }}>
          {
            !stateList ?
            <TfiPlus /> :
            <TfiMinus  />
          }
        </span>
      <p className="text-white">{valueList}</p>
    </div>
    <div>
      {stateList && (
        <div className="p-2">
          <div className="my-3">
            <input
              type="text"
              placeholder="Buscar..."
              onChange={(e) => setItemSearch(e.target.value)}
              className="w-full h-[35px] text-md bg-hoverDarkBlue text-white px-4 border-b border-hoverGray outline-none placeholder:text-gray"
            />
          </div>

          <ul>
            {filterItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setStateList(false);
                  setValueList(item);
                  setItem(item);
                }}
                className="text-white text-md p-2 py-[10px] border-b border-bgGreen rounded-[4px] cursor-pointer hover:bg-bgBlue"
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
