import pathFrontImg from '../../../images/pathFrontImg.png';

function FrontPage() {
  return (
    <div className="relative flex justify-center items-center gap-6 max-w-[1200px] w-full bg-black py-5 mx-auto rounded-lg overflow-hidden">
      <div className="w-[60%]">
        <h1 className="text-[60px] text-center text-blue font-title mb-2">
          Felicidades!!!
        </h1>
        <p className="font-title text-white text-center leading-8 text-xl mb-4">
          Has completado exitosamente el Curso Básico de Javascript 
        </p>
        <p className="text-3xl font-bold text-center text-gray">Tu calificación fue</p>

        <div className='flex justify-center items-center'>
          <span className='text-[60px] text-center font-title text-blue'>9.5</span>
          <span className='text-white font-title text-5xl'>/10</span>
        </div>
      </div>
      <div className='absolute right-30'>
        <img
          src={pathFrontImg}
          alt="Desarrollor Front-End"
          className="w-[800px] opacity-5"
        />
      </div>
    </div>
  );
}

export default FrontPage;
