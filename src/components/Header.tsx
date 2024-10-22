import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 20px' }}>
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            color: isDarkMode ? '#313131' : '#FFFFFF', 
          }}
        >
          Chatbot
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: isDarkMode ? '#313131' : '#FFFFFF', 

          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleTheme}
            aria-label="toggle theme"
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
