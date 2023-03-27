import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from './Pages/Layout';
import { System } from './Pages/System';
import { Atlas } from './Pages/Atlas';
import { Classes } from './Pages/Classes';
import { Main } from './Pages/Main';

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='system' element={<System />} />
            <Route path='atlas' element={<Atlas />} />
            <Route path='classes' element={<Classes />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
