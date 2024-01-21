import FilterList from '../../components/FilterList';
import InputSearch from '../../components/InputSearch';
import AllCourses from './AllCourses';
import FrontPage from './FrontPage';
import { data as toolsData } from '../../data/tools.json';
import { useSearchCourses } from '../../hooks/useSearchCourses';
import NotResults from '../../components/NotResults';
import { styles } from '../../styles';

type ListType = {
  text: string;
};

function CoursesPath() {
  const {
    dataFiltered,
    setSearch,
    search,
    setSimilarSearch,
    similarSearch,
    resultNamesSearched,
    setPath,
    setTool,
    setLevel,
  } = useSearchCourses();

  
  const resData: ListType[] = [];

  toolsData[0].tools.map((tool) =>
    resData.push({
      text: tool,
    }),
  );    

  const styleFrontPage = {
    background: 'linear-gradient(#060513, #090b20, #090b20)',
  }

  return (
    <div>
      <div className="bg-black" style={styles}>
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
      <div className="bg-darkBlue" style={styleFrontPage}>
        <AllCourses filteredCourses={dataFiltered} search={search}>
          <FilterList
            setItem={setPath}
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
            setItem={setTool}
            name="Herramientas"
            text="Todas las herramientas"
            list={resData}
          />
          <FilterList
            setItem={setLevel}
            name="Niveles"
            text="Todos los niveles"
            list={[
              { text: 'Basico' },
              { text: 'Intermedio' },
              { text: 'Avanzado' },
            ]}
          />
          {dataFiltered.length === 0 && <NotResults searched={search} />}
        </AllCourses>
      </div>
    </div>
  );
}

export default CoursesPath;
