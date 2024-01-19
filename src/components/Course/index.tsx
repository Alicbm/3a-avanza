/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import testImage from '../../images/test.png';
import { AppContext } from '../../AppContext';

type Props = {
  id: number;
  name: string;
  origin: string;
  popularity: string;
};

function Course({ id, name, origin, popularity }: Props) {
  const { setCourse } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    // <div className="h-[100px] flex justify-start items-center gap-4 border border-gray rounded-lg pr-2 overflow-hidden">
    //   <div>
    //     <img src={testImage} alt="Test" className="h-[100px] object-cover" />
    //   </div>
    //   <div>
    //     <h4 className="font-title text-white text-lg">Curso Python Python </h4>
    //     <p className="font-title text-gray text-md">Mouredev</p>
    //     <p className="text-blue text-sm">85% Popularidad</p>
    //   </div>
    // </div>
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="min-w-[280px] min-h-[230px] bg-hoverDarkBlue rounded-lg overflow-hidden cursor-pointer"
      onClick={() => {
        navigate('/courses/video');
        setCourse(id);
      }}
    >
      <div>
        <img
          src={testImage}
          alt="Test"
          className="w-full h-[150px] object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <h4 className="font-title text-white text-lg">{name}</h4>
        <p className="font-title text-gray text-md">{origin}</p>
        <p className="text-blue text-sm">{popularity} Popularidad</p>
      </div>
    </div>
  );
}

export default Course;
