import InputSearch from '../../components/InputSearch';
import AllCourses from './AllCourses';
import FrontPage from './FrontPage';
import { useSearchCourses } from '../../hooks/useSearchCourses';
import NotResults from '../../components/NotResults';
import { styles } from '../../styles';
import GroupFilterList from './components/GroupFilterList';

function CoursesPath() {
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
  } = useSearchCourses();

  const styleFrontPage = {
    background: 'linear-gradient(#060513, #090b20, #090b20)',
  };    

  return (
    <div>
      <div className="bg-black" style={styles}>
        <FrontPage>
          <InputSearch
            placeholder="Burcar Cursos..."
            search={search}
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

export default CoursesPath;
