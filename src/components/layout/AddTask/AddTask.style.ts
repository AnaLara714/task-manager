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
    color: "#FFFFFF",
    borderRadius: 5,
    padding: 5,
    fontSize: 12
  },
  buttonCancel: {
    background: "#fd3434",
    border: "1px solid red",
    color: "#FFFFFF",
    borderRadius: 5,
    padding: 5,
  },
  buttonAddTask: {
    background: "#3a9903",
    border: "1px solid yelow",
    borderRadius: 5,
    padding: 8,
    color: "#FFFFFF"
  },
  divInputsTask: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: "80%",
    marginLeft: "10%"
  },
  salveTask: {
    marginLeft: "10%",
    display: "flex", 
    flexDirection: "row"
  },
  inputsDate: {
    display: "flex", 
    flexDirection: "row",
    gap: 5,
  },
  inputSelect: {
    width: 180,
  }
});