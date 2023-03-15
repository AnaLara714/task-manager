import React from "react";
import { styled } from "@mui/system";
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  visibleON: {
    visibility: "visible",
  },
  visibleOFF: {
    visibility: "hidden",
    height: 0,
  },
  inputNameProject: {
    marginLeft: 10,
  },
  buttonAdd: {
    background: "#279727",
    border: "1px solid green",
    borderRadius: 5,
    padding: 5,
  },
  buttonCancel: {
    background: "#fd3434",
    border: "1px solid red",
    borderRadius: 5,
    padding: 5,
  }
});

