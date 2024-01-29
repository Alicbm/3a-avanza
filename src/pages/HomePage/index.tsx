import CoursesHome from './CoursesHome';
import Description from './Description';
import Exams from './Exams';
import FrontPage from './FrontPage';
import LearningPaths from './LearningPaths';
// import { styles } from '../../styles';

function HomePage() {
  const styleFrontPage = {
    background: 'linear-gradient(#090b20, #060513)'
  }

  // const styleCourses = {
  //   background: 'linear-gradient(#060513, #090b20, #090b20, #060513)'
  // }

  return (
    <section>
      <div className="h-[500px]" style={styleFrontPage}>
        <FrontPage />
      </div>
      <div className="grid justify-center items-center bg-black" >
        <Description />
      </div>
      <div className="grid justify-center items-center bg-black">
        <LearningPaths />
      </div>
      <div className="grid justify-center items-center bg-black">
        <CoursesHome />
      </div>
      <div className="grid justify-center items-center bg-black">
        <Exams />
      </div>
    </section>
  );
}

export default HomePage;
