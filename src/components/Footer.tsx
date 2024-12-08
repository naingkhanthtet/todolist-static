import React from "react";
import {
  FooterContents,
  FooterLinks,
  FooterLinkIcons,
} from "./styles/FooterComponents";
import { Typography } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FooterContents>
      <Typography>built by naingkhanthtet</Typography>
      <FooterLinks>
        <FooterLinkIcons href="https://github.com/naingkhanthtet/todolist-static">
          <FaGithub />
        </FooterLinkIcons>
        <FooterLinkIcons href="https://www.linkedin.com/in/naing-khant-htet-446311227/">
          <FaLinkedin />
        </FooterLinkIcons>
      </FooterLinks>
    </FooterContents>
  );
};

export default Footer;
