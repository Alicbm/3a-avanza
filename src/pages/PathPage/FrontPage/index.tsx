import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useLearningPath } from '../../../hooks/useLearningPath';
import { AppContext } from '../../../AppContext';
import SecondaryButton from '../../../components/SecondaryButton';

function FrontPage() {
  const app = useContext(AppContext);
  const { findPath } = useLearningPath(app?.nameLearningPath);

  return (
    <div className="relative flex justify-between items-center max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div className="flex flex-col items-center w-full py-10">
        <p className="text-3xl font-bold text-gray">Ruta de</p>
        <h1 className="text-[65px] text-green font-bold tracking-wider mb-2">
          {findPath?.name}
        </h1>
        <p className="w-[70%] text-gray leading-8 text-md text-center mb-4 mx-auto">
          {findPath?.description}
        </p>
        <Link to="/routes/por-que-estudiar">
          <p className="flex items-center text-lg text-white leading-8 mb-6">
            Por qué estudiar{' '}
            <span className="pl-1 text-green">{findPath?.name}</span>?
            <span className="pl-4 text-green">
              <FaExternalLinkAlt />
            </span>
          </p>
        </Link>

        <div className="flex justify-start items-center gap-4">
        <SecondaryButton
            text="Iniciar Ruta"
            className="w-[200px] border-green text-green"
            style={{ boxShadow: '#0E1824 0px 4px 24px' }}
          />
          <SecondaryButton
            text="Guardar"
            className="w-[200px] border-green text-green"
            style={{ boxShadow: '#0E1824 0px 4px 24px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
