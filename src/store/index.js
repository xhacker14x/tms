import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/taskSlice";
import { sidebarReducer } from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    sidebar: sidebarReducer,
  },
});
