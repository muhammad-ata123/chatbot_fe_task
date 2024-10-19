import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure for TableDisplay data
interface TableDisplayData {
  type: string; // Type of table (you can specify further)
  columns: string[]; // Column headers
  rows: (string | number)[][]; // Rows of data
}

interface TableState {
  tableData: TableDisplayData[]; // Array of table messages
}

const initialState: TableState = {
  tableData: []
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addTableMessage: (state, action: PayloadAction<TableDisplayData>) => {
      state.tableData.push(action.payload);
    },
    resetTable: (state) => {
      state.tableData = [];
    }
  }
});

export const { addTableMessage, resetTable } = tableSlice.actions;
export default tableSlice.reducer;
