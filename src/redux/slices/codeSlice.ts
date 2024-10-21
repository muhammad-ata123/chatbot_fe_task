import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure for CodeDisplay data
interface CodeDisplayData {
  language: string; // Programming language of the code
  code: string; // The actual code as a string
  description: string; // Description of what the code does
}

interface CodeState {
  codeData: CodeDisplayData[]; // Array of code messages
}

const initialState: CodeState = {
  codeData: []
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    addCodeMessage: (state, action: PayloadAction<CodeDisplayData>) => {
      state.codeData.push(action.payload);
    },
    resetCode: (state) => {
      state.codeData = [];
    }
  }
});

export const { addCodeMessage, resetCode } = codeSlice.actions;
export default codeSlice.reducer;
