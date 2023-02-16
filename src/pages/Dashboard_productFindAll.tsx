import { useContext, useEffect, useState } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { Div } from '../components/usersCard/styled';
import { ContextLogic } from '../context/Provider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../context/Context';
import { ButtonHome } from '../components/buttons/button';

export const Dashboard_clientFindAll = () => {
  const { IsToken, loading, isLoad, DeleteProduct, setIdProduct, IAdm } =
    useContext(ContextLogic);
  const { url, listProducts, setListProducts, navigate } = useContext(Context);
  IsToken();
  IAdm();
  setTimeout(() => loading(), 3000);

  useEffect(() => {
    const token = localStorage.getItem('@token');
    if (token) {
      axios
        .get(url + '/products', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setListProducts(response.data);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  }, [listProducts]);

  return (
    <>
      {isLoad ? (
        <SectionLoad>
          <LottieLoad />
        </SectionLoad>
      ) : (
        <SectionLoad>
          <Main>
            <Div>
              <ul
                style={{
                  overflowX: 'auto',
                  justifyContent: 'initial',
                  width: '90%',
                  height: '60%',
                }}
              >
                {listProducts?.map((product) => (
                  <li key={product._id}>
                    <div className="divImg">
                      <img src={product.img} alt="foto" />
                    </div>
                    <div className="divInfo">
                      <p>{product.name}</p>
                      <p>quantidade: {product.amount}</p>
                      <p>R$ {product.price},00</p>
                    </div>
                    <ButtonHome
                      style={{ margin: '0', height: '3vh', marginTop: '1rem' }}
                      onClick={() => {
                        setIdProduct(product._id);
                        navigate('/dashboard/product/update');
                      }}
                    >
                      Edit
                    </ButtonHome>
                    <ButtonHome
                      style={{
                        margin: '0',
                        height: '3vh',
                        marginTop: '0.5rem',
                      }}
                      onClick={() => DeleteProduct(product._id)}
                    >
                      Dell
                    </ButtonHome>
                  </li>
                ))}
              </ul>
            </Div>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
