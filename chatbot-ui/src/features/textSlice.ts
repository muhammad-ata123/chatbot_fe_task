import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the text data
interface TextMessageData {
  type: 'small' | 'big'; // Type of text message
  content: string; // Content of the text message
}

// Define the structure of a chat message for text
export interface Message {
  user: boolean; // Indicates if the message is from the user or bot
  type: 'text'; // Only for text messages in this slice
  text?: string; // Optional text for user message
  data?: TextMessageData; // Optional text data for bot responses
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [
    { user: false, type: 'text', data: { type: 'small', content: 'Welcome! How can I assist you today?' } }
  ]
};

const textSlice = createSlice({
  name: 'text',
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

export const { addMessage, resetChat } = textSlice.actions;
export default textSlice.reducer;
