// import SecondaryButton from '../../../components/SecondaryButton';

function FrontPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100%] pb-[100px]">
      <div>
        <h1 className="text-white text-[85px] font-title">
          <span className="text-blue">A</span>ccede,{' '}
          <span className="text-blue">A</span>prende,{' '}
          <span className="text-blue">A</span>vanza
        </h1>
        <p className="text-gray text-4xl text-center font-bold">
          Desarrollo sin barreras, aprendizaje sin costo
        </p>
      </div>
      
      {/* <div className='grid gap-6 w-full'>
        <div className='flex justify-center items-center gap-4 mx-auto'>
          <SecondaryButton text='Explorar cursos' className='w-[400px] h-[50px]' />
        </div>
      </div> */}
      
    </div>
  );
}

export default FrontPage;
