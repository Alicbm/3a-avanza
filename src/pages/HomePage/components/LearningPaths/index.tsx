import { FaArrowRight } from 'react-icons/fa';
import Path from '../../../../components/LearningPath';

function LearningPaths() {
  return (
    <div className="grid items-center max-w-[1200px] w-full py-20 mx-auto">
      <div className='flex flex-col items-center justify-center mb-6'>
        <p className="font-bold text-purple text-center text-4xl mb-1">
          Especializate en una área
        </p>
        <h2 className="w-[90%] font-bold text-[40px] text-center text-white mx-auto">
          Escoge una Ruta Profesional
        </h2>
        <hr className="w-[150px] border-b border-purple my-6" />
        <p className='w-[70%] text-gray text-2xl text-center mx-auto'>Hemos seleccionado específicamente estas rutas debido a que son de las áreas más demandadas en la industria tecnológica</p>
      </div>

      <div className="flex justify-end items-center gap-1 mb-10">
        <p className="font-bold text-purple text-md underline cursor-pointer">
          Ver todos las rutas
        </p>
        <span className='text-purple'>
          <FaArrowRight />
        </span>
      </div>

      <div className="w-full grid grid-cols-2 gap-6">
        <Path nameRoute="Desarrollo Front-End" />
        <Path nameRoute="Desarrollo Back-End" />
        {/* <Path nameRoute="Análisis de Datos" />
        <Path nameRoute="Manejo de Bases de Datos" />
        <Path nameRoute="Pensamiento Lógico" /> */}
      </div>
    </div>
  );
}

export default LearningPaths;
