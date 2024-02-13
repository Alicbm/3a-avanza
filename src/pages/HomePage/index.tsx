import CoursesHome from './components/CoursesHome';
import Description from './components/Description';
import Exams from './components/Exams';
import FrontPage from './components/FrontPage';
import Introduction from './components/Introduction';
import LearningPaths from './components/LearningPaths';
import bgInitialPage from '../../images/bgInitialPage.png'
import { styleBG } from '../../styles';

function HomePage() {

  const styleLearningPath = {
    background: 'linear-gradient(15deg, #070717, #070717, #070717, #070717, #120F27)'
  }

  const styleCourses = {
    background: 'linear-gradient(15deg, #080a1c, #080a1c, #080a1c, #080a1c, #080a1c, #0E1824)'
  }

  const styleExams = {
    background: 'linear-gradient(15deg, #070717, #070717, #070717, #070717, #070717, #14182E)'
  }

  return (
    <section>
      <div 
        className="relative h-[90vh] min-h-[620px] max-h-[620px] mb-[200px]" 
        style={styleBG(bgInitialPage)}
      >
        <FrontPage />
        <div className='absolute -bottom-[160px] left-[10%] right-[10%]'>
          <Introduction />
        </div>
      </div>
      <div>
        <Description />
      </div>
      <div style={styleLearningPath}>
        <LearningPaths />
      </div>
      <div style={styleCourses}>
        <CoursesHome />
      </div>
      <div style={styleExams}>
        <Exams />
      </div>
    </section>
  );
}

export default HomePage;
