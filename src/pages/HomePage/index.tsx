import { styleCoursesBG, styleExamsBG, styleLearningPathBG } from './styles';
import { styleBG } from '../../styles';
import CoursesHome from './components/CoursesHome';
import Description from './components/Description';
import Exams from './components/Exams';
import FrontPage from './components/FrontPage';
import Introduction from './components/Introduction';
import LearningPaths from './components/LearningPaths';
import bgInitialPage from '../../images/bgInitialPage.png'

function HomePage() {

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
      <div style={styleLearningPathBG}>
        <LearningPaths />
      </div>
      <div style={styleCoursesBG}>
        <CoursesHome />
      </div>
      <div style={styleExamsBG}>
        <Exams />
      </div>
    </section>
  );
}

export default HomePage;
