import "./App.css";
import { Button } from "@mui/material";
import { useThemeContext } from "./utils/useThemeContext";

function App() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return <Button onClick={toggleTheme}>{isDarkMode ? "Dark" : "Light"}</Button>;
}

export default App;
