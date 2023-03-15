import { RootState } from "@/store";
import { updateTask } from "@/store/projectSlicer";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./UpdateTask.styles";

export const UpdateTask: React.FC = () => {
  const styles = useStyles();
  const [EditTask, setEditTask] = React.useState(false);
  const [NameTask, setNameTask] = React.useState("");
  const [DescriptionTask, setDescriptionTask] = React.useState("");
  const [startDateTask, setStartDateTask] = React.useState("");
  const [dueDateTask, setDueDateTask] = React.useState("");
  const [priorityTask, setPriorityTask] = React.useState("");
  const [statusTask, setStatusTask] = React.useState("");

  const projects = useSelector((state: RootState) => state.project.projects);
  const dispacth = useDispatch();

  const SeenProject = useSelector((state: RootState) => {
    return state.project.projects.find(
      SeenProject => SeenProject.id === state.project.seeMoreProject,
    );
  });

  const onCreateTaskButtonClick = () => {
    setEditTask(true);
  };
  const onAddNewNameTaskInputChange = (e:any) => {
    setNameTask(e.target.value); 
  };
  const onAddDescriptionTaskInputChange = (e:any) => {
    setDescriptionTask(e.target.value);
  };
  const onStartDateTaskInputChange = (e:any) => {
    setStartDateTask(e.target.value);
    console.log(startDateTask);
  };
  const onSalveProjectButtonClick  = () => {
    if (NameTask === "" ) return;
    const newTask = {
      completed: false, 
      title: NameTask, 
      description: DescriptionTask, 
      startDate: startDateTask,
      dueDate: dueDateTask,
      priority: priorityTask,
      state: statusTask
    };
    dispacth(updateTask({projectID: SeenProject?.id, task: newTask}));
    setEditTask(false);
  };

  const onCancelTaskButtonClick = () => {
    setEditTask(false);
  };

  return (
    <div>
      <Button 
        onClick={onCreateTaskButtonClick} 
        className={EditTask ? styles.visibleOFF : styles.visibleON}
      > 
        <Typography className={styles.buttonEdit}>Editar</Typography>
      </Button>
      <div className={EditTask ? `${styles.visibleON}  ${styles.divInputsTask}` : styles.visibleOFF}>
        <Typography>Editar Tarefa</Typography>
        <TextField 
          value={NameTask}
          onChange={onAddNewNameTaskInputChange}  
          placeholder="Nome da tarefa"
        />
        <TextField 
          value={DescriptionTask}
          onChange={onAddDescriptionTaskInputChange}  
          placeholder="Descrição"
        />
        <div className={styles.inputsDate}>
          <TextField 
            type={"date"}
            helperText="Data de início"
            color="info"
            value={startDateTask}
            onChange={onStartDateTaskInputChange} />
          <TextField 
            type={"date"}
            helperText="Data de término"
            color="info"
            value={dueDateTask}
            onChange={onStartDateTaskInputChange}/>
        </div>
        <div className={styles.inputsDate}> 
          <FormControl className={styles.inputSelect}>
            <InputLabel>
              Prioridade
            </InputLabel>
              <Select onChange={(e) => {
                        const {
                            target: { value },
                        } = e;
                      setPriorityTask(value);
                    }} value={priorityTask}>
                <MenuItem value={"Baixa"} >Baixa</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Alta"}>Alta</MenuItem>
              </Select>
            </FormControl>
          <FormControl className={styles.inputSelect}>
            <InputLabel>
              Status
            </InputLabel>
              <Select onChange={(e) => {
                        const {
                            target: { value },
                        } = e;
                      setStatusTask(value);
                    }} value={statusTask}>
                <MenuItem value={"Novo"}>Novo</MenuItem>
                <MenuItem value={"Em andamento"}>Em andamento</MenuItem>
                <MenuItem value={"Pronto"}>Pronto</MenuItem>
              </Select>
            </FormControl>
        </div>
      </div>
      <div className={EditTask ? `${styles.visibleON} ${styles.salveTask} ${styles.divInputsTask}` : styles.visibleOFF}>
        <Button 
          onClick={onSalveProjectButtonClick} 
          className={EditTask ? styles.visibleON : styles.visibleOFF}
        >
          <Typography className={styles.buttonAdd}>V</Typography>
        </Button>
        <Button 
          onClick={onCancelTaskButtonClick} 
          className={EditTask ? styles.visibleON : styles.visibleOFF}
        >
          <Typography className={styles.buttonCancel}>X</Typography>
        </Button>
      </div>
    </div>
  )
}