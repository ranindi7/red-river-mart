import "./nav.css";
import rrmLogo from "../../../assets/rrmLogo.png";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Nav() {
  return (
    <div className="user-management-links">
          {/* clerk-provided components */}
          <SignedOut>
              <header className="header">
                <div className="logo">
                  <img src={rrmLogo} alt="Red River Mart Logo" />
                </div>
                <nav className="menu">
                  <ul>
                    <li>
                      <NavLink to="/sign-in">Sign In</NavLink>
                    </li>
                  </ul>
                </nav>
              </header>
          </SignedOut>
          <SignedIn>
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
                      <NavLink to="/account">My Listings</NavLink>
                    </li>
                    <li>
                      <NavLink to="/forum">Forum</NavLink>
                    </li>
                    <li>
                      <UserButton afterSignOutUrl="/sign-in"/>
                    </li>
                  </ul>
                </nav>
              </header>
          </SignedIn>
    </div>
  );
}