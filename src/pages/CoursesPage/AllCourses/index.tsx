import Course from '../../../components/Course';
import NotResults from '../../../components/NotResults';
import { CoursesIT, ExamsIT } from '../../../types';

type Props = {
  filteredCourses: CoursesIT[] | ExamsIT[];
  search: string;
};

function AllCourses({ filteredCourses, search }: Props) {
  return (
    <div>
      <div>
        {search.length > 0 && (
          <p className="text-white text-xl pl-5 py-2">
            Resultados de busqueda para <i className="text-blue">{search}</i>
          </p>
        )}
      </div>

      <div className='grid grid-cols-2 gap-6'>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Course
              key={course.id}
              id={course.id}
              name={course.name}
              origin={course.origin}
              dificulty={course.dificulty}
            />
          ))
        ) : (
          <NotResults searched={search} />
        )}
      </div>
    </div>
  );
}

export default AllCourses;
