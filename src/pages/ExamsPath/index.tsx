import AllExams from './AllExams';
import FrontPage from './FrontPage';

function ExamsPath() {
  return (
    <div>
      <div className="h-[50vh] bg-black">
        <FrontPage />
      </div>
      <div className="bg-darkBlue">
        <AllExams />
      </div>
    </div>
  );
}

export default ExamsPath;
