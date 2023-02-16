import { ButtonHome } from '../buttons/button';
import { Fieldset, Form } from '../formLogin/styled';
import { motion } from 'framer-motion';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormInputsRegister } from '../../interfaces/interfaces';
import { useContext } from 'react';
import { ContextLogic } from '../../context/Provider';
import { LottieError } from '../../animation/lottie/componentAnimate/LottieError';

export const FormRegister = () => {
  const schemaRegister = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
      isAdm: yup.bool().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsRegister>({
    resolver: yupResolver(schemaRegister),
  });
  const { registerGo } = useContext(ContextLogic);
  const onSubmit = (data: IFormInputsRegister) => registerGo(data);

  return (
    <motion.div
      initial={{ x: -700 }}
      animate={{
        x: 0,
        transition: { duration: 0.4 },
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <span>
          {errors.username || errors.password ? <LottieError /> : null}
        </span>
        <div>
          <h3>Sharenergy</h3>
          <p>Registrar</p>
        </div>
        <Fieldset>
          <label>
            <input
              className={errors.username && 'errorInput'}
              type="text"
              placeholder={
                errors.username ? errors.username?.message : 'Username'
              }
              {...register('username')}
            />
          </label>
          <label>
            <input
              className={errors.password && 'errorInput'}
              type="password"
              placeholder={
                errors.password ? errors.password?.message : 'Password'
              }
              {...register('password')}
            />
          </label>
          <label className="checkboxLabel">
            <p className="goLogin_Register">Sou administrador</p>
            <input
              className="checkbox"
              type="checkbox"
              {...register('isAdm')}
            />
          </label>
        </Fieldset>
        <ButtonHome>Registrar</ButtonHome>
        <p className="goLogin_Register">
          Possui uma conta? <a href="/login">Entrar na conta</a>
        </p>
      </Form>
    </motion.div>
  );
};
