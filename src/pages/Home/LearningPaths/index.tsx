import Path from '../../../components/LearningPath';

function LearningPaths() {
  return (
    <div className="grid items-center max-w-[1200px] w-full h-[70%] mx-auto">
      <h2 className="w-[60%] font-title text-5xl text-center text-white mx-auto mb-10">
        Inicia en el mundo <span className="text-blue">laboral</span>{' '}
        aprendiendo las áreas más <span className="text-blue">demandas</span>
      </h2>
      <div className="w-full grid grid-cols-3 gap-4">
        <Path nameRoute="Desarrollo Front-End" numberCourses="12" />
        <Path nameRoute="Desarrollo Back-End" numberCourses="12" />
        <Path nameRoute="Análisis de Datos" numberCourses="12" />
        <Path nameRoute="Manejo de Bases de Datos" numberCourses="12" />
        <Path nameRoute="Pensamiento Lógico" numberCourses="12" />
      </div>
    </div>
  );
}

export default LearningPaths;
