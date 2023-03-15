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
  buttonEdit: {
    background: "#279727",
    color: "#FFFFFF",
    border: "1px solid green",
    borderRadius: 5,
    padding: 5,
    fontSize: 12,
    width: 86,
  },
  buttonAdd: {
    background: "#279727",
    border: "1px solid green",
    borderRadius: 5,
    padding: 5,
    fontSize: 12
  },
  buttonCancel: {
    background: "#fd3434",
    border: "1px solid red",
    borderRadius: 5,
    padding: 5,
  },

  divInputsTask: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: "80%",
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