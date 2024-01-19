/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { MdOutlinePersonPin } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

type Props = {
  nameRoute: string;
  numberCourses: string;
};

function LearningPath({ nameRoute, numberCourses }: Props) {
  const app = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className="relative flex justify-around items-center w-[300px] h-[90px] border-[1px] border-gray rounded-[20px] cursor-pointer hover:bg-hoverDarkBlue"
      onClick={() => {
        app?.setNameLearningPath(nameRoute);
        navigate('/routes');
      }}
    >
      <div className="w-[30%] flex justify-center items-center text-[40px] text-gray">
        <MdOutlinePersonPin />
      </div>
      <div className="w-[70%]">
        <h4 className="text-gray font-title">Ruta de</h4>
        <h3 className="text-white font-title text-md">{nameRoute}</h3>
        <p className="text-blue text-sm">Ver los {numberCourses} cursos </p>
      </div>
      <span className="absolute right-4 text-xl text-blue">
        <IoIosArrowForward />
      </span>
    </div>
  );
}

export default LearningPath;
