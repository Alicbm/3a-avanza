import { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import jsIcon from '../../icons/js.png';
import ModalExam from '../ModalExam';
import SecondaryButton from '../SecondaryButton';

type Props = {
  id: number;
  name: string;
  dificulty: string;
};

function Exam({ id, name, dificulty }: Props) {
  const { setExam } = useContext(AppContext);
  const [modal, setModal] = useState(false);

  return (
    // <div className="bg-hoverDarkBlue rounded-lg overflow-hidden">
    //   <div>
    //     <img
    //       src={jsIcon}
    //       alt="Test"
    //       className="w-full h-[150px] object-cover"
    //     />
    //   </div>
    //   <div className="px-4 py-2 mb-4">
    //     <h4 className="font-title text-white text-lg">{name}</h4>
    //     <p className="font-title text-gray text-md">{dificulty}</p>
    //   </div>
    //   <div>
    //     <MainButton
    //       text="Tomar Curso"
    //       className="w-full h-[40px] rounded-none p-3"
    //       onClick={() => {
    //         setModal(true);
    //         setExam(id);
    //       }}
    //     />
    //   </div>{' '}
    //   {modal && <ModalExam modal={modal} setModal={setModal} />}
    // </div>
    <div className="grid gap-2 bg-hoverDarkBlue p-2 rounded-md">
      <div className="w-full">
        <img
          src={jsIcon}
          alt={name}
          className="w-full h-[120px] object-cover"
        />
      </div>
      <div className="pl-2">
        <h4 className="font-title text-white text-2xl">{name}</h4>
        <p className="text-white">{dificulty}</p>
      </div>

      <SecondaryButton
        text="Tomar Curso"
        className="w-full"
        onClick={() => {
          setModal(true);
          setExam(id);
        }}
      />

      {modal && <ModalExam modal={modal} setModal={setModal} />}
    </div>
  );
}

export default Exam;
