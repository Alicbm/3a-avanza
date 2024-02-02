import Path from '../../components/LearningPath';

const colorsStyle = ['#6f3a88', '#148bbf', '#ec2d3e', '#03913a', '#fbf73e'];

function LearningPaths() {
  return (
    <div className="w-full">
      <div className="grid items-center max-w-[1200px] w-full py-10 mx-auto">
        <div className='my-4'>
          <h2 className="w-[90%] font-bold text-[50px] text-center text-white mx-auto mb-10">
            Inicia en el Mundo Laboral Aprendiendo las Áreas más Demandas
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
          <Path nameRoute="Desarrollo Front-End" color={colorsStyle[0]} />
          <Path nameRoute="Desarrollo Back-End" color={colorsStyle[1]} />
          <Path nameRoute="Análisis de Datos" color={colorsStyle[2]} />
          <Path nameRoute="Manejo de Bases de Datos" color={colorsStyle[3]} />
          <Path nameRoute="Pensamiento Lógico" color={colorsStyle[4]} />
        </div>
      </div>
    </div>
  );
}

export default LearningPaths;
