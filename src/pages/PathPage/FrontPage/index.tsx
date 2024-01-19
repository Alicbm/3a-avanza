import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import MainButton from '../../../components/MainButton';
import SecondaryButton from '../../../components/SecondaryButton';
import { useLearningPath } from '../../../hooks/useLearningPath';
import { AppContext } from '../../../AppContext';

function FrontPage() {
  const app = useContext(AppContext);
  const { findPath } = useLearningPath(app?.nameLearningPath);

  return (
    <div className="relative flex justify-between items-center gap-6 max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div className="w-[60%]">
        <p className="text-3xl font-bold text-gray">Ruta de</p>
        <h1 className="text-[40px] text-blue font-title mb-2">
          {findPath?.name}
        </h1>
        <p className="text-gray leading-8 text-md mb-4">
          {findPath?.description}
        </p>
        <Link to="/routes/por-que-estudiar">
          <p className="flex items-center text-white font-title leading-8 mb-4">
            Por qué estudiar{' '}
            <span className="pl-1 text-blue">{findPath?.name}</span>?
            <span className="pl-4 text-blue">
              <FaExternalLinkAlt />
            </span>
          </p>
        </Link>

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
          alt={findPath?.name}
          className="w-[800px] opacity-5"
        />
      </div>
    </div>
  );
}

export default FrontPage;
