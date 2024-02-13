/* eslint-disable react/self-closing-comp */
import { FaArrowRight } from 'react-icons/fa';
import Course from '../../../../components/Course';
import { data } from '../../../../data/courses.json';

function CoursesHome() {
  return (
    <div className="grid items-center w-full max-w-[1200px] py-20 mx-auto rounded-md overflow-hidden">
      <div className='flex flex-col items-center justify-center mb-6'>
        <p className="font-bold text-green text-center text-4xl mb-1">
          Especializate en una área
        </p>
        <h2 className="w-[90%] font-bold text-[40px] text-center text-white mx-auto">
          Escoge una Ruta Profesional
        </h2>
        <hr className="w-[150px] border-b border-green my-6" />
        <p className='w-[70%] text-gray text-2xl text-center mx-auto'>Hemos seleccionado específicamente estas rutas debido a que son de las áreas más demandadas en la industria tecnológica</p>
      </div>

      <div className="flex justify-end items-center gap-1 mb-10">
        <p className="font-bold text-green text-md underline cursor-pointer">
          Ver todos los cursos
        </p>
        <span className='text-green'>
          <FaArrowRight />
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 pb-5 mb-10">
        {data.map((course) => (
          <Course
            id={course.id}
            name={course.name}
            origin={course.origin}
            dificulty={course.dificulty}
          />
        ))}
      </div>
    </div>
  );
}

export default CoursesHome;
