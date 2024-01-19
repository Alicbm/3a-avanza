/* eslint-disable import/prefer-default-export */
import { data } from '../data/questions.json';
import { ExamsIT } from '../types';

export const useExams = (id: number) => {
  const findExam = data.find((exam: ExamsIT) => exam.id === id);

  return { findExam };
};
