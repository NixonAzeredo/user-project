import { User, UserAddres, UserCompany } from "../state/usersSlice.interface";

export interface UserResponse extends User {
  id: number;
}

export interface AddUserFormat{
  name: string;
  username: string;
  email: string;
  address: UserAddres;
  phone: string;
  website: string;
  company: UserCompany;
}
