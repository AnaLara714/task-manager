import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  detailedTask: {
    marginLeft: "5%",
    marginTop: "0%",
    display: "flex",
    flexDirection: "column",
  },
  informButton: {
    marginRight: 5,
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
  visibleON: {
    visibility: "visible",
  },
  visibleOFF: {
    visibility: "hidden",
    height: 0,
  },
})