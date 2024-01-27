import jsIcon from '../../../icons/js.png'
import Exercise from '../Exercise'
function AllExercises() {
  return(
    <div className='w-[700px] grid mx-auto'>
      <div className='flex justify-center items-center gap-6 mb-10'>
        <img 
          src={jsIcon} 
          alt="Js Icon" 
          className='w-[50px] h-[50px]'
        />
        <img 
          src={jsIcon} 
          alt="Js Icon" 
          className='w-[50px] h-[50px]'
        />
        <img 
          src={jsIcon} 
          alt="Js Icon" 
          className='w-[50px] h-[50px]'
        />
        <img 
          src={jsIcon} 
          alt="Js Icon" 
          className='w-[50px] h-[50px]'
        />
        <img 
          src={jsIcon} 
          alt="Js Icon" 
          className='w-[50px] h-[50px]'
        />
      </div>

      <div className='grid gap-4 mb-4'>
        <Exercise />
        <Exercise />
      </div>
    </div>
  )
}

export default AllExercises