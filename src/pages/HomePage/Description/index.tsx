import jsLogo from '../../../icons/javascript.png'
import javaLogo from '../../../icons/java.png'
import pyhtonLogo from '../../../icons/python.png'
import htmlLogo from '../../../icons/html.png'
import excelLogo from '../../../icons/excel.png'
import { styles } from '../../../styles'

function Description() {
  return (
    <div 
      className='flex flex-col justify-center items-center gap-6 w-full max-w-[1200px] h-full bg-hoverDarkBlue mx-auto py-[80px] rounded-[20px]' 
      style={styles}
    >
      <div>
        <p className='w-[70%] text-white font-text font-bold text-lg text-center leading-10 mx-auto'>
          <span className='text-blue'>3A Avanza</span> ha sido desarrollado con el objetivo de apoyar a los estudiantes en su camino profesional. A través de exámenes, documentación, cursos y rutas de aprendizaje, buscamos proporcionar las herramientas necesarias para que los estudiantes puedan desarrrollarse de forma autodidacta en algunas de las áreas más demandadas en la actualidad
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <img 
          src={jsLogo} 
          alt="Javascript" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={pyhtonLogo} 
          alt="Python" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={javaLogo} 
          alt="Java" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={htmlLogo} 
          alt="HTML" 
          className='w-[65px] h-[65px] mx-6'
        />
        <img 
          src={excelLogo} 
          alt="Excel" 
          className='w-[65px] h-[65px] mx-6'
        />
      </div>
    </div>
  )
}

export default Description

