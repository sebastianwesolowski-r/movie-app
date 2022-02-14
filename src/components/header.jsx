/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import filtersAtom from '../recoil/filters';
import { Flex, Box, Input } from 'theme-ui';

import FiltersDropdown from './filters-dropdown';

import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as HeartIcon } from '../assets/images/heart-icon.svg';
import { ReactComponent as SavedIcon } from '../assets/images/saved-icon.svg';
import { ReactComponent as SearchIcon } from '../assets/images/search-icon.svg';
import { ReactComponent as FilterIcon } from '../assets/images/filter-icon.svg';

const Header = () => {
   const [headerState, setHeaderState] = useState({
      showFilters: false,
      searchQuery: '',
   });

   const { showFilters, searchQuery } = headerState;

   const navigate = useNavigate();
   const redirectSearch = () =>
      navigate(`/search/${searchQuery}`, { replace: true });

   const handleSearchChange = (e) =>
      setHeaderState({ ...headerState, searchQuery: e.target.value });

   const handleShowFilters = () =>
      setHeaderState({ ...headerState, showFilters: !showFilters });

   const resetFilters = useResetRecoilState(filtersAtom);

   const searchMovie = (e) => {
      e.preventDefault();
      redirectSearch();
   };

   const { pathname } = useLocation();

   return (
      <Flex
         sx={{
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1432px',
            height: '68px',
            backgroundColor: 'core',
            margin: '0 auto',
            paddingBottom: 3,
         }}
      >
         <Link to="/" onClick={resetFilters}>
            <Logo />
         </Link>
         <Flex
            sx={{
               alignItems: 'center',
               justifyContent: 'space-between',
               width: '100%',
               maxWidth: '384px',
               height: '100%',
               '@media screen and (max-width: 960px)': {
                  position: 'absolute',
                  top: '64px',
                  left: '0px',
                  height: '44px',
               },
            }}
         >
            <Flex
               sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '91%',
                  maxWidth: '350px',
                  height: '100%',
                  backgroundColor: 'midnight',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  borderBottom:
                     pathname === '/search' ? '2px solid #EFC62E' : 'unset',
                  svg: {
                     marginRight: 0,
                     marginLeft: 1,
                     cursor: 'pointer',
                  },
               }}
            >
               <SearchIcon
                  onClick={(e) => searchMovie(e)}
                  fill={searchQuery ? '#EFC62E' : '#5E5F61'}
               />
               <Box
                  as="form"
                  onSubmit={(e) => searchMovie(e)}
                  sx={{
                     height: '40px',
                     width: '100%',
                  }}
               >
                  <Input
                     value={searchQuery}
                     placeholder="Wyszukaj"
                     onChange={handleSearchChange}
                     sx={{
                        width: '100%',
                        height: '40px',
                        fontSize: '1rem',
                        color: 'light',
                        padding: 'unset',
                        border: 'none',
                        '&:focus': {
                           outline: 'unset',
                        },
                     }}
                  />
               </Box>
            </Flex>
            <FilterIcon
               sx={{
                  cursor: 'pointer',
               }}
               onClick={handleShowFilters}
            />
         </Flex>
         <Flex
            sx={{
               justifyContent: 'space-between',
               width: '65px',
               svg: {
                  cursor: 'pointer',
               },
            }}
         >
            <Link to="/liked">
               <HeartIcon />
            </Link>
            <Link to="/my-list">
               <SavedIcon />
            </Link>
         </Flex>
         <FiltersDropdown
            showFilters={showFilters}
            handleShowFilters={handleShowFilters}
         />
      </Flex>
   );
};

export default Header;
