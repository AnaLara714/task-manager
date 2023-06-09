import React from "react";
import { RootState } from "@/store";
import { ExpandLess, ExpandMore, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Typography, useTheme } from "@mui/material";
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
            {String(priority) === "" ? true : <Typography> Prioridade: {priority}</Typography>} 
            {String(state) === "" ? true : <Typography> Status: {state}</Typography>} 
            {String(startDate) === "" ? true : <Typography> Data de início {String(startDate)}</Typography>} 
            {String(dueDate) === "" ? true : <Typography> Data de término {String(dueDate)}</Typography>} 
            {/* <UpdateTask/>    */}
          </div>
        </>
        : undefined }
    </>
  )
}

    
      
 