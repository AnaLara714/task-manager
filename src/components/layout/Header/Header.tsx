import React, { useState } from "react";
import { HeaderDiv } from "./Header.style";
import Logo from "@/assets/img/lista-de-controle.png";
import { IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAppThemeContext, useDrawerContext } from "@/contexts";
import { Dehaze } from "@mui/icons-material";


export const Header: React.FC = () => {
  const [labelThemeName, setLabelThemeName] = useState<'light' | 'dark'>('dark');

  const theme = useTheme();
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  const onModeButonClick = () => {
    toggleTheme();
    setLabelThemeName(labelThemeName === 'light' ? "dark" : "light");
  };

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeaderDiv>
      <IconButton color="primary" onClick={toggleDrawerOpen} disabled={!smDown} className="buttonMenu">
        <Dehaze/>
      </IconButton>
      <img src={Logo} className="logo" /> 
      <Typography>
        Organizzatore - Seu melhor gerenciador de tarefas
      </Typography>
      <IconButton color="primary" onClick={onModeButonClick} className="theme">
        <Typography>modo: {labelThemeName}</Typography>
      </IconButton>
    </HeaderDiv>
  )
};