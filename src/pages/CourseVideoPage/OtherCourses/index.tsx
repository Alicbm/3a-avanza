import Course from '../../../components/Course';
import { data } from '../../../data/courses.json';

function OtherCourses() {
  return (
    <div className="">
      <h3 className="font-title text-white text-center text-5xl bg-hoverDarkBlue rounded-lg px-4 py-2 mb-2">
        Quizá Pueda Interesarte
      </h3>
      <div className="h-[500px] overflow-y-scroll grid gap-4 bg-hoverDarkBlue rounded-lg px-10 py-6">
        {data.map((course) => (
          <Course
            id={course.id}
            name={course.name}
            origin={course.origin}
            popularity={course.popularity}
          />
        ))}
      </div>
    </div>
  );
}

export default OtherCourses;
