import { TextField, styled } from "@mui/material";

export const TaskField = styled(TextField)(({ theme }) => ({
  gridColumn: 1,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  resize: "none",
  textAlign: "left",
  fontFamily: "Lora",
  padding: 0,
}));

export const AddTaskField = styled(TextField)(({ theme }) => ({
  gridColumn: "1 / 3",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  resize: "none",
  textAlign: "left",
  fontFamily: "Lora",
  padding: 0,
}));
