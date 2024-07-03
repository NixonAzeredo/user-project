import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../core/store.interface";
import { Title } from "../../../../shared/components/Title";
import { addUserService } from "../../services/addUser";
import { AddUserFormat } from "../../services/addUser.interface";
import { addUser } from "../../state/usersSlice";
import UserForm from "../Form";
import { UserFormData } from "../Form/index.interface";

export function Register() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateUser = (data: UserFormData) => {
    const user: AddUserFormat = {
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
        name: data.companyName,
        catchPhrase: data.catchPhrase,
        bs: data.bs,
      },
    };

    addUserService(user).then(({ success, user }) => {
      if (success && user) {
        dispatch(
          addUser({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            username: user.username,
            address: {
              city: user.address.city,
              street: user.address.street,
              suite: user.address.suite,
              zipcode: user.address.zipcode,
              geo: {
                lat: "",
                lng: "",
              },
            },
            company: {
              name: user.company.name,
              catchPhrase: user.company.catchPhrase,
              bs: user.company.bs,
            },
          })
        );
      }
      navigate("/");
    });
  };

  return (
    <>
      <Title title="Cadastro de Usuários" />
      <UserForm
        user={null}
        textBtnBack="Cancelar"
        textBtnSend="Enviar"
        submit={handleCreateUser}
      />
    </>
  );
}
