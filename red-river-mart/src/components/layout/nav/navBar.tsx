import "./nav.css";
import rrmLogo from "../../../assets/rrmLogo.png";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <header className="header">
      <div className="logo">
        <img src={rrmLogo} alt="Red River Mart Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/">Buy</NavLink>
          </li>
          <li>
            <NavLink to="/inbox">Inbox</NavLink>
          </li>
          <li>
            <NavLink to="/account">Account</NavLink>
          </li>
           <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}