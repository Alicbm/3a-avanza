import React from 'react';
import Course from '../../../components/Course';
import { CoursesIT } from '../../../types';

type Props = {
  children: any;
  filteredCourses: CoursesIT[];
  search: string;
};

function AllCourses({ children, filteredCourses, search }: Props) {
  const allChildren = React.Children.toArray(children);

  return (
    <div className="max-w-[1200px] w-full grid gap-6 py-10 mx-auto overflow-hidden">
      <div className="flex justify-center items-center gap-6">
        {allChildren[0]}
        {allChildren[1]}
        {allChildren[2]}
      </div>

      <div>
        {search.length > 0 && (
          <p className="text-white text-xl pl-5 py-2">
            Resultados de busqueda para <i className="text-blue">{search}</i>
          </p>
        )}
      </div>

      <div className="grid grid-cols-4 gap-6">
        {allChildren[3]
          ? allChildren[3]
          : filteredCourses.map((course) => (
              <Course
                key={course.id}
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

export default AllCourses;
