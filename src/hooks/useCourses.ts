/* eslint-disable import/prefer-default-export */
import { data } from '../data/courses.json';
import { CoursesIT } from '../types';

export const useCourses = (id: number) => {
  const findCourse = data.find((course: CoursesIT) => course.id === id);

  return {
    findCourse
  };
};
