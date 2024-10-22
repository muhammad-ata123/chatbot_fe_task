import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#ffffff', 
      paper: '#ffff',
    },
    text: {
      primary: '#000000', 
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F4F9F8',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e', 
    },
    text: {
      primary: '#ffffff', 
      secondary: '#121212',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
});
