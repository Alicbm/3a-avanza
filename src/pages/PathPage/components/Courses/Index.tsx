import Course from '../../../../components/Course';
import { data } from '../../../../data/courses.json';

function Courses() {
  
  return (
    <div className="relative max-w-[1200px] w-full py-5 mx-auto overflow-hidden">
      <div className='flex flex-col items-center mb-5 border-b border-hoverGray pb-4'>
        <hr className="w-[150px] border-b-2 border-green my-4" />
        <h2 className="text-center font-bold text-white text-5xl mb-2">
          Cursos Fundamentales
        </h2>
        <p className='text-gray text-center text-md'>Los siguientes cursos formarán las bases requeridas para adentrarte en temas más avanzados</p>
      </div>

      <div className="grid grid-cols-3 gap-6 rounded-lg pt-4 pb-10">
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

export default Courses;
