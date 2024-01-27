import React from 'react';
import Exam from '../../../components/Exam';
import { ExamsIT } from '../../../types';

type Props = {
  children: any;
  filteredCourses: ExamsIT[];
};

function Exams({ children, filteredCourses }: Props) {
  const allChildren = React.Children.toArray(children);

  return (
    <div className="grid gap-10 max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div>
        {allChildren[0]}
      </div>

      <div>
        <h2 className="font-title text-gray text-5xl pl-5 mb-5">
          Desarrollo Front-End
        </h2>

        <div className="grid grid-cols-4 gap-6">
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
    </div>
  );
}

export default Exams;
