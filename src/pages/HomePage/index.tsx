import CoursesHome from './CoursesHome';
import Description from './Description';
import Exams from './Exams';
import FrontPage from './FrontPage';
import LearningPaths from './LearningPaths';
import { styles } from '../../styles';

function HomePage() {
  const styleFrontPage = {
    background: 'linear-gradient(#090b20, #060513)'
  }

  const styleCourses = {
    background: 'linear-gradient(#090b20, #060513, #060513, #090b20)'
  }

  return (
    <section>
      <div className="h-[500px]" style={styleFrontPage}>
        <FrontPage />
      </div>
      <div className="grid justify-center items-center py-[80px]" style={styles}>
        <Description />
      </div>
      <div className="grid justify-center items-center h-[70vh]">
        <LearningPaths />
      </div>
      <div className="grid justify-center items-center h-[70vh] bg-black" style={styleCourses}>
        <CoursesHome />
      </div>
      <div className="grid justify-center items-center h-[80vh]">
        <Exams />
      </div>
    </section>
  );
}

export default HomePage;
