import React from 'react';
import { Box, Typography } from '@mui/material';
import { CopyBlock, github } from 'react-code-blocks';

interface CodeDisplayProps {
  data: {
    language: string;
    code: string;
    description: string;
  };
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ data }) => {
  
  return (
    <Box
      sx={{
        backgroundColor: '#F4F9F8',
        color: 'black',
        borderRadius: '10px 20px 20px 20px',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        width: '100%',
        height: 'auto',
        alignSelf: 'flex-start',
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: '5px', fontWeight: 'bold' }}>
        {data.language}
      </Typography>
      <CopyBlock
        text={data.code}
        language={data.language}
        showLineNumbers={true}
        theme={github}
        codeBlock
      />
      <Typography sx={{ marginTop: '10px' }}>
        {data.description}
      </Typography>
    </Box>
  );
};

export default CodeDisplay;
