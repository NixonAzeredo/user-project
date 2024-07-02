import { Nav } from "../components/Nav";
import { MainRoutes } from "../components/Routes";

export function HomeLayout() {
  return (
    <div className="container md:mx-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
}
