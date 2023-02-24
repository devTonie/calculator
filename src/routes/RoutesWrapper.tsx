import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Calculator from '../views/Calculator';
import MainPage from '../views/MainPage';
import CurrencyConverter from '../views/CurrencyConverter';
import Converter from '../views/Converter';

const RoutesWrapper: React.FC = () => (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to="/home" />
        }
      />
      <Route
        path="/home"
        element={(
          <MainPage />
        )}
      />
      <Route
        path='/calculator'
        element={(
          <Calculator />
        )}
      />
      <Route
        path='/currency-converter'
        element={(
          <CurrencyConverter />
        )}
      />
      <Route
        path='/unit-converter'
        element={(
          <Converter />
        )}
      />
    </Routes>
);
  
export default RoutesWrapper;
  