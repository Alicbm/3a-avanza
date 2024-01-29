/* eslint-disable react/self-closing-comp */
import { IoIosArrowForward } from 'react-icons/io';
import Course from '../../../components/Course';
import { data } from '../../../data/courses.json';

function CoursesHome() {
  return (
    <div className="grid items-center w-full max-w-[1200px] bg-hoverDarkBlue py-[40px] px-[40px] mx-auto rounded-[20px]">
      <div className="flex justify-between items-center mb-10 cursor-pointer">
        <h2 className="font-title text-[35px] text-center text-white">
          Conoce Algunos de los Cursos
        </h2>
        <p className="flex items-center justify-center text-blue">
          Ver todos los cursos{' '}
          <span>
            <IoIosArrowForward />
          </span>
        </p>
      </div>
      <div className="flex overflow-x-scroll gap-2 pb-5">
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

export default CoursesHome;
