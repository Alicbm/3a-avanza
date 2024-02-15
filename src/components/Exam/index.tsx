/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext, useState } from 'react';
import { TbBrandPython } from 'react-icons/tb';
import { AppContext } from '../../context';
import ModalExam from '../ModalExam';
import MainButton from '../MainButton';
import { styleBlock } from './styles';

type Props = {
  id: number;
  name: string;
  dificulty: string;
};

function Exam({ id, name, dificulty }: Props) {
  const { setExam } = useContext(AppContext);
  const [modal, setModal] = useState(false);

  return (
    <div
      className="relative grid gap-1 w-full min-h-[100px] rounded-md overflow-hidden"
      style={styleBlock}
    >
      <div 
        className="bg-darkBlue p-4 hover:bg-bgBlue cursor-pointer"
        onClick={() => {
          setModal(!modal);
          setExam(id);
        }}
      >
        <div className="pl-2">
          <h4 className="font-bold text-blue text-xl tracking-wider mb-1">
            {name}
          </h4>
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
            setModal(!modal);
            setExam(id);
          }}
        />
      </div>

      {modal && <ModalExam modal={modal} setModal={setModal} />}
    </div>
  );
}

export default Exam;
