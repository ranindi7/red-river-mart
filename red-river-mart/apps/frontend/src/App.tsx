import './App.css'
import './components/pages/buyComponent/buyPage.css'
import './components/pages/sellComponent/sellPage.css'
import UserAccount from "./components/pages/userAccountComponent/userAccountComponent";
import Login from "./components/pages/loginComponent/signInComponent";
import Info from "./components/pages/productInfoComponent/productInfo";
import { Routes, Route } from "react-router-dom"; 
import { Layout } from './components/layout/layout';
import MarketplaceContainer from './components/pages/buyComponent/marketplaceContainer';
import ForumPage from './components/pages/forumPageComponent/forumPageComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MarketplaceContainer />} /> 
        <Route path="/account" element={<UserAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<ForumPage />} />
      </Route>
    </Routes>
  );
}

export default App
