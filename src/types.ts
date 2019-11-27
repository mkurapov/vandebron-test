export interface FormInput {
  name: string;
  label: string;
  type: string; //this type could also be broken down further into html form elements
  register: object;
  options?: string[];
  placeholder?: string;
}

export interface InputComponent {
  name: string;
  ref: any;
}

export interface UserDTO {
  id?: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
  address: AddressDTO;
}

export interface AddressDTO {
  number: number;
  street: string;
  city: string;
  zipcode: string;
}
