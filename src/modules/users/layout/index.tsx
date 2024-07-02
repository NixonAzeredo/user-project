import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { UsersTable } from "../components/Table";
import { COLUMNS, ROWS, Rows } from "../configs/tableConfig";
import { Title } from "../../../shared/components/Title";
import { Link } from "react-router-dom";

export function UsersLayout() {
  const [rows] = useState(ROWS);

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
        <UsersTable<Rows>
          columnsDefinition={COLUMNS}
          rowsData={rows}
          onSelected={handleSelected}
        />
      </div>
    </>
  );
}
