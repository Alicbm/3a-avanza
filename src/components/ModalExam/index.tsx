/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import img from '../../images/pathFrontImg.png';
import MainButton from '../MainButton';
import SecondaryButton from '../SecondaryButton';

type Props = {
  modal: boolean;
  setModal: (arg: boolean) => void;
};

function ModalExam({ modal, setModal }: Props) {

  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-darkBlue overflow-hidden z-10">
      <div className="relative w-[60%] bg-black flex gap-4 py-10 px-10 mx-auto rounded-lg">
        <div className="grid gap-4 w-[60%] overflow-hidden">
          <h1 className="font-title text-white text-[40px]">
            Estás seguro de tomar el <span className="text-blue">examen</span>?
          </h1>
          <p className="text-lg text-gray">
            Tendrás un total de 20 minutos para responder a 15 preguntas de
            selección multiple.
          </p>
          <p className="text-lg text-gray mb-5">
            No temas, puedes presentar el examen tantas veces como gustes.
          </p>
          <div className="flex justify-start items-center gap-6">
            <MainButton 
              text="Tomar Examen" 
              className="w-[200px]" 
              onClick={() => navigate('/exams/test')}
            />
            <SecondaryButton 
              text="Quizá Luego" 
              className="w-[200px]" 
              onClick={() => setModal(false)}
            />
          </div>
        </div>
        <div>
          <img
            src={img}
            alt="Confirmar la realización del examen"
            className="absolute bottom-10 right-10 w-[450px] opacity-[20%]"
          />
        </div>
        <div>
          <span
            className="relative -top-[10px] -right-[230px] text-2xl cursor-pointer"
            onClick={() => setModal(!modal)}
          >
            ✖
          </span>
        </div>
      </div>
    </div>
  );
}

export default ModalExam;
