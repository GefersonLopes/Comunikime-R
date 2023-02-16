import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Client, INode } from '../interfaces/globalInterfaces';
import {
  IFormInputsCreateProduct,
  IFormInputsLogin,
  IFormInputsRegister,
  IFormInputsUpdateProduct,
  InterfaceContextLogic,
} from '../interfaces/interfaces';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

export const ContextLogic = createContext({} as InterfaceContextLogic);

export const ContextProviderLogic = ({ children }: INode) => {
  const url = 'http://localhost:3003';
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState(true);
  const [idProduct, setIdProduct] = useState('');

  const loading = () => {
    setIsLoad(false);
  };

  const remembe_me = () => {
    const token = localStorage.getItem('@token');
    if (token) {
      setIsLoad(true);
      navigate('/dashboard/user');
    } else {
      navigate('/login');
      toast.error('Você deve logar');
    }
  };
  const loginGo = (data: IFormInputsLogin) => {
    const { username, password } = data;
    axios
      .post(`${url}/users/login`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem('@token', response.data.token);

        toast.success('Login realizado com sucesso!');
        setIsLoad(true);
        navigate('/dashboard/products');
      })
      .catch(() => {
        toast.error('Seus dados estão incorretos!');
      });
  };

  const registerGo = (data: IFormInputsRegister) => {
    axios
      .post(`${url}/users/register`, data)
      .then(() => {
        toast.success('Usuario cadastrado!');
        setIsLoad(true);
        navigate('/login');
      })
      .catch(() => {
        toast.error('Já existe esse usuário!');
      });
  };

  const IsToken = () => {
    const token = localStorage.getItem('@token');
    if (!token) {
      toast.error('Não é permitido entrar sem login!');
      navigate('/login');
    }
  };

  const CreateProduct = (data: IFormInputsCreateProduct): void => {
    const token = localStorage.getItem('@token');
    axios
      .post(`${url}/products`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success('Produto criado');
        navigate('/dashboard/product/findAll');
      })
      .catch(() => {
        toast.error('Provavelmente seu token expirou');
      });
  };

  const DeleteProduct = (id: string): void => {
    const token = localStorage.getItem('@token');

    axios
      .delete(`${url}/products/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success('Cliente deletado');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const UpdateProduct = (data: IFormInputsUpdateProduct): void => {
    const token = localStorage.getItem('@token');

    axios
      .patch(`${url}/products/${idProduct}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success('Product atualizado');
        navigate('/dashboard/product/findAll');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        navigate('/dashboard/product/findAll');
      });
  };

  const IAdm = () => {
    const token = localStorage.getItem('@token') || '';
    const decodedToken: any = jwt_decode(token);
    if (!decodedToken.isAdm) {
      toast.error('Você precisa ser Adm pra acessar a rota');
      navigate('/dashboard/products');
    }
  };

  return (
    <ContextLogic.Provider
      value={{
        isLoad,
        loading,
        loginGo,
        registerGo,
        remembe_me,
        IsToken,
        CreateProduct,
        idProduct,
        setIdProduct,
        DeleteProduct,
        UpdateProduct,
        IAdm,
      }}
    >
      {children}
    </ContextLogic.Provider>
  );
};
