/* eslint-disable import/prefer-default-export */
import { data } from '../data/learningPaths.json';
import { LearningPathIT } from '../types';

export const useLearningPath = (name: string) => {
  const findPath = data.find(
    (path: LearningPathIT) => path.name.toLowerCase() === name.toLowerCase(),
  );

  return {
    findPath,
  };
};
