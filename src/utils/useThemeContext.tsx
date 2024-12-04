import { useContext } from "react";
import { ThemeContextProps, ThemeContext } from "./ThemeContext";

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
