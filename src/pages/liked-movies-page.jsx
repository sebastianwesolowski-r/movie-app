import React from 'react';
import { useRecoilValue } from 'recoil';

import { withLiked } from '../recoil/liked/index';

import EmptyList from '../components/empty-list';
import PageContainer from '../components/page-container';
import MovieList from '../components/movie-list';

const LikedMoviesPage = () => {
   const movies = useRecoilValue(withLiked);

   const { likedMovies } = movies;

   return (
      <PageContainer>
         {likedMovies.length !== 0 ? (
            <MovieList
               title={'Polubione filmy'}
               items={likedMovies}
               isCategory
            />
         ) : (
            <EmptyList />
         )}
      </PageContainer>
   );
};

export default LikedMoviesPage;
