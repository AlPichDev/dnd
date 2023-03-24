import React from 'react';
import { Outlet } from 'react-router-dom'
import { CustomLink } from '../Components/CustomLink';

import styles from './Layout.module.scss'

interface ILayoutProps {}

export const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/system'>System</CustomLink>
        <CustomLink to='/skills'>Skills</CustomLink>
        <CustomLink to='/atlas'>Atlas</CustomLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia neque nulla veritatis. Laborum iure quisquam ab suscipit rerum laboriosam ullam. Quod quos, inventore veritatis saepe fugit amet est consequuntur similique?
      </footer>
    </>
  );
}