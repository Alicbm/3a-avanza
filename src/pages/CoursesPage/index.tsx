import { TbFilterSearch } from 'react-icons/tb';
import { useSearchCourses } from '../../hooks/useSearchCourses';
import { data } from '../../data/courses.json';
// import { styles } from '../../styles';
import InputSearch from '../../components/InputSearch';
import AllCourses from './AllCourses';
import FrontPage from './FrontPage';
import NotResults from '../../components/NotResults';
import FilterList from '../../components/FilterList';
// import GroupFilterList from './components/GroupFilterList';

function CoursesPage() {
  const {
    dataFiltered,
    setSearch,
    search,
    setSimilarSearch,
    similarSearch,
    resultNamesSearched,
    // learnigPaths,
    // tools,
    setPath,
    // setTool,
    // setLevel,
  } = useSearchCourses(data);

  return (
    <div>
      <div className='flex items-start max-w-[1200px] w-full gap-6 py-10 mx-auto'>
      <div className="sticky top-10 grid gap-4 content-start min-w-[300px] min-h-[300px] h-auto bg-hoverDarkBlue p-4 rounded-md">
        <h2 className="flex items-center justify-between gap-4 text-white text-3xl px-4 py-2 border-b border-hoverGray">
          Filtrar{' '}
          <span className="text-green">
            <TbFilterSearch />
          </span>
        </h2>
        <FilterList
          setItem={setPath}
          name="Rutas"
          valueList="Todas las Rutas"
          setValueList={() => 'no funciona'}
          list={[
            'Desarrollo Front-End',
            'Desarrollo Back-End',
            'Analisis de Datos',
            'Manejo de Bases de Datos',
            'Pensamiento Logico',
          ]}
        />
        <FilterList
          setItem={setPath}
          name="Herramientas"
          valueList="Todas las Herramientas"
          setValueList={() => 'no funciona'}
          list={['front', 'back', 'data']}
        />
        <FilterList
          setItem={setPath}
          name="Niveles"
          valueList="Todas las Rutas"
          setValueList={() => 'no funciona'}
          list={['front', 'back', 'data']}
        />
      </div>
      <div className="grid gap-10 bg-hoverDarkBlue px-10 py-10">
        <div>
          <h2 className="text-white font-bold tracking-wider text-[50px] mb-2">
            <span className="text-green">A</span>ccede a todos los{' '}
            <span className="text-green">cursos</span>
          </h2>
          <p className="text-gray">
            Tenemos más de 200 cursos repartidos en diferentes áreas como serían
            desarrollo we, analisis de datos, bases de datos y muchas más.
          </p>
        </div>
        <FrontPage>
          <InputSearch
            placeholder="Burcar Cursos..."
            setSearch={setSearch}
            setSimilarSearch={setSimilarSearch}
            similarSearch={similarSearch}
            listSimilarSearches={resultNamesSearched}
          />
        </FrontPage>
        <AllCourses filteredCourses={dataFiltered} search={search}>
          {/* <GroupFilterList
            tools={tools}
            learningPaths={learnigPaths}
            setPath={setPath}
            setTool={setTool}
            setLevel={setLevel}
            search={search}
          /> */}

          {dataFiltered.length === 0 && <NotResults searched={search} />}
        </AllCourses>
      </div>
      </div>
    </div>
  );
}

export default CoursesPage;
