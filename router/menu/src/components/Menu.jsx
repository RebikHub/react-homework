import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className='menu'>
      <NavLink className='menu__item' to={'/'}>Гоночн​ое такси</NavLink>
      <NavLink className='menu__item' to={'/drift'}>Дрифт-такси</NavLink>
      <NavLink className='menu__item' to={'/timeattack'}>Гонка ​​​​​​Time Attack</NavLink>
      <NavLink className='menu__item' to={'/forza'}>Forza Karting Sochi</NavLink>
    </nav>
  );
}
