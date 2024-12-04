import { useState, useEffect, ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { getCookie, setCookie } from "./useCookies";

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    getCookie("theme") === "dark"
  );

  // Toggle theme between dark and light
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setCookie("theme", newTheme);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Lora, sans-serif",
      fontSize: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "0",
          },
        },
      },
    },
    palette: {
      mode: isDarkMode ? "dark" : "light",
      ...(isDarkMode
        ? {}
        : {
            primary: {
              main: "#000000",
            },
            text: {
              primary: "#000000",
            },
            background: {
              default: "#eee2cb",
              paper: "#eee2cb",
            },
          }),
    },
  });

  useEffect(() => {
    setCookie("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
