import { useSearchCourses } from '../../hooks/useSearchCourses';
import { data } from '../../data/questions.json';
import { colors } from '../../styles/colors';
import Exams from './components/Exams';
import InputSearch from '../../components/InputSearch';
import GroupFilterList from './components/GroupFilterList';

function AllExamsPage() {
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
        <Exams filteredCourses={dataFiltered} search={search}>
          <InputSearch
            placeholder="Burcar Examenes..."
            setSearch={setSearch}
            setSimilarSearch={setSimilarSearch}
            similarSearch={similarSearch}
            listSimilarSearches={resultNamesSearched}
            color={colors.blue}
            bgColor={colors.bgBlue}
          />
        </Exams>
      </div>
    </div>
  );
}

export default AllExamsPage;
