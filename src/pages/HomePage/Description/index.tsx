import SectionSteps from "./Section";
import routeImage from '../../../images/routes.png'
import courseImage from '../../../images/courses.png'
import examImage from '../../../images/exams.png'

function Description() {
  const styleTitle = {
    fontSize: '60px',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(to right, #6f3a88, #42946E)',
    backgroundSize: 'cover',
    WebkitBackgroundClip: 'text',
  }

  const styleRoute = {
    boxShadow: 'rgba(111, 58, 136, 0.20) 0px 4px 24px',
    border: `solid 1px #6f3a88`,
    background: 'linear-gradient(10deg, #070717, #120F27)',
  };

  const styleCourse = {
    boxShadow: 'rgba(66, 148, 110, 0.20) 0px 4px 24px',
    border: `solid 1px #42946E`,
    background: 'linear-gradient(10deg, #070717, #0E1824)',
  };

  const styleExcercise = {
    boxShadow: 'rgba(140, 174, 242, .20) 0px 4px 24px',
    border: `solid 1px #8CAEF2`,
    background: 'linear-gradient(10deg, #070717, #1B2036)',
  };

  return (
    <div className="grid items-center w-full max-w-[1200px] py-[100px] mx-auto rounded-md overflow-hidden">
      <div className="grid gap-4 mb-10">
        <h1 
          className="font-bold text-[50px] text-white text-center"
          style={styleTitle}
        >
          Este será el titulo inicial
        </h1>
        <p className="w-[80%] text-lg text-white text-center leading-8 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          explicabo sunt exercitationem incidunt? Totam magni minus beatae,
          eligendi pariatur nostrum vero quis quasi sit, deleniti nam fugit sint
          placeat laborum?
        </p>
      </div>

      {/* <div className="flex justify-center items-center gap-2">
        <p className="font-bold text-blue text-5xl">3 problemas</p>
        <span className="w-[60px] h-[60px] bg-blue">-</span>
        <p className="font-bold text-blue text-5xl">4 soluciones</p>
      </div> */}

      <div className="grid grid-cols-3 gap-4 w-full bg-darkBlue rounded-lg p-4">
        <SectionSteps 
          styleBlock={styleRoute} 
          color='#6f3a88' 
          number='1'
          image={routeImage}
          />
        <SectionSteps 
          styleBlock={styleCourse} 
          color='#42946E' 
          number='2'
          image={courseImage}
          />
        <SectionSteps
          styleBlock={styleExcercise} 
          color='#8CAEF2' 
          number='3'
          image={examImage}
          />
      </div>
    </div>
  );
}

export default Description;
