
import axios from "axios";
import { USERURL } from "../configs/url.config";

interface DeleteUserResponse {
  success: boolean;
  error?: string;
}

export async function deleteUserService(
  id: number
): Promise<DeleteUserResponse> {
  try {
    await axios.delete(USERURL.concat("/", id.toString()))
    return {
      success: true,
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
