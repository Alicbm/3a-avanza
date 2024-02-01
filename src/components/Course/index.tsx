/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import testImage from '../../images/test.png';
import { AppContext } from '../../AppContext';

type Props = {
  id: number;
  name: string;
  origin: string | undefined;
  popularity: string | undefined;
  dificulty: string;
};

function Course({ id, name, origin, popularity, dificulty }: Props) {
  const { setCourse } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className="min-w-[280px] min-h-[230px] bg-darkBlue rounded-md overflow-hidden cursor-pointer hover:bg-hoverDarkBlue"
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
        <h4 className="font-bold text-white text-lg">{name}</h4>
        <p className="text-gray text-md mb-1">{dificulty} - {origin}</p>
        <p className="text-blue text-sm">{popularity} Popularidad</p>
      </div>
    </div>
  );
}

export default Course;
