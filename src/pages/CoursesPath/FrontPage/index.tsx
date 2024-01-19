function FrontPage({ children }: any) {
  return (
    <div className="max-w-[1200px] w-full h-full grid place-content-center py-10 mx-auto">
      <div>
        <h1 className="font-title text-white text-5xl text-center mb-4">
          Accede a todos los <span className="text-blue">Cursos</span>
        </h1>
        <p className='w-[60%] text-gray text-lg text-center mx-auto mb-8'>
          Tenemos más de 200 cursos repartidos en diferentes áreas como serían desarrollo we,
          analisis de datos, bases de datos y muchas más.
        </p>
        <p className='text-blue text-lg text-center mx-auto mb-8'>#DesarrolloSinBarrerasAprendizajeSinCosto</p>
        { children }
      </div>
    </div>
  );
}

export default FrontPage;
