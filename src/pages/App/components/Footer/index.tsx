import { FaUserCircle, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full text-white bg-black font-md tracking-wider">
      <div className="py-14">
        <div className="w-[30%] mx-auto mb-4">
          <h4 className="text-center text-xl leading-[50px] text-green font-bold tracking-wider">
            Accede, Aprende, Avanza
          </h4>
          <p className="text-md text-center leading-8 tracking-wider">
            Desarrollo sin barreras, aprendizaje sin costo
          </p>
        </div>

        <p className="text-[14px] text-gray text-center mb-6">
          Todos los derechos reservados
        </p>

        <div className="flex justify-center items-center gap-6 text-blue">
          <button
            className="flex justify-center items-center border gap-2 border-blue text-blue py-2 px-4 rounded-md hover:bg-darkBlue"
            type="button"
            style={{ boxShadow: '#0E1824 0px 4px 24px' }}
          >
            <p>Linkedin</p>
            <span className="text-xl">
              <FaLinkedin />
            </span>
          </button>

          <button
            className="flex justify-center items-center border gap-2 border-green text-green py-2 px-4 rounded-md hover:bg-bgGreen"
            type="button"
            style={{ boxShadow: '#0E1824 0px 4px 24px' }}
          >
            <p>Portafolio</p>
            <span className="text-xl">
              <FaUserCircle />
            </span>
          </button>

          <button
            className="flex justify-center items-center border gap-2 border-purple text-purple py-2 px-4 rounded-md hover:bg-darkBlue"
            type="button"
            style={{ boxShadow: '#120F27 0px 4px 24px' }}
          >
            <p>GitHub</p>
            <span className="text-xl">
              <FaGithub />
            </span>
          </button>
        </div>
      </div>
      <div className="border-t-2 border-t-blue py-5">
        <p className="text-center">
          Diseñado y Desarrollado por{' '}
          <span className="text-blue">
            Alic Barandica, Desarrollador Full-Stack
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
