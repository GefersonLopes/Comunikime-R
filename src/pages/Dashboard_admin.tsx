import { useContext } from 'react';
import { LottieLoad } from '../animation/lottie/componentAnimate/LottieLoad';
import { ButtonHome } from '../components/buttons/button';
import { Center } from '../components/defaultCenter/Center';
import { SectionLoad } from '../components/load/styled';
import { Main } from '../components/mainDashboard/main';
import { Context } from '../context/Context';
import { ContextLogic } from '../context/Provider';

export const Dashboard_maganement = () => {
  const { IsToken, loading, isLoad, IAdm } = useContext(ContextLogic);
  const { navigate } = useContext(Context);
  IsToken();
  IAdm();
  setTimeout(() => loading(), 3000);

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
              <div>
                <ButtonHome
                  onClick={() => navigate('/dashboard/product/create')}
                >
                  Criar Produto
                </ButtonHome>
                <ButtonHome
                  onClick={() => navigate('/dashboard/product/findAll')}
                >
                  Lista de Produtos
                </ButtonHome>
              </div>
            </Center>
          </Main>
        </SectionLoad>
      )}
    </>
  );
};
