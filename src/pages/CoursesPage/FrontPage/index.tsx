import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

function FrontPage({ children }: Props) {
  const styleFrontPage = {
    background: 'linear-gradient(#090b20, #060513)',
  };

  return (
    <div 
      className="max-w-[1200px] w-full h-full grid place-content-center py-10 mx-auto mt-10 rounded-lg"
      style={styleFrontPage}
    >
      <div>
        <h1 className="text-white text-[60px] text-center font-bold mb-2">
          Accede a todos los <span className="text-blue">cursos</span>
        </h1>
        <p className='w-[60%] text-gray text-lg leading-8 text-center mx-auto mb-8'>
          Tenemos más de 200 cursos repartidos en diferentes áreas como serían desarrollo we,
          analisis de datos, bases de datos y muchas más.
        </p>
        <p className='text-blue text-lg text-center font-bold mx-auto mb-8'>#DesarrolloSinBarrerasAprendizajeSinCosto</p>
        { children }
      </div>
    </div>
  );
}

export default FrontPage;
