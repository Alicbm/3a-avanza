/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import SecondaryButton from '../SecondaryButton';
import MainButton from '../MainButton';

// #0b0e2a

type Props = {
  nameRoute: string;
  color: string;
};

function LearningPath({ nameRoute, color }: Props) {
  const app = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="relative grid gap-4 w-full bg-hoverDarkBlue pb-4 rounded-[10px] overflow-hidden">
      <div style={{ borderBottom: `1px solid ${color}` }}>
        <h2 className="font-title text-xl p-4" style={{ color }}>
          {nameRoute}
        </h2>
      </div>
      <div className="px-4 py-1">
        <p className="text-md text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          nesciunt doloribus, delectus atque ut quam earum labore accusantium
          ipsum vel voluptatibus nemo eum animi.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 px-4">
        <SecondaryButton
          text="Explorar Ruta"
          className="w-[50%]"
          style={{ borderColor: color, color }}
          onClick={() => {
            app?.setNameLearningPath(nameRoute);
            navigate('/routes/route');
          }}
        />
        <MainButton
          text="Iniciar Ruta"
          className="w-[50%] text-hoverDarkBlue"
          style={{ backgroundColor: color, color: '#090b20' }}
        />
      </div>
    </div>
  );
}

export default LearningPath;
