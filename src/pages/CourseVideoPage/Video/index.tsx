import { useContext } from 'react';
import MainButton from '../../../components/MainButton';
import SecondaryButton from '../../../components/SecondaryButton';
import TextFormat from './TextFormat';
import { AppContext } from '../../../AppContext';
import { useCourses } from '../../../hooks/useCourses';

function Video() {
  const { course } = useContext(AppContext)
  const { findCourse } = useCourses(course)

  return (
    <div className="grid gap-6">
      <div>
        <div className="w-full h-[400px] bg-hoverGray mb-5 rounded-lg overflow-hidden">
          <img src={findCourse?.url} alt={findCourse?.name} />
        </div>
        <div className="px-2">
          <h1 className="font-bold text-white text-5xl ">
            {findCourse?.name}
          </h1>
          <p className="font-bold text-gray text-xl mb-5">
            {findCourse?.learningPath}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <MainButton text="Tomar Examen" className="" />
              <SecondaryButton text="Practicar Conocimientos" className="" />
            </div>
            <div className="flex justify-center items-center rounded-md border-2 border-blue py-2 px-2">
              <span>➕</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 bg-secondaryDarkBlue p-4 rounded-md">
        <TextFormat
          title="Qué es Javascript?"
          text={findCourse?.definition || ""}
        />
        <TextFormat
          title="Por Qué Aprender Javascript?"
          text={findCourse?.whyLearnIt || ""}
        />
        <TextFormat
          title="Cuál es el Salario Promedio trabajando con Javascript?"
          text={findCourse?.salary || ""}
        />
        <div>
          <TextFormat
            title="Lecturas Recomendadas"
            text=""
          />
          <ul className='pl-5'>
            <li className='text-blue underline leading-8 list-disc cursor-pointer'>https://teest.com/information</li>
            <li className='text-blue underline leading-8 list-disc cursor-pointer'>https://teest.com/information</li>
            <li className='text-blue underline leading-8 list-disc cursor-pointer'>https://teest.com/information</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Video;
