import React from 'react';
import Exam from '../../../components/Exam';
import { CoursesIT, ExamsIT } from '../../../types';

type Props = {
  children: any;
  filteredCourses: ExamsIT[] | CoursesIT[];
};

function Exams({ children, filteredCourses }: Props) {
  const allChildren = React.Children.toArray(children);

  return (
    <div className="grid gap-10 max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div>
        {allChildren[0]}
      </div>

        <div className="grid grid-cols-4 gap-6 bg-secondaryDarkBlue p-5 rounded-lg">
           {allChildren[1]
          ? allChildren[1]
          : filteredCourses.map((exam) => (
              <Exam
                key={exam.id}
                id={exam.id}
                name={exam.name}
                dificulty={exam.dificulty}
              />
            ))}
        </div>
    </div>
  );
}

export default Exams;
