import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Quiz {
  category: string;
  difficulty: string;
  type: string;
}

const initialState: Quiz = {
  category: '',
  difficulty: '',
  type: '',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<Quiz>) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { setQuiz } = quizSlice.actions;
export default quizSlice.reducer;
