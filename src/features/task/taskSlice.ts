import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { READ_TASK, POST_TASK, TASK_STATE, USER, CATEGORY } from "../types";

export const initialState: TASK_STATE = {

  tasks: [{
    id: 0,
    task: "",
    description: "",
    criteria: "",
    status: "",
    status_name: "",
    category: 0,
    category_item: "",
    estimate: 0,
    responsible: 0,
    responsible_username: "",
    owner: 0,
    owner_username: "",
    created_at: "",
    updated_at: "",
  }],
  editedTask: {
    id: 0,
    task: "",
    description: "",
    criteria: "",
    status: "",
    category: 0,
    estimate: 0,
    responsible: 0,
  },
  selectedTask: {
    id: 0,
    task: "",
    description: "",
    criteria: "",
    status: "",
    status_name: "",
    category: 0,
    category_item: "",
    estimate: 0,
    responsible: 0,
    responsible_username: "",
    owner: 0,
    owner_username: "",
    created_at: "",
    updated_at: "",
  },
  users: [
    { id: 0, username: "" }
  ],
  category: [
    { id: 0, item: "" }
  ]
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    editTask(state, action: PayloadAction<POST_TASK>) {
      state.editedTask = action.payload;
    },
    selectTask(state, action: PayloadAction<READ_TASK>) {
      state.selectedTask = action.payload;
    }
  }
});

export const { editTask, selectTask } = taskSlice.actions;
export default taskSlice.reducer;