import { Box, Typography } from "@mui/material";

const JokeEmptyState = () => {
  return (
    <Box textAlign="center" mt={6}>
      <Typography variant="h5">Жартів поки немає 😢</Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        Натисніть <strong>"Load more"</strong>, щоб отримати нові жарти.
      </Typography>
    </Box>
  );
};

export default JokeEmptyState;