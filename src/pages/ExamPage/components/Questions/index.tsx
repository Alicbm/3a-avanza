/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChosenOptions, ExamsIT } from '../../../../types';
import MainButton from '../../../../components/MainButton';
import SecondaryButton from '../../../../components/SecondaryButton';
import img from '../../../../images/pathFrontImg.png';

type Props = {
  findExam: ExamsIT | undefined;
  chosenOption: ChosenOptions;
  position: number;
  setChosenOption: (arg: ChosenOptions) => void;
  setPosition: (arg: number) => void;
  setShowResults: (arg: boolean) => void
};

function Questions({
  findExam,
  chosenOption,
  setChosenOption,
  position,
  setPosition,
  setShowResults
}: Props) {
  const handleSubmit = () => {
    if (findExam?.exams[position].id === findExam?.exams.length) {
      setShowResults(true)
    } else {
      setPosition(position + 1);
    }
  };

  return (
    <div className="relative pt-5 pb-20 overflow-hidden">
      <h1 className="font-title text-white text-5xl text-center mb-5">
        {findExam?.name}
      </h1>
      <div className="w-full flex justify-center gap-2 mb-12">
        {findExam?.exams.map((item) => (
          <span
            key={item.id}
            className={`${
              item.id === position + 1
                ? 'w-[10px] h-[10px] bg-blue rounded-[50%]'
                : 'w-[10px] h-[10px] bg-gray rounded-[50%]'
            }`}
          />
        ))}
      </div>

      <div className="w-[600px] grid gap-6 mx-auto">
        <div className="relative flex justify-center items-center w-full min-h-[80px] px-5 py-4 pt-8 border-2 border-blue rounded-lg">
          <p className="text-white text-lg text-center">
            {findExam?.exams[position].question}
          </p>
          <span className="absolute -top-[25px] left-[275px] flex justify-center items-center w-[50px] h-[50px] font-title text-white text-5xl bg-blue rounded-[50%]">
            {findExam?.exams[position].id}
          </span>
        </div>

        <div className="grid gap-3 cursor-pointer">
          {findExam?.exams[position].options.map((answer) => (
            <div
              key={answer}
              className="flex justify-start items-center gap-4 w-full min-h-[60px] border-2 border-blue rounded-lg px-4 py-4 z-10"
              onClick={() => {
                const index = position + 1;

                setChosenOption({
                  ...chosenOption,
                  [index]: answer,
                });
              }}
            >
              <span className="flex justify-center items-center w-[25px] h-[25px] rounded-[50%] border-2 border-blue">
                {answer === chosenOption[position + 1] && (
                  <span className="w-[15px] h-[15px] rounded-[50%] bg-blue" />
                )}
              </span>
              <p className="text-white">{answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <SecondaryButton
            text="Regresar"
            className="w-[250px] h-[45px] rounded-lg"
            onClick={() => setPosition(position - 1)}
          />
          <MainButton
            text={
              findExam?.exams[position].id === findExam?.exams.length
                ? 'Finalizar'
                : 'Siguiente'
            }
            className={
              findExam?.exams[position].id === findExam?.exams.length
                ? 'w-[250px] h-[45px] rounded-lg bg-green'
                : 'w-[250px] h-[45px] rounded-lg'
            }
            onClick={handleSubmit}
          />
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-[1000px]">
        <img src={img} alt="" className="w-full opacity-5" />
      </div>
    </div>
  );
}

export default Questions;
