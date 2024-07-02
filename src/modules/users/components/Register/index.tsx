import { Title } from "../../../../shared/components/Title";
import UserForm from "../Form";

export function Register() {
  return (
    <>
      <Title title="Cadastro de Usuários" />
      <UserForm textBtnBack="Cancelar" textBtnSend="Enviar" />
    </>
  );
}
