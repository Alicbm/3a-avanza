import { useEffect, useState } from 'react';
import { TbFilterSearch } from 'react-icons/tb';
import FilterList from '../../../../components/FilterList';

type Props = {
  tools: string[];
  learningPaths: string[];
  search: string;
  setPath: Function;
  setTool: Function;
  setLevel: Function;
};

function GroupFilterList({
  tools,
  learningPaths,
  setPath,
  setTool,
  setLevel,
  search,
}: Props) {
  const [learningPath, setLearningPath] = useState('Todas las Rutas');
  const [allTools, setAllTools] = useState('Todas las Herramientas');
  const [dificulty, setDificulty] = useState('Todos los niveles');

  useEffect(() => {
    if (search.length > 0) {
      setLearningPath('Todas las Rutas');
      setAllTools('Todas las Herramientas');
      setDificulty('Todos los niveles');
    }
  }, [search]);

  useEffect(() => {
    setAllTools('Todas las Herramientas');
    setDificulty('Todos los niveles');
  }, [learningPath]);

  useEffect(() => {
    setDificulty('Todos los niveles');
  }, [allTools]);

  return (
    <div className="grid gap-4 content-start min-w-[300px] min-h-[300px] h-auto bg-hoverDarkBlue p-4 rounded-md">
      <h2 className="flex items-center justify-between gap-4 text-white text-3xl px-4 py-2 border-b border-hoverGray">
        Filtrar{' '}
        <span className="text-green">
          <TbFilterSearch />
        </span>
      </h2>
      <FilterList
        setItem={setPath}
        name="Rutas"
        valueList={learningPath}
        setValueList={setLearningPath}
        list={learningPaths}
      />
      <FilterList
        setItem={setTool}
        name="Herramientas"
        valueList={allTools}
        setValueList={setAllTools}
        list={tools || []}
      />
      <FilterList
        setItem={setLevel}
        name="Niveles"
        valueList={dificulty}
        setValueList={setDificulty}
        list={['Basico', 'Intermedio', 'Avanzado']}
      />
    </div>
  );
}

export default GroupFilterList;