import { useSearchCourses } from '../../hooks/useSearchCourses';
import { data } from '../../data/courses.json';
import InputSearch from '../../components/InputSearch';
import AllCourses from './components/AllCourses';
import GroupFilterList from './components/GroupFilterList';
import { colors } from '../../styles/colors';

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
      <div>
        <AllCourses filteredCourses={dataFiltered} search={search}>
          <InputSearch
            placeholder="Burcar Cursos..."
            setSearch={setSearch}
            setSimilarSearch={setSimilarSearch}
            similarSearch={similarSearch}
            listSimilarSearches={resultNamesSearched}
            color={colors.green}
            bgColor={colors.bgGreen}
          />
        </AllCourses>
      </div>
    </div>
  );
}

export default CoursesPage;
