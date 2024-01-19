import jsLogo from '../../../icons/js.png'

function Description() {
  return (
    <div className='grid items-center w-full max-w-[1200px] h-[70%] mx-auto'>
      <div>
        <p className='w-[70%] text-white font-title text-lg text-center leading-8 mx-auto'>
          <span className='text-blue'>3A Avanza</span> ha sido desarrollado con el objetivo de apoyar a los estudiantes en su camino profesional. A través de exámenes, documentación, cursos y rutas de aprendizaje, buscamos proporcionar las herramientas necesarias para que los estudiantes puedan desarrrollarse de forma autodidactas en algunas de las áreas más demandadas en la actualidad
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <img 
          src={jsLogo} 
          alt="Javascript" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={jsLogo} 
          alt="Javascript" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={jsLogo} 
          alt="Javascript" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={jsLogo} 
          alt="Javascript" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={jsLogo} 
          alt="Javascript" 
          className='w-[65px] h-[65px] mx-6'
        />
      </div>
    </div>
  )
}

export default Description

