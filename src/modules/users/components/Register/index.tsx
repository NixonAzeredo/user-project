import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../core/store.interface";
import { Title } from "../../../../shared/components/Title";
import { addUserService } from "../../services/addUser";
import { addUser } from "../../state/usersSlice";
import UserForm from "../Form";
import { UserFormData } from "../Form/index.interface";
import { useNavigate } from "react-router-dom";

export function Register() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateUser = (data: UserFormData) => {
    console.log(data);
    addUserService(data).then(({ success, user }) => {
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
              city: user.city,
              street: user.street,
              suite: user.suite,
              zipcode: user.zipcode,
              geo: {
                lat: "",
                lng: "",
              },
            },
            company: {
              name: user.companyName,
              catchPhrase: user.catchPhrase,
              bs: user.bs,
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
        textBtnBack="Cancelar"
        textBtnSend="Enviar"
        submit={handleCreateUser}
      />
    </>
  );
}
