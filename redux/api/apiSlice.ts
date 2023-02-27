import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type QuestionType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com' }),
  endpoints: (builder) => ({
    getQuizQuestions: builder.query({
      query: (data) =>
        `/api.php?amount=11&category=${data.category}&difficulty=${data.difficulty}&type=${data.type}`,
      transformResponse: (response: { results: QuestionType[] }, meta, arg) =>
        response.results,
    }),
  }),
});

export const { useGetQuizQuestionsQuery } = apiSlice;
