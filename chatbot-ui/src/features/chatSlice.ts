import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  user: boolean;
  type: string | undefined;
  text?: string;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [{ user: false, type: 'text', text: 'Hello! How can I assist you today?' }]
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
