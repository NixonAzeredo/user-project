import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store.interface";
import { Title } from "../../../shared/components/Title";
import { UsersTable } from "../components/Table";
import { COLUMNS } from "../configs/table.config";
import { fetchUsers, removeUser } from "../state/usersSlice";
import { User, Users } from "../state/usersSlice.interface";
import { useNavigate } from "react-router-dom";
import { deleteUserService } from "../services/deleteUser";

export function UsersLayout() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.entities);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch, error, users]);

  const handleSelected = (selected: number[]) => {
    setSelected(selected);
  };

  const handleNavigateToEdit = () => {
    if (selected.length > 0) navigate(`/edition/${selected[0]}`);
  };

  const handleDeleteUser = () => {
    if (selected.length > 0) {
      deleteUserService(selected[0])
        .then(() => {
          dispatch(removeUser(selected[0]));
          setSelected([]);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <>
      <Title title="Lista de Usuários">
        <div>
          <IconButton
            onClick={handleNavigateToEdit}
            disabled={selected.length <= 0}
            color="default"
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={handleDeleteUser}
            disabled={selected.length <= 0}
            color="default"
            aria-label="delete"
          >
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
