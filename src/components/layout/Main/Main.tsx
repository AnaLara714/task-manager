import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FooterDiv, MainDiv, useStyles } from "./Main.style";
import { RootState } from "@/store";
import { Button,Typography, useTheme } from "@mui/material";
import { removeTask } from "@/store/projectSlicer";
import { RenomeProject } from "../RenomeProject/RenomeProject";
import { AddTask } from "../AddTask/AddTask";
import { Delete } from "@mui/icons-material";
import { SeeMoreTask } from "../SeeMoreTask/SeeMoreTask";
import { NoteData } from "@/config/types";
import { getDate, getWeekendDate } from "@/utils/date";


export const Main: React.FC = () => {
  const theme = useTheme();
  const dispacth = useDispatch();
  const styles = useStyles();

  const SeenProject = useSelector((state: RootState) => {
    return state.project.projects.find(
      SeenProject => SeenProject.id === state.project.seeMoreProject,
    );
  });
  const SeeTask = useSelector((state: RootState) => {
    switch(state.project.seeMoreProject) {
      case 0:
        let tasks0 = [] as NoteData[];
        state.project.projects.forEach(project => {
          tasks0.push(...project.tasks);
        });
        return tasks0;
      case 1:
        let tasks1 = [] as NoteData[];
        state.project.projects.forEach(project => {
          project.tasks.forEach(task => {
            const taskDate = new Date(task.startDate).getTime();
            const todayDate = new Date(getDate()).getTime();
            if (taskDate === todayDate) tasks1.push(task);
          });
        });
        return tasks1;
      case 2: 
        let tasks2 = [] as NoteData[];
        state.project.projects.forEach(project => {
          project.tasks.forEach(task => {
            const taskDate = new Date(task.startDate).getTime();
            const todayDate = new Date(getDate()).getTime();
            const weekEndDate = new Date(getWeekendDate()).getTime();
            if (taskDate >= todayDate && taskDate <= weekEndDate)
              tasks2.push(task);
          });
        });
        return tasks2;
      default: 
        return (state.project.projects.find(project => project.id === SeenProject?.id)?.tasks || [])
    }
  });
  const onRemoveTaskButtonClick = (id:number) => 
    dispacth(removeTask({projectID: SeenProject?.id, taskID: id}));

 return (
  <>
  <MainDiv>
    <div className={styles.headerProject}>
      <Typography className={styles.titleProject}>{SeenProject?.title}</Typography>
      <RenomeProject/>
    </div>
    <Typography>Tarefas: </Typography>
    {SeeTask.map(task => 
      <>
        <div className={styles.summaryTask}>
          <div>
            <Button>
              <Typography key={task.id} color={theme.palette.text.primary}>{task.title}</Typography>
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
      </>
    )}
    {SeenProject && SeenProject?.id > 2 ? <AddTask/> : "" }
    </MainDiv>
    <FooterDiv>
      2023 - Todos os direitos reservados - Github: @AnaLara714 
    </FooterDiv> 
    </>
 );
};
