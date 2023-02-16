import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { ButtonHome } from '../components/buttons/button';
import { Center } from '../components/defaultCenter/Center';
import { Input, InputMedium } from '../components/inputs/styled';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { ContextLogic } from '../context/Provider';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IFormInputsCreateProduct } from '../interfaces/interfaces';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { Context } from '../context/Context';

export const Dashboard_clientCreate = () => {
  const { IsToken, loading, isLoad, CreateProduct, IAdm } =
    useContext(ContextLogic);

  IsToken();
  IAdm();
  setTimeout(() => loading(), 3000);

  const schemaLogin = yup
    .object({
      name: yup.string().required(),
      img: yup.string().required(),
      amount: yup.number().required(),
      price: yup.number().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsCreateProduct>({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit = (data: IFormInputsCreateProduct): void => {
    CreateProduct(data);
  };

  return (
    <>
      {isLoad ? (
        <SectionLoad>
          <LottieLoad />
        </SectionLoad>
      ) : (
        <SectionLoad>
          <Main>
            <Center>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Input type="text" placeholder="Name" {...register('name')} />
                  <Input type="text" placeholder="Img" {...register('img')} />
                  <Input
                    type="text"
                    placeholder="Amount"
                    {...register('amount')}
                  />
                  <Input
                    type="text"
                    placeholder="Price"
                    {...register('price')}
                  />
                  <ButtonHome type="submit">Criar</ButtonHome>
                </div>
              </form>
            </Center>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
