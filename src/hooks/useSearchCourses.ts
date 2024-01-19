/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import { data } from '../data/courses.json';

export const useSearchCourses = () => {
  const [search, setSearch] = useState('');
  const [similarSearch, setSimilarSearch] = useState('');

  const filteredCourses = data.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.definition.toLowerCase().includes(search.toLowerCase()) ||
      course.learningPath.toLowerCase().includes(search.toLowerCase()) ||
      course.tool.toLowerCase().includes(search.toLowerCase()) ||
      course.origin.toLowerCase().includes(search.toLowerCase()) ||
      course.dificulty.toLowerCase().includes(search.toLowerCase()),
  );

  const filterNamesSearched = data.filter((course) =>
    course.name.toLowerCase().includes(similarSearch.toLowerCase()),
  );
  const resultNamesSearched = filterNamesSearched.map((item) => item.name);

  return {
    search,
    setSearch,
    filteredCourses,
    resultNamesSearched,
    similarSearch,
    setSimilarSearch,
  };
};
