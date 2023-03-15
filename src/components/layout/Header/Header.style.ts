import React from "react";
import { styled } from "@mui/system";

export const HeaderDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center", 
  color: "#FFFFFF",
  background: "#3A9903",
  padding: 10,
  "& .logo": { 
    marginRight: "3%",
  },
  "& .theme": {
    position: "relative",
  },
  "& .buttonMenu": {
    visibility: "hidden",
    "@media (max-width: 600px)": {
      visibility: "visible"
    },
  },
  "@media (max-width: 600px)": {
    justifyContent: "space-between",
  },
});