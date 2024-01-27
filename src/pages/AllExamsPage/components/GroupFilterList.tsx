/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import FilterList from '../../../components/FilterList';

type Props = {
  tools: string[];
  learningPaths: string[];
  search: string;
  setPath: (arg: string) => void;
  setTool: (arg: string) => void;
  setLevel: (arg: string) => void;
};

function GroupFilterList({
  tools,
  learningPaths,
  setPath,
  setTool,
  setLevel,
  search
}: Props) {

  const [learningPath, setLearningPath] = useState('Todas las Rutas');
  const [allTools, setAllTools] = useState('Todas las Herramientas');
  const [dificulty, setDificulty] = useState('Todos los niveles');

  useEffect(() => {
    setLearningPath('Todas las Rutas')
    setAllTools('Todas las Herramientas')
    setDificulty('Todos los niveles')
  }, [search])

  useEffect(() => {
    setAllTools('Todas las Herramientas')
    setDificulty('Todos los niveles')
  }, [learningPath])

  useEffect(() => {
    setDificulty('Todos los niveles')
  }, [allTools])

  return (
    <div className="flex justify-center items-center gap-6">
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
