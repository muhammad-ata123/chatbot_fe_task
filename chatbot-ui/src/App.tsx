import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHooks';
import { addMessage } from './features/chatSlice';
import MessageBubble from './components/MessageBubble';
import Graph from './components/Graph';
import TableDisplay from './components/TableDisplay';
import CodeDisplay from './components/codeDisplay';

const App: React.FC = () => {
  const [chatInput, setChatInput] = useState<string>('');
  const messages = useAppSelector((state) => state.chat.messages);
  const dispatch = useAppDispatch();

  const handleSend = () => {
    if (chatInput.trim() !== '') {
      const currentInput = chatInput.trim();
      const userMessage = { user: true, type: 'text', text: currentInput };

      dispatch(addMessage(userMessage));
      setChatInput('');

      // Simulate bot response
      setTimeout(() => {
        let botResponse: any;
        if (currentInput.toLowerCase().includes('graph')) {
          botResponse = { user: false, type: 'graph' };
        } else if (currentInput.toLowerCase().includes('table')) {
          botResponse = { user: false, type: 'table' };
        } else if (currentInput.toLowerCase().includes('code')) {
          botResponse = { user: false, type: 'code' };
        } else {
          botResponse = { user: false, type: 'text', text: 'Hello! How can I assist you today?' };
        }

        dispatch(addMessage(botResponse));
      }, 1000);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      height="90vh"
      maxWidth="900px"
      margin="auto"
      padding="20px"
      bgcolor="background.default"
    >
      <Paper
        elevation={3}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '15px',
          overflow: 'hidden',
        }}
      >
        {/* Chat Messages */}
        <Box flexGrow={1} overflow="auto" p={2}>
          {messages.map((msg, index) => (
            <Box key={index} display="flex" justifyContent={msg.user ? 'flex-end' : 'flex-start'} mb={1}>
              {!msg.user && (
                <Stack>
                  <SmartToyIcon
                    style={{ marginRight: '8px', alignSelf: 'flex-start', marginTop: '8px' }}
                  />
                </Stack>
              )}
              <Box maxWidth="70%" display="flex" flexDirection="column">
                {msg.type === 'text' && <MessageBubble text={msg.text} user={msg.user} />}
                {msg.type === 'graph' && <Graph />}
                {msg.type === 'table' && <TableDisplay />}
                {msg.type === 'code' && <CodeDisplay />}

                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    fontStyle: 'italic',
                    marginTop: '4px',
                    marginLeft: '4px',
                    fontFamily: 'cursive',
                    fontSize: '10px',
                  }}
                >
                  {new Date().toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                  })}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Input Box */}
        <Box p={2} bgcolor="background.paper">
          <Box display="flex" alignItems="center">
            <TextField
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              fullWidth
              placeholder="Type a message..."
              variant="outlined"
            />
            <IconButton color="primary" onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default App;
