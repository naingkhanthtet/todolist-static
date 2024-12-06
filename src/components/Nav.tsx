import React from "react";
import {
  NavText,
  GridBox,
  ThirdIcons,
  ContentWidth,
} from "./styles/BasicComponents";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useThemeContext } from "../utils/useThemeContext";

const Nav: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <ContentWidth
      sx={{
        marginTop: 5,
      }}
    >
      <GridBox>
        <NavText>Todo Tick</NavText>

        <ThirdIcons onClick={toggleTheme}>
          {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </ThirdIcons>
      </GridBox>
    </ContentWidth>
  );
};

export default Nav;
