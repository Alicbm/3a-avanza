import FilterList from '../../components/FilterList';
import InputSearch from '../../components/InputSearch';
import AllCourses from './AllCourses';
import FrontPage from './FrontPage';
import { data as toolsData } from '../../data/tools.json';
import { useSearchCourses } from '../../hooks/useSearchCourses';
import NotResults from '../../components/NotResults';
import { useFilterCourses } from '../../hooks/useFilterCourses';

type ListType = {
  text: string;
};

function CoursesPath() {
  const {
    filteredCourses,
    setSearch,
    search,
    setSimilarSearch,
    similarSearch,
    resultNamesSearched,
  } = useSearchCourses();

  const { setItem } = useFilterCourses()

  const resData: ListType[] = [];

  toolsData[0].tools.map((tool) =>
    resData.push({
      text: tool,
    }),
  );    

  return (
    <div>
      <div className="bg-black">
        <FrontPage>
          <InputSearch
            placeholder="Burcar Cursos..."
            setSearch={setSearch}
            setSimilarSearch={setSimilarSearch}
            similarSearch={similarSearch}
            listSimilarSearches={resultNamesSearched}
          />
        </FrontPage>
      </div>
      <div className="bg-darkBlue">
        <AllCourses filteredCourses={filteredCourses} search={search}>
          <FilterList
            setItem={setItem}
            name="Rutas"
            text="Todas las rutas"
            list={[
              { text: 'Desarrollo Front-End' },
              { text: 'Desarrollo Back-End' },
              { text: 'Análisis de Datos' },
              { text: 'Manejo de Bases de Datos' },
              { text: 'Pensamiento Lógico' },
            ]}
          />
          <FilterList
            setItem={setItem}
            name="Herramientas"
            text="Todas las herramientas"
            list={resData}
          />
          <FilterList
            setItem={setItem}
            name="Niveles"
            text="Todos los niveles"
            list={[
              { text: 'Básico' },
              { text: 'Intermedio' },
              { text: 'Avanzado' },
            ]}
          />
          {filteredCourses.length === 0 && <NotResults searched={search} />}
        </AllCourses>
      </div>
    </div>
  );
}

export default CoursesPath;
