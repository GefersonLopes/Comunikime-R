import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { INode } from '../../interfaces/globalInterfaces';
import { MainDashboard } from './styled';
import { IoExit } from 'react-icons/io5';
import jwt_decode from 'jwt-decode';

export const Main = ({ children }: INode) => {
  const { navigate } = useContext(Context);
  const token = localStorage.getItem('@token') || '';
  const decodedToken: any = jwt_decode(token);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.0 },
      }}
    >
      <MainDashboard>
        <aside>
          <div>
            <span
              onClick={() => {
                navigate('/login');
                localStorage.clear();
              }}
            >
              <IoExit />
              Sair
            </span>
            <h1>Comunikime</h1>
          </div>
          <ul>
            <li>
              <button onClick={() => navigate('/dashboard/products')}>
                <h3>Buy Products</h3>
              </button>
            </li>
            <br />
            {decodedToken.isAdm ? (
              <li>
                <button onClick={() => navigate('/dashboard/management')}>
                  <h3>Stock Management</h3>
                </button>
              </li>
            ) : null}
          </ul>
        </aside>
        {children}
      </MainDashboard>
    </motion.div>
  );
};
