import React, { ReactNode } from 'react';
import { Link, PathPattern, useMatch } from 'react-router-dom'

import styles from './CustomLink.module.scss'

interface ICustomLinkProps {
  children?: ReactNode,
  to: string,
}

export const CustomLink = ({children, to, ...props}: ICustomLinkProps) => {
  const match = useMatch(to)

  const setActive = () => match ? styles.activeLink : ''

  return (
    <Link
      to={to}
      className={setActive()}
      {...props}
    >
      {children}
    </Link>
  );
}