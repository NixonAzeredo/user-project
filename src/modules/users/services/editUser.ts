import axios from "axios";
import { UserFormData } from "../components/Form/index.interface";
import { USERURL } from "../configs/url.config";
import { UserResponse } from "./addUser.interface";

interface AddUserResponse {
  success: boolean;
  user?: UserResponse;
  error?: string;
}

export async function editUserService(
  userToEdit: UserFormData
): Promise<AddUserResponse> {
  try {
    const response = await axios.put(USERURL, userToEdit);
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
