import { FaUserCircle, FaLinkedin, FaGithub } from 'react-icons/fa';
import { styles } from '../../styles';

function Footer() {
  return (
    <footer className='relative w-full h-[60vh] bg-hoverDarkBlue text-white font-md pt-[50px]'>
      <div className='w-[80%] max-w-[1200px] grid grid-cols-7 gap-10 mx-auto'>
        <div className='col-span-2'>
          <div className='text-5xl font-title text-blue mb-4'>AAA</div>
          <p className='leading-8'>
            <strong>3A Avanza: Accede, Aprende, Avanza.</strong> Tu camino hacia
            el desarrollo profesional sin barreras, donde el conocimiento es
            libre y el progreso es constante
          </p>
        </div>
        <div className='grid place-content-center col-span-2'>
          <h2 className='text-5xl font-title mb-4'>Rutas</h2>
          <ul>
            <li className='list-disc leading-8'>Desarrollo Front-End</li>
            <li className='list-disc leading-8'>Desarrollo Back-End</li>
            <li className='list-disc leading-8'>Análisis de Datos</li>
            <li className='list-disc leading-8'>Manejo de Bases de Datos</li>
            <li className='list-disc leading-8'>Pensamiento Lógico</li>
          </ul>
        </div>
        <div className='grid place-content-center col-span-2'>
          <h2 className='text-5xl font-title mb-4'>Cursos</h2>
          <ul>
            <li className='list-disc leading-8'>Cursos de Javascript</li>
            <li className='list-disc leading-8'>Cursos de Python</li>
            <li className='list-disc leading-8'>Cursos de MySQL</li>
            <li className='list-disc leading-8'>Curso de Exce</li>
          </ul>
          <p className='text-blue text-sm leading-8'>Ver todos los cursos...</p>
        </div>
        <div className='h-[100%] grid place-content-center gap-6 col-span-1'>
          <span className='text-[35px] text-blue'>
            <FaUserCircle />
          </span>
          <span className='text-[35px] text-blue'>
            <FaLinkedin />
          </span>
          <span className='text-[35px] text-blue'>
            <FaGithub />
          </span>
        </div>
      </div>
      <div 
        className='absolute left-0 right-0 bottom-0 border-t-2 border-t-blue py-5'
        style={styles}
      >
        <p className='text-center'>
          Diseñado y Desarrollado por <span className='text-blue'>Alic Barandica, Desarrollador Full-Stack</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
