import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import { useLearningPath } from '../../../hooks/useLearningPath';
import MainButton from '../../../components/MainButton';
import SecondaryButton from '../../../components/SecondaryButton';
// import img from '../../../images/pathFrontImg.png'

function FrontPage() {
  const { nameLearningPath } = useContext(AppContext);
  const { findPath } = useLearningPath(nameLearningPath);

  return (
    <div className="relative flex justify-between items-center gap-6 max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div className="grid gap-2 w-[100%] px-4">
      <h1 className="text-[60px] text-white font-bold mb-2">
          Por qué estudiar <span className="text-blue">{findPath?.name}</span>
        </h1>
        <p className="w-[90%] text-gray tracking-wide leading-8 text-xl mb-4">
          {findPath?.whyStudyDescription}
        </p>

        <div className="flex justify-start items-center gap-4">
          <MainButton
            text="Iniciar Ruta"
            className="w-[200px] h-[40px] rounded-lg"
          />
          <SecondaryButton
            text="Guardar"
            className="w-[200px] h-[40px] rounded-lg"
          />
        </div>

      </div>
      {/* <div className="absolute -right-20">
        <img
          src={img}
          alt="Desarrollor Front-End"
          className="w-[800px] opacity-5"
        />
      </div> */}
    </div>
  );
}

export default FrontPage;
