export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddres;
  phone: string;
  website: string;
  company: UserCompany;
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export type Users = User[];
