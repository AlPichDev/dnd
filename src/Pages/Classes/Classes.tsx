import React from 'react';
import styles from './Classes.module.scss';
import { ClassList } from './ClassList';
import { ClassCard } from './ClassCard';

interface IClassesProps {}

const list = ClassList.map(obj => <p>{obj.cName}</p>)

export const Classes = () => {
  return (
    <>
      <ClassCard />
    </>
  );
}