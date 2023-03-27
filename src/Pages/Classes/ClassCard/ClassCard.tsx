import React from 'react';
import { ClassList } from '../ClassList';

import styles from './ClassCard.module.scss'

interface IClassCardProps {}

export const ClassCard = () => {
  const someClass = ClassList[0]
  const nameClass = someClass.cName
  const skills = someClass.skills
  const abilities = skills.map(skill => {
    return (
      <div>
        <p>{skill.abilityName}</p>
        <p>{skill.costStar}</p>
        <p>{skill.speed}</p>
        <p>{skill.progress.star__1_5}</p>
        <p>{skill.progress.star__6_10}</p>
        <p>{skill.progress.star__11_15}</p>
        <p>{skill.progress.star__16}</p>
      </div>
    )
  })
  console.log(nameClass)

  return (
    <>
      <h3>{nameClass}</h3>
      <div>
        {abilities}
      </div>
    </>
  );
}