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
