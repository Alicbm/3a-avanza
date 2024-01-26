/* eslint-disable no-unused-vars */

// export enum NAME_LEARNING_PATHS {
//   frontEnd = "Desarrollo Front-End",
//   backEnd = "Deserrollo Back-Edn"
// }

export type AppContextType = {
  nameLearningPath: string;
  setNameLearningPath: (arg: string) => void;
  course: number
  setCourse: (arg: number) => void
  exam: number
  setExam: (arg: number) => void
};

export interface LearningPathIT {
  id: number;
  name: string;
  description: string;
  image: string;
  path: string;
}

export interface QuestionIT {
  id: number
  question: string
  opcionA: (string | boolean)[]
  opcionB: (string | boolean)[]
  opcionC: (string | boolean)[]
  opcionD: (string | boolean)[]
}

interface ExamsCoursesIT {
  id: number
  dificulty: string
  tool: string
  name: string
  learningPath: string
  origin?: string
  popularity?: string
}

export interface CoursesIT extends ExamsCoursesIT{
  origin: string
  popularity: string
  image: string
  url: string
  definition: string
  whyLearnIt: string
  salary: string
  recommendedReadings: string[]
}

export interface ExamsIT extends ExamsCoursesIT {
  exams?: QuestionIT[]
}