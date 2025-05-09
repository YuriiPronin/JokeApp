import { useState, useEffect, useRef } from "react";

import { CircularProgress, Box } from "@mui/material";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Joke } from "./types/joke";
import {
  addJoke,
  loadFromStorage,
  addFromApi,
} from "./features/jokes/jokesSlice";
import { fetchRandomJoke, fetchTenJokes } from "./api/jokesClient";

import JokeList from "./components/JokeList/JokeList";
import JokeEmptyState from "./components/JokeEmptyState/JokeEmptyState";
import ErrorSnackbar from "./ui/ErrorSnackbar";

function App() {
  const dispatch = useAppDispatch();
  const jokes = useAppSelector((state) => state.jokes.jokes);

  const didInit = useRef(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    const storedRaw = localStorage.getItem("jokes");
    const stored: Joke[] = storedRaw ? JSON.parse(storedRaw) : [];
    const saved = Array.isArray(stored) ? stored : [];

    dispatch(loadFromStorage(saved));

    const alreadyHave = saved.map((j) => j.id);
    const totalNeeded = 10 - saved.length;

    if (totalNeeded <= 0) {
      setIsReady(true);
      return;
    }

    const fetchJokes = async () => {
      try {
        const jokes = await fetchTenJokes();
        const unique = jokes.filter((j) => !alreadyHave.includes(j.id));

        unique.slice(0, totalNeeded).forEach((j) => dispatch(addFromApi(j)));

        const stillNeeded = totalNeeded - unique.length;

        if (stillNeeded > 0) {
          const joke = await fetchRandomJoke();

          if (
            !alreadyHave.includes(joke.id) &&
            !unique.some((j) => j.id === joke.id)
          ) {
            dispatch(addFromApi(joke));
          }
        }

        setIsReady(true);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setIsReady(true);
      }
    };

    fetchJokes();
  }, [dispatch]);

  const handleLoadMore = async () => {
    try {
      const newJokes = await fetchTenJokes();

      const uniqueJokes = newJokes.filter(
        (joke) => !jokes.some((existing) => existing.id === joke.id)
      );

      uniqueJokes.forEach((joke) => dispatch(addFromApi(joke)));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return isReady ? (
    <>
      {jokes.length === 0 && <JokeEmptyState />}
      <JokeList jokes={jokes} onLoadMore={handleLoadMore} canLoadMore={true} />
      <ErrorSnackbar message={error} onClose={() => setError(null)} />
    </>
  ) : (
    <Box display="flex" justifyContent="center" mt={4}>
      <CircularProgress />
    </Box>
  );
}

export default App;
