import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { ButtonHome } from '../components/buttons/button';
import { Center } from '../components/defaultCenter/Center';
import { Input, InputMedium } from '../components/inputs/styled';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { ContextLogic } from '../context/Provider';
import * as yup from 'yup';
import { IFormInputsUpdateProduct } from '../interfaces/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const Dashboard_clientUpdate = () => {
  const { IsToken, loading, isLoad, UpdateProduct, IAdm } =
    useContext(ContextLogic);
  IsToken();
  IAdm();
  setTimeout(() => loading(), 3000);

  const schema = yup.object({
    name: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
    img: yup
      .string()
      .nullable(true)
      .transform((_, val) => (val === '' ? undefined : val)),
    amount: yup.number().nullable(true),

    price: yup.number().nullable(true),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsUpdateProduct>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputsUpdateProduct) => {
    UpdateProduct(data);
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
                    type="number"
                    placeholder="Amount"
                    {...register('amount')}
                  />
                  <Input
                    type="number"
                    placeholder="Price"
                    {...register('price')}
                  />
                  <ButtonHome type="submit">Editar</ButtonHome>
                </div>
              </form>
            </Center>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
