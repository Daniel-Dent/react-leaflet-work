import React from 'react'
import items from '../data/menu.json';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.link}>
          <NavLink activeClassName="active-menu" to={item.link}>{index + 1}. {item.text}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Menu;