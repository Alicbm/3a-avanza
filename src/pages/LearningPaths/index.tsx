import { styleBG } from './styles';
import Path from '../../components/LearningPath';
import SecondaryButton from '../../components/SecondaryButton';

function LearningPaths() {
  return (
    <div className="w-full py-20" style={styleBG}>
      <div className="grid items-center gap-20 max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-[90%] font-bold text-[65px] text-center text-white mx-auto mb-4">
            Aprende las Áreas más Demandas de la Industria
          </h2>
          <p className="w-[60%] text-gray text-center text-xl mb-6 mx-auto">
            ¿Todavía no sabes que estudiar?
          </p>
          <SecondaryButton
            text="¡Toma nuestro test y descrubelo junto a nosotros!"
            className="text-purple border-purple"
            style={{ boxShadow: '#120F27 0px 4px 24px' }}
          />
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <Path nameRoute="Desarrollo Front-End" />
          <Path nameRoute="Desarrollo Back-End" />
          <Path nameRoute="Análisis de Datos" />
          <Path nameRoute="Manejo de Bases de Datos" />
          <Path nameRoute="Pensamiento Lógico" />
        </div>
      </div>
    </div>
  );
}

export default LearningPaths;
