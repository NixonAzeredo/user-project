import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { UsersTable } from "../components/Table";
import { COLUMNS, ROWS, Rows } from "../configs/tableConfig";

export function UsersLayout() {
  const [rows] = useState(ROWS);

  const handleSelected = (selected: number[]) => {
    console.log(selected);
  };

  return (
    <>
      <div className="flex justify-between p-4">
        <h1 className="text-3xl font-bold">Usuários</h1>
        <div>
          <IconButton color="default" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton color="default" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
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
