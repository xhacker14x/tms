import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
