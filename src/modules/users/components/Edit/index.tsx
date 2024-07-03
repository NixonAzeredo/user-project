import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../../core/store.interface";
import { Title } from "../../../../shared/components/Title";
import { editUserService } from "../../services/editUser";
import { updateUser } from "../../state/usersSlice";
import { selectUserById } from "../../state/usersSlice.selector";
import { convertFormToUser, convertUserToForm } from "../../utils/convertUser";
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
      setUser(convertUserToForm(selectedUser));
    }
  }, [selectedUser]);

  const handleSendUpdate = (data: UserFormData) => {
    editUserService(convertFormToUser(data, Number(userId))).then(
      (response) => {
        if (response.success && response.user !== undefined) {
          dispatch(
            updateUser({
              id: Number(userId),
              changes: response.user,
            })
          );
          navigate("/");
        } else {
          alert("Erro ao atualizar usuário");
        }
      }
    );
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
