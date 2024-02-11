import CoursesHome from './CoursesHome';
import Description from './Description';
import Exams from './Exams';
import FrontPage from './FrontPage';
import Introduction from './Introduction';
import LearningPaths from './LearningPaths';
import bgInitialPage from '../../images/bgInitialPage.png'
import { styleBG } from '../../styles';

function HomePage() {
  // const styleFrontPage = {
  //   with: '100%',
  //   backgroundImage: `url(${bgInitialPage})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // }

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
