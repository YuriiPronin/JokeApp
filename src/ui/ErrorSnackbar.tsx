import { Alert, Snackbar } from "@mui/material";

type ErrorSnackbarProps = {
  message: string | null;
  onClose: () => void;
};

const ErrorSnackbar = ({ message, onClose }: ErrorSnackbarProps) => {
  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error" onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
