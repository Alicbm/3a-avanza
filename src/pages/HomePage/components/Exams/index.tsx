import { FaArrowRight } from 'react-icons/fa';
import Exam from '../../../../components/Exam';
import { data } from '../../../../data/questions.json';
import { ExamsIT } from '../../../../types';

function Exams() {
  return (
    <div className="grid items-center w-full max-w-[1200px] py-20 mx-auto rounded-md overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-6">
        <p className="font-bold text-blue text-center text-4xl mb-1">
          Especializate en una área
        </p>
        <h2 className="w-[90%] font-bold text-[40px] text-center text-white mx-auto">
          Escoge una Ruta Profesional
        </h2>
        <hr className="w-[150px] border-b border-blue my-6" />
        <p className="w-[70%] text-gray text-2xl text-center mx-auto">
          Hemos seleccionado específicamente estas rutas debido a que son de las
          áreas más demandadas en la industria tecnológica
        </p>
      </div>

      <div className="flex justify-end items-center gap-1 mb-10">
        <p className="font-bold text-blue text-md underline cursor-pointer">
          Ver todos los examenes
        </p>
        <span className='text-blue'>
          <FaArrowRight />
        </span>
      </div>

      <div className="grid grid-cols-4 justify-center items-center gap-4">
        {data.map((item: ExamsIT) => (
          <Exam id={item.id} name={item.name} dificulty={item.dificulty} />
        ))}
        {data.map((item: ExamsIT) => (
          <Exam id={item.id} name={item.name} dificulty={item.dificulty} />
        ))}
        {data.map((item: ExamsIT) => (
          <Exam id={item.id} name={item.name} dificulty={item.dificulty} />
        ))}
      </div>
    </div>
  );
}

export default Exams;
