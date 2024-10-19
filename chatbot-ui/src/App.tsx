import React, { useEffect, useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHooks';
import { addMessage } from './features/chatSlice';
import MessageBubble from './components/MessageBubble';
import Graph from './components/Graph';
import TableDisplay from './components/TableDisplay';
import CodeDisplay from './components/CodeDisplay';
import TextDisplay from './components/TextDisplay';
import { JsonCode, JsonTable, JsonGraph, JsonTextResponses } from "./json";
import { Message } from './features/chatSlice';
import CenteredBox from './components/CenteredBox'; 

const App: React.FC = () => {
  const [chatInput, setChatInput] = useState<string>('');
  const [resizeTrigger, setResizeTrigger] = useState(0);
  const messages = useAppSelector((state) => state.chat.messages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      setResizeTrigger(prev => prev + 1);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSend = () => {
    if (chatInput.trim() !== '') {
      const currentInput = chatInput.trim();
      const userMessage: Message = {
        user: true,
        type: 'text',
        text: currentInput,
        timestamp: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }),
      };
      dispatch(addMessage(userMessage));
      setChatInput('');

      setTimeout(() => {
        let botResponse: any;

        // just for static rendering 
        const graphIndexMatch = currentInput.match(/(?:graph|graph\s+)(\d+)/i);
        if (graphIndexMatch && graphIndexMatch[1]) {
          const index = parseInt(graphIndexMatch[1], 10) - 1;
          if (JsonGraph[index]) {
            const data = JsonGraph[index];
            botResponse = { user: false, type: 'graph', data };
          } else {
            botResponse = { user: false, type: 'text', text: 'Graph not found!' };
          }
        } else if (currentInput.match(/(?:table|table\s+)(\d+)/i)) {
          const tableIndexMatch = currentInput.match(/(?:table|table\s+)(\d+)/i);
          if (tableIndexMatch && tableIndexMatch[1]) {
            const index = parseInt(tableIndexMatch[1], 10) - 1;
            if (JsonTable[index]) {
              const data = JsonTable[index];
              botResponse = { user: false, type: 'table', data };
            } else {
              botResponse = { user: false, type: 'text', text: 'Table not found!' };
            }
          }
        } else if (currentInput.toLowerCase() === 'text') {
          const jsonResponse = JsonTextResponses[0];
          botResponse = { user: false, type: 'text', text: jsonResponse.responses.text };
        } else if (currentInput.match(/(?:code|code\s+)(\d+)/i)) {
          const codeIndexMatch = currentInput.match(/(?:code|code\s+)(\d+)/i);
          if (codeIndexMatch && codeIndexMatch[1]) {
            const index = parseInt(codeIndexMatch[1], 10) - 1;
            if (JsonCode[index]) {
              const data = JsonCode[index];
              botResponse = { user: false, type: 'code', data };
            } else {
              botResponse = { user: false, type: 'text', text: 'Code not found!' };
            }
          }
        } else {
          botResponse = { user: false, type: 'text', text: 'Sorry, I didn\'t understand that. \n How I can assist you today' };
        }

        botResponse.timestamp = new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });

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
        <Box flexGrow={1} overflow="auto" p={2}>
          {messages.map((msg, index) => {
            if (!msg) return null;

            return (
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
                  {msg.type === 'graph' && msg.data &&
                    <CenteredBox>
                      <Graph data={msg.data} key={resizeTrigger} />
                    </CenteredBox>
                  }
                  {msg.type === 'table' && msg.data &&
                    <CenteredBox>
                      <TableDisplay data={msg.data} key={resizeTrigger} />
                    </CenteredBox>
                  }
                  {msg.type === 'code' && msg.data &&
                    <CenteredBox>
                      <CodeDisplay data={msg.data} key={resizeTrigger} />
                    </CenteredBox>
                  }
                  {msg.type === 'text' && msg.data && <TextDisplay data={msg.data} />}

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
                    {msg.timestamp}
                  </Typography>
                </Box>
              </Box>
            );
          })}
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
