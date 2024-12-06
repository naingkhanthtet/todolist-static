import { Typography, Box, styled } from "@mui/material";

export const ContentWidth = styled(Box)({
  display: "flex",
  padding: "20px",
  margin: "auto",
  maxWidth: "600px",
});

export const GridBox = styled(Box)({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto 50px 50px",
});

export const NavText = styled(Typography)({
  fontSize: "2rem",
  gridColumn: 1,
});

export const SecondIcons = styled(Box)({
  gridColumn: 2,
  fontSize: "1.5rem",
  display: "flex",
  placeContent: "center",
  placeItems: "center",
  cursor: "pointer",
});

export const ThirdIcons = styled(Box)({
  gridColumn: 3,
  fontSize: "1.5rem",
  display: "flex",
  placeContent: "center",
  placeItems: "center",
  cursor: "pointer",
});
