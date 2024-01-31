import Courses from "./Courses/Index"
import FrontPage from "./FrontPage"

function PathPage () {
  const styleFrontPage = {
    background: 'linear-gradient(#090b20, #090b20, #060513)'
  }

  return (
    <div className='bg-black'>
      <div style={styleFrontPage}> 
        <FrontPage />
      </div>
      <Courses />
      <Courses />
    </div>
  )
}

export default PathPage