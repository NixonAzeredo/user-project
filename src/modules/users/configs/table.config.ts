import { GridColDef } from "@mui/x-data-grid";
import { UserAddres, UserCompany } from "../state/usersSlice.interface";

export const COLUMNS: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70, type: "number" },
  {
    field: "name",
    headerName: "Nome",
    width: 130,
    valueGetter: (params) => params,
  },
  { field: "username", headerName: "Nome usuário", width: 130 },
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
  {
    field: "website",
    headerName: "WebSite",
    width: 160,
  },
  {
    field: "company",
    headerName: "Empresa",
    width: 160,
    valueGetter: (params: UserCompany) => {
      return params.name;
    },
  },
  {
    field: "address",
    headerName: "Endereço",
    width: 400,
    valueGetter: (params: UserAddres) => {
      return `${params.street}, ${params.suite}, ${params.city} - ${params.zipcode}`;
    },
  },
];
