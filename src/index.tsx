// index.ts
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme/theme'; 
import store from './redux/store/Store';
import App from './App';

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Provider store={store}>
        <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
