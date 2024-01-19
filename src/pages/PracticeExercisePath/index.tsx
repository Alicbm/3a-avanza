import AllExercises from "./AllExercises"
import FrontPage from "./FrontPage"

function PracticeExercisePath() {
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

export default PracticeExercisePath