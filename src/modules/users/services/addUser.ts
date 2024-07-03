import axios from "axios";
import { USERURL } from "../configs/url.config";
import { AddUserFormat } from "./addUser.interface";
import { User } from "../state/usersSlice.interface";

interface AddUserResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export async function addUserService(
  newUser: AddUserFormat
): Promise<AddUserResponse> {
  try {
    const response = await axios.post(USERURL, newUser);
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
