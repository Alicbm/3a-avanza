/* eslint-disable no-plusplus */
import { useContext, useState } from 'react';
import { useExams } from '../../hooks/useExams';
import { ChosenOptions } from '../../types';
import ExamsResultPage from './components/Results';
import Questions from './components/Questions';
import FrontPage from './components/Results/FrontPage';
import ChosenAnswer from './components/Results/ChosenAnswer';
import { AppContext } from '../../AppContext';

const initialOptions: ChosenOptions = {};
for (let i = 1; i <= 15; i++) {
  initialOptions[i] = '';
}

function ExamPage() {
  const [showResults, setShowResults] = useState(false);

  // const [exam, setExam] = useState(1);
  const { exam } = useContext(AppContext)
  const [position, setPosition] = useState(0);

  const [chosenOption, setChosenOption] =
  useState<ChosenOptions>(initialOptions);

  const { findExam } = useExams(exam);



  return (
    <div>
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
          <FrontPage 
            findExam={findExam}
            chosenOption={chosenOption}
          />
          <ChosenAnswer 
            findExam={findExam}
            chosenOption={chosenOption}
          />
        </ExamsResultPage>
      )}
    </div>
  );
}

export default ExamPage;
