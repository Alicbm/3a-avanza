import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import MainButton from '../../../components/MainButton';
import SecondaryButton from '../../../components/SecondaryButton';
import { useLearningPath } from '../../../hooks/useLearningPath';

function FrontPage() {
  const { nameLearningPath } = useContext(AppContext);
  const { findPath } = useLearningPath(nameLearningPath);

  return (
    <div className="relative flex justify-between items-center gap-6 max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div className="w-[60%]">
        <h1 className="text-[40px] text-white font-title mb-2">
          Por qué estudiar <span className="text-blue">{findPath?.name}</span>
        </h1>
        <p className="w-[80%] text-gray leading-8 text-md mb-4">
          {findPath?.whyStudyDescription}
        </p>

        <div className="flex justify-start items-center gap-4">
          <MainButton
            text="Iniciar Ruta"
            className="w-[150px] h-[40px] rounded-lg"
          />
          <SecondaryButton
            text="Guardar"
            className="w-[150px] h-[40px] rounded-lg"
          />
        </div>
      </div>
      <div className="absolute -right-20">
        <img
          src={findPath?.image}
          alt="Desarrollor Front-End"
          className="w-[800px] opacity-5"
        />
      </div>
    </div>
  );
}

export default FrontPage;
