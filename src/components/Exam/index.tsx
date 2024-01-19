import { useContext, useState } from 'react';
import jsIcon from '../../icons/js.png';
import MainButton from '../MainButton';
import ModalExam from '../ModalExam';
import { AppContext } from '../../AppContext';

type Props = {
  id: number;
  name: string;
  dificulty: string;
};

function Exam({ id, name, dificulty }: Props) {
  const { setExam } = useContext(AppContext);
  const [modal, setModal] = useState(false);

  return (
    // <div className="flex justify-between items-center gap-4 max-w-[550px] h-[70px] pr-6 border border-gray rounded-md overflow-hidden">
    //   <div className='flex items-center gap-4'>
    //     <img src={jsIcon} alt="Js" className="h-[70px]" />
    //     <div>
    //       <h4 className="text-white font-title text-lg">
    //         Examen de Javascript
    //       </h4>
    //       <p className="text-gray">Intermedio</p>
    //     </div>
    //   </div>
    //   <div>
    //     <MainButton text="Tomar Curso" className="h-[30px] rounded-md p-3" />
    //   </div>
    // </div>

    <div className="bg-hoverDarkBlue rounded-lg overflow-hidden">
      <div>
        <img
          src={jsIcon}
          alt="Test"
          className="w-full h-[150px] object-cover"
        />
      </div>
      <div className="px-4 py-2 mb-4">
        <h4 className="font-title text-white text-lg">{name}</h4>
        <p className="font-title text-gray text-md">{dificulty}</p>
      </div>
      <div>
        <MainButton
          text="Tomar Curso"
          className="w-full h-[40px] rounded-none p-3"
          onClick={() => {
            setModal(true);
            setExam(id);
          }}
        />
      </div>{' '}
      {modal && <ModalExam modal={modal} setModal={setModal} />}
    </div>
  );
}

export default Exam;
