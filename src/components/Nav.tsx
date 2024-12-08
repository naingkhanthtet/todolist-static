import React from "react";
import { NavText, GridBox, ThirdIcons } from "./styles/BasicComponents";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useThemeContext } from "../utils/useThemeContext";

const Nav: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <>
      <GridBox
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <NavText>Todo Tick</NavText>

        <ThirdIcons onClick={toggleTheme}>
          {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </ThirdIcons>
      </GridBox>
    </>
  );
};

export default Nav;
