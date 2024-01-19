import InputSearch from '../../../components/InputSearch';

function FrontPage() {
  return (
    <div className="max-w-[1200px] w-full h-full grid place-content-center py-10 mx-auto overflow-hidden">
      <div>
        <h1 className="font-title text-white text-5xl text-center mb-4">
          Accede a todos los <span className="text-blue">Exámenes</span>
        </h1>
        <p className="w-[60%] text-gray text-lg text-center mx-auto mb-8">
          ¡Pon a prueba los conocimientos adquiridos! Tenemos examenes para cada
          una de las herramientas antes presentadas.
        </p>{' '}
        <p className="text-blue text-lg text-center mx-auto mb-8">
          #DesarrolloSinBarrerasAprendizajeSinCosto
        </p>
        <InputSearch placeholder="Burcar Examenes..." />
      </div>
    </div>
  );
}

export default FrontPage;
