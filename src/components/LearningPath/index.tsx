import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CiCircleCheck, CiCirclePlus } from 'react-icons/ci';
import { AppContext } from '../../context';
import SecondaryButton from '../SecondaryButton';
import MainButton from '../MainButton';

// #0b0e2a

type Props = {
  nameRoute: string;
};

function LearningPath({ nameRoute }: Props) {
  const app = useContext(AppContext);
  const navigate = useNavigate();

  const styleBlock = {
    boxShadow: '#120F27 0px 4px 24px',
    border: `solid 1px #6f3a88`,
  };

  return (
    // <div
    //   className="relative grid gap-4 w-full bg-hoverDarkBlue pb-4 rounded-lg overflow-hidden"
    //   style={styleBlock}
    // >
    //   <div className='bg-bgPurple border-b border-purple p-4'>
    //     <h2 className="font-bold text-xl text-white tracking-wider">
    //       {nameRoute}
    //     </h2>
    //   </div>
    //   <div className="px-4 py-1">
    //     <p className="text-md text-gray">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
    //       nesciunt doloribus, delectus atque ut quam earum labore accusantium
    //       ipsum vel voluptatibus nemo eum animi.
    //     </p>
    //   </div>
    //   <div className="flex justify-center items-center gap-4 px-4">
    //     <SecondaryButton
    //       text="Explorar Ruta"
    //       className="w-[50%] text-white border border-purple"
    //       onClick={() => {
    //         app?.setNameLearningPath(nameRoute);
    //         navigate('/routes/route');
    //       }}
    //     />
    //     <MainButton
    //       text="Iniciar Ruta"
    //       className="w-[50%] text-white bg-purple"
    //     />
    //   </div>
    // </div>
    <div
      className="relative grid gap-4 w-full bg-hoverDarkBlue pb-4 rounded-lg overflow-hidden"
      style={styleBlock}
    >
      <div className="flex justify-between items-center bg-bgPurple border-b border-purple px-6 py-3">
        <h2 className="font-bold text-2xl text-white tracking-wider">
          {nameRoute}
        </h2>
        <span className="text-purple text-[40px] cursor-pointer">
          <CiCirclePlus />
        </span>
      </div>
      <div className="flex">
        <div className="w-[60%] flex flex-col justify-between px-4 py-1 border-r border-hoverGray">
          <p className="leading-8 text-gray mb-4">
            Conviértete en el arquitecto de experiencias digitales. Aprende
            HTML, CSS, JavaScript y los secretos de frameworks como React y
            Angular. 
          </p>
          <div className="flex gap-4">
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
        <ul className="grid gap-2 w-[40%] text-white px-4">
          <li className="flex items-center gap-2 leading-8 bg-bgPurple rounded-md px-1 cursor-pointer hover:bg-hoverDarkBlue hover:border-bgPurple">
            <span className="text-purple">
              <CiCircleCheck />
            </span>{' '}
            Curso de HTML5
          </li>
          <li className="flex items-center gap-2 leading-8 bg-bgPurple rounded-md px-1 cursor-pointer hover:bg-hoverDarkBlue hover:border-bgPurple">
            <span className="text-purple">
              <CiCircleCheck />
            </span>{' '}
            Curso Intermedio de Javascript
          </li>
          <li className="flex items-center gap-2 leading-8 bg-bgPurple rounded-md px-1 cursor-pointer hover:bg-hoverDarkBlue hover:border-bgPurple">
            <span className="text-purple">
              <CiCircleCheck />
            </span>{' '}
            Curso Basico de Python
          </li>
          <li className="flex items-center gap-2 leading-8 bg-bgPurple rounded-md px-1 cursor-pointer hover:bg-hoverDarkBlue hover:border-bgPurple">
            <span className="text-purple">
              <CiCircleCheck />
            </span>{' '}
            +9 Cursos más
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LearningPath;
