import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GlobalInterfaceContext,
  INode,
  IProduct,
} from '../interfaces/globalInterfaces';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Context = createContext({} as GlobalInterfaceContext);

export const ContextProvider = ({ children }: INode) => {
  // const url = 'http://localhost:3003';
  const url = 'https://comunikeme.onrender.com'
  const navigate = useNavigate();
  const [listProducts, setListProducts] = useState<IProduct[]>([]);
  const [IalterValue, setIalterValue] = useState(false);
  const token = localStorage.getItem('@token');
  const config = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const Buy = (id: string): void => {
    axios
      .post(
        url + '/products/' + id,
        {},
        {
          headers: config,
        },
      )
      .then(() => {
        setIalterValue(!IalterValue);
        toast.success('Item comprado');
      })
      .catch((err) => {
        toast.error('Ops, algo deu errado!');
        console.log(err);
      });
  };

  return (
    <Context.Provider
      value={{
        navigate,
        listProducts,
        setListProducts,
        Buy,
        url,
      }}
    >
      {children}
    </Context.Provider>
  );
};
