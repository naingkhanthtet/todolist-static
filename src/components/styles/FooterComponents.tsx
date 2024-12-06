import { Box, Link } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContents = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: 100,
  borderTop: `1px solid ${theme.palette.text.primary}`,
  paddingTop: 10,
}));

export const FooterLinks = styled(Box)({
  display: "flex",
  gap: 20,
});

export const FooterLinkIcons = styled(Link)(({ theme }) => ({
  display: "flex",
  placeItems: "center",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));
