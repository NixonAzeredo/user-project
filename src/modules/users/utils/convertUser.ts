import { UserFormData } from "../components/Form/index.interface";
import { User } from "../state/usersSlice.interface";

export function convertFormToUser(user: UserFormData, id:number): User {
  return {
    id: id,
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
      bs: user.bs,
      catchPhrase: user.catchPhrase,
      name: user.companyName,
    },
  };
}

export function convertUserToForm(user: User): UserFormData {
  return {
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
    username: user.username,
    city: user.address.city,
    street: user.address.street,
    suite: user.address.suite,
    zipcode: user.address.zipcode,
    bs: user.company.bs,
    catchPhrase: user.company.catchPhrase,
    companyName: user.company.name,
  };
}