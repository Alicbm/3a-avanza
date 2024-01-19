import Exam from '../../../components/Exam';
import FilterList from '../../../components/FilterList';

const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function AllExams() {
  return (
    <div className="grid gap-10 max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div className="flex justify-center items-center gap-6 mb-10">
        <FilterList
          name="Rutas"
          text="Todas las Rutas"
          list={[
            { text: 'Desarrollo Front-End' },
            { text: 'Desarrollo Back-End' },
            { text: 'Análisis de Datos' },
          ]}
        />
        <FilterList
          name="Herramientas"
          text="Todas las herramientas"
          list={[
            { text: 'Javascript' },
            { text: 'Python' },
            { text: 'Java' },
            { text: 'Excel' },
          ]}
        />
        <FilterList
          name="Nivel"
          text="Todos los niveles"
          list={[
            { text: 'Básico' },
            { text: 'Intermedio' },
            { text: 'Avanzado' },
          ]}
        />
      </div>

      <div>
        <h2 className="font-title text-gray text-5xl pl-5 mb-5">
          Desarrollo Front-End
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {test?.map(() => (
            <Exam />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllExams;
