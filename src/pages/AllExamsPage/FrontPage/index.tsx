import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

function FrontPage({ children }: Props) {
  return (
    <div className="max-w-[1200px] w-full h-[350px] grid place-content-center py-10 mx-auto">
      <div>
      <h1 className="font-title text-white text-[60px] text-center mb-4">
          Accede a todos los <span className="text-blue">Exámenes</span>
        </h1>
        <p className="w-[60%] text-gray text-lg text-center mx-auto mb-6">
          ¡Pon a prueba los conocimientos adquiridos! Tenemos examenes para cada
          una de las herramientas antes presentadas.
        </p>{' '}
        <p className="text-blue text-lg text-center mx-auto mb-8">
          #DesarrolloSinBarrerasAprendizajeSinCosto
        </p>
        { children }
      </div>
    </div>
  );
}

export default FrontPage;
