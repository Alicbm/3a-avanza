import CoursesHome from './CoursesHome';
import Description from './Description';
import Exams from './Exams';
import FrontPage from './FrontPage';
import LearningPaths from './LearningPaths';

function Home() {
  return (
    <section>
      <div className='h-[50vh]'>
        <FrontPage />
      </div>
      <div className="grid justify-center items-center h-[60vh] bg-black">
        <Description />
      </div>
      <div className="grid justify-center items-center h-[70vh]">
        <LearningPaths />
      </div>
      <div className="grid justify-center items-center h-[70vh] bg-black">
        <CoursesHome />
      </div>
      <div className="grid justify-center items-center h-[80vh]">
        <Exams />
      </div>
    </section>
  );
}

export default Home;
