import { NoteData } from "@/config/types";

export const taskFilter = (projectID: number, task: NoteData[]) => {
  var date = new Date();
  var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

  switch(projectID) {
    case 0: 
      return [...task];
    case 1: 
      return task.filter(task => {
        const taskDate = new Date(task.startDate)
        const todayDate = dateString;
        if (String(taskDate) === todayDate) return task;
      })
  }
}