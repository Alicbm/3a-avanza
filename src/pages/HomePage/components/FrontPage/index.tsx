import SecondaryButton from '../../../../components/SecondaryButton';

function FrontPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100%] pb-[200px]">
      <div>
        <h1 className="text-white text-[65px] font-bold ">
          Accede, Aprende, Avanza
        </h1>
        <p className="text-gray text-4xl text-center font-bold">
          Desarrollo sin barreras, aprendizaje sin costo
        </p>
      </div>

      <div className="grid gap-6 w-full">
        <div className="flex justify-center items-center gap-4 mx-auto">
          <SecondaryButton
            text="Explorar cursos"
            className="w-[200px] h-[50px] border-blue text-blue"
            style={{ boxShadow: '#1B2036 0px 4px 24px' }}
          />
          <SecondaryButton
            text="Explorar plataforma"
            className="w-[200px] h-[50px] border-blue text-blue"
            style={{ boxShadow: '#1B2036 0px 4px 24px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
