export interface UserFormData {
  address: string;
  bs: string;
  catchPhrase: string;
  city: string;
  companyName: string;
  email: string;
  name: string;
  phone: string;
  street: string;
  suite: string;
  username: string;
  website: string;
  zipcode: string;
}

export interface UserFormProps {
  textBtnSend: string;
  textBtnBack: string;
  routeBack?: string;
  routeSend?: string;
  submit: (userData: UserFormData) => void;
}
