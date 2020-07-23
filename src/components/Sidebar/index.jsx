import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const logo = require('../../assets/logo.png');

const NavTab = ({ path, name, isCurrent, icon }) => (
  <NavLink
    to={path}
    className={
      isCurrent ? "link active" : "link"
    }>
    <i className={`${icon} mobile`}/>
    <span>{name}</span>
  </NavLink>
);

export default function Sidebar({ routes }){
  const pathname = window.location.pathname;

  return (
    <div className="sidebar-container">
      <img src={logo} alt="logo" style={{ width: 60 }}/>
      <div className="link-container">
        {routes.map(({ path, name, icon }, key) => (
          <NavTab key={key} path={path} name={name} icon={icon} isCurrent={path === pathname} />
        ))}
      </div>
    </div>
  )
};
