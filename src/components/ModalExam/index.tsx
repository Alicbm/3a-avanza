import { useNavigate } from 'react-router-dom';
import MainButton from '../MainButton';
import { colors } from '../../styles/colors';

type Props = {
  modal: boolean;
  setModal: Function;
};

function ModalExam({ modal, setModal }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center overflow-hidden z-10"
      style={{ background: 'rgba(0, 0, 0, .9)' }}
    >
      <div
        className="relative w-[60%] max-w-[800px] py-10 px-10 mx-auto rounded-lg"
        style={{
          background: `linear-gradient(110.1deg, ${colors.bgPurple} 0%, ${colors.black} 75%, ${colors.purple} 50%)`,
        }}
      >
        <div className="grid gap-4 w-[60%]">
          <h1 className="font-bold text-white text-[40px]">
            Estás seguro de tomar el examen?
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
              style={{
                background: colors.bgPurple,
                border: `1px solid ${colors.purple}`,
              }}
            />
            <MainButton
              text="Quizá Luego"
              className="w-[200px]"
              onClick={() => {
                setModal(!modal)
                console.log(modal)
              }}
              style={{
                background: colors.bgPurple,
                border: `1px solid ${colors.purple}`,
              }}
            />
          </div>
        </div>
        <div>
          <button
            className="absolute top-5 right-6 text-5xl text-black cursor-pointer"
            onClick={() => setModal(!modal)}
            type="button"
          >
            ✖
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalExam;
