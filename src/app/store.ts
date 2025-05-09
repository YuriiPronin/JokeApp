import { configureStore } from '@reduxjs/toolkit';

import jokesReducer from '../features/jokes/jokesSlice';

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.subscribe(() => {
  const state = store.getState();
  const jokesToSave = state.jokes.addedJokes;
  localStorage.setItem("jokes", JSON.stringify(jokesToSave));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
