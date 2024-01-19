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

export interface CoursesIT {
  id: number
  name: string
  origin: string
  popularity: string
  tool: string
  dificulty: string
  image: string
  url: string
  learningPath: string
  definition: string
  whyLearnIt: string
  salary: string
  recommendedReadings: string[]
}

export interface QuestionIT {
  id: number
  question: string
  opcionA: (string | boolean)[]
  opcionB: (string | boolean)[]
  opcionC: (string | boolean)[]
  opcionD: (string | boolean)[]
}

export interface ExamsIT {
  id: number
  dificulty: string
  tool: string
  title: string
  exams: QuestionIT[]
}