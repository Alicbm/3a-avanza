/* eslint-disable react/self-closing-comp */
/* eslint-disable no-plusplus */
import { useContext, useState } from 'react';
import { useExams } from '../../hooks/useExams';
import { ChosenOptions } from '../../types';
import ExamsResultPage from './components/Results';
import Questions from './components/Questions';
import FrontPage from './components/Results/FrontPage';
import ChosenAnswer from './components/Results/ChosenAnswer';
import { AppContext } from '../../context';

const initialOptions: ChosenOptions = {};
for (let i = 1; i <= 15; i++) {
  initialOptions[i] = '';
}

function ExamPage() {
  const [showResults, setShowResults] = useState(false);

  const { exam } = useContext(AppContext);
  const [position, setPosition] = useState(0);

  const [chosenOption, setChosenOption] =
    useState<ChosenOptions>(initialOptions);

  const { findExam } = useExams(exam);

  return (
    <div className="w-full h-full">
      <div className="fixed left-0 top-0 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_90%,transparent_100%)]"></div>
        </div>
      </div>
      
      <div className="relative w-full">
        {!showResults ? (
          <Questions
            findExam={findExam}
            chosenOption={chosenOption}
            setChosenOption={setChosenOption}
            position={position}
            setPosition={setPosition}
            setShowResults={setShowResults}
          />
        ) : (
          <ExamsResultPage>
            <FrontPage findExam={findExam} chosenOption={chosenOption} />
            <ChosenAnswer findExam={findExam} chosenOption={chosenOption} />
          </ExamsResultPage>
        )}
      </div>
    </div>
  );
}

export default ExamPage;
