/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { data } from '../data/courses.json';
import { useFilterCourses } from './useFilterCourses';

export const useSearchCourses = () => {
  const { newData, path, tool, level, setPath, setTool, setLevel } =
    useFilterCourses(data);

  const [search, setSearch] = useState('');
  const [dataFiltered, setDataFiltered] = useState(data);
  const [similarSearch, setSimilarSearch] = useState('');

  useEffect(() => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(search.toLowerCase()),
    );

    setDataFiltered(filteredCourses);
  }, [search]);

  useEffect(() => {
    setDataFiltered(newData);
  }, [path, tool, level]);

  const filterNamesSearched = data.filter((course) =>
    course.name.toLowerCase().includes(similarSearch.toLowerCase()),
  );
  const resultNamesSearched = filterNamesSearched.map((item) => item.name);

  return {
    search,
    setSearch,
    dataFiltered,
    resultNamesSearched,
    similarSearch,
    setSimilarSearch,

    setPath,
    setTool,
    setLevel,
  };
};
