import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { CopyBlock, github, atomOneDark } from 'react-code-blocks';

interface CodeDisplayProps {
  data: {
    language: string;
    code: string;
    description: string;
  };
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ data }) => {
  const theme = useTheme();
  const codeBlockTheme = theme.palette.mode === 'dark' ? atomOneDark : github;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `10px solid #F4F9F8`,
        color: theme.palette.text.primary, 
        borderRadius: '2px 20px 20px 20px',
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
        theme={codeBlockTheme}
        codeBlock
      />
      <Typography sx={{ marginTop: '10px' }}>
        {data.description}
      </Typography>
    </Box>
  );
};

export default CodeDisplay;
