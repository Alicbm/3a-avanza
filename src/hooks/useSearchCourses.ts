/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { useFilterCourses } from './useFilterCourses';
import { data as dataTools } from '../data/tools.json';
import { CoursesIT, ExamsIT } from '../types';

export const useSearchCourses = (data: CoursesIT[] | ExamsIT[]) => {
  const { newData, path, tool, level, setPath, setTool, setLevel } =
    useFilterCourses(data);

  const [search, setSearch] = useState('');
  const [dataFiltered, setDataFiltered] = useState(data);
  const [similarSearch, setSimilarSearch] = useState('');

  const filterNamesSearched = data.filter((course) =>
    course.name.toLowerCase().includes(similarSearch.toLowerCase()),
  );
  const resultNamesSearched = filterNamesSearched.map((item) => item.name);

  const learnigPaths = dataTools.map((item) => item.nameLearningPath);
  const tools = dataTools
    .filter(
      (item) => item?.nameLearningPath.toLowerCase() === path.toLowerCase(),
    )[0]
    ?.tools.map((toolItem) => toolItem);

  useEffect(() => {
    if (search.length > 0) {
      const filteredCourses = data.filter((course) =>
        course.name.toLowerCase().includes(search.toLowerCase()),
      );

      setDataFiltered(filteredCourses);
    }
  }, [search]);

  useEffect(() => {
    if(path.length > 0){
      setSearch('')
    }
    setDataFiltered(newData);
  }, [path, tool, level]);

  useEffect(() => {
    if (path.length > 0) {
      setTool('');
      setLevel('');
    }
  }, [path]);

  return {
    search,
    setSearch,
    dataFiltered,
    resultNamesSearched,
    similarSearch,
    setSimilarSearch,
    learnigPaths,
    tools,

    setPath,
    setTool,
    setLevel,
  };
};
