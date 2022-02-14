/** @jsxImportSource theme-ui */
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { withGenres } from '../recoil/genres';
import filtersAtom from '../recoil/filters/index';

import { Select, Container, Box, Close, Label } from 'theme-ui';

const years = [];
for (let i = 2022; i >= 1942; i--) {
   years.push(i);
}

const FiltersDropdown = ({ showFilters, handleShowFilters }) => {
   const [filters, setFilters] = useRecoilState(filtersAtom);
   const {
      sort,
      filter,
      filter: { genre, releaseYear },
   } = filters;

   const setSort = (value) => setFilters({ ...filters, sort: value });

   const setFilter = (key, value) =>
      setFilters({ ...filters, filter: { ...filter, [key]: value } });

   const genresList = useRecoilValue(withGenres);
   const { genres } = genresList;

   return (
      <Box
         sx={{
            position: 'absolute',
            top: '47px',
            left: '0px',
            right: '15px',
            display: showFilters ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '350px',
            height: '290px',
            margin: '0 auto',
            padding: '20px 24px',
            backgroundColor: 'midnight',
            borderRadius: '2px',
            zIndex: '98',
            '@media screen and (max-width: 960px)': {
               top: '112px',
               right: '35px',
            },
         }}
      >
         <Close
            color="mud"
            sx={{
               position: 'absolute',
               top: '4px',
               right: '4px',
               zIndex: '99',
               cursor: 'pointer',
               padding: '0px',
            }}
            onClick={handleShowFilters}
         />
         <Container
            sx={{
               svg: {
                  color: 'mud',
               },
            }}
         >
            <Label
               htmlFor="sort"
               sx={{
                  color: 'light',
                  fontSize: 0,
                  fontWeight: 'medium',
                  marginBottom: '8px',
               }}
            >
               Sortuj
            </Label>
            <Select
               id="sort"
               sx={{
                  height: '42px',
                  padding: '8px 16px',
                  color: 'bee',
                  backgroundColor: 'core',
                  border: '2px solid #5E5F61',
                  outline: 'none',
                  option: {
                     color: 'light',
                  },
               }}
               onChange={(e) => setSort(e.target.value)}
               value={sort}
            >
               <option value=""></option>
               <option value="popularity">Popularność</option>
               <option value="releaseDate">Data premiery</option>
               <option value="rating">Ocena</option>
            </Select>
         </Container>
         <Container
            sx={{
               svg: {
                  color: 'mud',
               },
            }}
         >
            <Label
               htmlFor="filter"
               sx={{
                  color: 'light',
                  fontSize: 0,
                  fontWeight: 'medium',
                  marginBottom: '8px',
               }}
            >
               Gatunek
            </Label>
            <Select
               id="filter"
               sx={{
                  height: '42px',
                  padding: '8px 16px',
                  color: 'bee',
                  backgroundColor: 'core',
                  border: '2px solid #5E5F61',
                  outline: 'none',
                  option: {
                     color: 'light',
                  },
               }}
               onChange={(e) => setFilter('genre', e.target.value)}
               value={genre}
            >
               <option value=""> </option>
               {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                     {genre.name}
                  </option>
               ))}
            </Select>
         </Container>
         <Container
            sx={{
               svg: {
                  color: 'mud',
               },
            }}
         >
            <Label
               htmlFor="filter"
               sx={{
                  color: 'light',
                  fontSize: 0,
                  fontWeight: 'medium',
                  marginBottom: '8px',
               }}
            >
               Rok premiery
            </Label>
            <Select
               id="filter"
               sx={{
                  height: '42px',
                  padding: '8px 16px',
                  color: 'bee',
                  backgroundColor: 'core',
                  border: '2px solid #5E5F61',
                  outline: 'none',
                  option: {
                     color: 'light',
                  },
               }}
               onChange={(e) => setFilter('releaseYear', e.target.value)}
               value={releaseYear}
            >
               <option value=""> </option>
               {years.map((year) => (
                  <option key={year} value={year}>
                     {year}
                  </option>
               ))}
            </Select>
         </Container>
      </Box>
   );
};

export default FiltersDropdown;
