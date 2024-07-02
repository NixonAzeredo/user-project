import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="p-4">
      <ul className="flex">
        <li className="mr-4 text-lg font-medium hover:underline underline-offset-4">
          <Link to="/">Gerenciar</Link>
        </li>
        <li className="mr-4 text-lg font-medium hover:underline underline-offset-4">
          <Link to="register">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  );
}
