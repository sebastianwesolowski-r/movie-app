/** @jsxImportSource theme-ui */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { withFilters } from '../recoil/filters';
import { Flex, Heading } from 'theme-ui';

import MovieItem from './movie-item';

import {
   sortItems,
   filterItemsReleaseYear,
   filterItemsGenre,
} from '../utils/utils';

const MovieList = ({ title, items, isCategory }) => {
   let fixedItems = [];

   const filters = useRecoilValue(withFilters);
   const {
      sort,
      filter: { genre, releaseYear },
   } = filters;

   if (isCategory && genre) {
      const fixed = filterItemsGenre(items, genre);
      fixedItems = fixed;
   }

   if (isCategory && releaseYear) {
      const fixed = filterItemsReleaseYear(
         fixedItems.length > 0 ? fixedItems : items,
         releaseYear
      );
      fixedItems = fixed;
   }

   if (isCategory && sort) {
      const fixed = sortItems(fixedItems.length > 0 ? fixedItems : items, sort);
      fixedItems = fixed;
   }

   return (
      <Flex
         sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            marginBottom: 3,
         }}
      >
         <Flex
            sx={{
               width: '100%',
               marginBottom: 0,
            }}
         >
            <Heading
               as="h4"
               color="light"
               sx={{
                  fontFamily: "'Montserrat', sans-serif",
               }}
            >
               {title}
            </Heading>
         </Flex>
         <Flex
            sx={{
               justifyContent: isCategory ? 'flex-start' : 'space-between',
               flexWrap: 'wrap',
               width: '100%',
            }}
         >
            {(fixedItems.length > 0 ? fixedItems : items).map((el, index) =>
               index !== (isCategory ? -1 : 5) ? (
                  <MovieItem key={index} item={el} />
               ) : (
                  <MovieItem key={index} item={el} displayCategory />
               )
            )}
         </Flex>
      </Flex>
   );
};

export default MovieList;
