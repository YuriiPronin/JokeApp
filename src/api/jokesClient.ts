import { Joke } from "../types/joke";
import { fetchWithInterceptor } from "./fetchWithInterceptors";

export const fetchRandomJoke = (): Promise<Joke> =>
  fetchWithInterceptor<Joke>("https://official-joke-api.appspot.com/jokes/random");

export const fetchTenJokes = (): Promise<Joke[]> =>
  fetchWithInterceptor<Joke[]>("https://official-joke-api.appspot.com/jokes/ten");

