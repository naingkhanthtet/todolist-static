import { Box, TextField, styled } from "@mui/material";

export const TaskTitle = styled(Box)({
  gridColumn: 1,

  paddingTop: 10,
  paddingBottom: 10,
});

export const TaskField = styled(TextField)(({ theme }) => ({
  gridColumn: 1,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  resize: "none",
  paddingTop: 10,
  paddingBottom: 10,
}));

export const AddTaskField = styled(TextField)(({ theme }) => ({
  gridColumn: "1 / 3",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  resize: "none",
  padding: 0,
}));
