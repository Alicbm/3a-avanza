/* eslint-disable react/self-closing-comp */
import { FaRegCircleCheck, FaRegCircleXmark } from 'react-icons/fa6';
import { ChosenOptions, ExamsIT } from '../../../../../types';
import MainButton from '../../../../../components/MainButton';

type Props = {
  findExam: ExamsIT | undefined;
  chosenOption: ChosenOptions;
};

function Results({ findExam, chosenOption }: Props) {
  return (
    <div className="max-w-[1200px] w-full py-10 mx-auto rounded-md overflow-hidden">
      {findExam?.exams.map((item) => (
        <div key={item.id} className="border-b border-purple pb-6 mb-8">
          <h3 className="text-gray text-xl px-4 mb-4">
            {item.id}. {item?.question}
          </h3>
          <div className="relative flex justify-between items-center min-h-[60px] bg-bgPurple rounded-lg px-4 overflow-hidden">
            <p className="text-white">{chosenOption[item.id]}</p>
            <span className="absolute right-0 text-[80px] text-purple opacity-[50%]">
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

      <div className='flex justify-end gap-4'>
        <MainButton text='Continuar Aprendiendo' className='w-[300px] h-[50px] bg-purple'/>
      </div>
    </div>
  );
}

export default Results;
