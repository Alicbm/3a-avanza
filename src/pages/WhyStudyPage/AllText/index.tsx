import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import { useLearningPath } from '../../../hooks/useLearningPath';

function AllText() {
  const { nameLearningPath } = useContext(AppContext);
  const { findPath } = useLearningPath(nameLearningPath);
  
  return (
    <div className="max-w-[1200px] w-full py-10 mx-auto">
      <div className='bg-secondaryDarkBlue rounded-sm px-6 py-2 border-l-4 border-hoverGray'>
        {findPath?.whyStudyRasons.map((item) => (
          <p className="text-white text-lg indent-6 tracking-wide text-justify leading-8 mb-5">{item}</p>
        ))}
      </div>
    </div>
  );
}

export default AllText;
