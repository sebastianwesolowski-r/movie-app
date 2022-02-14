/** @jsxImportSource theme-ui */
import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Text, Button } from 'theme-ui';

import { ReactComponent as PlayIcon } from '../assets/images/play-icon.svg';

const EmptyList = () => (
   <Flex
      sx={{
         flexDirection: 'column',
         alignItems: 'center',
         width: '100%',
         maxWidth: '350px',
         marginTop: '184px',
         svg: {
            marginBottom: '20px',
         },
      }}
   >
      <PlayIcon />
      <Text
         sx={{
            fontSize: '1.2rem',
            fontWeight: 2,
            color: 'light',
            marginBottom: 1,
         }}
      >
         Brak ulubionych filmów
      </Text>
      <Text
         sx={{
            fontSize: '1rem',
            fontWeight: 0,
            color: 'mud',
            marginBottom: 7,
         }}
      >
         Twoja lista jest pusta
      </Text>
      <Link sx={{ width: '100%' }} to="/">
         <Button
            sx={{
               width: '100%',
               height: '44px',
               backgroundColor: 'bee',
               color: '#000',
               fontSize: '1rem',
               fontWeight: '500',
               borderRadius: '4px',
               padding: '0',
               cursor: 'pointer',
            }}
         >
            Lista filmów
         </Button>
      </Link>
   </Flex>
);

export default EmptyList;
