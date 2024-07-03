import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../../core/store.interface";
import { Title } from "../../../../shared/components/Title";
import { editUserService } from "../../services/editUser";
import { updateUser } from "../../state/usersSlice";
import { User } from "../../state/usersSlice.interface";
import { selectUserById } from "../../state/usersSlice.selector";
import UserForm from "../Form";
import { UserFormData } from "../Form/index.interface";

export function Edit() {
  const [user, setUser] = useState<UserFormData | null>(null);
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedUser = useSelector((state: RootState) => {
    if (!userId) return null;
    const id = Number(userId);
    return selectUserById(state, id);
  });

  useEffect(() => {
    if (selectedUser) {
      setUser({
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
    const user: User = {
      id: Number(userId),
      name: data.name,
      email: data.email,
      phone: data.phone,
      website: data.website,
      username: data.username,
      address: {
        city: data.city,
        street: data.street,
        suite: data.suite,
        zipcode: data.zipcode,
        geo: {
          lat: "",
          lng: "",
        },
      },
      company: {
        bs: data.bs,
        catchPhrase: data.catchPhrase,
        name: data.companyName,
      },
    };
    editUserService(user).then((response) => {
      if (response.success && response.user !== undefined) {
        dispatch(
          updateUser({
            id: Number(userId),
            changes: {
              id: response.user.id,
              name: response.user.name,
              email: response.user.email,
              phone: response.user.phone,
              website: response.user.website,
              username: response.user.username,
              address: {
                city: response.user.address.city,
                street: response.user.address.street,
                suite: response.user.address.suite,
                zipcode: response.user.address.zipcode,
                geo: {
                  lat: "",
                  lng: "",
                },
              },
              company: {
                bs: response.user.company.bs,
                catchPhrase: response.user.company.catchPhrase,
                name: response.user.company.name,
              },
            },
          })
        );
        navigate("/");
      } else {
        alert("Erro ao atualizar usuário");
      }
    });
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
