import { useCallback } from "react";

import { Box } from "@mui/material";

import { useAppDispatch } from "../../app/hooks";
import { Joke } from "../../types/joke";
import {
  addJoke,
  deleteJoke,
  replaceJoke,
} from "../../features/jokes/jokesSlice";
import { fetchRandomJoke } from "../../api/jokesClient";

import JokeCard from "../JokeCard/JokeCard";
import JokeActions from "../JokeActions/JokeActions";
import BaseButton from "../../ui/BaseButton";

type JokeListProps = {
  jokes: Joke[];
  onLoadMore: () => void;
  canLoadMore: boolean;
};

const JokeList = ({ jokes, onLoadMore, canLoadMore }: JokeListProps) => {
  const dispatch = useAppDispatch();

    const handleAdd = useCallback((joke: Joke) => {
    dispatch(addJoke(joke));
  }, [dispatch]);

  const handleDelete = useCallback((id: number) => {
    dispatch(deleteJoke(id));
  }, [dispatch]);

  const handleRefresh = useCallback((id: number, newJoke: Joke) => {
    dispatch(replaceJoke({ id, newJoke }));
  }, [dispatch]);

  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {jokes.map((joke) => (
          <Box
            key={joke.id}
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "30%",
              },
            }}
          >
            <JokeCard
              key={joke.id}
              id={joke.id}
              type={joke.type}
              setup={joke.setup}
              punchline={joke.punchline}
              actions={
                <JokeActions
                  onAdd={async () => {
                    const newJoke = await fetchRandomJoke();
                    handleAdd(newJoke);
                  }}
                  onDelete={() => handleDelete(joke.id)}
                  onRefresh={async () => {
                    const newJoke = await fetchRandomJoke();
                    handleRefresh(joke.id, newJoke);
                  }}
                />
              }
            />
          </Box>
        ))}
      </Box>

      {canLoadMore && (
        <Box display="flex" justifyContent="center" mt={4}>
          <BaseButton padding="8px 124px" onClick={onLoadMore}>
            Load more
          </BaseButton>
        </Box>
      )}
    </>
  );
};

export default JokeList;
