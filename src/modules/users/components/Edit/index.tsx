import { Title } from "../../../../shared/components/Title";
import UserForm from "../Form";

export function Edit() {
  return (
    <>
      <Title title="Edição de Usuário" />
      <UserForm textBtnBack="Descartar" textBtnSend="Salvar" />
    </>
  );
}
