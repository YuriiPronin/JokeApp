import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Joke } from "../../types/joke";

type JokesState = {
  jokes: Joke[];
  addedJokes: Joke[];
};

const initialState: JokesState = {
  jokes: [],
  addedJokes: [],
};

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    loadFromStorage: (state, action: PayloadAction<Joke[]>) => {
      state.jokes = [...action.payload];
      state.addedJokes = [...action.payload];
    },
    addJoke: (state, action: PayloadAction<Joke>) => {
      state.jokes.push(action.payload);
      state.addedJokes.push(action.payload);
    },
    addFromApi: (state, action: PayloadAction<Joke>) => {
      state.jokes.push(action.payload);
    },
    deleteJoke: (state, action: PayloadAction<number>) => {
      state.jokes = state.jokes.filter((j) => j.id !== action.payload);
      state.addedJokes = state.addedJokes.filter(
        (j) => j.id !== action.payload
      );
    },
    replaceJoke: (
      state,
      action: PayloadAction<{ id: number; newJoke: Joke }>
    ) => {
      const { id, newJoke } = action.payload;
      const index = state.jokes.findIndex((j) => j.id === id);
      if (index !== -1) {
        state.jokes[index] = newJoke;
      }
    },
  },
});

export const { addJoke, deleteJoke, replaceJoke, loadFromStorage, addFromApi } =
  jokesSlice.actions;
export default jokesSlice.reducer;
