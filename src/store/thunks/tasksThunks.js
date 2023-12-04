import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all tasks
export const fetchTask = createAsyncThunk("task/fetch", async () => {
  const response = await axios.get("/api/get");
  return response.data.tasks;
});

// add new task
export const addTask = createAsyncThunk("task/add", async (task) => {
  const response = await axios.post("/api/create", {
    taskName: task.taskName,
    description: task.description,
    status: task.status,
    priority: task.priority,
  });
  return response.data.tasks;
});

// delete task
export const deleteTask = createAsyncThunk("task/delete", async (id) => {
  await axios.delete(`/api/delete/${id}`);
  return id;
});

// update task
export const updateTask = createAsyncThunk("task/update", async (task) => {
  const response = await axios.put(`/api/update/${task.id}`, task);
  return response.data.tasks;
});
