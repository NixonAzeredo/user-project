import { Outlet, Route, Routes } from "react-router-dom";
import { UsersLayout } from "../../../users/layout";
export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<UsersLayout />} />
        <Route
          path="register"
          element={<h1 className="text-3xl font-bold underline">Cadastro</h1>}
        />
        <Route
          path="edition"
          element={<h1 className="text-3xl font-bold underline">Edição</h1>}
        />
      </Route>
    </Routes>
  );
}
