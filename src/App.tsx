import './App.css';
import React                     from 'react';
import RouterConfig              from './router';
import { theme, GlobalStyles }   from './theme';
import { Global, ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <RouterConfig />
    </ThemeProvider>
  );
}
export default App;
