import axios from "axios";
import { USERURL } from "../configs/url.config";
import { User } from "../state/usersSlice.interface";

interface EditUserResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export async function editUserService(
  userToEdit: User
): Promise<EditUserResponse> {
  try {
    const response = await axios.put(USERURL.concat("/", userToEdit.id.toString()), userToEdit);
    return {
      success: true,
      user: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    } else {
      return {
        success: false,
        error: "Erro inesperado",
      };
    }
  }
}
