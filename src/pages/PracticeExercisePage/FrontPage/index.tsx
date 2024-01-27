function FrontPage() {
  return (
    <div className="max-w-[1200px] w-full h-full grid place-content-center py-[60px] mx-auto overflow-hidden">
        <h1 className="w-[60%] font-title text-white text-[35px] text-center mb-4 mx-auto">
        Practica tus <span className="text-blue">conocimientos</span> con
        algunos <span className="text-blue">ejercicios</span> de lógica!
      </h1>
      <p className="w-[60%] text-gray text-lg leading-8 text-center mx-auto mb-8">
        Explora esta sección que ofrece una variedad de ejercicios diseñados
        para mejorar tus habilidades en lógica de programación. Elige el
        lenguaje de programación que prefieras y ¡comienza a practicar ahora
        mismo!
      </p>
      <p className='text-blue text-lg text-center font-bold mx-auto mb-8'>#DesarrolloSinBarrerasAprendizajeSinCosto</p>
    </div>
  );
}

export default FrontPage;
