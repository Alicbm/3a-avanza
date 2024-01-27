import { ChosenOptions, ExamsIT } from '../../../../../types';
import pathFrontImg from '../../../../../images/pathFrontImg.png';

type Props = {
  findExam: ExamsIT | undefined;
  chosenOption: ChosenOptions
}

function FrontPage({ findExam, chosenOption }: Props) {
  const correctAnswer = findExam?.exams.filter(item => (
    item.correctAnswer === chosenOption[item.id]
  ))?.length || 0

  const lengthOfData = findExam?.exams.length || 0

  const calification = ((parseFloat(correctAnswer.toFixed(2)) / lengthOfData) * 100)

  return (
    <div className="relative flex justify-center items-center gap-6 max-w-[1200px] w-full bg-black py-5 mx-auto rounded-lg overflow-hidden">
      <div className="w-[60%]">
        <h1 className="text-[60px] text-center text-blue font-title mb-2">
          Felicidades!!!
        </h1>
        <p className="w-[60%] text-white text-center leading-10 text-3xl mb-4 mx-auto">
          Has completado exitosamente el {findExam?.name} 
        </p>
        <p className="text-2xl font-bold text-center text-gray">Tu calificación fue</p>

        <div className='flex justify-center items-center'>
          <span className='text-[60px] text-center font-title text-blue'>{calification}</span>
          <span className='text-white font-title text-5xl'>/100</span>
        </div>
      </div>
      <div className='absolute right-30'>
        <img
          src={pathFrontImg}
          alt="Desarrollor Front-End"
          className="w-[800px] opacity-5"
        />
      </div>
    </div>
  );
}

export default FrontPage;
