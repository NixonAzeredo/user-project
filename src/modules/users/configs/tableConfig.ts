import { GridColDef } from "@mui/x-data-grid";

export const COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, type: "number" },
  { field: "name", headerName: "Nome", width: 130 },
  { field: "userName", headerName: "Nome usuário", width: 130 },
  {
    field: "email",
    headerName: "E-mail",
    width: 160,
  },
  {
    field: "phone",
    headerName: "Celular",
    width: 130,
  },
];
