import { colors } from '../../../styles/colors';

export const styleTitle = {
  fontSize: '60px',
  WebkitTextFillColor: 'transparent',
  background: `linear-gradient(to right, ${colors.purple}, ${colors.green})`,
  backgroundSize: 'cover',
  WebkitBackgroundClip: 'text',
};

export const styleRouteItem = {
  boxShadow: `${colors.bgPurple} 0px 4px 24px`,
  border: `solid 1px ${colors.purple}`,
  background: `linear-gradient(10deg, ${colors.secondaryDarkBlue}, ${colors.bgPurple})`,
};

export const styleCourseItem = {
  boxShadow: `${colors.bgGreen} 0px 4px 24px`,
  border: `solid 1px ${colors.green}`,
  background: `linear-gradient(10deg, ${colors.secondaryDarkBlue}, ${colors.bgGreen})`,
};

export const styleExcerciseItem = {
  boxShadow: `${colors.blue} 0px 4px 24px`,
  border: `solid 1px ${colors.blue}`,
  background: `linear-gradient(10deg, ${colors.secondaryDarkBlue}, ${colors.bgBlue})`,
};

export const styleLearningPathBG = {
  background: `linear-gradient(15deg, ${colors.secondaryDarkBlue}, ${colors.secondaryDarkBlue}, ${colors.secondaryDarkBlue}, ${colors.secondaryDarkBlue}, ${colors.bgPurple})`,
};

export const styleCoursesBG = {
  background: `linear-gradient(15deg, ${colors.hoverDarkBlue}, ${colors.hoverDarkBlue}, ${colors.hoverDarkBlue}, ${colors.hoverDarkBlue}, ${colors.bgGreen})`,
};

export const styleExamsBG = {
  background: `linear-gradient(15deg, ${colors.secondaryDarkBlue}, ${colors.secondaryDarkBlue}, ${colors.secondaryDarkBlue}, ${colors.secondaryDarkBlue}, ${colors.bgBlue})`,
};
