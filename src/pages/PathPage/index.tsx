import Courses from "./Courses/Index"
import FrontPage from "./FrontPage"

function PathPage () {
  
  const style = {
    opacity: 1,
    backgroundImage: 'radial-gradient(#0E1824 1.2px, #070717 1.2px)',
    backgroundSize: '25px 25px',
  };

  return (
    <div className='bg-black' style={style}>
      <div> 
        <FrontPage />
      </div>
      <Courses />
      <Courses />
    </div>
  )
}

export default PathPage