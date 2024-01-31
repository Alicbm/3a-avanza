import { IoIosArrowForward } from 'react-icons/io';
import Course from '../../../components/Course';
import { data } from '../../../data/courses.json';

function Courses() {
  return (
    <div className="relative max-w-[1200px] w-full py-5 mx-auto overflow-hidden">
      <div className='flex justify-between items-center bg-hoverDarkBlue border-b-2 border-b-blue p-3 mb-5 rounded-lg'>
        <h2 className="font-bold text-white text-4xl">
          Nivel Básico
        </h2>
        <p className="flex items-center font-bold text-blue text-lg cursor-pointer hover:text-hoverBlue">
          Presentar Examen{' '}
          <span>
            <IoIosArrowForward />
          </span>
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 bg-hoverDarkBlue p-5 rounded-lg">
        {data.map((course) => (
          <Course
            id={course.id}
            name={course.name}
            origin={course.origin}
            popularity={course.popularity}
            dificulty={course.dificulty}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
