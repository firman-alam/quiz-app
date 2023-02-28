import { createSlice } from '@reduxjs/toolkit';

interface State {
  isStart: boolean;
  isOver: boolean;
  score: number;
}

const initialState: State = {
  isStart: false,
  isOver: false,
  score: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setGame } = gameSlice.actions;
export default gameSlice.reducer;
