import { useState } from 'react';
import { Link } from 'react-router-dom';

type RoutesType = {
  to: string;
  text: string;
};

const routes: RoutesType[] = [];
routes.push({
  to: '/',
  text: 'Inicio',
});
routes.push({
  to: '/routes',
  text: 'Rutas',
});
routes.push({
  to: '/courses',
  text: 'Cursos',
});
routes.push({
  to: '/Jobs',
  text: 'Empleo',
});
routes.push({
  to: '/exams',
  text: 'Exámenes',
});
routes.push({
  to: '/exercises',
  text: 'Ejercicios',
});

function NavBar() {
  const [active, setActive] = useState('Inicio');

  return (
    <nav className="h-[70px] max-w-[1200px] flex justify-between items-center mx-auto">
      <div className="w-[30%] text-blue font-title text-3xl">AAA</div>
      <ul className="w-[60%] flex justify-center items-center">
        {routes.map((route) => (
          <li key={route.text}>
            <Link
              to={route.to}
              className={`${
                active === route.text
                  ? 'text-blue border-b-2 border-blue'
                  : 'text-white'
              } font-title text-xl px-3 pb-1 hover:text-blue hover:border-b-2 hover:border-blue`}
              onClick={() => setActive(route.text)}
            >
              {route.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-[30%] text-right text-blue text-xl">
        1550 puntos | Alic
      </div>
    </nav>
  );
}

export default NavBar;
