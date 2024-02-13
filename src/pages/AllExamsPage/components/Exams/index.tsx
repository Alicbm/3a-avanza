import { ReactNode } from 'react';
import { CoursesIT, ExamsIT } from '../../../../types';
import Exam from '../../../../components/Exam';
import NotResults from '../../../../components/NotResults';

type Props = {
  children: ReactNode;
  filteredCourses: ExamsIT[] | CoursesIT[];
  search: string;
};

function Exams({ children, filteredCourses, search }: Props) {
  return (
    <div className="grid gap-10 bg-hoverDarkBlue px-10 py-10  rounded-md">
      <div className="grid gap-6">
        <div>
          <h2 className="text-white font-bold tracking-wider text-[50px] mb-2">
            <span className="text-blue">Evalua</span> todo lo
            <span className="text-blue"> A</span>prendido!{' '}
          </h2>
          <p className="text-gray leading-8">
            ¡Evalua los conocimientos adquiridos! Tenemos examenes para cada una
            de las herramientas antes presentadas.
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
          filteredCourses.map((exam) => (
            <Exam
              key={exam.id}
              id={exam.id}
              name={exam.name}
              dificulty={exam.dificulty}
            />
          ))
        ) : (
          <NotResults searched={search} />
        )}
      </div>
    </div>
  );
}

export default Exams;
