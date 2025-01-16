import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    filter: "all", 
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload , status: "Pending"});
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.task = updatedTask;
      }
    },
    toggleStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === "Pending" ? "Completed" : "Pending";
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

  export const selectFilteredTasks = (state) => {
    const { tasks, filter } = state.tasks;
    if (filter === "completed")
      return tasks.filter((task) => task.status === "Completed");
    if (filter === "pending")
      return tasks.filter((task) => task.status === "Pending");
    return tasks; 
  };


export const { addTask, deleteTask, editTask, toggleStatus, setFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
