import AllExercises from "./AllExercises"
import FrontPage from "./FrontPage"

function PracticeExercisePage() {
  return (
    <div>
      <div className="bg-black">
        <FrontPage />
      </div>

      <div>
        <AllExercises />
      </div>
    </div>
  )
}

export default PracticeExercisePage