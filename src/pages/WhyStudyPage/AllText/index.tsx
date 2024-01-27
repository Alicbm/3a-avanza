import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import { useLearningPath } from '../../../hooks/useLearningPath';

function AllText() {
  const { nameLearningPath } = useContext(AppContext);
  const { findPath } = useLearningPath(nameLearningPath);

  return (
    <div className="max-w-[1200px] w-full py-10 mx-auto">
      {findPath?.whyStudyRasons.map((item) => (
        <p className="text-white text-lg leading-8 mb-5">{item}</p>
      ))}
    </div>
  );
}

export default AllText;
