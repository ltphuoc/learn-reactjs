import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="top-nav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/todo">Todo</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
