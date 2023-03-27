import React from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header';

import styles from './Layout.module.scss'

interface ILayoutProps {}

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia neque nulla veritatis. Laborum iure quisquam ab suscipit rerum laboriosam ullam. Quod quos, inventore veritatis saepe fugit amet est consequuntur similique?
      </footer>
    </>
  );
}