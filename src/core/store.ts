import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../modules/users/state/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
