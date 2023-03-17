import React from "react";
import { RootState } from "@/store";
import { updateProject } from "@/store/projectSlicer";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./RenomeProject.style";

export const RenomeProject: React.FC = () => {
  const styles = useStyles();
  const dispacth = useDispatch();
  const [NameProject, setNameProject] = React.useState("");
  const [UpdateNameProject, setUpdateNameProject] = React.useState(false);

  const SeenProject = useSelector((state: RootState) => {
    return state.project.projects.find(
      SeenProject => SeenProject.id === state.project.seeMoreProject,
    );
  });

  const onUpdateNameProjectButtonClick = () => {
    setUpdateNameProject(true);
    setNameProject("");
  };

  const onAddNewNameProjectInputChange = (e:any) => 
    setNameProject(e.target.value);

  const onSalveProjectButtonClick = () => {
    NameProject === "" ? alert("Adicione o nome do projeto") : dispacth(updateProject({id: SeenProject?.id, title: NameProject}));
    setUpdateNameProject(false);
  }
  
  const onCancelProjectButtonClick = () => 
    setUpdateNameProject(false);
  
  return (
    <div>
      <Button
        className={!UpdateNameProject && !SeenProject?.canBeDeleted ? styles.visibleOFF : styles.visibleON}
        onClick={onUpdateNameProjectButtonClick}
      >
        <Typography className={styles.buttonAdd}>Renomear</Typography>
      </Button>
      <TextField 
        value={NameProject}
        onChange={onAddNewNameProjectInputChange}  
        className={UpdateNameProject ? `${styles.visibleON}  ${styles.inputNameProject}` : styles.visibleOFF}
      />
      <Button 
        onClick={onSalveProjectButtonClick} 
        className={UpdateNameProject ? styles.visibleON : styles.visibleOFF}
      >
        <Typography className={styles.buttonAdd}>V</Typography>
      </Button>
      <Button 
        onClick={onCancelProjectButtonClick} 
        className={UpdateNameProject ? styles.visibleON : styles.visibleOFF}
      >
        <Typography className={styles.buttonCancel}>X</Typography>
      </Button>
    </div>
  )
}