/* eslint-disable react/self-closing-comp */
import { IoIosArrowForward } from 'react-icons/io';
import Course from '../../../components/Course';
import { data } from '../../../data/courses.json';

function CoursesHome() {
  return (
    <div className="grid items-center w-full max-w-[1200px] h-[70%] mx-auto">
      <div className="flex justify-between items-center mb-10 cursor-pointer">
        <h2 className="font-title text-5xl text-center text-white">
          Conoce algunos de los <span className="text-blue">cursos</span>
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
          />
        ))}
      </div>
    </div>
  );
}

export default CoursesHome;
