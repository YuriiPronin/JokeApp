import { ButtonProps } from "@mui/material";

export interface BaseButtonProps extends ButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  fontWeight?: number | string;
  padding?: string;
}