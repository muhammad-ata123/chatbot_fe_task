import React from 'react';
import { Box, Typography } from '@mui/material';

interface TextResponse {
  responses: {
    text: string;
  };
}

interface TextDisplayProps {
  data: TextResponse; // Accept the entire response object
}

const TextDisplay: React.FC<TextDisplayProps> = ({ data }) => {
  return (
    <Box
      sx={{
        padding: '10px',
        backgroundColor: '#F4F9F8',
        borderRadius: '10px 20px 20px 20px',
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
      }}
    >
      <Typography variant={'body1'}>
        {data.responses.text} {/* Accessing text from responses */}
      </Typography>
    </Box>
  );
};

export default TextDisplay;
