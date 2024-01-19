/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import { data } from '../data/courses.json';

export const useFilterCourses = () => {
  const [item, setItem] = useState('');
  // const [tools, setTools] = useState('');
  // const [levels, setLevels] = useState('');

  const filterCourses = data.filter(
    (course) =>
      course.learningPath.toLowerCase() === item.toLowerCase() ||
      course.tool.toLowerCase() === item.toLowerCase() ||
      course.dificulty.toLowerCase() === item.toLowerCase(),
  );

  // const filterTools = data.filter(
  //   (course) => course.learningPath.toLowerCase() === tools.toLowerCase(),
  // );

  // const filterLevels = data.filter(
  //   (course) => course.learningPath.toLowerCase() === levels.toLowerCase(),
  // );

  return {
    item,
    setItem,
    // tools,
    // setTools,
    // levels,
    // setLevels,
    filterCourses,
    // filterTools,
    // filterLevels,
  };
};
