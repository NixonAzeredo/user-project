import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../core/store.interface";

export const selectUserById = createSelector(
  (state: RootState) => state.users.entities,
  (state: RootState, userId: number) => {
    console.log(state);
    return userId;
  },
  (entities, userId) => entities[userId]
);
