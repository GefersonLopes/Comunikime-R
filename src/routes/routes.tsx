import { Route, Routes } from 'react-router-dom';
import { Dashboard_maganement } from '../pages/Dashboard_admin';
import { Dashboard_clientCreate } from '../pages/Dashboard_productCreate';
import { Dashboard_clientFindAll } from '../pages/Dashboard_productFindAll';
import { Dashboard_clientUpdate } from '../pages/Dashboard_productUpdate';
import { Dashboard_client } from '../pages/Dashboard_client';

import { Homepage } from '../pages/Homepage';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const RouteInPage = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/products" element={<Dashboard_client />} />
      <Route path="/dashboard/management" element={<Dashboard_maganement />} />
      <Route
        path="/dashboard/product/create"
        element={<Dashboard_clientCreate />}
      />
      <Route
        path="/dashboard/product/findAll"
        element={<Dashboard_clientFindAll />}
      />
      <Route
        path="/dashboard/product/update"
        element={<Dashboard_clientUpdate />}
      />
    </Routes>
  );
};
