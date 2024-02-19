import { FaRegCircleCheck, FaRegCircleXmark } from 'react-icons/fa6';
import { ChosenOptions, ExamsIT } from '../../../../../types';

type Props = {
  findExam: ExamsIT | undefined;
  chosenOption: ChosenOptions;
};

function FrontPage({ findExam, chosenOption }: Props) {
  const correctAnswer =
    findExam?.exams.filter(
      (item) => item.correctAnswer === chosenOption[item.id],
    )?.length || 0;

  const lengthOfData = findExam?.exams.length || 0;

  const calification =
    (parseFloat(correctAnswer.toFixed(2)) / lengthOfData) * 100;

  const passExam = calification >= 60

  return (
    <div className="max-w-[1200px] w-full pt-10 pb-20 mx-auto rounded-lg overflow-hidden">
      <h1 className="w-[70%] font-bold text-[65px] text-center text-white mx-auto mb-4">
        Has completado el {findExam?.name}
      </h1>

      <p className="text-[30px] text-white text-center opacity-[40%] mb-6">
        <span className="text-purple font-bold">{calification}</span> puntos de{' '}
        <span className="text-purple font-bold">100</span> puntos posibles
      </p>

      <div className="flex justify-center">
        <button
          className="flex justify-center items-center border gap-2 border-purple text-purple py-2 px-10 rounded-md cursor-default"
          type="button"
          style={{ boxShadow: '#120F27 0px 4px 24px' }}
        >
          <span className="text-xl">
            {passExam ? <FaRegCircleCheck /> : <FaRegCircleXmark />}
          </span>
          <p>{ passExam ? 'Aprobaste el examen' : 'Reprobaste el examen' }</p>
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
