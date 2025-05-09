import { Stack } from "@mui/material";

import BaseButton from "../../ui/BaseButton";

type JokeActionsProps = {
  onAdd: () => void;
  onDelete: () => void;
  onRefresh: () => void;
};

const JokeActions = ({ onAdd, onDelete, onRefresh }: JokeActionsProps) => (
  <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
    <BaseButton onClick={onAdd}>Add</BaseButton>
    <BaseButton onClick={onDelete}>Delete</BaseButton>
    <BaseButton onClick={onRefresh}>Refresh</BaseButton>
  </Stack>
);

export default JokeActions;
