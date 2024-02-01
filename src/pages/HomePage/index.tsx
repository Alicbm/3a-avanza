import CoursesHome from './CoursesHome';
import Description from './Description';
import Exams from './Exams';
import FrontPage from './FrontPage';
import LearningPaths from './LearningPaths';

function HomePage() {
  const styleFrontPage = {
    background: 'linear-gradient(#090b20, #090b20, #060513)'
  }

  return (
    <section>
      <div className="h-[500px]" style={styleFrontPage}>
        <FrontPage />
      </div>
      <div className="grid justify-center items-center" >
        <Description />
      </div>
      <div className="grid justify-center items-center">
        <LearningPaths />
      </div>
      <div className="grid justify-center items-center">
        <CoursesHome />
      </div>
      <div className="grid justify-center items-center">
        <Exams />
      </div>
    </section>
  );
}

export default HomePage;
