import Exam from '../../../components/Exam';
import { data } from '../../../data/questions.json'
import { ExamsIT } from '../../../types';

function Exams() {
  return (
    <div className="grid items-center w-full max-w-[1200px] mx-auto">
      <h2 className="w-[60%] font-title text-5xl text-center text-white mx-auto mb-5">
        ¿Quieres poner a prueba tus{' '}
        <span className="text-blue">conocimientos</span>?
      </h2>
      <p className="w-[70%] text-gray text-lg text-center leading-8 mx-auto mb-10">
        En 3A Avanza, te ofrecemos una serie de exámenes diseñados para validas
        tu conocimiento en diversas áreas. Estos exámenes están categorizados en
        tres niveles: Básico, Intermedio y Avanzado. ¡Mide tu progreso y
        demuestra tu dominio en cada etapa de aprendizaje!
      </p>
      <div className="grid grid-cols-4 justify-center items-center gap-4">
        {
          data.map((item: ExamsIT) => (
            <Exam 
              id={item.id}
              name={item.title}
              dificulty={item.dificulty}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Exams;
