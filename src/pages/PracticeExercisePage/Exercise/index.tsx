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
        className="bg-black rounded-lg px-6 py-3 cursor-pointer hover:bg-hoverDarkBlue"
        onClick={() => setState(!state)}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-title text-blue text-4xl pb-2">Ejercicio #1</h2>
          <span className="text-blue text-[40px]">
            {state ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </span>
        </div>

        <div>
          <p className="text-white leading-8 mb-5">
            Realiza un script que pida numeros hasta que se pulse "cancelas". Si
            no es un número debera indicarse con un alert y seguir pidiendo. Al
            salir con "cancelar" deberá indicarse la suma total de los números
            introducidos.
          </p>
        </div>
      </div>
      {state && (
        <div className="bg-black rounded-lg p-6 hover:bg-hoverDarkBlue">
          <div className="w-[90%] mx-auto">
            <h3 className="font-title text-blue text-3xl mb-5">Solución</h3>
            <div className="w-[full] h-[400px] bg-gray"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Exercise;
