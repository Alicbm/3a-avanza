/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChosenOptions, ExamsIT } from '../../../../types';
import { styleBG } from '../../styles';
import MainButton from '../../../../components/MainButton';
import SecondaryButton from '../../../../components/SecondaryButton';

type Props = {
  findExam: ExamsIT | undefined;
  chosenOption: ChosenOptions;
  position: number;
  setChosenOption: Function;
  setPosition: Function;
  setShowResults: Function;
};

function Questions({
  findExam,
  chosenOption,
  setChosenOption,
  position,
  setPosition,
  setShowResults,
}: Props) {
  const handleSubmit = () => {
    if (findExam?.exams[position].id === findExam?.exams.length) {
      setShowResults(true);
    } else {
      setPosition(position + 1);
    }
  };

  return (
    <div className="relative pt-5 pb-20 overflow-hidden" style={styleBG}>
      <h1 className="text-white text-5xl text-center tracking-wider mb-5">{findExam?.name}</h1>
      <div className="w-full flex justify-center gap-2 mb-12">
        {findExam?.exams.map((item) => (
          <span
            key={item.id}
            className={`${
              item.id === position + 1
                ? 'w-[10px] h-[10px] bg-purple rounded-[50%]'
                : 'w-[10px] h-[10px] bg-gray rounded-[50%]'
            }`}
          />
        ))}
      </div>

      <div className="w-[600px] grid gap-6 mx-auto">
        <div className="relative flex justify-center items-center w-full min-h-[80px] bg-bgPurple px-5 py-4 pt-8 rounded-lg">
          <p className="text-white text-xl text-center">
            {findExam?.exams[position].question}
          </p>
          <span className="absolute -top-[25px] left-[275px] flex justify-center items-center w-[50px] h-[50px] font-bold text-white text-5xl bg-purple rounded-[50%]">
            {findExam?.exams[position].id}
          </span>
        </div>

        <div className="grid gap-3 cursor-pointer">
          {findExam?.exams[position].options.map((answer) => (
            <div
              key={answer}
              className={`${
                answer === chosenOption[position + 1]
                  ? 'border-2 border-purple'
                  : 'border-2 border-bgPurple'
              } flex justify-start items-center gap-4 w-full min-h-[60px] bg-bgPurple rounded-lg px-4 py-4 z-10 hover:border-purple`}
              onClick={() => {
                const index = position + 1;

                setChosenOption({
                  ...chosenOption,
                  [index]: answer,
                });
              }}
            >
              <span className="flex justify-center items-center w-[25px] h-[25px] rounded-[50%] border-2 border-purple">
                {answer === chosenOption[position + 1] && (
                  <span className="w-[15px] h-[15px] rounded-[50%] bg-purple" />
                )}
              </span>
              <p className="text-white">{answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <SecondaryButton
            text="Regresar"
            className="w-[250px] h-[45px] text-purple border-purple rounded-lg"
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
                ? 'w-[250px] h-[45px] rounded-lg bg-bgGreen border border-green'
                : 'w-[250px] h-[45px] rounded-lg bg-purple'
            }
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Questions;
