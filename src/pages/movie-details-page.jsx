/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Flex, Box, Heading, Text, Button } from 'theme-ui';

import { getMovieDetails } from '../api/utils';

import likedAtom from '../recoil/liked';
import savedAtom from '../recoil/saved';

import PageContainer from '../components/page-container';
import Loader from '../components/loader';

import { ReactComponent as HeartIcon } from '../assets/images/heart-bee-icon.svg';
import { ReactComponent as HeartFilledIcon } from '../assets/images/heart-bee-filled-icon.svg';

const MovieDetailsPage = () => {
   const [details, setDetails] = useState({ id: 0 });

   const { pathname } = useLocation();
   const splittedPathname = pathname.split('/');

   const movieId = splittedPathname[2];

   useEffect(() => {
      const fetchDetails = async () => {
         try {
            const detailsRes = await getMovieDetails(movieId);
            setDetails(detailsRes);
         } catch (error) {
            console.log(error);
         }
      };
      fetchDetails();
   });

   const [liked, setLiked] = useRecoilState(likedAtom);
   const [saved, setSaved] = useRecoilState(savedAtom);

   const { likedMovies } = liked;
   const { savedMovies } = saved;

   const handleLike = () =>
      setLiked({ likedMovies: [...likedMovies, details] });
   const handleSave = () =>
      setSaved({ savedMovies: [...savedMovies, details] });
   const handleDislike = () =>
      setLiked({
         likedMovies: likedMovies.filter((movie) => movie.id !== details.id),
      });
   const handleDelSaved = () =>
      setSaved({
         savedMovies: savedMovies.filter((movie) => movie.id !== details.id),
      });

   const isSaved =
      savedMovies.length > 0
         ? savedMovies.some((movie) => (movie.id === details.id ? true : false))
         : false;

   const isLiked =
      likedMovies.length > 0
         ? likedMovies.some((movie) => (movie.id === details.id ? true : false))
         : false;

   return (
      <PageContainer>
         <Flex
            sx={{
               alignSelf: 'flex-start',
               flexDirection: 'column',
               alignItems: 'flex-start',
               width: '100%',
            }}
         >
            <Heading
               as="h4"
               color="light"
               sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  marginBottom: 4,
               }}
            >
               Szczegóły
            </Heading>
            {Object.keys(details).length > 1 ? (
               <>
                  <Box
                     sx={{
                        width: '40%',
                        maxWidth: '544px',
                        minWidth: '350px',
                        height: '280px',
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.backdrop_path})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        marginBottom: 1,
                        borderRadius: '6px',
                     }}
                  ></Box>
                  <Flex
                     sx={{
                        alignItems: 'center',
                        marginBottom: 0,
                     }}
                  >
                     <Heading
                        as="h3"
                        color="light"
                        sx={{
                           fontFamily: "'Montserrat', sans-serif",
                           marginRight: 3,
                        }}
                     >
                        {details.original_title}
                     </Heading>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: '35px',
                           height: '35px',
                           border: '2px solid #EFC62E',
                           borderRadius: '50%',
                        }}
                     >
                        <Text
                           sx={{
                              color: 'bee',
                              fontSize: '14px',
                              fontWeight: 'semiBold',
                           }}
                        >
                           {details.vote_average}
                        </Text>
                     </Box>
                  </Flex>
                  <Text
                     sx={{
                        width: '40%',
                        maxWidth: '544px',
                        minWidth: '350px',
                        fontSize: 1,
                        color: 'mud',
                        marginBottom: '32px',
                     }}
                  >
                     {details.overview}
                  </Text>
                  <Flex>
                     <Button
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: '44px',
                           height: '44px',
                           backgroundColor: 'midnight',
                           borderRadius: '4px',
                           boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
                           marginRight: '16px',
                           padding: '0',
                           cursor: 'pointer',
                        }}
                        onClick={isLiked ? handleDislike : handleLike}
                     >
                        {isLiked ? <HeartFilledIcon /> : <HeartIcon />}
                     </Button>
                     <Button
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           height: '44px',
                           color: isSaved ? 'bee' : 'mud',
                           fontWeight: 'semiBold',
                           backgroundColor: 'midnight',
                           borderRadius: '4px',
                           boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
                           padding: '0 16px',
                           cursor: 'pointer',
                        }}
                        onClick={isSaved ? handleDelSaved : handleSave}
                     >
                        {isSaved ? 'Zapisany' : 'Zapisz'}
                     </Button>
                  </Flex>
               </>
            ) : (
               <Loader />
            )}
         </Flex>
      </PageContainer>
   );
};

export default MovieDetailsPage;
