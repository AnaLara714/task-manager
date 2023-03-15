import { RootState } from "@/store";
import { addTask, updateProject } from "@/store/projectSlicer";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./AddTask.style";

export const AddTask: React.FC = () => {
  var date = new Date();
  var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

  const styles = useStyles();
  const [NewTask, setNewTask] = React.useState(false);
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
    setNewTask(true);
    setNameTask("");
    setDescriptionTask("");
    setStartDateTask(dateString);
    setDueDateTask("");
    setPriorityTask("");
    setStatusTask("");
  };
  const onAddNewNameTaskInputChange = (e:any) => 
    setNameTask(e.target.value); 
  
  const onAddDescriptionTaskInputChange = (e:any) => 
    setDescriptionTask(e.target.value);
  
  const onStartDateTaskInputChange = (e:any) => 
    setStartDateTask(e.target.value);
  
  const onDueDateTaskInputChange = (e:any) => 
    setDueDateTask(e.target.value);
  
  const onSalveProjectButtonClick  = () => {
    if (NameTask === "" ) return;
    const newTask = {
      title: NameTask, 
      description: DescriptionTask, 
      completed: false, 
      startDate: startDateTask,
      dueDate: dueDateTask,
      priority: priorityTask,
      state: statusTask
    };
    dispacth(addTask({projectID: SeenProject?.id, task: newTask}));
    setPriorityTask("");
    setStatusTask("");
    setNameTask("");
    setStartDateTask("")
    setNewTask(false);
  };

  const onCancelTaskButtonClick = () => 
    setNewTask(false);

  return (
    <div>
      <Button 
        onClick={onCreateTaskButtonClick} 
        className={NewTask ? styles.visibleOFF : styles.visibleON}
      > 
        <Typography className={styles.buttonAddTask}>Adicionar tarefas</Typography>
      </Button>
      <div className={NewTask ? `${styles.visibleON}  ${styles.divInputsTask}` : styles.visibleOFF}>
        <Typography>Criar Tarefa</Typography>
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
            onChange={onDueDateTaskInputChange}/>
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
      <div className={NewTask ? `${styles.visibleON} ${styles.salveTask} ${styles.divInputsTask}` : styles.visibleOFF}>
        <Button 
          onClick={onSalveProjectButtonClick} 
          className={NewTask ? styles.visibleON : styles.visibleOFF}
        >
          <Typography className={styles.buttonAdd}>V</Typography>
        </Button>
        <Button 
          onClick={onCancelTaskButtonClick} 
          className={NewTask ? styles.visibleON : styles.visibleOFF}
        >
          <Typography className={styles.buttonCancel}>X</Typography>
        </Button>
      </div>
    </div>
  )
}