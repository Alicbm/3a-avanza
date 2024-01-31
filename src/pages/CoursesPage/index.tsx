import { useSearchCourses } from '../../hooks/useSearchCourses';
import { data } from '../../data/courses.json'
// import { styles } from '../../styles';
import InputSearch from '../../components/InputSearch';
import AllCourses from './AllCourses';
import FrontPage from './FrontPage';
import NotResults from '../../components/NotResults';
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
    <div>
      <div>
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
      <div>
        <AllCourses filteredCourses={dataFiltered} search={search}>
          <GroupFilterList
            tools={tools}
            learningPaths={learnigPaths}
            setPath={setPath}
            setTool={setTool}
            setLevel={setLevel}
            search={search}
          />

          {dataFiltered.length === 0 && <NotResults searched={search} />}
        </AllCourses>
      </div>
    </div>
  );
}

export default CoursesPage;
