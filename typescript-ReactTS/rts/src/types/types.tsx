export interface iAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: iAddress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
