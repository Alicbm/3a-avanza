import { ReactNode } from 'react';
import { CoursesIT, ExamsIT } from '../../../../types';
import Course from '../../../../components/Course';
import NotResults from '../../../../components/NotResults';

type Props = {
  children: ReactNode;
  filteredCourses: CoursesIT[] | ExamsIT[];
  search: string;
};

function AllCourses({ children, filteredCourses, search }: Props) {
  return (
    <div className="grid gap-10 bg-hoverDarkBlue px-10 py-10 rounded-md">
      <div className="grid gap-6">
        <div>
          <h2 className="text-white font-bold tracking-wider text-[50px] mb-2">
            <span className="text-green">A</span>ccede a todos los{' '}
            <span className="text-green">cursos</span>
          </h2>
          <p className="text-gray leading-8">
            Tenemos más de 200 cursos repartidos en diferentes áreas como serían
            desarrollo we, analisis de datos, bases de datos y muchas más.
          </p>
        </div>
        <div>{children}</div>
      </div>

      {search.length > 0 && (
        <div>
          <p className="text-white text-xl pl-5 py-2">
            Resultados de busqueda para <i className="text-blue">{search}</i>
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
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
