import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/rrmLogo.png" alt="Red River Mart Logo" />
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