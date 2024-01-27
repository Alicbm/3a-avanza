import jsIcon from '../../../icons/js.png'
import Exercise from '../Exercise'

function AllExercises() {
  return(
    <div className='w-[700px] grid pt-20 mx-auto'>
      <div className='flex justify-center items-center gap-6 mb-10'>
        
        {/* <div className='flex flex-col justify-center items-center bg-black rounded-[50%] p-6 cursor-pointer'>
          <img 
            src={jsIcon} 
            alt="Js Icon" 
            className='w-[50px] h-[50px]'
          />
          <h4 className='font-title text-lg text-gray mt-1'>Javascript</h4>
        </div> */}

        <div className='w-[100px] grid place-content gap-1 text-center cursor-pointer'>
          <div className='flex justify-center items-center w-full bg-black rounded-md py-4'>
            <img 
              src={jsIcon} 
              alt="Js Icon" 
              className='w-[60px] h-[60px]'
            />
          </div>
          <h4 className='font-title text-lg text-gray bg-black rounded-md p-2'>Javascript</h4>
        </div>
        
        <div className='w-[100px] grid place-content gap-1 text-center cursor-pointer'>
          <div className='flex justify-center items-center w-full bg-black rounded-md py-4'>
            <img 
              src={jsIcon} 
              alt="Js Icon" 
              className='w-[60px] h-[60px]'
            />
          </div>
          <h4 className='font-title text-lg text-gray bg-black rounded-md p-2'>Javascript</h4>
        </div>

        <div className='w-[100px] grid place-content gap-1 text-center cursor-pointer'>
          <div className='flex justify-center items-center w-full bg-black rounded-md py-4'>
            <img 
              src={jsIcon} 
              alt="Js Icon" 
              className='w-[60px] h-[60px]'
            />
          </div>
          <h4 className='font-title text-lg text-gray bg-black rounded-md p-2'>Javascript</h4>
        </div>

        <div className='w-[100px] grid place-content gap-1 text-center cursor-pointer'>
          <div className='flex justify-center items-center w-full bg-black rounded-md py-4'>
            <img 
              src={jsIcon} 
              alt="Js Icon" 
              className='w-[60px] h-[60px]'
            />
          </div>
          <h4 className='font-title text-lg text-gray bg-black rounded-md p-2'>ReactJs</h4>
        </div>

        <div className='w-[100px] grid place-content gap-1 text-center cursor-pointer'>
          <div className='flex justify-center items-center w-full bg-black rounded-md py-4'>
            <img 
              src={jsIcon} 
              alt="Js Icon" 
              className='w-[60px] h-[60px]'
            />
          </div>
          <h4 className='font-title text-lg text-gray bg-black rounded-md p-2'>Python</h4>
        </div>

        <div className='w-[100px] grid place-content gap-1 text-center cursor-pointer'>
          <div className='flex justify-center items-center w-full bg-black rounded-md py-4'>
            <img 
              src={jsIcon} 
              alt="Js Icon" 
              className='w-[60px] h-[60px]'
            />
          </div>
          <h4 className='font-title text-lg text-gray bg-black rounded-md p-2'>C++</h4>
        </div>

      </div>

      <div className='grid gap-4 mb-4'>
        <Exercise />
        <Exercise />
      </div>
    </div>
  )
}

export default AllExercises