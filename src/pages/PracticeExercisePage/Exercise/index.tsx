/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

function Exercise() {
  const [state, setState] = useState(false);

  return (
    <div className="grid gap-4">
      <div
        className="bg-darkBlue rounded-lg cursor-pointer hover:bg-hoverDarkBlue overflow-hidden"
        onClick={() => setState(!state)}
      >
        <div className="flex justify-between items-center bg-[#0b0e2a] px-4 py-2">
          <h2 className="font-bold text-blue text-4xl">Ejercicio #1</h2>
          <span className="text-blue text-[40px]">
            {state ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </span>
        </div>

        <div className='px-6 py-3'>
          <p className="text-white text-justify leading-8 mb-5">
            Realiza un script que pida numeros hasta que se pulse "cancelar". Si
            no es un número debera indicarse con un alert y seguir pidiendo. Al
            salir con "cancelar" deberá indicarse la suma total de los números
            introducidos.
          </p>
        </div>
      </div>
      {state && (
        <div className="bg-darkBlue rounded-lg p-6 hover:bg-hoverDarkBlue">
          <div className="w-[90%] mx-auto">
            <h3 className="font-bold text-blue text-3xl mb-5">Solución</h3>
            <div className="w-[full] h-[400px] bg-gray"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Exercise;
