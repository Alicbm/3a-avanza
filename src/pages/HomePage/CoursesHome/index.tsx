/* eslint-disable react/self-closing-comp */
import { IoIosArrowForward } from 'react-icons/io';
import Course from '../../../components/Course';
import { data } from '../../../data/courses.json';

function CoursesHome() {
  return (
    <div className="grid items-center w-full max-w-[1200px] bg-hoverDarkBlue mx-auto rounded-md overflow-hidden">
      <div className="flex justify-between items-center bg-[#0b0e2a] py-2 px-4 mb-10 border-b-2 border-blue cursor-pointer hover:bg-hoverDarkBlue">
        <h2 className="font-title text-5xl text-center text-blue">
          Conoce Algunos de los Cursos
        </h2>
        <p className="flex items-center justify-center text-blue">
          Ver todos los cursos{' '}
          <span>
            <IoIosArrowForward />
          </span>
        </p>
      </div>
      <div className="flex overflow-x-scroll gap-2 pb-5 mx-10 mb-10">
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
