import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landing-page';
import LikedMoviesPage from './pages/liked-movies-page';
import MyListPage from './pages/my-list-page';

import MovieDetailsPage from './pages/movie-details-page';
import SearchPage from './pages/search-page';

import Header from './components/header';

import './App.css';

import genresAtom from './recoil/genres/atom';

import { getGenres } from './api/utils';

const App = () => {
   const setGenres = useSetRecoilState(genresAtom);

   useEffect(() => {
      const fetchGenres = async () => {
         try {
            const genres = await getGenres();
            setGenres({ genres: genres });
         } catch (error) {
            console.log(error);
         }
      };
      fetchGenres();
   }, []);

   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/liked" element={<LikedMoviesPage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path={`/details/:movieId`} element={<MovieDetailsPage />} />
            <Route path={`/search/:query`} element={<SearchPage />} />
         </Routes>
      </>
   );
};

export default App;
