import { useSearchCourses } from '../../hooks/useSearchCourses';
import { data } from '../../data/courses.json'
import { styles } from '../../styles';
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

  const styleFrontPage = {
    background: 'linear-gradient(#060513, #090b20, #090b20)',
  };    

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
