/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import MainButton from '../../components/MainButton';
import SecondaryButton from '../../components/SecondaryButton';
import img from '../../images/pathFrontImg.png';
import { AppContext } from '../../AppContext';
import { useExams } from '../../hooks/useExams';

function OneExamPage() {
  const [position, setPosition] = useState(0);
  const [answerSelected, setAnswerSelected] = useState('');

  const { exam } = useContext(AppContext);
  const { findExam } = useExams(exam);

  return (
    <div className="relative pt-5 pb-20 overflow-hidden">
      <h1 className="font-title text-white text-5xl text-center mb-5">
        {findExam?.title}
      </h1>
      <div className="w-full flex justify-center gap-2 mb-12">
        {findExam?.exams.map((item) => (
          <span
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
          <div
            className="flex justify-start items-center gap-4 w-full min-h-[60px] border-2 border-blue rounded-lg px-4 py-4 z-10"
            onClick={() =>
              setAnswerSelected(String(findExam?.exams[position].opcionA[0]))
            }
          >
            <span className="flex justify-center items-center w-[25px] h-[25px] rounded-[50%] border-2 border-blue">
              {findExam?.exams[position].opcionA[0] === answerSelected && (
                <span className="w-[15px] h-[15px] rounded-[50%] bg-blue" />
              )}
            </span>
            <p className="text-white">{findExam?.exams[position].opcionA[0]}</p>
          </div>

          <div
            className="flex justify-start items-center gap-4 w-full min-h-[60px] border-2 border-blue rounded-lg px-4 py-4 z-10"
            onClick={() =>
              setAnswerSelected(String(findExam?.exams[position].opcionB[0]))
            }
          >
            <span className="flex justify-center items-center w-[25px] h-[25px] rounded-[50%] border-2 border-blue">
              {findExam?.exams[position].opcionB[0] === answerSelected && (
                <span className="w-[15px] h-[15px] rounded-[50%] bg-blue" />
              )}
            </span>
            <p className="text-white">{findExam?.exams[position].opcionB[0]}</p>
          </div>

          {findExam?.exams[position].opcionC[0] && (
            <div
              className="flex justify-start items-center gap-4 w-full min-h-[60px] border-2 border-blue rounded-lg px-4 py-4 z-10"
              onClick={() =>
                setAnswerSelected(String(findExam?.exams[position]?.opcionC[0]))
              }
            >
              <span className="flex justify-center items-center w-[25px] h-[25px] rounded-[50%] border-2 border-blue">
                {findExam?.exams[position].opcionC[0] === answerSelected && (
                  <span className="w-[15px] h-[15px] rounded-[50%] bg-blue" />
                )}
              </span>
              <p className="text-white">
                {findExam?.exams[position].opcionC[0]}
              </p>
            </div>
          )}

          {findExam?.exams[position].opcionD[0] && (
            <div
              className="flex justify-start items-center gap-4 w-full min-h-[60px] border-2 border-blue rounded-lg px-4 py-4 z-10"
              onClick={() =>
                setAnswerSelected(String(findExam?.exams[position].opcionD[0]))
              }
            >
              <span className="flex justify-center items-center w-[25px] h-[25px] rounded-[50%] border-2 border-blue">
                {findExam?.exams[position].opcionD[0] === answerSelected && (
                  <span className="w-[15px] h-[15px] rounded-[50%] bg-blue" />
                )}
              </span>
              <p className="text-white">
                {findExam?.exams[position].opcionD[0]}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <SecondaryButton
            text="Regresar"
            className="w-[250px] h-[45px] rounded-lg"
            onClick={() => setPosition(position - 1)}
          />
          <MainButton
            text="Siguiente"
            className="w-[250px] h-[45px] rounded-lg"
            onClick={() => setPosition(position + 1)}
          />
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-[1000px]">
        <img src={img} alt="" className="w-full opacity-5" />
      </div>
    </div>
  );
}

export default OneExamPage;
