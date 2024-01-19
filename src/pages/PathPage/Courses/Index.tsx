import { IoIosArrowForward } from 'react-icons/io';
import Course from '../../../components/Course';
import { data } from '../../../data/courses.json';

function Courses() {
  return (
    <div className="relative max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <h2 className="font-title text-white text-5xl border-b-2 border-b-blue pb-2 mb-5">
        Cursos: Front-End
      </h2>
      <div className="w-full flex justify-between items-center mb-5">
        <h4 className="font-bold text-gray">Nivel Básico</h4>
        <p className="flex items-center font-bold text-blue">
          Presentar Examen{' '}
          <span>
            <IoIosArrowForward />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {data.map((course) => (
          <Course
            id={course.id}
            name={course.name}
            origin={course.origin}
            popularity={course.popularity}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
