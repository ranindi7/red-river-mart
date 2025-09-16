import "./header.css";
import rrmLogo from "../../assets/rrmLogo.png";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={rrmLogo} alt="Red River Mart Logo" />
      </div>

      <nav className="menu">
        <ul>
          <li>Buy</li>
          <li>Sell</li>
          <li>Inbox</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
}