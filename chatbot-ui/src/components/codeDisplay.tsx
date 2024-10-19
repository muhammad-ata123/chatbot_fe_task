import React from 'react';
import { Box } from '@mui/material';
import { CopyBlock, atomOneDark } from 'react-code-blocks';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // Importing the copy icon

const sampleCode = `
function helloWorld() {
  console.log('Hello, World!');
}
`;

const CodeDisplay: React.FC = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText(sampleCode)
            .then(() => {
                console.log('Code copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <Box
            sx={{
                backgroundColor: '#F4F9F8',
                color: 'black',
                borderRadius: '10px 20px 20px 20px',
                boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
                padding: '10px',
                maxWidth: '100%',
                alignSelf: 'flex-start',
            }}
        >
           
            <CopyBlock
                text={sampleCode}
                language="javascript"
                showLineNumbers={true}
                theme={atomOneDark}
                codeBlock
            />
             {/* <Box
                onClick={handleCopy}  // Apply the copy functionality on click
                sx={{
                    cursor: 'pointer',  // Change cursor to indicate it's clickable
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <ContentCopyIcon 
                    sx={{ fontSize: '20px', color: '#4caf50' }}  // Style the icon as needed
                />
            </Box> */}
        </Box>
    );
};

export default CodeDisplay;
