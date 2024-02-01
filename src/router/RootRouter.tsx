import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PathPage from '../pages/PathPage';
import WhyStudyPage from '../pages/WhyStudyPage';
import CoursesPage from '../pages/CoursesPage';
import AllExamsPage from '../pages/AllExamsPage';
import ExamPage from '../pages/ExamPage';
import CourseVideoPage from '../pages/CourseVideoPage';
import PracticeExercisePage from '../pages/PracticeExercisePage';
import NotFound from '../components/NotFound';

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/routes" element={<PathPage />} />
      <Route path="/routes/por-que-estudiar" element={<WhyStudyPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/video" element={<CourseVideoPage />} />
      <Route path="/exams" element={<AllExamsPage />} />
      <Route path="/exams/test" element={<ExamPage />} />
      <Route path="/exercises" element={<PracticeExercisePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RootRouter;
