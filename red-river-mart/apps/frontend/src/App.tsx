import './App.css'
import './components/pages/buyComponent/buyPage.css'
import './components/pages/sellComponent/sellPage.css'
import UserAccount from "./components/pages/userAccountComponent/userAccountComponent";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { Layout } from './components/layout/layout';
import MarketplaceContainer from './components/pages/buyComponent/marketplaceContainer';
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* homepage */}
        <Route index element={<MarketplaceContainer key={location.key} />} />

        <Route
          path="account"
          element={
            <>
              <SignedIn><UserAccount /></SignedIn>
              <SignedOut><SignInButton mode="redirect" /></SignedOut>
            </>
          }
        />

        <Route
          path="forum"
          element={
            <>
              <SignedIn><UserAccount /></SignedIn>
              <SignedOut><SignInButton mode="redirect" /></SignedOut>
            </>
          }
        />

      </Route>
    </Routes>
  );
}

export default App
