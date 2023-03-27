import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

interface IHeaderProps { }

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          Logo
        </div>
        <div className={styles.links}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/system'>System</NavLink>
          <NavLink to='/classes'>Classes</NavLink>
          <NavLink to='/atlas'>Atlas</NavLink>
        </div>
      </header>
    </>
  );
}