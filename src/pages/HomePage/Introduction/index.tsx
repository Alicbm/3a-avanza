function Introduction() {
  const style = {
    boxShadow: '#0E1824 0px 4px 40px',
    border: `solid 1px #42946E`,
    background: 'linear-gradient(10deg, #070717, #0E1824)',
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-6 w-full max-w-[1200px] h-full bg-hoverDarkBlue mx-auto py-[60px] rounded-[20px]"
      style={style}
    >
      <div>
        <p className="w-[70%] text-white text-lg text-center leading-10 mx-auto">
          Iniciar el camino del aprendizaje puede resultar desafiante al
          principio. Por esta razón, creamos{' '}
          <span className="font-bold text-green">3Academy</span>: un espacio
          donde encontrarás{' '}
          <span className="font-bold text-green">
            rutas de aprendizaje, cursos, ejercicios prácticos, exámenes y
            desafíos
          </span>
          , todo diseñado para desarrollar tus competencias en las áreas más
          demandadas de la industria tech. Lo mejor de todo:{' '}
          <span className="font-bold text-green">
            ¡es completamente gratis!
          </span>
        </p>
      </div>
      {/* <div className='flex justify-center items-center'>
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
      </div> */}
    </div>
  );
}

export default Introduction;
