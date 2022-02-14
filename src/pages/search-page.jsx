import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PageContainer from '../components/page-container';
import MovieList from '../components/movie-list';
import Loader from '../components/loader';

import { searchMovies } from '../api/utils';

const SearchPage = () => {
   const [searchedMovies, setSearchedMovies] = useState({});

   const { pathname } = useLocation();
   const splittedPathname = pathname.split('/');

   const query = splittedPathname[2];

   useEffect(() => {
      const fetchSearch = async () => {
         try {
            const movies = await searchMovies(query);
            setSearchedMovies(movies);
         } catch (error) {
            console.log(error);
         }
      };
      fetchSearch();
   }, []);

   return (
      <PageContainer>
         {Object.keys(searchedMovies).length > 0 ? (
            <MovieList
               title={`Wyniki wyszukiwania dla "${query}"`}
               items={searchedMovies.results}
               isCategory
            />
         ) : (
            <Loader />
         )}
      </PageContainer>
   );
};

export default SearchPage;
