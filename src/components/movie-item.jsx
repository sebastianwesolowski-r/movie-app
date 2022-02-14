/** @jsxImportSource theme-ui */
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from 'theme-ui';

import { ReactComponent as ShowCategoryIcon } from '../assets/images/show-category-icon.svg';

const MovieItem = ({ item, displayCategory }) => {
   const navigate = useNavigate();
   const handleClick = useCallback(
      () => navigate(`/details/${item.id}`, { replace: true }),
      [navigate]
   );

   const { genreId, showGenre } = item;

   return displayCategory ? (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '15%',
            maxWidth: '210px',
            minWidth: '164px',
            height: '280px',
            border: '3px solid #5E5F61',
            borderRadius: '5px',
            marginLeft: 2,
            marginBottom: 2,
            cursor: 'pointer',
            transitionDuration: '180ms',
            '&:hover': {
               opacity: '0.72',
            },
            '@media screen and (max-width: 960px)': {
               marginLeft: '0px',
               marginRight: 3,
            },
         }}
         onClick={showGenre ? () => showGenre(genreId) : null}
      >
         <ShowCategoryIcon />
      </Box>
   ) : (
      <Box
         onClick={handleClick}
         sx={{
            width: '15%',
            maxWidth: '210px',
            minWidth: '164px',
            height: '280px',
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '5px',
            marginRight: 3,
            marginBottom: 2,
            cursor: 'pointer',
            transitionDuration: '180ms',
            '&:hover': {
               transform: 'translateY(-3px)',
               boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
            },
         }}
      ></Box>
   );
};

export default MovieItem;
