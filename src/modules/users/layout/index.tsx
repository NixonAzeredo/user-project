import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../core/store.interface";
import { Title } from "../../../shared/components/Title";
import { UsersTable } from "../components/Table";
import { COLUMNS } from "../configs/tableConfig";
import { fetchUsers } from "../state/usersSlice";
import { User, Users } from "../state/usersSlice.interface";

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
      <Title title="Lista de Usuários">
        <div>
          <Link to="edition">
            <IconButton color="default" aria-label="edit">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton color="default" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </Title>
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
