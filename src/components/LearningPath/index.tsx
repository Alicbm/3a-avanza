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
  // color: string;
};

function LearningPath({ nameRoute }: Props) {
  const app = useContext(AppContext);
  const navigate = useNavigate();

  const styleBlock = {
    boxShadow: 'rgba(111, 58, 136, 0.20) 0px 4px 24px',
    border: `solid 1px #6f3a88`
  }

  return (
    <div 
      className="relative grid gap-4 w-full bg-hoverDarkBlue pb-4 rounded-lg overflow-hidden"
      style={styleBlock}
    >
      <div className='bg-bgPurple border-b border-purple p-4'>
        <h2 className="font-bold text-xl text-white tracking-wider">
          {nameRoute}
        </h2>
      </div>
      <div className="px-4 py-1">
        <p className="text-md text-gray">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          nesciunt doloribus, delectus atque ut quam earum labore accusantium
          ipsum vel voluptatibus nemo eum animi.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 px-4">
        <SecondaryButton
          text="Explorar Ruta"
          className="w-[50%] text-white border border-purple"
          onClick={() => {
            app?.setNameLearningPath(nameRoute);
            navigate('/routes/route');
          }}
        />
        <MainButton
          text="Iniciar Ruta"
          className="w-[50%] text-white bg-purple"
        />
      </div>
    </div>
  );
}

export default LearningPath;
