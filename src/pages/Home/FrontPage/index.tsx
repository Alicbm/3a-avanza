import { IoIosArrowDown } from 'react-icons/io';

function FrontPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[100%] pb-[100px] relative">
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
      <div className="border-2 rounded-[50%] border-blue absolute bottom-10 right-20 p-2 cursor-pointer">
        <span className="text-blue text-[50px]">
          <IoIosArrowDown />
        </span>
      </div>
    </div>
  );
}

export default FrontPage;
