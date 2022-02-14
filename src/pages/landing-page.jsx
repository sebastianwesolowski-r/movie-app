import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { withGenres } from '../recoil/genres';
import filtersAtom from '../recoil/filters';

import { getMovies } from '../api/utils';

import PageContainer from '../components/page-container';
import MovieList from '../components/movie-list';
import Loader from '../components/loader';

const LandingPage = () => {
   const [movies, setMovies] = useState([]);

   const [filters, setFilters] = useRecoilState(filtersAtom);
   const { sort, filter } = filters;
   const genres = useRecoilValue(withGenres);

   const showGenre = (genreId) =>
      setFilters({ ...filters, filter: { ...filter, genre: genreId } });

   useEffect(() => {
      const fetchMovies = async () => {
         try {
            if (
               Object.keys(genres).length === 0 ||
               genres.genres.length === 0
            ) {
               return;
            }
            const moviesRes = await getMovies(genres);
            setMovies([...moviesRes]);
         } catch (error) {
            console.log(error);
         }
      };
      fetchMovies();
   }, [genres]);

   const getGenreTitle = (genreId) => {
      const foundGenre = genres.genres.find(
         (genre) => genre.id === parseInt(genreId)
      );
      const { name } = foundGenre;

      return name;
   };

   const getItems = (results, genreId) => {
      results = results.slice(0, 5);
      results.map(
         (result) => (result = { ...result, genreId, showGenre: false })
      );
      results[5] = { id: 0, genreId, showGenre };

      return results;
   };

   const findItemsCategory = (genreId) => {
      const foundCategory = movies.filter(
         (el) => el.genreId === parseInt(genreId)
      );
      const { results } = foundCategory[0];

      return results;
   };

   return (
      <PageContainer>
         {movies.length > 0 ? (
            filter.genre ? (
               <MovieList
                  key={filter.genre}
                  title={getGenreTitle(filter.genre)}
                  items={findItemsCategory(filter.genre)}
                  isCategory
               />
            ) : (
               movies.map(({ genreId, results }) => (
                  <MovieList
                     key={genreId}
                     title={getGenreTitle(genreId)}
                     items={getItems(results, genreId)}
                  />
               ))
            )
         ) : (
            <Loader />
         )}
      </PageContainer>
   );
};

export default LandingPage;
