function FrontPage() {
  const styleFrontPage = {
    background: 'linear-gradient(#090b20, #060513)',
  };

  return (
    <div
      className="max-w-[1200px] w-full h-full grid place-content-center py-10 mx-auto mt-10 rounded-lg"
      style={styleFrontPage}
    >
      <h1 className="w-[90%] text-white text-[60px] text-center font-bold mb-2 mx-auto">
        Practica tus <span className="text-blue">conocimientos</span>
        {/* algunos <span className="text-blue">ejercicios</span> de lógica! */}
      </h1>
      <p className="w-[60%] text-gray text-lg leading-8 text-center mx-auto mb-8">
        Explora esta sección que ofrece una variedad de ejercicios diseñados
        para mejorar tus habilidades en lógica de programación. Elige el
        lenguaje de programación que prefieras y ¡comienza a practicar ahora
        mismo!
      </p>
      <p className="text-blue text-lg text-center font-bold mx-auto mb-8">
        #DesarrolloSinBarrerasAprendizajeSinCosto
      </p>
    </div>
  );
}

export default FrontPage;
