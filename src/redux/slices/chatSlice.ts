import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  user: boolean; // Indicates if the message is from the user or bot
  type: 'text' | 'graph' | 'table' | 'code'; // Include all types here
  text?: string; // Optional text for user message
  data?: any; // Optional text data for bot responses
  timestamp: string; // timestamp property
}

interface ChatState {
  messages: Message[]; 
}

const initialState: ChatState = {
  messages: [{ user: false, type: 'text', text: 'Hello! How can I assist you today?' , timestamp:new Date().toLocaleDateString(
    'en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
    }
  ) }]
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    resetChat: (state) => {
      state.messages = initialState.messages;
    }
  }
});

export const { addMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
