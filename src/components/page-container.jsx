/** @jsxImportSource theme-ui */
import React from 'react';

import { Flex } from 'theme-ui';

const PageContainer = ({ children }) => (
   <Flex
      sx={{
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'flex-start',
         width: '100%',
         height: '100%',
         paddingTop: 7,
      }}
   >
      {children}
   </Flex>
);

export default PageContainer;
