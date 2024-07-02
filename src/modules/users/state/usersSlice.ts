import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Users } from "./usersSlice.interface";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState<{
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}>({
  status: "idle",
  error: null,
});

export const fetchUsers = createAsyncThunk<
  Users,
  void,
  { rejectValue: string }
>("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        usersAdapter.setAll(state, action.payload);
        state.status = "succeeded";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addUser, removeUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
