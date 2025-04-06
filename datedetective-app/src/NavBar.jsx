import "./styles/NavBar.css";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      <nav className="nav_bar">
        <h1 id="logo_text">DateDetective</h1>
        <ul className="nav_list">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <li className="nav_item">Demo</li>
          </NavLink>
          <NavLink
            to="/install"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <li className="nav_item">Install</li>
          </NavLink>
          <NavLink
            to="/docs"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <li className="nav_item">Docs</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
