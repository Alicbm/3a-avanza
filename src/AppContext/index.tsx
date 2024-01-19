/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";
import { AppContextType } from "../types";

const AppContext = createContext<AppContextType> ({
  nameLearningPath: "",
  setNameLearningPath: () => { },
  course: 0,
  setCourse: () => { },
  exam: 0,
  setExam: () => { }
})

function AppProvider ({ children }: any) {
  const [nameLearningPath, setNameLearningPath] = useState("Desarrollo Front-End")
  const [course, setCourse] = useState(1)
  const [exam, setExam] = useState(1)

  return(
    <AppContext.Provider value={{
      nameLearningPath,
      setNameLearningPath,
      course, 
      setCourse,
      exam,
      setExam
    }}>
      { children }
    </AppContext.Provider>
  )
}

export {
  AppProvider,
  AppContext
}
