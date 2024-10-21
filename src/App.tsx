import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHooks';
import { addMessage, Message } from './redux/slices/chatSlice';
import MessageBubble from './components/MessageBubble';
import TableDisplay from './components/TableDisplay';
import TextDisplay from './components/TextDisplay';
import GraphDisplay from './components/GraphDisplay';
import CodeDisplay from './components/CodeDisplay';
import CenteredBox from './components/CenteredBox';
import jsonData from "./dummyData.json";
import { getBotResponse } from './utils/responseUtils';
import './App.css';

const App: React.FC = () => {
  const [chatInput, setChatInput] = useState<string>('');
  const [resizeTrigger, setResizeTrigger] = useState(0);
  const { JsonTable, JsonGraph, JsonCode, JsonTextResponses } = jsonData;
  const messages = useAppSelector((state) => state.chat.messages);
  const dispatch = useAppDispatch();

  // Use the imported data
  const tableData = JsonTable;
  const graphData = JsonGraph;
  const codeData = JsonCode;
  const textData = JsonTextResponses;

const handleSend = (event: any) => {
  if (chatInput.trim() !== '') {
    const currentInput = chatInput.trim();
    const userMessage: Message = {
      user: true,
      type: 'text',
      text: currentInput,
      timestamp: new Date().toLocaleString('en-US'),
    };
    dispatch(addMessage(userMessage));
    setChatInput('');

    setTimeout(() => {
      const botResponse = getBotResponse(currentInput, graphData, codeData, tableData, textData);
      botResponse.timestamp = new Date().toLocaleString('en-US');
      dispatch(addMessage(botResponse));
    }, 1000);
  }
};


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend(event);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleSend(event);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      height="90vh"
      maxWidth="900px"
      margin="auto"
      borderRadius="15px"
      overflow="hidden"
      bgcolor="background.default"
    >
      <Paper
        elevation={3}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
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
                      <GraphDisplay data={msg.data} key={resizeTrigger} />
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
              onKeyDown={handleKeyDown}
              fullWidth
              placeholder="Type a message..."
              variant="outlined"
            />
            <IconButton color="primary" onClick={handleClick}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default App;
