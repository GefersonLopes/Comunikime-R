import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import { Div } from './styled';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

export const UserCard = () => {
  const { listProducts, setListProducts, Buy, url } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(listProducts.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = listProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

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
    <Div>
      <ul>
        {visibleItems.map((product) => (
          <motion.li
            key={product._id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <img src={product.img} alt={product.name} />
            <div>
              <p>{product.name}</p>
              <p>quantidade: {product.amount}</p>
              <p>R$ {product.price},00</p>
              <button onClick={() => Buy(product._id)}>Comprar</button>
            </div>
          </motion.li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevClick}>Anterior</button>
        <p>
          {currentPage} / {totalPages}
        </p>
        <button onClick={handleNextClick}>Próxima</button>
      </div>
    </Div>
  );
};
