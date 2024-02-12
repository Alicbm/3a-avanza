import { useSearchCourses } from '../../hooks/useSearchCourses';
import { data } from '../../data/courses.json';
import InputSearch from '../../components/InputSearch';
import AllCourses from './AllCourses';
import GroupFilterList from './components/GroupFilterList';

function CoursesPage() {
  const {
    dataFiltered,
    setSearch,
    search,
    setSimilarSearch,
    similarSearch,
    resultNamesSearched,
    learnigPaths,
    tools,
    setPath,
    setTool,
    setLevel,
  } = useSearchCourses(data);

  return (
    <div className="flex items-start max-w-[1200px] w-full gap-6 py-10 mx-auto">
      <div className="sticky top-10">
        <GroupFilterList
          tools={tools}
          learningPaths={learnigPaths}
          setPath={setPath}
          setTool={setTool}
          setLevel={setLevel}
          search={search}
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
          <InputSearch
            placeholder="Burcar Cursos..."
            setSearch={setSearch}
            setSimilarSearch={setSimilarSearch}
            similarSearch={similarSearch}
            listSimilarSearches={resultNamesSearched}
          />
        <AllCourses filteredCourses={dataFiltered} search={search} />
      </div>
    </div>
  );
}

export default CoursesPage;
