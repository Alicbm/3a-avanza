import { FaRegCircleCheck, FaRegCircleXmark } from 'react-icons/fa6';
import { ChosenOptions, ExamsIT } from '../../../../../types';

type Props = {
  findExam: ExamsIT | undefined;
  chosenOption: ChosenOptions;
};

function Results({ findExam, chosenOption }: Props) {
  return (
    <div className="max-w-[1200px] w-full py-10 mx-auto overflow-hidden">
      <h2 className="font-title text-white text-5xl mb-5">Tus Respuestas</h2>

      {findExam?.exams.map((item) => (
        <div key={item.id} className="border-b border-hoverGray pb-6 mb-8">
          <h3 className="text-gray text-xl font-bold mb-4">
            <span className="text-blue">{item.id}.</span> {item?.question}
          </h3>
          <div
            className={`flex justify-between items-center min-h-[60px] border-2 rounded-lg px-4 ${
              chosenOption[item.id] ===
              findExam.exams[item.id - 1].correctAnswer
                ? 'border-green'
                : 'border-red'
            }`}
          >
            <p className="text-white">{chosenOption[item.id]}</p>
            <span className="text-5xl text-green">
              {chosenOption[item.id] ===
              findExam.exams[item.id - 1].correctAnswer ? (
                <FaRegCircleCheck color="#006600" />
              ) : (
                <FaRegCircleXmark color="#DA1616" />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
