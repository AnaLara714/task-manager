import { styled } from "@mui/system";
import { makeStyles } from '@material-ui/core';

export const MainDiv = styled('div')({
  // display: "flex",
  // flexDirection: "row",
  // flexWrap: "wrap",
  height: "80%"

});

export const useStyles = makeStyles({
  titleProject: {
    fontSize: 28,
    fontWeight: 700,
    flexBasis: 1,
    margin: 10,
  },
  buttonAddTask: {
    background: "#3a9903",
    border: "1px solid yelow",
    borderRadius: 5,
    padding: 8,
    color: "#FFFFFF"
  },
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
  },
   summaryTask: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap"
   },
   detailedTask: {
    marginLeft: "10%",
   }
});