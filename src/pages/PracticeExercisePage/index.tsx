import { styles } from "../../styles"
import AllExercises from "./AllExercises"
import FrontPage from "./FrontPage"

function PracticeExercisePage() {
  const styleFrontPage = {
    background: 'linear-gradient(#060513, #090b20, #090b20)',
  };  

  return (
    <div>
      <div className="bg-black" style={styles}>
        <FrontPage />
      </div>

      <div style={styleFrontPage}>
        <AllExercises />
      </div>
    </div>
  )
}

export default PracticeExercisePage