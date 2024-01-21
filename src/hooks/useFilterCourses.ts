/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import { CoursesIT } from '../types';

export const useFilterCourses = (data: CoursesIT[]) => {
  const [path, setPath] = useState('');
  const [tool, setTool] = useState('');
  const [level, setLevel] = useState('');

  let newData;

  if (path.length !== 0) {
    newData = data.filter((course) => {
      if (tool.length > 0 && level.length > 0) {
        return (
          course.learningPath.toLowerCase() === path.toLowerCase() &&
          course.tool.toLowerCase() === tool.toLowerCase() &&
          course.dificulty.toLowerCase() === level.toLowerCase()
        );
      }
      if (tool.length > 0) {
        return (
          course.learningPath.toLowerCase() === path.toLowerCase() &&
          course.tool.toLowerCase() === tool.toLowerCase()
        );
      }
      return course.learningPath.toLowerCase() === path.toLowerCase();
    });
  } else {
    newData = data;
  }

  return {
    newData,
    path,
    setPath,
    tool,
    setTool,
    level,
    setLevel,
  };
};
