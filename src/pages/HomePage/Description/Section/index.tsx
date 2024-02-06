import { FaArrowRight } from 'react-icons/fa';

type Props = {
  styleBlock: {
    boxShadow: string;
    border: string;
    background: string;
  };
  color: string;
  number: string;
  image: string;
};

function SectionSteps({ styleBlock, color, number, image }: Props) {
  return (
    <div
      className="relative grid gap-4 w-full bg-black p-6 pb-10 rounded-md overflow-hidden"
      style={styleBlock}
    >
      <div
        className="absolute -top-8 -right-8 flex justify-center items-center w-[220px] h-[220px] bg-bgPurple rounded-[50%] opacity-[.15]"
        style={{ border: `5px solid ${color}` }}
      >
        <p className="text-[160px] font-bold" style={{ color }}>
          {number}
        </p>
      </div>

      <div>
        <h4 className="text-white text-lg">Información organizada</h4>
        <h2 className="font-bold text-5xl" style={{ color }}>
          Rutas de aprendizaje
        </h2>
      </div>

      <p className="text-md text-gray text-justify leading-6 mb-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod porro,
        tempora, pariatur nobis repellat ullam iste sunt necessitatibus adipisci
        assumenda accusamus{' '}
      </p>

      <ul className="grid gap-6">
        <li className="flex items-center gap-2 text-gray text-md leading-6">
          <span className="flex justify-center items-center min-w-[35px] h-[35px] bg-bgBlue rounded-[50%]">
            🎱
          </span>
          <p>Áreas más demandadas en la industria</p>
        </li>
        <li className="flex items-center gap-2 text-gray text-md leading-6">
          <span className="flex justify-center items-center min-w-[35px] h-[35px] bg-bgBlue rounded-[50%]">
            🎱
          </span>
          <p>Cursos y contenido recopilado y organizado para ti</p>
        </li>
        <li className="flex items-center gap-2 text-gray text-md leading-6">
          <span className="flex justify-center items-center min-w-[35px] h-[35px] bg-bgBlue rounded-[50%]">
            🎱
          </span>
          <p>Completamente gratis</p>
        </li>
      </ul>

      <div className="flex justify-end items-center gap-1">
        <p
          className="font-bold text-md underline cursor-pointer"
          style={{ color }}
        >
          Quiero saber más
        </p>
        <span>
          <FaArrowRight color={color} />
        </span>
      </div>

      <div className="absolute -bottom-4 w-full h-auto opacity-[.1]">
        <img src={image} alt="" className="w-[90%]  mx-auto" />
      </div>
    </div>
  );
}

export default SectionSteps;
