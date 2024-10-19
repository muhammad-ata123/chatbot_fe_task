import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GraphMessageData {
  type: 'bar' | 'line' | 'pie'; // Type of graph
  labels: string[]; // Labels for the graph
  datasets: {
    label: string; // Label for the dataset
    data: (number | null | [number, number])[]; // Data points for the dataset
    backgroundColor: string[]; // Background colors for the bars/lines
    borderColor: string[]; // Border colors for the dataset
    borderWidth: number; // Border width
  }[]; // Array of datasets
}

interface GraphState {
  graphData: GraphMessageData[];
}

const initialState: GraphState = {
  graphData: []
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    addGraphMessage: (state, action: PayloadAction<GraphMessageData>) => {
      state.graphData.push(action.payload);
    },
    resetGraph: (state) => {
      state.graphData = [];
    }
  }
});

export const { addGraphMessage, resetGraph } = graphSlice.actions;
export default graphSlice.reducer;
