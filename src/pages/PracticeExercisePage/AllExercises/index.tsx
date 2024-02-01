import FilterList from '../../../components/FilterList';
import Exercise from '../Exercise';

function AllExercises() {
  return (
    <div className="max-w-[1200px] w-full h-full grid pb-10 mx-auto">
      <div className=" grid grid-cols-2 gap-4 my-10">
        <div className="flex justify-end">
          <FilterList
            name="Rutas de Aprendizaje"
            list={[]}
            setItem={() => console.log()}
            setValueList={() => console.log()}
            valueList="Todos las Rutas"
          />
        </div>
        <div className="flex justify-start">
          <FilterList
            name="Lenguaje de Programacion"
            list={[]}
            setItem={() => console.log()}
            setValueList={() => console.log()}
            valueList="Todos los Lenguajes"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="grid gap-4">
          {[1, 2, 3, 4].map(() => (
            <Exercise />
          ))}
        </div>
        <div className="grid gap-4">
          {[1, 2, 3, 4].map(() => (
            <Exercise />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllExercises;
