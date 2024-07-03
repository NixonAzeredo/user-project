import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../../core/store.interface";
import { Title } from "../../../../shared/components/Title";
import { selectUserById } from "../../state/usersSlice.selector";
import UserForm from "../Form";
import { useEffect, useState } from "react";
import { UserResponse } from "../../services/addUser.interface";
import { UserFormData } from "../Form/index.interface";

export function Edit() {
  const [user, setUser] = useState<UserResponse | null>(null);
  const { userId } = useParams();

  const selectedUser = useSelector((state: RootState) => {
    if (!userId) return null;
    const id = Number(userId);
    return selectUserById(state, id);
  });

  useEffect(() => {
    if (selectedUser) {
      setUser({
        id: selectedUser.id,
        name: selectedUser.name,
        email: selectedUser.email,
        phone: selectedUser.phone,
        website: selectedUser.website,
        username: selectedUser.username,
        city: selectedUser.address.city,
        street: selectedUser.address.street,
        suite: selectedUser.address.suite,
        zipcode: selectedUser.address.zipcode,
        bs: selectedUser.company.bs,
        catchPhrase: selectedUser.company.catchPhrase,
        companyName: selectedUser.company.name,
      });
    }
  }, [selectedUser]);

  const handleSendUpdate = (data: UserFormData) => {
    //parei aqui
    console.log(data);
  };

  return (
    <>
      <Title title="Edição de Usuário" />
      <UserForm
        user={user}
        textBtnBack="Descartar"
        textBtnSend="Salvar"
        submit={handleSendUpdate}
      />
    </>
  );
}
