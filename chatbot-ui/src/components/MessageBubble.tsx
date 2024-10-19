import React from 'react';
import { Box, Typography } from '@mui/material';

interface MessageBubbleProps {
  text: string | undefined;
  user: boolean;
}
const MessageBubble: React.FC<MessageBubbleProps> = ({ text, user }) => {
    return (
      <Box
        sx={{
          backgroundColor: user ? '#1751D0' : '#F4F9F8',
          color: user ? 'white' : 'black',
          boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: user?  '20px 20px 10px 20px' : '10px 20px 20px 20px',
          padding: '10px',
          maxWidth: '100%',
          alignSelf: user ? 'flex-end' : 'flex-start',
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Box>
    );
  };
  

export default MessageBubble;
