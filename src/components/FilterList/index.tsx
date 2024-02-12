/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
// import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { TfiPlus, TfiMinus  } from "react-icons/tfi";

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
    (item: string) => item.toLowerCase().includes(itemSearch.toLowerCase()) === true,
  );

  return (
    // <div className="relative flex justify-center items-center gap-1 rounded-md cursor-pointer">
    //   <div
    //     className="flex items-center h-[45px] bg-hoverDarkBlue px-4 rounded-md"
    //     onClick={() => setStateList(!stateList)}
    //   >
    //     <p className="text-blue font-bold">{name}</p>
    //   </div>
    //   <div className="min-w-[200px]">
    //     <div
    //       className="flex justify-around items-center gap-4 h-[45px] bg-darkBlue hover:bg-hoverDarkBlue rounded-md px-4 py-2"
    //       onClick={() => setStateList(!stateList)}
    //     >
    //       <p className="text-white font-bold">{valueList}</p>
    //       <span className='text-blue text-[30px]'>
    //         {
    //           !stateList ?
    //           <MdOutlineKeyboardArrowDown /> :
    //           <MdOutlineKeyboardArrowUp />
    //         }
    //       </span>
    //     </div>
    //     {stateList && (
    //       <div className="absolute top-[50px] left-0 right-0 bg-darkBlue rounded-md p-2">
    //         <div className="my-3">
    //           <input
    //             type="text"
    //             placeholder="Buscar..."
    //             onChange={(e) => setItemSearch(e.target.value)}
    //             className="w-full h-[40px] bg-white text-lg text-black font-bold rounded-[4px] px-4 outline-none opacity-90"
    //           />
    //         </div>

    //         <ul className="max-h-[200px] overflow-y-scroll">
    //           {filterItems.map((item) => (
    //             <li
    //               key={item}
    //               onClick={() => {
    //                 setStateList(false);
    //                 setValueList(item);
    //                 setItem(item);
    //               }}
    //               className="text-white text-md border-b border-hoverGray p-[5px] py-[10px] rounded-[4px] cursor-pointer hover:bg-hoverGray"
    //             >
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </div>


    // <div className="relative grid gap-2 w-full rounded-md cursor-pointer">
    //   <div
    //     className="relative flex justify-center items-center gap-4 border border-green px-4 py-2 rounded-tl-[20px] rounded-tr-md rounded-bl-md rounded-br-md"
    //     onClick={() => setStateList(!stateList)}
    //   >
    //     <p className="absolute -top-2 left-8 text-green text-sm bg-hoverDarkBlue px-2">{name}</p>
    //     <p className="text-white">{valueList}</p>
    //     <span className='text-green text-4xl'>
    //         {
    //           !stateList ?
    //           <MdOutlineKeyboardArrowDown /> :
    //           <MdOutlineKeyboardArrowUp />
    //         }
    //       </span>
    //   </div>
    //   <div>
    //     {stateList && (
    //       <div className=" border border-green p-2 rounded-t-md rounded-bl-md rounded-br-[20px]">
    //         <div className="my-3">
    //           <input
    //             type="text"
    //             placeholder="Buscar..."
    //             onChange={(e) => setItemSearch(e.target.value)}
    //             className="w-full h-[35px] bg-white text-md text-black rounded-[4px] px-4 outline-none opacity-90"
    //           />
    //         </div>

    //         <ul className="max-h-[200px] overflow-y-scroll">
    //           {filterItems.map((item) => (
    //             <li
    //               key={item}
    //               onClick={() => {
    //                 setStateList(false);
    //                 setValueList(item);
    //                 setItem(item);
    //               }}
    //               className="text-white text-md border-b border-hoverGray p-[5px] py-[8px] rounded-[4px] cursor-pointer hover:bg-hoverGray"
    //             >
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="relative grid w-full rounded-md cursor-pointer">
    <div
      className="flex justify-start items-center gap-4 bg-bgGreen px-4 py-2 rounded-md"
      onClick={() => setStateList(!stateList)}
    >
      {/* <p className="absolute -top-2 left-8 text-green text-sm bg-hoverDarkBlue px-2">{name}</p> */}
      <span className='text-green text-md'>
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
                className="text-white text-md p-2 py-[10px] border-b border-bgGreen rounded-[4px] cursor-pointer hover:bg-bgGreen"
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
