import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/redux/api/apiSlice';
import quizReducer from '@/redux/quizSlice';
import gameReducer from '@/redux/gameSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    game: gameReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
