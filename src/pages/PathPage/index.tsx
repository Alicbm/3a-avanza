import { styleBackbround } from "./styles"
import Courses from "./components/Courses/Index"
import FrontPage from "./components/FrontPage"

function PathPage () {
  return (
    <div style={styleBackbround}>
      <div> 
        <FrontPage />
      </div>
      <Courses />
      <Courses />
    </div>
  )
}

export default PathPage