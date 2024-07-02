import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Props<R> {
  columnsDefinition: GridColDef[];
  rowsData: R[];
  onSelected: (selected: number[]) => void;
}

export function UsersTable<R>({
  rowsData,
  columnsDefinition,
  onSelected,
}: Readonly<Props<R>>) {
  const handleSelecteds = (selection: number[]) => {
    onSelected(selection);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rowsData}
        columns={columnsDefinition}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        onRowSelectionModelChange={(selection) => {
          handleSelecteds(selection as number[]);
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
