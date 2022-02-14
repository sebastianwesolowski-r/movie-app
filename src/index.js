import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { RecoilRoot } from 'recoil';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import { theme } from './styles/theme';

ReactDOM.render(
   <BrowserRouter>
      <ThemeProvider theme={theme}>
         <RecoilRoot>
            <App />
         </RecoilRoot>
      </ThemeProvider>
   </BrowserRouter>,
   document.getElementById('root')
);
