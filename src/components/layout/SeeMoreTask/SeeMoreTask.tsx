import { RootState } from "@/store";
import { ExpandLess, ExpandMore, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { UpdateTask } from "../UpdateTask/UpdateTask";
import { useStyles } from "./SeeMoreTask.style";

interface IDetailTask {
  description?: string;
	completed?: boolean;
	startDate: Date;
	dueDate?: Date;
	priority: "Baixa" | "Normal" | "Alta";
	state: "Novo" | "Em Andamento" | "Pronto";
}

export const SeeMoreTask: React.FC<IDetailTask> = ({description, startDate, priority, state, dueDate}) => {
  const theme = useTheme();
  const styles = useStyles();

  const [EditTask, setEditTask] = React.useState(false);
  const [seenMoreTask, setSeenMoreTask] = React.useState(false);

  const onSeenMoreTaskButtonClick = () => 
    setSeenMoreTask(true);

  const onSeenLessTaskButtonClick = () => 
    setSeenMoreTask(false);
  return ( 
    <>
      <Button>
        {seenMoreTask ? 
          <VisibilityOff  onClick={onSeenLessTaskButtonClick} htmlColor={theme.palette.text.primary}/> :  
          <Visibility onClick={onSeenMoreTaskButtonClick} htmlColor={theme.palette.text.primary}/> }
      </Button>
        {seenMoreTask ?  
        <>
          <div className={styles.detailedTask}>
            <Typography> Descrição: {description !== "" ? description 
            : "Essa tarefa não há descrição"}</Typography> 
            <Typography> Prioridade: {priority}</Typography> 
            <Typography> Status: {state}</Typography> 
            {String(startDate) === "" ? true : <Typography> Data de início {String(startDate)}</Typography>} 
            {String(dueDate) === "" ? true : <Typography> Data de término {String(dueDate)}</Typography>} 

            {/* <UpdateTask/>    */}
          </div>
        </>
        : undefined }
    </>
  )
}

    
      
 