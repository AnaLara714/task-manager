import { styled } from "@mui/system";
import { makeStyles } from '@material-ui/core';

export const MainDiv = styled('div')({
  padding: 10,
  minHeight: "82.8vh"
});

export const FooterDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center", 
  fontFamily: "sans-serif",
  color: "#FFFFFF",
  background: "#3A9903",
  padding: 15,
});

export const useStyles = makeStyles({
  titleProject: {
    fontSize: 28,
    fontWeight: 700,
    margin: 10,
    width: "50%"
  },
  headerProject: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    gap: 15,
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
   },
});