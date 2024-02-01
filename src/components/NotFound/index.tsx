import img from '../../images/notFound.png'
import MainButton from '../MainButton'
import SecondaryButton from '../SecondaryButton'

function NotFound() {
  return (
    <div className='flex justify-center items-center py-10 rounded-lg'>
      <div className='grid gap-2 bg-darkBlue overflow-hidden'>
        <h1 className='font-title text-[80px] text-blue text-center bg-[#0b0e2a] border-b border-blue'>Upps!</h1>
        <div className='px-10 py-5'>
        <p className='text-white text-[40px] text-center font-bold'>La dirección URL es incorrecta </p>
        <img 
          src={img} 
          alt="Pagina no encontrada" 
          className='w-[300px] h-[250px] mx-auto my-4'
        />

        <div className='flex justify-center items-center gap-6'>
          <MainButton text='Volver al inicio' className='w-full h-[45px]'/>
          <SecondaryButton text='Explorar cursos' className='w-full h-[45px]'/>
        </div>
        </div>

        {/* <div>
        <img 
          src={img} 
          alt="Pagina no encontrada" 
          className='absolute -top-10 w-[700px] opacity-5 mx-auto my-4'
        />
        </div> */}
      </div>
    </div>
  )
}

export default NotFound