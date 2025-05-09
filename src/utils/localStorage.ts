import { Joke } from "../types/joke";

const STORAGE_KEY = 'savedJokes';

export const loadSavedJokes = (): Joke[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Failed to load jokes from localStorage:', err);
    return [];
  }
};

export const saveJokes = (jokes: Joke[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jokes));
  } catch (err) {
    console.error('Failed to save jokes to localStorage:', err);
  }
};
