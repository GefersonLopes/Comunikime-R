export interface InterfaceContextLogic {
  loading: () => void;
  isLoad: boolean;
  loginGo: (value: IFormInputsLogin) => void;
  registerGo: (value: IFormInputsRegister) => void;
  remembe_me: () => void;
  IsToken: () => void;
  CreateProduct: (value: IFormInputsCreateProduct) => void;
  idProduct: string;
  setIdProduct: (value: string) => void;
  DeleteProduct: (value: string) => void;
  IAdm: () => void;
  UpdateProduct: (value: IFormInputsUpdateProduct) => void;
}

export interface IFormInputsRegister {
  username: string;
  password: string;
  isAdm: boolean;
}

export interface IFormInputsLogin {
  username: string;
  password: string;
}

export interface IFormInputsCreateProduct {
  name: string;
  img: string;
  price: number;
  amount: number;
}

export interface IFormInputsUpdateProduct {
  name?: string;
  img?: string;
  price?: number;
  amount?: number;
}
