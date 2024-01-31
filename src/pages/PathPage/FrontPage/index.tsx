import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useLearningPath } from '../../../hooks/useLearningPath';
import { AppContext } from '../../../AppContext';
import MainButton from '../../../components/MainButton';
import SecondaryButton from '../../../components/SecondaryButton';
// import img from '../../../images/testbg.jpg'

function FrontPage() {
  const app = useContext(AppContext);
  const { findPath } = useLearningPath(app?.nameLearningPath);

  return (
    <div className="relative flex justify-between items-center max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <div className="w-[60%]">
        <p className="text-3xl font-bold text-gray">Ruta de</p>
        <h1 className="text-[60px] text-white font-bold mb-2">
          {findPath?.name}
        </h1>
        <p className="text-gray leading-8 text-md mb-4">
          {findPath?.description}
        </p>
        <Link to="/routes/por-que-estudiar">
          <p className="flex items-center text-lg text-white leading-8 mb-6">
            Por qué estudiar{' '}
            <span className="pl-1 text-blue font-bold">{findPath?.name}</span>?
            <span className="pl-4 text-blue">
              <FaExternalLinkAlt />
            </span>
          </p>
        </Link>

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
      {/* <div className="absolute top-0 right-0 bottom-0 left-0">
        <img
          src={img}
          alt={findPath?.name}
          className="w-full opacity-[20%]"
        />
      </div> */}
    </div>
  );
}

export default FrontPage;
