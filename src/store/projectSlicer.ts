import { createSlice } from "@reduxjs/toolkit";
import { NoteData } from "@/config/types"; 
import { uniqueID } from "@/utils/generateld";

var date = new Date();
var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                  .toISOString()
                  .split("T")[0];

const initialState = {
  projects: [
    { id: 0, title: "Caixa de Entrada", tasks: [] as NoteData[], canBeDeleted: false },
    { id: 1, title: "Hoje", tasks: [] as NoteData[], canBeDeleted: false},
    { id: 2, title: "Essa semana", tasks: [] as NoteData[], canBeDeleted: false},
  ],
  nextId: 3,
  seeMoreProject: 0,
  // seeMoreTask: 0,
}
 
const projectSlicer = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, { payload }) => {
      const newProject = {
        id: state.nextId,
        title: payload,
        tasks: [],
        canBeDeleted: true
      };
      state.nextId += 1;
      state.projects.push(newProject);
    },
    removeProject: (state, {payload}) => {
      state.projects = state.projects.filter(project => project.id !== payload);
    },
    updateProject: (state, {payload}) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.id)
          project.title = payload.title;
        return project;
      });
    },
    addTask: (state, {payload}) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.projectID){
          const newTask: NoteData = {
            id: uniqueID(),
            ...payload.task,
          }
          project.tasks.push(newTask);
        }
        return project;
      });
    },
    removeTask: (state, {payload}) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.projectID) 
          project.tasks = project.tasks.filter(task => task.id !== payload.taskID);
        return project;
      })
    },
    updateTask: (state, {payload}) => {
      state.projects = state.projects.map(project => {
        if (project.id === payload.projectID) {
          project.tasks = project.tasks.map(task => {
            if (task.id === payload.taskID) {
              const newTask = {
                ...task,
                ...payload.task,
              }
              task = newTask
            }
            return task;
          })
        }
        return project;
      })
    },
    seenProject: (state, {payload}) => {
      state.seeMoreProject = payload;
    },
  },
});

export const {
  addProject,
  removeProject,
  updateProject,
  addTask,
  removeTask,
  updateTask,
  seenProject,
} = projectSlicer.actions;

export default projectSlicer.reducer;