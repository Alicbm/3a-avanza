import { useContext, useState } from 'react';
import { TbBrandPython } from 'react-icons/tb';
import { AppContext } from '../../AppContext';
import jsIcon from '../../icons/js.png';
import ModalExam from '../ModalExam';
import SecondaryButton from '../SecondaryButton';
import MainButton from '../MainButton';

type Props = {
  id: number;
  name: string;
  dificulty: string;
};

function Exam({ id, name, dificulty }: Props) {
  const { setExam } = useContext(AppContext);
  const [modal, setModal] = useState(false);

  const styleBlock = {
    boxShadow: 'rgba(140, 174, 242, .20) 0px 4px 24px',
    border: `solid 1px #8CAEF2`
  }

  return (
    // <div className="grid gap-2 bg-hoverDarkBlue p-2 rounded-md">
    //   <div className="w-full">
    //     <img
    //       src={jsIcon}
    //       alt={name}
    //       className="w-full h-[120px] object-cover"
    //     />
    //   </div>
    //   <div className="pl-2">
    //     <h4 className="font-title text-white text-2xl">{name}</h4>
    //     <p className="text-white">{dificulty}</p>
    //   </div>

    //   <SecondaryButton
    //     text="Tomar Curso"
    //     className="w-full"
    //     onClick={() => {
    //       setModal(true);
    //       setExam(id);
    //     }}
    //   />

    //   {modal && <ModalExam modal={modal} setModal={setModal} />}
    // </div>
    <div 
      className='relative grid gap-1 w-full min-h-[100px] rounded-md overflow-hidden cursor-pointer'
      style={styleBlock}
    >
      <div className="bg-darkBlue p-4 hover:bg-bgBlue">
        <div className="pl-2">
          <h4 className="font-bold text-blue text-xl tracking-wider mb-1">{name}</h4>
          <p className="font-bold text-white tracking-wider">Desarrollo Web</p>
          <p className="text-white">{dificulty}</p>
        </div>

        <div className="absolute -bottom-5 -right-8 flex justify-center items-center w-[120px] h-[120px] text-[#f2ed8c] text-[80px] border-2 border-blue rounded-[50%] opacity-[.2]">
          <TbBrandPython />
        </div>
      </div>
      <div>
        <MainButton
          text="Tomar Examen"
          className="w-full text-blue bg-bgBlue rounded-none"
          onClick={() => {
            setModal(true);
            setExam(id);
          }}
        />
      </div>
    </div>
  );
}

export default Exam;
