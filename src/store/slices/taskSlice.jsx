import { createSlice } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  fetchTask,
  updateTask,
} from "../thunks/tasksThunks";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  searchFilter: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    onSearch: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch Data
    builder.addCase(fetchTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Add Data
    builder.addCase(addTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Delete Data
    builder.addCase(deleteTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((item) => item.id !== action.payload);
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Update Data
    builder.addCase(updateTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.isLoading = false;
      const updated = state.data.map((item) => {
        if (state.data.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.data = updated;
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { onSearch } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
