import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./Main.style";
import { RootState } from "@/store";
import { Button, TextField, Typography, useTheme } from "@mui/material";
import { removeTask, updateProject } from "@/store/projectSlicer";
import { RenomeProject } from "../RenomeProject/RenomeProject";
import { AddTask } from "../AddTask/AddTask";
import { Delete } from "@mui/icons-material";
import { SeeMoreTask } from "../SeeMoreTask/SeeMoreTask";


export const Main: React.FC = () => {
  var date = new Date();
  var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

  const theme = useTheme();
  const dispacth = useDispatch();
  const styles = useStyles();

  const SeenProject = useSelector((state: RootState) => {
    return state.project.projects.find(
      SeenProject => SeenProject.id === state.project.seeMoreProject,
      );
  });
  const SeeTask = useSelector((state: RootState) => {
    /*switch(state.project.projects) {
      case 0:
        const tasks = [...state.project.projects.map(project => console.log(project.tasks))]; 
        // console.log(project.tasks)
      case 1:
        return console.log("as tarefas de hoje")
      case 2: 
        return console.log("tarefas dessa semana")
      default: 
        return [console.log(state.project.projects.find(project => project.id === SeenProject.id)?.tasks)]
    }*/
  });
  const onRemoveTaskButtonClick = (id:number) => 
    dispacth(removeTask({projectID: SeenProject?.id, taskID: id}));

 return (
  <>
    <Typography className={styles.titleProject}>
      {SeenProject?.title}
    </Typography>
    <RenomeProject/>
    <Typography>
      Tarefas: 
    </Typography>
      {SeenProject?.tasks.map(task => 
      <>
      <div className={styles.summaryTask}>
        <div>
          <Button>
            <Typography key={task.id} color={theme.palette.text.primary} >  
              {task.title}
            </Typography>
          </Button>
        </div>
        <div>
          <Button>
            <Delete onClick={() => onRemoveTaskButtonClick(task.id)} htmlColor={theme.palette.text.primary}/>
          </Button>
        </div> 
        </div>
        <SeeMoreTask 
          description={task.description} 
          priority={task.priority}
          startDate={task.startDate}
          dueDate={task.dueDate}
          state={task.state}
        />
      </>)}
    <AddTask/>
  </>
 );
};
