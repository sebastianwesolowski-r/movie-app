import React from 'react';
import { useRecoilValue } from 'recoil';

import { withSaved } from '../recoil/saved/index';

import EmptyList from '../components/empty-list';
import PageContainer from '../components/page-container';
import MovieList from '../components/movie-list';

const MyListPage = () => {
   const movies = useRecoilValue(withSaved);

   const { savedMovies } = movies;

   return (
      <PageContainer>
         {savedMovies.length !== 0 ? (
            <MovieList
               title={'Zapisane filmy'}
               items={savedMovies}
               isCategory
            />
         ) : (
            <EmptyList />
         )}
      </PageContainer>
   );
};

export default MyListPage;
