import './App.css'
import './components/pages/buyComponent/buyPage.css'
import './components/pages/sellComponent/sellPage.css'
import UserAccount from "./components/pages/userAccountComponent/userAccountComponent";
import SignInPage from "./components/pages/loginComponent/signInComponent";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { Layout } from './components/layout/layout';
import MarketplaceContainer from './components/pages/buyComponent/marketplaceContainer';
import ForumPage from './components/pages/forumPageComponent/forumPageComponent';
import { RedirectToSignIn, SignedIn, SignedOut, SignUp } from "@clerk/clerk-react";

function App() {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <MarketplaceContainer key={location.key}/>
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route path="sign-in/*" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUp 
          routing="path" 
          path="/sign-up"
          appearance={{
            elements: {
              rootBox: "signupRoot",
            }
          }}/>} />

        <Route path="account" element={<UserAccount />} />
        <Route path="forum" element={<ForumPage />} />
      </Route>
    </Routes>
  );
}


export default App
