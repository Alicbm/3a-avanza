import { colors } from '../../../../styles/colors';
import SectionSteps from '../Section';
import routeStepImage from '../../images/routeStep.png';
import courseStepImage from '../../images/courseStep.png';
import examStepImage from '../../images/examStep.png';
import {
  styleCourseItem,
  styleExcerciseItem,
  styleRouteItem,
  styleTitle,
} from '../../styles';

function Description() {
  return (
    <div className="grid items-center w-full max-w-[1200px] py-[100px] mx-auto rounded-md overflow-hidden">
      <div className="grid gap-4 mb-10">
        <h1 className="font-bold text-[50px] text-center" style={styleTitle}>
          Este será el titulo inicial
        </h1>
        <p className="w-[80%] text-lg text-white text-center leading-8 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          explicabo sunt exercitationem incidunt? Totam magni minus beatae,
          eligendi pariatur nostrum vero quis quasi sit, deleniti nam fugit sint
          placeat laborum?
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full bg-darkBlue rounded-lg p-4">
        <SectionSteps
          styleBlock={styleRouteItem}
          color={colors.purple}
          number="1"
          image={routeStepImage}
        />
        <SectionSteps
          styleBlock={styleCourseItem}
          color={colors.green}
          number="2"
          image={courseStepImage}
        />
        <SectionSteps
          styleBlock={styleExcerciseItem}
          color={colors.blue}
          number="3"
          image={examStepImage}
        />
      </div>
    </div>
  );
}

export default Description;
