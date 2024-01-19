import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PathPage from '../pages/PathPage';
import WhyStudy from '../pages/WhyStudy';
import CoursesPath from '../pages/CoursesPath';
import ExamsPath from '../pages/ExamsPath';
import OneExamPage from '../pages/OneExamPage';
import ExamsResult from '../pages/ExamsResult';
import CourseVideoPage from '../pages/CourseVideoPage';
import PracticeExercisePath from '../pages/PracticeExercisePath';

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/routes" element={<PathPage />} />
      <Route path="/routes/por-que-estudiar" element={<WhyStudy />} />
      <Route path="/courses" element={<CoursesPath />} />
      <Route path="/courses/video" element={<CourseVideoPage />} />
      <Route path="/exams" element={<ExamsPath />} />
      <Route path="/exams/test" element={<OneExamPage />} />
      <Route path="/exams/result" element={<ExamsResult />} />
      <Route path="/exercises" element={<PracticeExercisePath />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}

export default RootRouter;
