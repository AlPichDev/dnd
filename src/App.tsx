import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import { Layout } from './Pages/Layout';
import { System } from './Pages/System';
import { Atlas } from './Pages/Atlas';
import { Skills } from './Pages/Skills';
import { Main } from './Pages/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='system' element={<System />} />
          <Route path='atlas' element={<Atlas />} />
          <Route path='skills' element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
