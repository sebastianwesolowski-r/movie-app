import { key } from './api_key';

export const getMovies = async (categories) => {
   const movies = [];

   const { genres } = categories;

   await Promise.all(
      genres.map(async (genre) => {
         const { id } = genre;

         const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${id}&language=pl-PL`
         );
         const resJson = await response.json();

         movies.push({ genreId: id, ...resJson });
      })
   );

   movies.sort((a, b) => a.genreId - b.genreId);

   return movies;
};

export const getMovieDetails = async (movieId) => {
   const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=pl-PL`
   );
   const resJson = await response.json();

   return resJson;
};

export const searchMovies = async (query) => {
   const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pl-PL&query=${query}`
   );
   const resJson = await response.json();

   return resJson;
};

export const getGenres = async () => {
   const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=pl-PL`
   );
   const resJson = await response.json();

   const { genres } = resJson;

   return genres;
};
