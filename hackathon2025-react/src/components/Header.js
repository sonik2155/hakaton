import React from "react"; 
import { NavLink, useRouteMatch } from 'react-router-dom'; 
import logo from "../resources/images/logo.svg";

 function Header() {
//const {path, url} = useRouteMatch();

    return (
        <header className="header root__header">
      <NavLink to='/'><img className="header__logo" src={logo} alt="Логотип проекта «Гражданин поэт – 2025»"/></NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <NavLink to='/Initiative' activeClassName="header__link_active" className="header__link">Инициативы</NavLink>
          <NavLink to="/AboutProject" activeClassName="header__link_active" className="header__link">О проекте</NavLink>
          <NavLink to="/MyInitiative" activeClassName="header__link_active" className="header__link">Мои инициативы</NavLink>
        </ul>
      </nav>
    </header>
    
    )
};

export default Header;