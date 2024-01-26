import { useSearchCourses } from '../../hooks/useSearchCourses';
import { data } from '../../data/questions.json'
import { styles } from '../../styles';
import InputSearch from '../../components/InputSearch';
import NotResults from '../../components/NotResults';
import AllExams from './AllExams';
import FrontPage from './FrontPage';
import GroupFilterList from './components/GroupFilterList';

function ExamsPath() {
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
            placeholder="Burcar Examenes..."
            setSearch={setSearch}
            setSimilarSearch={setSimilarSearch}
            similarSearch={similarSearch}
            listSimilarSearches={resultNamesSearched}
          />
        </FrontPage>
      </div>
      <div className="bg-darkBlue" style={styleFrontPage}>
        <AllExams filteredCourses={dataFiltered}>
          <GroupFilterList
            tools={tools}
            learningPaths={learnigPaths}
            setPath={setPath}
            setTool={setTool}
            setLevel={setLevel}
            search={search}
          />

          {dataFiltered.length === 0 && <NotResults searched={search} />}
        </AllExams>
      </div>
    </div>
  );
}

export default ExamsPath;
