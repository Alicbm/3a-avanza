import OtherCourses from './OtherCourses';
import Video from './Video';

function CourseVideoPage() {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-[1200px] w-full py-5 mx-auto overflow-hidden">
      <div className="col-span-2">
        <Video />
      </div>
      <div className="col-span-1">
        <OtherCourses />
      </div>
    </div>
  );
}

export default CourseVideoPage;
