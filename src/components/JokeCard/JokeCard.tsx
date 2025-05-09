import { ReactNode } from "react";

import { Card, Typography, Box } from "@mui/material";

type JokeCardProps = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
  bgColor?: string;
  textColor?: string;
  actions?: ReactNode;
};

const JokeCard = ({
  id,
  type,
  setup,
  punchline,
  bgColor,
  textColor,
  actions,
}: JokeCardProps) => {
  return (
    <Card
      sx={{
        backgroundColor: bgColor || "background.paper",
        p: 2,
        borderRadius: 2,
        minHeight: 220,
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: 6,
        },
        "&:hover .actions": {
          opacity: 1,
          pointerEvents: "auto",
        },
      }}
    >
      <Typography variant="subtitle2" color={textColor || "text.secondary"}>
        #{id} • <strong>Type:</strong> {type}
      </Typography>

      <Box mt={2}>
        <Typography variant="caption" color={textColor || "text.secondary"}>
          <strong>Setup:</strong>
        </Typography>
        <Typography variant="h6" color={textColor || "text.primary"}>
          {setup}
        </Typography>

        <Typography
          variant="caption"
          color={textColor || "text.secondary"}
          sx={{ mt: 1 }}
        >
          <strong>Punchline:</strong>
        </Typography>
        <Typography variant="body2" color={textColor || "text.primary"}>
          {punchline}
        </Typography>
      </Box>

      {actions && (
        <Box
          className="actions"
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            right: 8,
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 0.2s ease",
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {actions}
        </Box>
      )}
    </Card>
  );
};

export default JokeCard;
