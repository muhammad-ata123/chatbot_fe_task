import React from 'react';
import { Box } from '@mui/material';

interface CenteredBoxProps {
  children: React.ReactNode;
}

const CenteredBox: React.FC<CenteredBoxProps> = ({ children }) => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: 'auto', 
        display: 'flex', 
        justifyContent: 'center', 
        overflow: 'hidden', 
      }}
    >
      {children}
    </Box>
  );
};

export default CenteredBox;
