import { styled, Button } from "@mui/material"

import { BaseButtonProps } from "../types/ui"

const BaseButton = styled(Button, {
  shouldForwardProp: (prop) =>
    !['bgColor', 'textColor', 'borderColor', 'fontWeight', 'padding'].includes(prop as string),
})<BaseButtonProps>(({ theme, bgColor, textColor, borderColor, fontWeight, padding }) => ({
  backgroundColor: bgColor || theme.palette.primary.main,
  color: textColor || theme.palette.common.white,
  border: borderColor ? `1px solid ${borderColor}` : 'none',
  fontWeight: fontWeight || 600,
  padding: padding || theme.spacing(1.5, 3),
  borderRadius: 12,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: bgColor
      ? theme.palette.augmentColor({ color: { main: bgColor } }).dark
      : theme.palette.primary.dark,
  },
}));

export default BaseButton