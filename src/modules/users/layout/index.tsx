import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { UsersTable } from "../components/Table";
import { COLUMNS } from "../configs/tableConfig";
import { User, Users } from "../state/usersSlice.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../core/store.interface";
import { fetchUsers } from "../state/usersSlice";
import { useEffect } from "react";

export function UsersLayout() {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.entities);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
    console.log(Object.values(users));
  }, [status, dispatch, error, users]);

  const handleSelected = (selected: number[]) => {
    console.log(selected);
  };

  return (
    <>
      <div className="flex justify-between p-4">
        <h1 className="text-3xl font-bold">Usuários</h1>
        <div>
          <IconButton color="default" aria-label="delete">
            <AddCircleIcon />
          </IconButton>
          <IconButton color="default" aria-label="delete">
            <EditIcon />
          </IconButton>
          <IconButton color="default" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className="p-4">
        <UsersTable<User>
          columnsDefinition={COLUMNS}
          rowsData={Object.values(users) as Users}
          onSelected={handleSelected}
        />
      </div>
    </>
  );
}
