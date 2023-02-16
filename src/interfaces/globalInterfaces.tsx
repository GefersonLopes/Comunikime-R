import { ReactNode } from 'react';

export interface GlobalInterfaceContext {
  navigate: (value: string) => void;
  listProducts: IProduct[];
  Buy: (value: string) => void;
  setListProducts: (value: IProduct[]) => void;
  url: string;
}

export interface INode {
  children: ReactNode;
}

export interface IProduct {
  _id: string;
  name: string;
  img: string;
  amount: number;
  price: number;
}

interface Address {
  street: string;
  number: string;
}

export interface Client {
  _id?: string;
  name: string;
  email: string;
  tel: string;
  address: Address;
  cpf: string;
}
