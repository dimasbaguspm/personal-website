import React, { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../screens/home-page';

const RouteWrapper: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteWrapper;
