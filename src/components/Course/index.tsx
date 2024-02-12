/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TbBrandPython } from "react-icons/tb";
import { AppContext } from '../../AppContext';

type Props = {
  id: number;
  name: string;
  origin: string | undefined;
  dificulty: string;
};

function Course({ id, name, origin, dificulty }: Props) {
  const { setCourse } = useContext(AppContext);
  const navigate = useNavigate();

  const styleBlock = {
    boxShadow: 'rgba(66, 148, 110, 0.20) 0px 4px 24px',
    border: `solid 1px #42946E`
  }

  return (
    // <div
    //   className="min-w-[280px] min-h-[230px] bg-darkBlue rounded-md overflow-hidden cursor-pointer hover:bg-hoverDarkBlue"
    //   onClick={() => {
    //     navigate('/courses/video');
    //     setCourse(id);
    //   }}
    // >
    //   <div>
    //     <img
    //       src={testImage}
    //       alt="Test"
    //       className="w-full h-[150px] object-cover"
    //     />
    //   </div>
    //   <div className="px-4 py-2">
    //     <h4 className="font-bold text-white text-lg">{name}</h4>
    //     <p className="text-gray text-md mb-1">{dificulty} - {origin}</p>
    //     <p className="text-blue text-sm">{popularity} Popularidad</p>
    //   </div>
    // </div>
  
    <div 
      className='relative w-full min-h-[100px] bg-bgGreen rounded-md overflow-hidden cursor-pointer hover:bg-bgGreen'
      // style={styleBlock}
      onClick={() => {
        navigate('/courses/video');
        setCourse(id);
      }}
    >
      <div>
        <h2 className="text-xl text-white bg-bgGreen border-b border-green p-4">
          {name}
        </h2>
      </div>
      <div className='grid p-4'>
        <p className='text-white text-lg tracking-wide mb-1'>{origin} - {dificulty}</p>
        <p className='text-green text-md mb-1'>Desarrollo Web</p>
        <p className='text-gray text-md text-justify mb-1'>Hemos seleccionado específicamente estas rutas debido a que son de las áreas más demandadas en la industria tecnológica</p>
      </div>
        <div className='absolute -bottom-4 -right-2 flex justify-center items-center w-[120px] h-[120px] text-[#9fc426] text-[80px] border-2 border-green rounded-[50%] opacity-[.2]'>
          <TbBrandPython />
        </div>
    </div>
  );
}

export default Course;
