import { Outlet, Route, Routes } from "react-router-dom";
import { UsersLayout } from "../../../users/layout";
import { Register } from "../../../users/components/Register";
import { Edit } from "../../../users/components/Edit";
export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<UsersLayout />} />
        <Route path="register" element={<Register />} />
        <Route path="edition" element={<Edit />} />
      </Route>
    </Routes>
  );
}
